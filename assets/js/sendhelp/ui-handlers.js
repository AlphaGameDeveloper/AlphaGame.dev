// Check URL parameters for UI visibility
function shouldShowUI() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ui') === '1';
}

// Show or hide UI elements based on URL parameters
function updateUIVisibility() {
    const showUI = shouldShowUI();
    
    // Timing tool button - only show when UI param is set
    const timingBtn = document.getElementById('timing-tool-button');
    if (timingBtn) {
        timingBtn.style.display = showUI ? 'block' : 'none';
    }
    
    // Start button is always visible for the experience to work
    // But restart button visibility depends on UI param
    const restartBtn = document.getElementById('restart-button');
    if (restartBtn && restartBtn.style.display !== 'none') { // Keep it hidden if it's already hidden
        restartBtn.style.display = showUI ? 'block' : 'none';
    }
}

// Set up UI event handlers
function setupUIHandlers(playSong) {
    // Start button click handler
    document.getElementById('start-button').addEventListener('click', function() {
        console.log("Start button clicked");
        playSong();
        
        // Then update restart button visibility
        if (!shouldShowUI()) {
            document.getElementById('restart-button').style.display = 'none';
        }
    });

    // Restart button click handler
    document.getElementById('restart-button').addEventListener('click', function() {
        console.log("Restart button clicked");
        const audio = document.getElementById('background-audio');
        audio.pause();
        
        // Reset terminal container
        document.getElementById('terminal-container').style.opacity = 1;
        
        // Clear cracks
        document.getElementById('overlay').innerHTML = '';
        
        // Restart
        playSong();
    });
}

export { setupUIHandlers, updateUIVisibility, shouldShowUI };
