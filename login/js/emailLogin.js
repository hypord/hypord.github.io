
function tryEmailRegister(){
    var email = document.getElementById("login-inp-email").value;
    var password = document.getElementById("login-inp-password").value;

    if (!email || !password){
        return alert("Please fill all fields!")
    }

    var data = {
        "email": email,
        "password": password
    }

    var req = new XMLHttpRequest();
    req.open("POST", "http://base.mcorange.tk:3000/api/users/login");
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