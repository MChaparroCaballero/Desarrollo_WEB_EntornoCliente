function compararValores(PrimerValor, SegundoValor) {
    
    
    if (PrimerValor === SegundoValor) {
        return 'Los valores son estrictamente iguales';
    } 
    
     if (PrimerValor == SegundoValor) {
        return 'Los valores son iguales en valor';
    } 
    
    if (PrimerValor < SegundoValor) {
        return "El segundo valor es mayor";
    }
    else if (PrimerValor > SegundoValor) {
        return "El primer valor es mayor";
    }

    
}

console.log(compararValores("B","a"));  