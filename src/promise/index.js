//promise base
const promesa = new Promise(function (resolve, reject) {
    resolve('Positive!')
})

//example
const cows = 9

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`Jey, we have a necessary cows!`)
    } else {
        reject(`Oh men, we not have a cows`) 
    }
})

countCows
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log(`Finally`))