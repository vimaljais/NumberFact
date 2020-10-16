function mySubmitFunction(e) {
  e.preventDefault();

  var num = document.getElementById("numtext").value;
  var nx = parseInt(num);
  if (isNaN(nx) === false) {
    getit(num);
  } else {
    document.getElementById("result").innerHTML = "Enter a valid number";
  }

  return false;
}

function getit(num) {
  num = Math.round(num);
  const Http = new XMLHttpRequest();
  const url = `http://numbersapi.com/${num}`;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (eve) => {
    if (Http.responseText.length > 0) {
      var x = "Did you know that " + Http.responseText;
      document.getElementById("result").innerHTML = x;
    }
  };
}

const n = Math.floor(Math.random() * 100);
if (document.getElementById("numtext").value > 0) {
  getit(document.getElementById("numtext").value);
} else {
  getit(n);
}
