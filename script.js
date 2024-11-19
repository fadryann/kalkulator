function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
    resultField.style.color = 'white'; // Reset warna ke default
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Ganti 'x' dengan '*' untuk perhitungan
        const expression = resultField.value.replace(/x/g, '*');
        const result = eval(expression);
        resultField.value = result;

        // Mengubah warna hasil berdasarkan nilai
        if (result < 0) {
            resultField.style.color = 'white'; // Hasil negatif
        } else {
            resultField.style.color = 'white'; // Hasil positif
        }
    } catch (error) {
        resultField.value = 'Error';
        resultField.style.color = 'white'; // Warna saat terjadi error
    }
}

// Menangani event keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Tombol Enter untuk menghitung
    if (key === 'Enter') {
        calculateResult();
    }

    // Tombol panah untuk menambahkan angka
    if (key >= '0' && key <= '9') {
        appendToResult(key);
    }

    // Menambahkan operator, ganti '*' dengan 'x'
    if (['+', '-', 'x', '/'].includes(key)) {
        appendToResult(key === '*' ? 'x' : key);
    }

    // Tombol Backspace untuk menghapus karakter terakhir
    if (key === 'Backspace') {
        const resultField = document.getElementById('result');
        resultField.value = resultField.value.slice(0, -1);
    }
});