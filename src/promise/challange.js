import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
    return fetch(urlApi)
}


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        console.log('Primer then')
        console.log(productos)
        return fetchData(`${API}/products/${productos[0].id}`)
    })
    .then(response => response.json())
    .then(producto => {
        console.log('Segundo then')
        console.log(producto.title)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Fin del fetch'))
