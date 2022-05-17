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

db.createUser(
    {
      user: "admin",
      pwd: "k31t0s_f7w", // or cleartext password
      roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" }
      ]
    }
  )