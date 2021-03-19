// REGISTER
function getRequest(username, password, email) {
  var xhttp = new XMLHttpRequest();
  var url = "https://my-json-server.typicode.com/duldiev/JSON-DB-23/user";
  xhttp.open("POST", url, true);
  var obj = {
    "id": 111,
    "username": username,
    "password": password,
    "email": email
  };
  var new_data = JSON.stringify(obj);
  xhttp.send(new_data);
}
//getRequest();

var btn = document.getElementById('signupButton');

btn.addEventListener("click", function() {
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('pwd').value;
  var confirm_password = document.getElementById('conf-pwd').value;

  var email_parts = email.split('@');
  email_parts[1] = "@".concat(email_parts[1]);

  // Email checker
  var address_checker = /^@gmail\.com$|^@yandex\.ru$|^@yahoo\.com$|^@mail\.ru$/.test(email_parts[1]);
  var before_address_checker = /^[\w]{1,}$/.test(email_parts[0]);

  // Password checker
  var password_checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([\S]){8,}$/gm.test(password);
  var confirmed_password = (confirm_password == password && confirm_password.length > 0) ? true : false;

  warning((before_address_checker == true && address_checker == true) ? "check" : "times", 1);
  warning((before_address_checker == true && address_checker == true) ? "check" : "times", 2);
  warning(password_checker == true ? "check" : "times", 3);
  warning((confirmed_password == true && password_checker == true) ? "check" : "times", 4);

  if (before_address_checker && address_checker && password_checker && confirmed_password) {
    document.getElementById('warn').innerHTML = "Successfully registered!";
    getRequest(username, password, email);
  } else {
    document.getElementById('warn').innerHTML = "Wrong!";
  }
});

function warning(chosen_icon, x) {
  var y;
  switch (x) {
    case 1:
      y = "email_exist";
      break;
    case 2:
      y = "email_warn";
      break;
    case 3:
      y = "password_elements";
      break;
    case 4:
      y = "confirmed_password";
      break;
  }

  var element = document.getElementById(y);
  element.querySelector('i').classList.remove('fa-times');
  element.querySelector('i').classList.remove('fa-check');

  if (chosen_icon == "check") {
    element.querySelector('i').classList.add('fa-check');
    element.style.color = 'green';
  } else {
    element.querySelector('i').classList.add('fa-times');
    element.style.color = 'red';
  }
}
