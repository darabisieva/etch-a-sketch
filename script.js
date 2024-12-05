function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; 
    const blockSize = 600 / size; 
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.setAttribute('data-darkness', '0');
        container.appendChild(block);
    }
}


createGrid(16);

document.getElementById('container').addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('block')) {
        if (isEraserMode) {
            event.target.style.backgroundColor = 'white';
            event.target.setAttribute('data-darkness', '0'); 
        } else {
            let currentDarkness = parseInt(event.target.getAttribute('data-darkness'));
            if (currentDarkness < 100) {
                currentDarkness += 10; 
                event.target.setAttribute('data-darkness', currentDarkness);
                const shade = `rgba(0, 0, 0, ${currentDarkness / 100})`;
                event.target.style.backgroundColor = shade;
            }
        }
    }
});



document.getElementById('reset').addEventListener('click', () => {
    let size = parseInt(prompt("Введите размер сетки (максимум 100):"));
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Введите корректное число от 1 до 100.");
    }
});

document.getElementById('clear').addEventListener('click', () => {
    const blocks = document.querySelectorAll('.block'); 
    blocks.forEach(block => {
        block.style.backgroundColor = 'white'; 
        block.setAttribute('data-darkness', '0'); 
    });
});

let isEraserMode = false;
document.getElementById('eraser').addEventListener('click', () => {
    isEraserMode = !isEraserMode; 
    const eraserButton = document.getElementById('eraser');
    if (isEraserMode) {
        eraserButton.textContent = "РЕЖИМ СТЁРКИ ВКЛЮЧЁН"; 
        eraserButton.style.backgroundColor = "#f77"; 
    } else {
        eraserButton.textContent = "СТЁРКА"; 
        eraserButton.style.backgroundColor = ""; 
    }
});

