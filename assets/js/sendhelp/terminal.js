import { FitAddon } from 'https://cdn.jsdelivr.net/npm/xterm-addon-fit@0.7.0/+esm';

// Initialize terminal and return it
function initializeTerminal() {
    const term = new Terminal({
        cursorBlink: true,
        fontFamily: 'monospace',
        fontSize: 18,
        theme: {
            background: '#000',
            foreground: '#0f0',
            cursor: '#0f0'
        }
    });

    // Use FitAddon to make terminal responsive
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(document.getElementById('terminal-container'));
    fitAddon.fit();
    
    // Handle window resize
    window.addEventListener('resize', () => fitAddon.fit());
    
    return term;
}

// Calculate adaptive typing speed based on available time and text length
function calculateAdaptiveSpeed(text, baseSpeed, timeAvailable = null) {
    // Default speed if no time constraint
    if (!timeAvailable) return baseSpeed;
    
    // Calculate minimum time needed (ms) based on text length
    const minTimeNeeded = text.length * 15; // At least 15ms per character
    
    // Available time (excluding glitch effects and delays)
    const effectiveTimeAvailable = timeAvailable * 0.7; // Allow 30% buffer for glitches/delays
    
    if (effectiveTimeAvailable <= minTimeNeeded) {
        // Not enough time, use minimum speed
        console.log(`Adaptive speed: Using minimum typing speed for "${text.substring(0, 20)}..."`);
        return 5; // Very fast typing
    }
    
    // Calculate adaptive speed: lower is faster
    const adaptiveSpeed = effectiveTimeAvailable / text.length;
    
    // Cap the speed between reasonable bounds
    const finalSpeed = Math.max(5, Math.min(baseSpeed, adaptiveSpeed));
    console.log(`Adaptive speed: ${finalSpeed}ms per char for "${text.substring(0, 20)}..." (${text.length} chars in ${timeAvailable}ms)`);
    
    return finalSpeed;
}

// Modified typeText to support the lock mechanism
async function typeText(term, text, speed = 50, glitchy = false, timeAvailable = null, typingLock, pendingText) {
    // Calculate adaptive speed if timeAvailable is specified
    if (timeAvailable) {
        speed = calculateAdaptiveSpeed(text, speed, timeAvailable);
    }
    
    // If there's already typing in progress
    if (typingLock) {
        console.log("Typing lock active, completing previous text instantly");
        // Set the pending text to be processed after current typing completes
        pendingText = { text, speed, glitchy, timeAvailable };
        return;
    }
    
    typingLock = true;
    
    try {
        // Keep track of current line for proper error display
        let currentLine = "";
        let i = 0;
        
        // Check if we should type normally or just output instantly
        if (pendingText) {
            console.log("Outputting instantly due to pending text");
            term.write(text + '\r\n');
            console.log(`Instantly typed text: "${text}"`);
        } else {
            // Track timing to ensure we stay within timeAvailable if specified
            const startTime = Date.now();
            const endTime = timeAvailable ? (startTime + timeAvailable) : Infinity;
            
            for (i = 0; i < text.length; i++) {
                // Check if we're running out of time
                if (timeAvailable && Date.now() + (text.length - i) * 5 > endTime) {
                    console.log("Running out of time, completing instantly");
                    term.write(text.substring(i) + '\r\n');
                    break;
                }
                
                // Check if a new typing task is pending
                if (pendingText) {
                    console.log("New text pending, completing current instantly");
                    // Output remaining text instantly
                    term.write(text.substring(i) + '\r\n');
                    break;
                }
                
                // Glitchy typing for later parts of the song
                if (glitchy && Math.random() < 0.1) {
                    const char = text[i];
                    term.write(char);
                    currentLine += char;
                    await new Promise(r => setTimeout(r, speed));
                    term.write('\b');
                    await new Promise(r => setTimeout(r, speed * 2));
                    term.write(char);
                } else {
                    term.write(text[i]);
                    currentLine += text[i];
                }
                
                // Variable typing speed
                const delay = speed * (0.5 + Math.random());
                await new Promise(r => setTimeout(r, delay));
                
                // Occasional system errors - improved to not overwrite content
                if (glitchy && Math.random() < 0.03) {
                    // Save cursor position
                    const lineLength = currentLine.length;
                    
                    // Write error on a new line below - Fix for octal escape sequence error
                    term.write('\r\n\x1b[31mERROR\x1b[0m');
                    
                    // Wait a moment to show the error
                    await new Promise(r => setTimeout(r, 200));
                    
                    // Clear the error line and go back to where we were typing
                    // Fix for escape sequences by breaking them into separate write calls
                    term.write('\r');
                    term.write('\x1b[K'); // Clear the current line
                    term.write('\x1b[A'); // Move up one line
                    
                    // Move cursor to the end of our text - Fix by separating the escape sequence
                    term.write('\r');
                    term.write('\x1b[' + lineLength + 'C');
                    
                    console.log(`Error shown and recovered at position ${i} in text`);
                }
            }
            
            // Only add line break if we completed the text normally
            if (i >= text.length) {
                term.write('\r\n');
            }
            console.log(`Finished typing text: "${text}"`);
        }
    } finally {
        // Process any pending text
        const next = pendingText;
        typingLock = false;
        pendingText = null;
        
        if (next) {
            console.log(`Processing pending text: "${next.text}"`);
            await typeText(term, next.text, next.speed, next.glitchy, next.timeAvailable, typingLock, pendingText);
        }
    }
}

// Show battery level
async function showBattery(term, level) {
    console.log(`Displaying battery level: ${level}`);
    const bars = '█'.repeat(level) + '░'.repeat(10-level);
    term.write(`\r\nBattery: [${bars}] ${level*10}%\r\n\n`);
}

export { initializeTerminal, typeText, showBattery };
