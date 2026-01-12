function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function openMultipleWindows() {
    let windows = [];
    for (let i = 0; i < 10; i++) {
        let newWindow = window.open('about:blank', '_blank', 'width=500,height=500');
        windows.push(newWindow);

        newWindow.document.write(`
            <h1 style="text-align:center; font-family: Arial, sans-serif; color: white;">
                You are hacked
            </h1>
        `);
        newWindow.document.body.style.backgroundColor = getRandomColor();
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.height = "100vh";

        setInterval(() => {
            newWindow.document.body.style.backgroundColor = getRandomColor();
        }, 500);
    }

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

setInterval(changeBackgroundColor, 10);
