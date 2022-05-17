/**
 * Deprecated
 * Not used right now
 */

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



//     https://discord.com/api/oauth2/authorize?client_id=975052663773339678&redirect_uri=https%3A%2F%2Fhypord.mcorange.tk&response_type=code&scope=identify%20email
