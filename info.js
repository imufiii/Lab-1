
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const songList = document.querySelector("#songDeatils");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const artist = document.getElementById("artist").value.trim();

    if (title !== "" && artist !== "") {
      const listItem = document.createElement("li");

      listItem.innerHTML = `
        <span class="title">${title}</span>
        <br>
        <span class="artist">${artist}</span>
      `;

      songList.appendChild(listItem);

      document.getElementById("title").value = "";
      document.getElementById("artist").value = "";
    }
  });
});



