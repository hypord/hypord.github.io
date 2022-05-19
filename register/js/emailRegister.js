
function tryEmailRegister(){
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
        "email": email,
        "username": username,
        "displayName": displayName,
        "password": password
    }

    var req = new XMLHttpRequest();
    req.open("POST", "http://base.mcorange.tk:3000/api/users/register");
                req.send(data);
                req.onload = () => {
                    if (req.status === 500) {
                        alert(`There was an error with that. Please try again. Error Code: ${req.status} \n If the issue persists, please get support at https://discord.gg/845cUp3YHk`);
                    } else if (req.status === 200) {
                        //window.location.replace(`http://hypord.mcorange.tk/chat&token=${}`);
                    } else {
                        alert(`An error occured. Please try logging in again. Error Code: ${req.status} \n If the issue persists, please get support at https://discord.gg/845cUp3YHk`);
                    }
    }
}
