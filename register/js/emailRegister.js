window.onload

async function tryEmailRegister(){
    var baseUrl = "http://localhost:3000"

    var email = document.getElementById("reg-inp-email").value;
    var username = document.getElementById("reg-inp-username").value;
    var displayName = document.getElementById("reg-inp-displayname").value;
    var password = document.getElementById("reg-inp-password").value;
    var passwordConf = document.getElementById("reg-inp-password-confirm").value;

    if (!email || !username || !displayName || !password || !passwordConf){
        return alert("Please fill all fields!")
    }

    if (password != passwordConf) return alert("The passwords do not match!")
    var data = {
        email: email,
        username: username,
        displayName: displayName,
        password: password
    }
    const json = JSON.stringify(data);
    const res = await axios.post(baseUrl + "/api/v1/user/register", json, {headers: {'Content-Type': 'application/json'}})
    .then(function (response) {
        setCookie("user", JSON.stringify(response), 7)
        console.log(getCookie("user"))

        window.location.href = "../chat/";
    })
    .catch(function (error) {
            console.log(error)
            if (!error) return
            // alert(`${error.response.data.message}\n\nSupport: https://discord.gg/845cUp3YHk`)
    })

    
}