var searchBtn = document.getElementById("searchButton");
reset();
searchBtn.addEventListener('click', function() {
  reset();
  var id = 1;
  var text = document.getElementById("searchText").value;
  var url = "https://my-json-server.typicode.com/duldiev/JSON-DB-23/";

  var range = ["less100", "rg10-30", "rg30-70", "rg70-100", "greater1000"];
  var minx = 0;
  var maxx = 9999999;

  for (var r = 0; r < range.length; r++) {
    if (document.getElementById(range[r]).checked == true) {
      if (r == 0) {
        minx = 10000;
        maxx = 30000;
      } else if (r == 1) {
        minx = 30000;
        maxx = 40000;
      } else if (r == 2) {
        minx = 40000;
        maxx = 60000;
      } else if (r == 3) {
        minx = 60000;
        maxx = 80000;
      } else if (r == 4) {
        minx = 80000;
        maxx = 100000;
      }
    }
  }

  var objects = ["basic", "other"];
  for (var i = 0; i < 2; i++) {
    var xhttp = new XMLHttpRequest();
    if (objects[i] == "basic") {
      xhttp.open('GET', url + objects[i], true);
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var res = JSON.parse(this.responseText);
          for (var j = 0; j < res.length; j++) {
            if (text.toLowerCase() == res[j].Generation.toLowerCase()) {
              if (!(res[j].Price >= minx && res[j].Price <= maxx)) {
                continue;
              }
              var card = document.getElementById("card" + id);
              var name = document.getElementById("name" + id);
              var price = document.getElementById("price" + id);
              var img = document.getElementById("img" + id);
              card.style.display = "block";
              img.src = res[j].img;
              name.innerHTML = res[j].Generation + " | Acceleration: " + res[j].Acceleration + " | Range: " + res[j].Range + " | Top-Speed: " + res[j].TopSpeed;
              price.innerHTML = res[j].Price + '$';
              id++;
            }
          }
        }
      }
      xhttp.send();
    }
    if (objects[i] == "other") {
      xhttp.open('GET', url + objects[i], true);
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var res = JSON.parse(this.responseText);
          for (var j = 0; j < res.length; j++) {
            if (text.toLowerCase() == res[j].Generation.toLowerCase()) {
              if (!(res[j].Price >= minx && res[j].Price <= maxx)) {
                continue;
              }
              var card = document.getElementById("card" + id);
              var name = document.getElementById("name" + id);
              var price = document.getElementById("price" + id);
              var img = document.getElementById("img" + id);
              card.style.display = "block";
              img.src = res[j].img;
              name.innerHTML = res[j].Generation + " | Acceleration: " + res[j].Acceleration + " | Range: " + res[j].Range + " | Top-Speed: " + res[j].TopSpeed;
              price.innerHTML = res[j].Price + '$';
              id++;
            }
          }
        }
      }
      xhttp.send();
    }
  }
});

function reset() {
  for (var i = 1; i <= 5; i++) {
    document.getElementById("card" + i).style.display = "none";
  }
}
