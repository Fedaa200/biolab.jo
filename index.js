//Create demo data for  some Medical analyzes
var data = [
  {
    code: "URA(BC)",
    name: "URA-Urine Analysis",
    price: 5,
    sample: "Urine",
    location: "BAO3",
    requirement: "It is important to examine fre",
    tat: 2,
  },
  {
    code: "ESR(BC)",
    name: "ESR-Erythrocyte Sedimentation",
    price: 3,
    sample: "EDITA Whole Blood",
    location: "BAO3",
    requirement: "Time Sensitive",
    tat: 3,
  },
  {
    code: "CBC(BC)",
    name: "CBC-Complete Blood Count(CBC)",
    price: 12,
    sample: "EDITA Whole Blood",
    location: "BAO3",
    requirement: "N/A",
    tat: 3,
  },
  {
    code: "GOT(BC",
    name: "GOT-Aspartate Aminotransferase",
    price: 5,
    sample: "Serum",
    location: "BAO4",
    requirement: "Allow serun tube to clot comp",
    tat: 3,
  },
];

//function to get the value of select , make loop , ckeck the data and render the right data in the table
function ABC() {
  var value = document.getElementById("select").value;
  for (var i = 0; i < data.length; i++) {
    if (value === data[i].name) {
      var tbody = document.querySelector("tbody");
      var tr = document.createElement("tr");
      var tdCode = document.createElement("td");
      var tdName = document.createElement("td");
      var tdPrice = document.createElement("td");
      var tdSample = document.createElement("td");
      var tdLocation = document.createElement("td");
      var tdReq = document.createElement("td");
      var tdTat = document.createElement("td");

      tdCode.innerHTML = data[i].code;
      tdName.innerHTML = data[i].name;
      tdPrice.innerHTML = data[i].price + "DJ";
      tdSample.innerHTML = data[i].sample;
      tdLocation.innerHTML = data[i].location;
      tdReq.innerHTML = data[i].requirement;
      tdTat.innerHTML = data[i].tat + "H";

      tbody.appendChild(tr);

      tr.appendChild(tdCode);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdSample);
      tr.appendChild(tdLocation);
      tr.appendChild(tdReq);
      tr.appendChild(tdTat);
    }
  }
}
//Create demo data (informations about the patients)
var patient = [
  {
    id: 1,
    firstName: "Fedaa",
    secondName: "Alhalaki",
    patientNumber: 12,
    age: "44",
    gender: "femal",
    patientMobile: "0798026937",
    transaction: 1452,
  },
  {
    id: 2,
    firstName: "Alaa",
    secondName: "Alhalaki",
    patientNumber: 13,
    age: "20",
    gender: "femal",
    patientMobile: "0799926937",
    transaction: 2341,
  },
  {
    id: 3,
    firstName: "Sham",
    secondName: "Ahmad",
    patientNumber: 44,
    age: "24",
    gender: "femal",
    patientMobile: "0799920937",
    transaction: 7864,
  },
  {
    id: 4,
    firstName: "Ahmad",
    secondName: "Mohammad",
    patientNumber: 90,
    age: "56",
    gender: "male",
    patientMobile: "0799979637",
    transaction: 6654,
  },
];

// furntion to get the value for one input of (patient number or patient mobile or transaction) for one patient and render all informations about this patient in value of inputs
function patientInformation() {
  //deacleare the variable that use to compare with the data
  var mobilePatient = document.getElementById("patient-mobile").value;
  var numPatient = document.getElementById("patient-num").value;
  var transaction = document.getElementById("transaction").value;
  // make loop inside the array of data
  for (var i = 0; i < patient.length; i++) {
    if (
      mobilePatient === patient[i].patientMobile ||
      numPatient === patient[i].patientNumber ||
      transaction === patient[i].transaction
    ) {
      document.getElementById("firstN").value = patient[i].firstName;
      document.getElementById("secondN").value = patient[i].secondName;
      document.getElementById("patient-num").value = patient[i].patientNumber;
      document.getElementById("age").value = patient[i].age;
      document.getElementById("gender").value = patient[i].gender;
      document.getElementById("patient-mobile").value =
        patient[i].patientMobile;
    }
  }
}
