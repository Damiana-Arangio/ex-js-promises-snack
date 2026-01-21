/* 
    🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
    Modifica la funzione in creaLanciaDado(), che restituisce una closure 
    che memorizza l'ultimo risultato. Se il numero esce due volte di fila, 
    stampa "Incredibile!".
*/


// Definizione della funzione che restituisce una closure
function creaLanciaDado() {

    let precedente = null;

    // Closure che restituisce una Promise
    return function () {

        // Funzione che ritorna una Promise con il risultato del dado
        return new Promise((resolve, reject) => {

            // Lancio del dado dopo 3s
            setTimeout(() => {
                
                // 20% dei casi -> il dado si "incastra"
                if (Math.random() < 0.2) {
                    precedente = null;
                    reject("Il dado si è incastrato");
                }
                else {
                    // 80% dei casi -> genera un numero casuale tra 1 e 6
                    // const successivo = Math.floor(Math.random() * 6) + 1;
                    const successivo = 6;


                    // Confronto con il lancio precedente
                    if (successivo === precedente) {
                        console.log("Incredibile!");
                    }

                    // Aggiorno il valore precedente per il prossimo lancio
                    precedente = successivo;

                    // Risolvo la Promise con il risultato
                    resolve(successivo);
                }
            }, 3000);
        });
    };
}


// Chiamata funzione e gestione del risultato
const lancio = creaLanciaDado();

lancio()
    .then(num => console.log("Primo dado:", num))
    .catch(err => console.error(err));

lancio()
    .then(num => console.log("Secondo dado:", num))
    .catch(err => console.error(err));