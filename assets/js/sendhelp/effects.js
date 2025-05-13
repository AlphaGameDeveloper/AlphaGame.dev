// Create a visual crack effect
function createCrack() {
    console.log("[createCrack] Creating a crack effect");
    const overlay = document.getElementById('overlay');
    const crack = document.createElement('div');
    crack.className = 'crack';
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const width = 1 + Math.random() * 2;
    const length = 10 + Math.random() * 50;
    
    crack.style.width = `${width}px`;
    crack.style.height = `${length}px`;
    crack.style.left = `${startX}%`;
    crack.style.top = `${startY}%`;
    
    overlay.appendChild(crack);
}

export { createCrack };