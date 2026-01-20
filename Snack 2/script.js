/* 
    Crea la funzione lanciaDado() che restituisce una Promise che, 
    dopo 3 secondi, genera un numero casuale tra 1 e 6. 
    Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
*/


// Definizione della funzione che restituisce una Promise
function lanciaDado() {

    const promise = new Promise( (resolve, reject) => {
        
        console.log("Sto lanciando il dado...");

        // Lancio del dado dopo 3s
        setTimeout( () => {
            
            // 20% dei casi -> il dado si "incastra"
            if(Math.random() < 0.2)
                reject("Dado incastrato!");

            // 80% dei casi -> genera un numero casuale tra 1 e 6
            else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 3000);
           
    }) 
    return promise;
}

// Chiamata funzione e gestione del risultato
lanciaDado()
    .then(num => console.log("Numero dado: ", num))
    .catch(err => console.error(err));