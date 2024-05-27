let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

function init() {
    render();
    checkWin();
}

function render() {
    const container = document.getElementById('contant');
    let html = '<table>';
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const value = fields[index];
            let displayValue = '';
            if (value === 'circle') {
                displayValue = createCircleSVG();
            } else if (value === 'cross') {
                displayValue = createCrossSVG();
            }
            html += `<td id="cell-${index}" onclick="handleClick(${index}, this)">${displayValue}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    container.innerHTML = html;
}

function handleClick(index, cell) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        if (currentPlayer === 'circle') {
            cell.innerHTML = createCircleSVG();
            currentPlayer = 'cross';
        } else {
            cell.innerHTML = createCrossSVG();
            currentPlayer = 'circle';
        }
        cell.onclick = null; // Entfernt den onclick-Handler nach dem ersten Klick
        const winner = checkWin();
        if (winner) {
            drawWinningLine(winner);
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6]             // diagonal
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return pattern;
        }
    }
    return null;
}

function drawWinningLine(winningPattern) {
    const container = document.getElementById('contant');
    const line = document.createElement('div');
    line.className = 'winning-line';

    const [a, , c] = winningPattern;
    const startCell = document.getElementById(`cell-${a}`);
    const endCell = document.getElementById(`cell-${c}`);

    const containerRect = container.getBoundingClientRect();
    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    const startX = startRect.left + startRect.width / 2 - containerRect.left;
    const startY = startRect.top + startRect.height / 2 - containerRect.top;
    const endX = endRect.left + endRect.width / 2 - containerRect.left;
    const endY = endRect.top + endRect.height / 2 - containerRect.top;

    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    const length = Math.hypot(endX - startX, endY - startY);

    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;

    container.appendChild(line);
}

function createCircleSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="5" fill="none" 
                stroke-dasharray="188.4" stroke-dashoffset="188.4" class="animated-circle"></circle>
        </svg>
    `;
}

function createCrossSVG() {
    return `
        <svg width="70" height="70" viewBox="0 0 70 70" class="animated-x">
            <line x1="10" y1="10" x2="60" y2="60" stroke="#FF0000" stroke-width="5"/>
            <line x1="60" y1="10" x2="10" y2="60" stroke="#FF0000" stroke-width="5"/>
        </svg>
    `;
}

