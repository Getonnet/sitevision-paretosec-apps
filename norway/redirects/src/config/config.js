// config.js
$(function () {
  document.documentElement.addEventListener("initialized", () => {
    $("#save-redirects").on("click", () => {
      window.sv.requester
        .doPost({
          route: "/add-redirect-uris",
          data: {
            value: $('[name="urls"]').val(),
          },
        })
        .done((res) => {
          console.log(res);
          $("#redirects-wrapper").text(res.value);
        });
    });
  });
});
