const asyncFn = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Función Async ejeuctada')
            }, 5000)
            : reject(new Error('Función Async rechazada'))
    })
}

const anotherFn = async () => {
    const resasync = await asyncFn()
    console.log(resasync)
    console.log('Siguiente paso despues de ejecutar la función asincrona')
}

console.log('Start')
anotherFn()
console.log('End')
