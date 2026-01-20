/* 
    🎯 Bonus: Ottieni l'intero post con l'autore
    Crea una funzione getPost(id) che recupera l'intero post. 
    Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, 
    recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
*/


// Definizione della funzione che restituisce una Promise
function getPost(id) {

    const promise = new Promise((resolve, reject) => {

        // Chiamata API per recuperare l'intero post
        fetch("https://dummyjson.com/posts/" + id)
            .then(response => response.json())
            .then(post => {

                // Chiamata API per recuperare l'autore
                fetch("https://dummyjson.com/users/" + post.userId)
                    .then(response => response.json())
                    .then(autore => 
                        { 
                            // Aggiungo proprietà user all'oggetto post
                            post.user = autore;
                            resolve(post);
                        })
                    .catch(() => reject("Recupero autore fallito!"));
            })
            .catch(() => reject("Recupero post fallito!"));
    })
    return promise;
}


// Chiamata funzione e gestione del risultato
getPost(1)
    .then(post => console.log("Post: ", post))
    .catch(err => console.error(err));