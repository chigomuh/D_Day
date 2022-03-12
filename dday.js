function add_zero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function dDay_print() {
  var today = new Date().getTime();
  var target_day = new Date(2022, 5, 20);
  var target_time = target_day.getTime();
  var result = target_time - today;
  var result_day = Math.floor(result / 1000 / 60 / 60 / 24);
  var result_hour = Math.floor((result / 1000 / 60 / 60) % 24);
  var result_minute = Math.floor((result / 1000 / 60) % 60);
  var result_second = Math.floor((result / 1000) % 60);

  var day = add_zero(result_day);
  var dday =
    add_zero(result_hour) +
    " : " +
    add_zero(result_minute) +
    " : " +
    add_zero(result_second);

  document.getElementById("day").innerHTML = day + " Day";
  document.getElementById("target").innerHTML = dday;
}

function reroad() {
  setInterval(dDay_print, 1000);
}

dDay_print();
reroad();
