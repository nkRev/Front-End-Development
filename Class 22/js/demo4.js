function getData() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(request.responseText)
      let response = this.responseText;
      let data = JSON.parse(response);
      let text = "";
      text +=
        '<table class="table table-bordered"><tr><th>Title</th><th>Body</th></tr>';
      for (var i = 0; i < data.length; i++) {
        text +=
          "<tr><td>" +
          data[i].title +
          "</td><td>" +
          data[i].body +
          "</td></tr>";
      }
      text += "</table>";
      document.getElementById("result").innerHTML = text;
    } else {
      console.log("something wrong happned");
    }
  };

  request.send();
}
