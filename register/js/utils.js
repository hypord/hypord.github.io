function setCookie(name,data,exp_days) {
	var d = new Date();
	d.setTime(d.getTime() + (exp_days*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = name + "=" + data + ";" + expires + ";path=/" + ';sameSite=None;secure';
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return true;
		}
	}
	return false;
	}
  
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
	alert("Welcome again " + user);
  } else {
	user = prompt("Please enter your name:", "");
	if (user != "" && user != null) {
	  setCookie("username", user, 365);
	}
  }
} 