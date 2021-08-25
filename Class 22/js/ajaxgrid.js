function getData() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = this.responseText;
      let data = JSON.parse(response);
      let text = "";

      text += '<div class="row">';

      for (var i = 0; i < data.length; i++) {
        text +=
          ` <div class="col-sm-3">
                            <div class="card">
                            <img src=` +
          data[i].thumbnailUrl +
          ` class="card-img-top">
                            <div class="card-body">
                            <h6 class = "card-title">` +
          data[i].title +
          `</h6>
                            </div>
                          </div>
                    </div>`;
      }
      text += "</div>";
      document.getElementById("result").innerHTML = text;
    } else {
      console.log("its not working");
    }
  };

  request.send();
}
