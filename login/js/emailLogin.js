function tryEmailLogin(){
    var baseUrl = "http://localhost:3000"

    var email = document.getElementById("login-inp-email").value;
    var password = document.getElementById("login-inp-password").value;

    if (!email || !password){
        return alert("Please fill all fields!")
    }

    var data = {
        email: email,
        password: password
    }
    let rdata;
    const json = JSON.stringify(data);
    const res = axios.post(baseUrl + "/api/v1/user/login", json, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        setCookie("user", JSON.stringify(response), 7)
        console.log(getCookie("user"))

        window.location.href = "../chat/";
    })
    .catch(function (error) {
            alert(`${error.response.data.message}\n\nSupport: https://discord.gg/845cUp3YHk`)
    })

    
}