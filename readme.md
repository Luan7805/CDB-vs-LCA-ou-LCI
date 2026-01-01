# CDB vs LCA ou LCI (Sob Novas Regras de Tributação)

Este projeto apresenta uma calculadora JavaScript desenvolvida para comparar a rentabilidade de diferentes tipos de investimentos de renda fixa: CDB (Certificado de Depósito Bancário) e LCI/LCA (Letra de Crédito Imobiliário/Agronegócio), com base em um novo cenário de tributação fixa.

A ferramenta simplifica a análise para o investidor, mostrando a taxa de rendimento equivalente entre os dois tipos de ativos, que agora possuem alíquotas de imposto de renda distintas e fixas, independentemente do prazo do investimento.

## Novas Regras de Tributação Aplicadas

A calculadora opera com base nas alterações propostas pela **[Medida Provisória Nº 1.303, de 11 de junho de 2025](https://static.poder360.com.br/2025/06/integra-mp-aumento-imposto-11jun2025.pdf)**.

As novas alíquotas de Imposto de Renda (IR) consideradas são:

| Investimento | Alíquota de IR |
| :--- | :---: |
| LCI ou LCA | 5% |
| CDB | 17,5% |

Diferente do modelo anterior, a tabela regressiva de imposto de renda não é mais utilizada, tornando o cálculo mais direto.

## Lógica da Comparação

Para permitir uma comparação justa entre um ativo tributado (CDB) e outro com uma tributação diferente (LCI/LCA), a calculadora realiza dois cálculos de equivalência:

### 1. Equivalência de LCI/LCA para CDB

Este cálculo responde à pergunta: "Se uma LCI/LCA me oferece uma taxa X, qual deveria ser a taxa bruta de um CDB para que, após o imposto, o rendimento líquido seja o mesmo?"

**Fórmula:**
1.  Calcula-se o rendimento líquido da LCI/LCA:
    `Rendimento Líquido LCI = Taxa Bruta LCI * (1 - 0,05)`
2.  Encontra-se a taxa bruta do CDB que resultaria nesse mesmo rendimento líquido:
    `Taxa Bruta CDB Equivalente = Rendimento Líquido LCI / (1 - 0,175)`

**Exemplo:**
Para uma LCI que rende 100% do CDI:
-   Rendimento Líquido LCI: `100 * (1 - 0,05) = 95`
-   Taxa Bruta CDB Equivalente: `95 / (1 - 0,175) = 95 / 0,825 ≈ 115,15%`

Portanto, uma LCI a 100% do CDI equivale a um CDB que rende aproximadamente **115,15%** do CDI.

### 2. Equivalência de CDB para LCI/LCA

Este cálculo responde à pergunta oposta: "Se um CDB me oferece uma taxa Y, qual seria a taxa equivalente em uma LCI/LCA para obter o mesmo ganho líquido?"

**Fórmula:**
1.  Calcula-se o rendimento líquido do CDB:
    `Rendimento Líquido CDB = Taxa Bruta CDB * (1 - 0,175)`
2.  Encontra-se a taxa bruta da LCI/LCA que resultaria nesse mesmo rendimento líquido:
    `Taxa Bruta LCI Equivalente = Rendimento Líquido CDB / (1 - 0,05)`

**Exemplo Prático:**
Para um CDB que rende 100% do CDI:
-   Rendimento Líquido CDB: `100 * (1 - 0,175) = 82,5`
-   Taxa Bruta LCI Equivalente: `82,5 / (1 - 0,05) = 82,5 / 0,95 ≈ 86,84%`

Portanto, um CDB a 100% do CDI equivale a uma LCI/LCA que rende aproximadamente **86,84%** do CDI.