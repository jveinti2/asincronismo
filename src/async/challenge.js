import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const anotherFn = async (urlApi) => {
    try {
        const productos = await fetchData(`${urlApi}/products`)
        const producto = await fetchData(`${urlApi}/products/${productos[0].id}`)
        const categoria = await fetchData(`${urlApi}/categories/${producto.category.id}`)

        // console.log(productos)
        console.log('Prodcuto-> ')
        console.log(producto)
        console.log('Categoria-> ')
        console.log(categoria)

    } catch (error) {
        console.error(error);
    }
}

anotherFn(API)