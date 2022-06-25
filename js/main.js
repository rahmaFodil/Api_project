$(document).ready(function () {
  $(".bars_icon").click(function () {
    $(".bars_icon").hide();
    $(".close_icon").show();
    $(".side-nav-bar").css("left", "250px");
    $(".nav-bar-menu").css("left", "0");
    $(".nav-bar-menu li").css({
      opacity: "1",
      "padding-top": "25px",
    });
  });

  $(".close_icon").click(function () {
    $(".close_icon").hide();
    $(".bars_icon").show();
    $(".side-nav-bar").css("left", "0");
    $(".nav-bar-menu").css("left", "-250px");
    $(".nav-bar-menu li").css({
      opacity: "0",
      "padding-top": "500px",
    });
  });

  $("#name").change(function () {
    let nameVal = $("#name").val();
    let namePattern = /^[A-Za-z]+$/;
    if (namePattern.test(nameVal)) {
      $(".name_error_msg").hide();
    } else {
      $(".name_error_msg").show();
    }
  });

  $("#email").change(function () {
    let emailVal = $("#email").val();
    let emailPattern = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if (emailPattern.test(emailVal)) {
      $(".email_error_msg").hide();
    } else {
      $(".email_error_msg").show();
    }
  });

  $("#phone").change(function () {
    let phoneVal = $("#phone").val();
    let phonePattern = /^[0-9]+$/;
    if (phonePattern.test(phoneVal)) {
      $(".phone_error_msg").hide();
    } else {
      $(".phone_error_msg").show();
    }
  });

  $("#age").change(function () {
    let ageVal = $("#age").val();
    let agePattern = /^[0-9]{1,2}$/;
    if (agePattern.test(ageVal)) {
      $(".age_error_msg").hide();
    } else {
      $(".age_error_msg").show();
    }
  });

  $("#pass").change(function () {
    let passVal = $("#pass").val();
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passPattern.test(passVal)) {
      $(".pass_error_msg").hide();
    } else {
      $(".pass_error_msg").show();
    }
  });

  $("#re_pass").change(function () {
    let passVal = $("#pass").val();
    let re_passVal = $("#re_pass").val();

    if (passVal == re_passVal) {
      $(".re_pass_error_msg").hide();
    } else {
      $(".re_pass_error_msg").show();
    }
  });

  var myHttp = new XMLHttpRequest();
  var userPosts = [];
  myHttp.open(
    "GET",
    "https://api.themoviedb.org/3/trending/movie/week?api_key=1e1ebc85e0f32f3e95bc3aee5005022d"
  );
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      userPosts = JSON.parse(myHttp.response).results;
      console.log(userPosts);
      displayItems();
    }
  });

  function displayItems() {
    var movieBox = ``;
    for (var i = 0; i < userPosts.length; i++) {
      movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("showsData").innerHTML = movieBox;
  }

  $(".now-playing").click(function () {
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/movie/now_playing?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&page=1"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".popular").click(function () {
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/movie/popular?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&page=1"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".top-rated").click(function () {
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&page=1"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".trending").click(function () {
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/trending/movie/week?api_key=1e1ebc85e0f32f3e95bc3aee5005022d"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".upcoming").click(function () {
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&page=1"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".get-show").keyup(function () {
    let movieName = $(".get-show").val();
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/search/movie?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&query=" +
        movieName +
        "&page=1&include_adult=false"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });

  $(".get-search").keyup(function () {
    let movieName = $(".get-search").val();
    var myHttp = new XMLHttpRequest();
    var userPosts = [];
    myHttp.open(
      "GET",
      "https://api.themoviedb.org/3/search/movie?api_key=1e1ebc85e0f32f3e95bc3aee5005022d&language=en-US&query=" +
        movieName +
        "&page=1&include_adult=false"
    );
    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        userPosts = JSON.parse(myHttp.response).results;
        console.log(userPosts);
        displayItems();
      }
    });

    function displayItems() {
      var movieBox = ``;
      for (var i = 0; i < userPosts.length; i++) {
        movieBox += `
      <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="show shadow rounded position-relative">
              <div class="caption">
                <img
                  src="https://image.tmdb.org/t/p/w500${userPosts[i].poster_path}"
                  class="img-fluid rounded"
                />
                <div class="text-layer d-flex align-items-center">
                  <div class="info p-0">
                    <h2 class="post-title">${userPosts[i].title}</h2>
                    <p class="post">
                      ${userPosts[i].overview}
                    </p>
                    <p class="rate">
                    Rate: ${userPosts[i].vote_average}
                    </p>
                    <p class="date">
                    ${userPosts[i].release_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      document.getElementById("showsData").innerHTML = movieBox;
    }
  });
});
