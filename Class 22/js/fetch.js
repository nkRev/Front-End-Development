/**
 * does not fulfill promise if link or code is wrong
 * promise is fulfilled
 */

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())

  .then((json) => {
    let data = json;
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
  })
  .catch((error) => {
    console.error("Error msg here");
  });

/**
 *  promise is pending but doesnt work
 */
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(function (response) {
//     var data = response.json();
//     console.log(data);
//     var text = "";
//     text += '<div class="row">';
//     for (var i = 0; i < data.length; i++) {
//       text +=
//         ` <div class="col-sm-3">
//                 <div class="card">
//                 <img src=` +
//         data[i].thumbnailUrl +
//         ` class="card-img-top">
//                 <div class="card-body">
//                 <h6 class = "card-title">` +
//         data[i].title +
//         `</h6>
//                 </div>
//               </div>
//         </div>`;
//     }
//     text += "</div>";
//     document.getElementById("result").innerHTML = text;
//   })
//   .catch(function (error) {
//     console.warn(error);
//   });
