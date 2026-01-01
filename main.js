// Alíquotas de imposto segundo a medida provisória 1303/25
const TAXA_IR_LCI = 0.05;  // 5%
const TAXA_IR_CDB = 0.175; // 17.5%

function lciToCdbEquivalent(lciRate) {
    const netLciReturn = lciRate * (1 - TAXA_IR_LCI);
    return netLciReturn / (1 - TAXA_IR_CDB);
}

function cdbToLciEquivalent(cdbRate) {
    const netCdbReturn = cdbRate * (1 - TAXA_IR_CDB);
    return netCdbReturn / (1 - TAXA_IR_LCI);
}

function calcular() {
    const taxa = Number(document.getElementById('taxaInvestimento').value) || 0;

    // Cenário 1: O input é uma LCI/LCA
    document.getElementById('lciRate').textContent = taxa.toFixed(2);
    const cdbEquivalente = lciToCdbEquivalent(taxa);
    document.getElementById('lciToCdbEquivalent').textContent = cdbEquivalente.toFixed(2);

    // Cenário 2: O input é um CDB
    document.getElementById('cdbRate').textContent = taxa.toFixed(2);
    const lciEquivalente = cdbToLciEquivalent(taxa);
    document.getElementById('cdbToLciEquivalent').textContent = lciEquivalente.toFixed(2);
}

// EVENT LISTENERS

window.onload = function() {
    calcular();
};

document.getElementById('taxaInvestimento').addEventListener("input", calcular);