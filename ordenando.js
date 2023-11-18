
let values = [];

function addNoClique() {
    const newValue = document.getElementById("valor").value;
    if (newValue !== "") {
        values.push(Number(newValue));
        document.getElementById("valor").value = "";
        displayValues();
    }
}

function misturar() {
    // Algoritimo Fisher-Yates
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Trocando valores
        const temp = values[i];
        values[i] = values[j];
        values[j] = temp;
    }
    displayValues();
}

function ordenar() {
    const selectedSortMethod = document.getElementById("ordenar").value;
    switch (selectedSortMethod) {
        case "bubble":
            bubbleSort();
            break;
        case "selection":
            selectionSort();
            break;
        case "quick":
            quickSort(0, values.length - 1);
            break;
        default:
            console.error("Método de ordenação inválido!");
    }
    displayValues();
}

function bubbleSort() {
    const n = values.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                // Trocando valores
                const temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    }
}

function selectionSort() {
    const n = values.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (values[j] < values[minIndex]) {
                minIndex = j;
            }
        }
        // Trocando valores
        const temp = values[i];
        values[i] = values[minIndex];
        values[minIndex] = temp;
    }
}

function quickSort(low, high) {
    if (low < high) {
        const pivotIndex = partition(low, high);
        quickSort(low, pivotIndex - 1);
        quickSort(pivotIndex + 1, high);
    }
}

function partition(low, high) {
    const pivot = values[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (values[j] < pivot) {
            i++;
            // Trocando valores
            const temp = values[i];
            values[i] = values[j];
            values[j] = temp;
        }
    }
    // Trocando valores para colocar o pivot na posição correta
    const temp = values[i + 1];
    values[i + 1] = values[high];
    values[high] = temp;
    return i + 1;
}

function displayValues() {
    const valoresLista = document.getElementById("valoresLista");
    valoresLista.innerHTML = "";
    for (let i = 0; i < values.length; i++) {
        const li = document.createElement("li");
        li.textContent = values[i];
        valoresLista.appendChild(li);
    }
}
