function Euripides(numA,Numb) {
  let opi1;
    while (Numb != 0) {
        opi1 = numA % Numb;  // resto de la división
        numA = Numb;          // el divisor se convierte en el nuevo numA
        Numb = opi1;          // el resto se convierte en el nuevo Numb
    }
    return numA;              // al final, numA es el MCD
}

console.log(Euripides(48, 18)); // 6