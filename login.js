var btn = document.getElementById('loginButton');

btn.addEventListener("click", function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('pwd').value;
  var warn = document.getElementById('warning');
  var modal_body = document.getElementById('body');
  var isTrue = true;

  var xhttp = new XMLHttpRequest();
  var url = "https://my-json-server.typicode.com/duldiev/JSON-DB-23/user";
  xhttp.open('GET', url, true);
  var res;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.responseText);
      for (var i = 0; i < 10; i++) {
        if (username == res[i].username && password == res[i].password) {
          warn.innerHTML = "Successfully signed in!";
          warn.style.color = "green";
          warn.style.backgroundColor = "white";
          modal_body.style.display = "none";
          isTrue = false;
          for (var k = 1; k <= 5; k++) {
            document.getElementById("favorites" + k).style.display = "block";
            document.getElementById("search" + k).style.display = "block";

            //resetPropertyValue(document.getElementById("favorites" + k), 'display');
            //resetPropertyValue(document.getElementById("favorites" + k), 'display');
          }
        }
      }
    }
  };
  if (isTrue == true) {
    warn.innerHTML = "Warning";
    warn.style.color = "black";
    warn.style.backgroundColor = "white";
    modal_body.style.display = "block";
  }
  xhttp.send();
});

function getDefaultValue(element, property) {
    var elDefault = document.createElement(element.nodeName);
    document.body.appendChild(elDefault);
    propertyValue = window.getComputedStyle(elDefault,null).getPropertyValue(property);
    document.body.removeChild(elDefault);
  return propertyValue;
}

 function resetPropertyValue (element, propertyName) {
    var propertyDefaultValue = getDefaultValue(element, propertyName);
    if (element.style.setProperty) {
        element.style.setProperty (propertyName, propertyDefaultValue, null);
    }
    else {
        element.style.setAttribute (propertyName, propertyDefaultValue);
    }
}

function toRus() {
  document.getElementById('t1').innerHTML = "?????????????????????????? ?? ?????????? TESLA";
  document.getElementById('t2').innerHTML = "??????????????";
  document.getElementById('t3').innerHTML = "????????????";
  document.getElementById('t4').innerHTML = "??????????????";
  document.getElementById('t51').innerHTML = "??????????????????";
  document.getElementById('t52').innerHTML = "??????????????";
  document.getElementById('t53').innerHTML = "????";
  document.getElementById('t54').innerHTML = "????????????????";
  document.getElementById('t55').innerHTML = "?????? ????????????";
  document.getElementById('t6').innerHTML = "???????????????? ????????????";
  document.getElementById('t7').innerHTML = "?????????????? ???????? ???????????????? ??????????";
  document.getElementById('t8').innerHTML = "???????? ???? ???????????? ???????? ??????????????, ?????? ?? ?????? ???????? 100% ???????????????????????? ?????????????? Tesla, ?????????????? ???????????????? ???? ???????????? ?????????????????? ????????????";
  document.getElementById('t9').innerHTML = "?????????????????? ???????????????????????? ?? ????????????????";
  document.getElementById('t10').innerHTML = "?????????????? ???????????? ?? ??????, ?????? ???????????? ?? ???????? ????????????????, ?????????????????? ???????????????????????? ?? ?????????? ???? ????????????.";
  document.getElementById('t11').innerHTML = "Download our app";
  document.getElementById('t12').innerHTML = "Download the Tesla app for iPhone and Android to control and remotely monitor your Tesla products";
  document.getElementById('t13').innerHTML = "?????????? ???????????????? ??????????";
  document.getElementById('t14').innerHTML = "???????????????? ???????????????????? ???????????????????????? ?? ????????????????";
  document.getElementById('t15').innerHTML = "???????????????????? ?????????? ????????????";
}
