function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function makeId(){

    let date = new Date();
    let month = `${(date.getMonth()+1).length}`
    console.log(month)

    let id = `${date.getFullYear()}${(date.getMonth()+1)}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${getRandomInt(10)}${getRandomInt(10)}${getRandomInt(10)}${getRandomInt(10)}`
    console.log(id)
}

makeId()