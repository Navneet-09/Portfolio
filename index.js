document.addEventListener('DOMContentLoaded', (event) => {
    const greetings = ["Hi, ", "Hello, ", "Hola, "];
    let currentIndex = 0;
    const greetElement = document.querySelector('.greet');
    const intervalTime = 1500; // Time between complete greeting changes
    const letterIntervalTime = 150; // Time between each letter

    function revealGreeting(greeting, callback) {
        let currentLetterIndex = 0;
        greetElement.textContent = ''; // Clear the existing text

        function addNextLetter() {
            if (currentLetterIndex < greeting.length) {
                greetElement.textContent += greeting[currentLetterIndex];
                currentLetterIndex++;
                setTimeout(addNextLetter, letterIntervalTime);
            } else if (callback) {
                setTimeout(callback, intervalTime);
            }
        }

        addNextLetter();
    }

    function cycleGreetings() {
        revealGreeting(greetings[currentIndex], () => {
            currentIndex = (currentIndex + 1) % greetings.length;
            cycleGreetings();
        });
    }

    cycleGreetings();
});

document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
    cursor.style.transform = 'translate(-50%, -50%)'; // Center the cursor on the mouse position
});