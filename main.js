function calcularEquivalenteCDB(lcaPercentual) {
    return {
        ate180Dias: lcaPercentual / 0.775,
        ate360Dias: lcaPercentual / 0.8,
        ate720Dias: lcaPercentual / 0.825,
        maisDe720Dias: lcaPercentual / 0.85
    };
}

function calcularLiquidoCDB(cdbPercentual) {
    return {
        ate180Dias: cdbPercentual * 0.775,
        ate360Dias: cdbPercentual * 0.8,
        ate720Dias: cdbPercentual * 0.825,
        maisDe720Dias: cdbPercentual * 0.85
    };
}

function calcular() {
    const taxa = Number(document.getElementById('taxaInvestimento').value) || 0;

    // Cenário 1: O input é uma LCI/LCA
    document.getElementById('lciRate').textContent = taxa.toFixed(2);
    const cdbEquivalente = calcularEquivalenteCDB(taxa);
    document.getElementById('lciToCdb180').textContent = cdbEquivalente.ate180Dias.toFixed(2);
    document.getElementById('lciToCdb360').textContent = cdbEquivalente.ate360Dias.toFixed(2);
    document.getElementById('lciToCdb720').textContent = cdbEquivalente.ate720Dias.toFixed(2);
    document.getElementById('lciToCdbOver720').textContent = cdbEquivalente.maisDe720Dias.toFixed(2);

    // Cenário 2: O input é um CDB
    document.getElementById('cdbRate').textContent = taxa.toFixed(2);
    const cdbLiquido = calcularLiquidoCDB(taxa);
    document.getElementById('cdbToLci180').textContent = cdbLiquido.ate180Dias.toFixed(2);
    document.getElementById('cdbToLci360').textContent = cdbLiquido.ate360Dias.toFixed(2);
    document.getElementById('cdbToLci720').textContent = cdbLiquido.ate720Dias.toFixed(2);
    document.getElementById('cdbToLciOver720').textContent = cdbLiquido.maisDe720Dias.toFixed(2);
}

// EVENT LISTENERS

window.onload = function() {
    calcular();
};

document.getElementById('taxaInvestimento').addEventListener("input", calcular);