
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const songList = document.querySelector("#songDeatils");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const artist = document.getElementById("artist").value.trim();

    if (title !== "" && artist !== "") {
      const listItem = document.createElement("ul");
      // listItem.classList.add("song");


      listItem.innerHTML = 
      '<div class="song">' +

        '<span class="title">Title: ' + title + '</span>' +
        '<br>' +
        '<span class="artist">Artist: ' + artist + '</span>' +
      '</div>';
    

      songList.appendChild(listItem);

      document.getElementById("title").value = "";
      document.getElementById("artist").value = "";
    }
  });
});



