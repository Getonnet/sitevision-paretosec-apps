"use strict";

// config.js
$(function () {
  document.documentElement.addEventListener("initialized", function () {
    $("#save-redirects").on("click", function () {
      window.sv.requester.doPost({
        route: "/add-redirect-uris",
        data: {
          value: $('[name="urls"]').val()
        }
      }).done(function (res) {
        console.log(res);
        $("#redirects-wrapper").text(res.value);
      });
    });
  });
});