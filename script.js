// Generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the main page
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to open multiple windows and manipulate them
function openMultipleWindows() {
    let windows = [];
    for (let i = 0; i < 10; i++) {
        // Open a new window with custom dimensions
        let newWindow = window.open('about:blank', '_blank', 'width=500,height=500');
        windows.push(newWindow);

        // Insert content into the new window
        newWindow.document.write(`
            <h1 style="text-align:center; font-family: Arial, sans-serif; color: white;">
                You are hacked
            </h1>
        `);
        newWindow.document.body.style.backgroundColor = getRandomColor();
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.height = "100vh";

        // Flash background color in the new window
        setInterval(() => {
            newWindow.document.body.style.backgroundColor = getRandomColor();
        }, 500);
    }

    // Move the opened windows to random positions at regular intervals
    setInterval(() => {
        windows.forEach(win => {
            if (win && !win.closed) {
                const xPos = Math.floor(Math.random() * (window.innerWidth - 500));
                const yPos = Math.floor(Math.random() * (window.innerHeight - 500));
                win.moveTo(xPos, yPos);
            }
        });
    }, 1000);
}

// Change background color of the main page every 10ms
setInterval(changeBackgroundColor, 10);

// Open multiple windows when the page loads
openMultipleWindows();
