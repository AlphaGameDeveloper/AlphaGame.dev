import { lyricTexts } from './lyrics-data.js';

// Timing tool data
let timingMode = false;
let currentLyricIndex = 0;
let timingStartTime = 0;
let lyricTimings = [];

// Add debounce control for Enter key
let lastEnterKeyTime = 0;
const DEBOUNCE_TIME = 500; // Minimum milliseconds between Enter key registrations

// Setup the timing tool functionality
function setupTimingTool(term) {
    // Add event listener to timing tool button
    document.getElementById('timing-tool-button').addEventListener('click', function() {
        console.log("Timing tool button clicked");
        startTimingTool(term);
    });
}

// Function to start timing tool
function startTimingTool(term) {
    console.log("Starting timing tool");
    lastEnterKeyTime = 0;
    timingMode = true;
    currentLyricIndex = 0;
    lyricTimings = [];
    
    // Hide UI buttons
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('timing-tool-button').style.display = 'none';
    
    // Clear terminal
    term.clear();
    term.write('\x1b[?25l'); // Hide cursor
    
    term.write('\r\n\x1b[36m===== LYRIC TIMING TOOL =====\x1b[0m\r\n\r\n');
    term.write('Instructions:\r\n');
    term.write('1. Press ENTER when you hear each lyric start\r\n');
    term.write('2. The audio will play and you\'ll see the current lyric\r\n');
    term.write('3. When finished, the timed lyrics will be displayed for copy/paste\r\n\r\n');
    term.write('Press ENTER to start timing or ESC to cancel\r\n');
    
    // Clean up any existing listeners
    document.removeEventListener('keydown', handleTimingKeydown);
    
    // Add terminal key handler
    term.onKey((event) => handleTerminalKey(event, term));
    
    // Also add document level handler as backup
    document.addEventListener('keydown', (event) => handleTimingKeydown(event, term));
    
    // Add the direct input listener
    const hiddenInput = setupDirectEnterKeyListener(term);
    
    // Store the hidden input for cleanup
    window.hiddenInput = hiddenInput;
    
    console.log("Event listeners attached");
}

// Update the terminal key handler to use debounce
function handleTerminalKey(event, term) {
    console.log(`Terminal key event: ${JSON.stringify(event)}`);
    
    // Check if Enter key (key code 13)
    if (event.domEvent.keyCode === 13) {
        console.log("ENTER key detected in terminal");
        debouncedProcessEnterKey(term);
    }
    
    // Check if Escape key (key code 27)
    if (event.domEvent.keyCode === 27) {
        console.log("ESC key detected in terminal");
        cancelTimingTool(term);
    }
}

// Debounced process Enter key function
function debouncedProcessEnterKey(term) {
    const now = Date.now();
    if (now - lastEnterKeyTime < DEBOUNCE_TIME) {
        console.log(`Debounced: Ignoring Enter key (last press: ${now - lastEnterKeyTime}ms ago)`);
        return;
    }
    
    lastEnterKeyTime = now;
    processEnterKey(term);
}

// Process Enter key press
let enterKeyDebounce = false;
function processEnterKey(term) {
    console.log("Enhanced processEnterKey called");
    
    if (enterKeyDebounce) {
        console.log("Enter key debounce active, ignoring press");
        return;
    }
    
    enterKeyDebounce = true;
    setTimeout(() => enterKeyDebounce = false, 300); // Debounce for 300ms
    
    if (!timingMode) {
        console.log("Not in timing mode, ignoring Enter");
        return;
    }
    
    // Check if timing has already started
    if (timingStartTime > 0) {
        console.log("Timing is in progress, recording lyric");
        
        // Record time for current lyric
        const currentTime = Date.now() - timingStartTime;
        console.log(`Recording time for lyric "${lyricTexts[currentLyricIndex]}": ${currentTime}ms`);
        
        lyricTimings.push({
            text: lyricTexts[currentLyricIndex],
            time: currentTime
        });
        
        term.write(`\r\n\x1b[32mRecorded @ ${currentTime}ms\x1b[0m\r\n`);
        
        // Move to next lyric
        currentLyricIndex++;
        console.log(`Advanced to next lyric index: ${currentLyricIndex}`);
        
        // If we've timed all lyrics, finish
        if (currentLyricIndex >= lyricTexts.length) {
            console.log("All lyrics timed, finishing");
            finishTimingTool(term);
            return;
        }
        
        // Show next lyric
        console.log(`Displaying next lyric: "${lyricTexts[currentLyricIndex]}"`);
        term.write('\r\n\x1b[33mNEXT LYRIC:\x1b[0m ' + lyricTexts[currentLyricIndex] + '\r\n');
        return;
    }
    
    // Otherwise, call the original function to start the audio
    const audio = document.getElementById('background-audio');
    console.log("Starting audio playback");
    
    // Try to force audio to play with user interaction
    audio.currentTime = 0;
    audio.muted = false;
    audio.volume = 1;
    
    try {
        // Use different play methods to improve compatibility
        audio.play().then(() => {
            console.log("Audio started successfully");
            startTimingAudio(term);
        }).catch(err => {
            console.error("Audio play failed:", err);
            // Try again with a direct call
            setTimeout(() => {
                try {
                    audio.play();
                } catch (e) {
                    console.error("Second play attempt failed:", e);
                }
                startTimingAudio(term);
            }, 100);
        });
    } catch (e) {
        console.error("Error playing audio:", e);
        // Still continue with timing
        startTimingAudio(term);
    }
}

// Start the audio and timing
function startTimingAudio(term) {
    console.log("Starting audio playback for timing");
    
    timingStartTime = Date.now();
    console.log(`Timing start time set: ${timingStartTime}`);
    
    term.clear();
    term.write('\x1b[36mTIMING IN PROGRESS...\x1b[0m\r\n\r\n');
    term.write('Press ENTER when you hear each lyric start\r\n\r\n');
    
    // Show first lyric
    console.log(`Displaying first lyric: "${lyricTexts[currentLyricIndex]}"`);
    term.write('\x1b[33mCURRENT LYRIC:\x1b[0m ' + lyricTexts[currentLyricIndex] + '\r\n');
}

// Handle keydown during timing
function handleTimingKeydown(event, term) {
    console.log(`Key pressed: ${event.key}, keyCode: ${event.keyCode}, timing mode: ${timingMode}`);
    
    // Make sure we're in timing mode
    if (!timingMode) {
        console.log("Not in timing mode, ignoring keypress");
        return;
    }
    
    // Prevent default behavior (like page scrolling)
    event.preventDefault();
    event.stopPropagation();
    
    // If ESC pressed, cancel timing
    if (event.key === 'Escape' || event.keyCode === 27) {
        console.log("ESC pressed, cancelling timing tool");
        cancelTimingTool(term);
        return;
    }
    
    // If Enter key, use debounced handler
    if (event.key === 'Enter' || event.keyCode === 13) {
        console.log("ENTER key detected in document");
        debouncedProcessEnterKey(term);
    }
}

// Function to set up direct Enter key listener for improved timing tool performance
function setupDirectEnterKeyListener(term) {
    console.log("Setting up direct enter key listener");
    
    // Create a hidden input element to help capture keyboard events more reliably
    const hiddenInput = document.createElement('input');
    hiddenInput.id = 'hidden-input';
    hiddenInput.style.position = 'absolute';
    hiddenInput.style.opacity = '0';
    hiddenInput.style.height = '0';
    hiddenInput.style.width = '0';
    document.body.appendChild(hiddenInput);
    
    // Focus it to capture keystrokes
    hiddenInput.focus();
    
    // Add keyup listener (sometimes more reliable than keydown)
    hiddenInput.addEventListener('keyup', function(e) {
        console.log(`Hidden input keyup: ${e.key}, keyCode: ${e.keyCode}`);
        
        if (timingMode && (e.key === 'Enter' || e.keyCode === 13)) {
            console.log("Enter key detected in hidden input");
            e.preventDefault();
            e.stopPropagation();
            debouncedProcessEnterKey(term); // Use debounced version
            
            // Refocus the hidden input
            setTimeout(() => hiddenInput.focus(), 10);
        }
    });
    
    // Also add a direct window listener
    window.addEventListener('keyup', function(e) {
        console.log(`Window keyup: ${e.key}, keyCode: ${e.keyCode}`);
        
        if (timingMode && (e.key === 'Enter' || e.keyCode === 13)) {
            console.log("Enter key detected in window");
            e.preventDefault();
            e.stopPropagation();
            debouncedProcessEnterKey(term); // Use debounced version
        }
    });
    
    return hiddenInput;
}

// Cancel timing tool
function cancelTimingTool(term) {
    console.log("Cancelling timing tool");
    document.removeEventListener('keydown', handleTimingKeydown);
    term.onKey(() => {}); // Remove terminal key handler
    timingMode = false;
    
    // Stop audio
    const audio = document.getElementById('background-audio');
    audio.pause();
    console.log("Audio paused");
    
    // Show UI buttons
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('timing-tool-button').style.display = 'block';
    
    // Clear terminal
    term.clear();
    term.write('\r\nTiming cancelled\r\n');
    
    // Clean up hidden input
    if (window.hiddenInput) {
        window.hiddenInput.remove();
        window.hiddenInput = null;
    }
}

// Finish timing tool and display results
function finishTimingTool(term) {
    console.log("Finishing timing tool");
    document.removeEventListener('keydown', handleTimingKeydown);
    term.onKey(() => {}); // Remove terminal key handler
    timingMode = false;
    
    // Stop audio
    const audio = document.getElementById('background-audio');
    audio.pause();
    console.log("Audio paused");
    
    // Show UI buttons
    document.getElementById('restart-button').style.display = 'block';
    document.getElementById('timing-tool-button').style.display = 'block';
    
    // Clear terminal and show results
    term.clear();
    term.write('\r\n\x1b[36m===== TIMING COMPLETE =====\x1b[0m\r\n\r\n');
    term.write('Copy the following timed lyrics code:\r\n\r\n');
    
    // Format lyrics with timing in proper JavaScript format - fixed template string issue
    let formattedLyrics = 'const lyrics = [\n';
    
    lyricTimings.forEach((lyric, index) => {
        // Escape any special characters in the lyric text
        const escapedText = lyric.text.replace(/"/g, '\\"');
        formattedLyrics += `    { text: "${escapedText}", time: ${lyric.time} }`;
        if (index < lyricTimings.length - 1) {
            formattedLyrics += ',';
        }
        formattedLyrics += '\n';
    });
    
    formattedLyrics += '];\n';
    
    console.log("Generated formatted lyrics:");
    console.log(lyricTimings);
    term.write(formattedLyrics);
    term.write('\r\n\x1b[32mTiming complete! Copy the code above to use in your project.\x1b[0m\r\n');
    term.write('\r\nPress the Restart button to return to the main interface.\r\n');
    
    // Clean up hidden input
    if (window.hiddenInput) {
        window.hiddenInput.remove();
        window.hiddenInput = null;
    }
}

export { setupTimingTool };
