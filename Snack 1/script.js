/* 
    Ottieni il titolo di un post con una Promise.
    
    Crea una funzione getPostTitle(id) che accetta un id 
    e restituisce una Promise che recupera il titolo di 
    un post dal link https://dummyjson.com/posts/{id}
*/


// Definizione della funzione che restituisce una Promise
function getPostTitle(id) {
    const promise = new Promise( (resolve, reject) => {

        // Chiamata API per recupera il titolo del post
        fetch("https://dummyjson.com/posts/" + id)
            .then(response => response.json())
            .then(post => resolve(post.title))
            .catch(() => reject("Recupero post fallito!"));     
    })
    return promise;
}


// Chiamata funzione e gestione del risultato
getPostTitle(1)
    .then(title => console.log("Titolo: ", title))
    .catch(err => console.error(err));