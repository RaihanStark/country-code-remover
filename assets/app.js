$(document).ready(function () {
  var clipboard = new ClipboardJS("#copy");

  $("#submit").click(function () {
    // get value from inputNumber class text area
    // remove the first 2 characters every line expect the first line
    const lines = $("#inputNumber").val().split("\n");

    if (lines[1].substring(0, 2) !== "62") {
      return;
    }

    let result = lines[0] + "\n";
    for (var i = 1; i < lines.length; i++) {
      result += lines[i].substring(2) + "\n";
    }
    $("#inputNumber").val(result);
  });

  $("#inputNumber").bind("input propertychange", function () {
    $("#copy").text("Salin");

    const lines = $("#inputNumber")
      .val()
      .split("\n")
      .filter((line) => line !== "");

    const total = lines.length - 1;
    $("#totalNumber").text(total === -1 ? 0 : total);
  });

  clipboard.on("success", function (e) {
    $("#copy").text("Sudah Tersalin!");
    e.clearSelection();
  });
});
