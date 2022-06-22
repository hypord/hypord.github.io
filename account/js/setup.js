var username, discriminator;




window.onload = () => {
    var fragment = new URLSearchParams(window.location.hash.slice(1));

    var id = fragment.get('id')

    if (!id || id === "") {
        return window.location.href = "../login/";
    }

    var data = {
        email: email,
        password: password
    }
    const json = JSON.stringify(data);
    const res = axios.post(baseUrl + "/api/v1/user/login", json, { headers: { 'Content-Type': 'application/json' } })
    .then(function (response) {

    })
    .catch(function (error) {
            alert(`${error.response.data.message}\n\nSupport: https://discord.gg/845cUp3YHk`)
    })
};
