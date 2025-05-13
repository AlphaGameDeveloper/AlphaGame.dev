import { initializeTerminal, typeText, showBattery } from './terminal.js';
import { createCrack } from './effects.js';
import { lyrics } from './lyrics-data.js';
import { setupTimingTool } from './timing-tool.js';
import { setupUIHandlers, updateUIVisibility } from './ui-handlers.js';

// Initialize terminal
const term = initializeTerminal();

// Create a lock mechanism to handle concurrent typing
let typingLock = false;
let pendingText = null;

// Main function to play the song
async function playSong() {
    console.log("Starting playSong function");
    const audio = document.getElementById('background-audio');
    console.log(`Audio element found: ${audio ? 'Yes' : 'No'}`);
    console.log(`Audio source: ${audio.src}`);
    console.log(`Audio ready state: ${audio.readyState}`);
    
    // Reset any typing locks when starting a new session
    typingLock = false;
    pendingText = null;

    // Hide start button
    document.getElementById('start-button').style.display = 'none';
    // Show restart button
    document.getElementById('restart-button').style.display = 'block';
    
    term.clear();
    term.write('\x1b[?25l'); // Hide cursor
    await typeText(term, 'SYSTEM STARTING...', 70, false, null, typingLock, pendingText);
    await new Promise(r => setTimeout(r, 1000));
    await showBattery(term, 8);
    
    // Start playing audio
    console.log("Attempting to play audio");
    audio.currentTime = 0;
    try {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("Audio playback started successfully");
            }).catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
    } catch (e) {
        console.error("Error playing audio:", e);
    }
    
    let batteryLevel = 8;
    
    console.log("Setting up lyric timers");
    // Set up timers for each lyric
    lyrics.forEach((lyric, index) => {
        console.log(`Setting timer for lyric ${index}: "${lyric.text}" at ${lyric.time}ms`);
        setTimeout(async () => {
            console.log(`Timer fired for lyric index ${index}: "${lyric.text}"`);
            // Decrease battery every few lines
            if (index % 8 === 0 && index > 0 && batteryLevel > 0) {
                batteryLevel--;
                await showBattery(term, batteryLevel);
            }
            
            // Add screen cracks as the song progresses
            if (index > 10 && Math.random() < 0.3) {
                createCrack();
            }
            
            // More glitchy effects in the second half
            const glitchy = index > lyrics.length / 3;
            const typingSpeed = 50 + (8 - batteryLevel) * 10;
            
            // Calculate available time until next lyric
            let timeUntilNextLyric = null;
            if (index < lyrics.length - 1) {
                timeUntilNextLyric = lyrics[index + 1].time - lyric.time;
                console.log(`Time until next lyric: ${timeUntilNextLyric}ms`);
            }
            
            // Special effects for shutdown lines
            if (lyric.text.includes("system shutting down")) {
                term.write('\x1b[31m'); // Red text
                await typeText(term, lyric.text, typingSpeed * 2, true, timeUntilNextLyric, typingLock, pendingText);
                term.write('\x1b[0m'); // Reset color
                
                // Add multiple cracks
                for (let j = 0; j < 5; j++) {
                    createCrack();
                }
            } else if (lyric.text === "shuts down") {
                term.write('\r\n\x1b[31m');
                await typeText(term, "SYSTEM SHUTTING DOWN...", 200, true, timeUntilNextLyric, typingLock, pendingText);
                term.write('\x1b[0m');
                
                // Screen fade out effect
                const container = document.getElementById('terminal-container');
                let opacity = 1;
                const fadeInterval = setInterval(() => {
                    opacity -= 0.05;
                    container.style.opacity = opacity;
                    if (opacity <= 0) clearInterval(fadeInterval);
                }, 200);
            } else {
                await typeText(term, lyric.text, typingSpeed, glitchy, timeUntilNextLyric, typingLock, pendingText);
            }
            
            // Occasional screen glitches
            if (glitchy && Math.random() < 0.15 && lyric.text !== "") {
                setTimeout(() => {
                    term.write('\x1b[H\x1b[J'); // Clear screen
                    setTimeout(() => {
                        term.write('\x1b[H'); // Return to home
                        showBattery(term, batteryLevel);
                    }, 200);
                }, 300);
            }
        }, lyric.time);
    });
}

// Export functions needed by other modules
export { term, playSong, typingLock, pendingText };

// When DOM is loaded, set up the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up all UI handlers
    setupUIHandlers(playSong);
    
    // Set up timing tool
    setupTimingTool(term);
    
    // Initialize UI visibility
    updateUIVisibility();
    
    // Log initialization
    console.log("DOM content loaded");
    console.log("Terminal initialized");
    console.log(`Audio element exists: ${document.getElementById('background-audio') ? 'Yes' : 'No'}`);
    
    // Handle URL changes (if using history API navigation)
    window.addEventListener('popstate', updateUIVisibility);
});
