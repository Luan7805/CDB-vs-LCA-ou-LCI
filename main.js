function Main(LCAPercentual){
    return {
        ate180Dias: LCAPercentual * 1.225,
        ate360Dias: LCAPercentual * 1.2,
        ate720Dias: LCAPercentual * 1.175,
        maisDe720Dias: LCAPercentual * 1.15
    };
}

function CDB(CDBPercentual){
    return {
        ate180Dias: CDBPercentual * 0.775,
        ate360Dias: CDBPercentual * 0.8,
        ate720Dias: CDBPercentual * 0.825,
        maisDe720Dias: CDBPercentual * 0.85
    };
}
