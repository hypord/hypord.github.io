var username, discriminator;

    window.onload = () => {
        var fragment = new URLSearchParams(window.location.hash.slice(1));

        var [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        if (!accessToken) {
            return //(document.getElementById('login').style.display = 'block');
        }

        fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`,
            },
        })
            .then(result => result.json())
            .then(response => {
                const { username1, discriminator1 } = response;
                username = username1
                discriminator = discriminator1
                //document.getElementById('info').innerText += ` ${username}#${discriminator}`;
            })
            .catch(console.error);
            return
    };

    function sendMessage(){
        var msgInp = document.getElementById("main-msg-input").value;
        if (msgInp.length < 1) return;

        var text = document.createTextNode(`${username}: ${msgInp}\n`);
        document.createElement("br");
        var pNode = document.getElementById("chatText");

        pNode.appendChild(text);

        // let renderedText = htmlElement.innerText
        // htmlElement.innerText = htmlElement.innerText + string + "\n"

        // var par = document.createElement("p");
        // var text = document.createTextNode(msgInp);
        // par.appendChild(text);

        document.getElementById("main-msg-input").value = "";
        // send message to backend
        //alert(msgInp)

    }