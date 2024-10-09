import './style.css'

const baseNode = document.querySelector('.result-wrapper');

const updateResult = (count) => {
    const result = document.getElementById('result');
    for (const child of Array.from(result.children)) {
        child.remove();
    }

    document.getElementById("search-result").innerText = `${count}件の検索結果`;

    for (let i = 0; i < count; i++) {
        const newNode = baseNode.cloneNode(true);
        result.append(newNode);
    }
}

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    e.preventDefault();

    if (document.getElementById('search').value.length > 0) {
        updateResult(1);
    } else {
        updateResult(329);
    }

    return false;
});

updateResult(329);