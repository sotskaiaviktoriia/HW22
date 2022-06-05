"use strict";

const select = $(".form-select");
const color = $(".color-input");
const figure = $(".initial-figure");

select.change(() => {
  figure.hide("slow");
  switch (select.val()) {
    case "square": {
      figure.removeClass().addClass("square");
      break;
    }
    case "rectangle": {
      figure.removeClass().addClass("rectangle");
      break;
    }
    case "circle": {
      figure.removeClass().addClass("circle");
      break;
    }
    default: {
      console.log("default");
    }
  }
  figure.show("slow");
});

color.on("input", function () {
  figure.css("background-color", color.val());
});
