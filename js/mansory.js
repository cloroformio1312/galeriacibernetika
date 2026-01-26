function masonryLayout(container, columnCount) {
    const items = Array.from(container.children);
    const columns = Array.from({ length: columnCount }, () => []);

    // distribuir itens por sequência circular
    let colIndex = 0;
    items.forEach(item => {
        columns[colIndex].push(item);
        colIndex = (colIndex + 1) % columnCount;
    });

    // limpar container e inserir colunas
    container.innerHTML = '';
    columns.forEach(col => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('masonry-col');
        col.forEach(item => colDiv.appendChild(item));
        container.appendChild(colDiv);
    });
}

function initMasonry() {
    const container = document.querySelector('.primeiraact .imagensact');
    if (!container) return;

    let columnCount = 3;
    const width = window.innerWidth;

    if (width < 768) columnCount = 2;
    if (width < 480) columnCount = 1;

    masonryLayout(container, columnCount);
}

window.addEventListener('load', initMasonry);
window.addEventListener('resize', initMasonry);

let timeout;
window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(initMasonry, 200);
});
