# CDB vs LCA ou LCI
Código javacript para aplicar uma taxa de desconto a um CDB ou um incremento a uma LCA, ou LCI.
Seguindo a tabela de imposto de renda vigente para investimentos de renda fixa é possivél comparar investimentos diferentes.

O imposto de renda para investimentos de renda fixa possui uma tabela regressiva, quanto maior o prazo do investimento menor será o imposto cobrado.

Tabela regressiva de imposto de renda:
| Período | Alíquota |
| ------ | ------ |
| Até 6 meses | 22,5% |
| De 6 meses a 1 ano | 20% |
| De 1 a 2 anos | 17,5% |
| Acima de 2 anos | 15% |

Para podermos comparar basta aplicar uma taxa de desconto relativo a alíquota do imposto de renda.
EX: Um CDB 100% do CDI, num prazo de até 6 meses. Basta efetuar a conta `100 * 0.775 = 77,5` sendo `0.775` a taxa de desconto obtida a partir da alíquota de imposto de renda (`1 - (22.5 / 1000) = 0.775`)
