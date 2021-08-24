function save() {
  let fullName = "Bob";
  let data = {
    id: 1,
    firstName: "Nicky",
    lastName: "Kayyarath",
    email: "n@gmail.com",
  };

  console.log(data.firstName);
  localStorage.setItem("name", JSON.stringify(data));
}

function read() {
  var data = localStorage.getItem("name");
  console.log(data.firstName); //appears undefined in console.log pre JSON.parse
  var data2 = JSON.parse(data);
  console.log(data2.firstName + " " + data2.lastName); //prints after JSON.parse
  document.getElementById("result").innerHTML = data2.firstName;
}
