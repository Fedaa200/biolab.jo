function valueInput() {
  var x = document.getElementById("inp").value;
  for (var i = 0; i < x.length; i++) {
    if (x[0] === "I") {
      document.getElementById("p-id").innerHTML = "Identity";
    } else {
      document.getElementById("p-id").innerHTML = "password";
    }

    var lastName = x.slice(60, 90);
    var firstName = x.slice(60, 90);
  }

  firstName = firstName.replace(/</g, " ");
  for (var r = 0; r < firstName.length; r++) {
    if (firstName[r] === " " && firstName[r + 1] === " ") {
      firstName = firstName.slice(0, firstName.length - 1);
      // var firstName = lastName.slice(r + 1, lastName.length - 1);
    }
  }
  document.getElementById("name").innerHTML = firstName;
  console.log(firstName);

  //   lastName = lastName.replace(/</g, " ");
  //   for (var r = 0; r < lastName.length; r++) {
  //     if (lastName[r] && lastName[r + 1] === " ") {
  //       lastName = lastName.slice(0, r);
  //       // var firstName = lastName.slice(r + 1, lastName.length - 1);
  //     }
  //   }
  //   console.log(lastName);

  //   string.replace(/-/g,' ');
  if (x[37] === "M") {
    document.getElementById("six").innerHTML = "Male";
    document.getElementById("image").src = "male.png";
  } else {
    document.getElementById("six").innerHTML = "Female";
    document.getElementById("image").src = "./images/11.png";
  }
  var date = x.slice(30, 36);
  var month = date.slice(2, 4);
  var day = date.slice(4, 6);
  var year = date.slice(0, 2);
  if (year > 21) {
    year = ["19", year].join("");
  } else {
    year = ["20", year].join("");
  }
  date = day + "/" + month + "/" + year;

  document.getElementById("date").innerHTML = date;

  var IDno = x.slice(5, 13);
  document.getElementById("id-no").innerHTML = IDno;

  var ID = x.slice(14, 25);
  document.getElementById("id").innerHTML = ID;
}

function changeLable() {
  var s = 23;
  document.getElementById("lable").innerHTML = `${s}`;
}
// function myFunction() {
//     document.getElementById("name").innerHTML = ${};
//   }
// IDJORUZG20603<09611026216<<<<<6107059F2704025JOR<<<<<<<<<<<0Alhalaki<<Fedaa<Adnan<Ahmad<<<<
