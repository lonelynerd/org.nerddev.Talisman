document.getElementById("moar").addEventListener("click", elemAdd);
document.getElementById("less").addEventListener("click", elemRem);

function elemAdd() {
    document.getElementById("lps").value = parseInt(document.getElementById("lps").value, 10) + 100;
}

function elemRem() {
    document.getElementById("lps").value = parseInt(document.getElementById("lps").value, 10) - 100;
}