function calculadoraAvanzada(primerNumero, segundoNumero){

            let multiplicacion=primerNumero*10;
            let suma=multiplicacion+segundoNumero;
            let divisibleEntre3=(suma%3===0);
            let resta = primerNumero-segundoNumero;
            let mayor50= suma>50;
            let divisibleEntre5= (suma%5===0);
            let operacionLogica= mayor50 && divisibleEntre5;

               return {
                multiplicacion: multiplicacion,
                suma: suma,
                divisibleEntre3: divisibleEntre3,
                resta: resta,
                mayor50: mayor50,
                divisibleEntre5: divisibleEntre5,
                operacionLogica: operacionLogica
               };
        
        };

        console.log(calculadoraAvanzada(10,20));


