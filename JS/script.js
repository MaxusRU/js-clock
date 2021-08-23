setInterval(() => (document.getElementById("time").innerHTML = `<h2>${new Date().toLocaleTimeString()}</h2>`), 1000);
let month;
if (new Date().getMonth() == 0) month = 'January'
else if (new Date().getMonth() == 1) month = 'February'
else if (new Date().getMonth() == 2) month = 'March'
else if (new Date().getMonth() == 3) month = 'April'
else if (new Date().getMonth() == 4) month = 'May'
else if (new Date().getMonth() == 5) month = 'June'
else if (new Date().getMonth() == 6) month = 'July'
else if (new Date().getMonth() == 7) month = 'August'
else if (new Date().getMonth() == 8) month = 'September'
else if (new Date().getMonth() == 9) month = 'October'
else if (new Date().getMonth() == 10) month = 'November'
else if (new Date().getMonth() == 11) month = 'December'

let day;
if (new Date().getDay() == 0) day = 'Sunday'
else if (new Date().getDay() == 1) day = 'Monday'
else if (new Date().getDay() == 2) day = 'Tuesday'
else if (new Date().getDay() == 3) day = 'Wednesday'
else if (new Date().getDay() == 4) day = 'Thursday'
else if (new Date().getDay() == 5) day = 'Friday'
else if (new Date().getDay() == 6) day = 'Saturday'

setInterval(() => (document.getElementById("date").innerHTML = `<h2>${day}, ${new Date().getDate()} ${month} ${new Date().getFullYear()} </h2>`), 1000);
// var sec = new Date().getSeconds()*6;
// setInterval(() => (document.getElementById("second-hand").style.transform = 'rotate('+sec+'deg)'), 1000);
setInterval(() => (document.getElementById("second-hand").style.transform = 'rotate('+new Date().getSeconds()*6+'deg)'), 1000);
setInterval(() => (document.getElementById("minute-hand").style.transform = 'rotate('+new Date().getMinutes()*6+'deg)'), 1000);
setInterval(() => (document.getElementById("hour-hand").style.transform = 'rotate('+new Date().getHours()*30+'deg)'), 1000);



// let seconds = new Date().getSeconds(); // 0-59
// let secDegree = seconds * 6; // угол вращения секундной стрелки

// function writeSeconds() {
//   document.write(`<h2>${seconds} seconds</h2>`);
// }
// setTimeout(writeSeconds, 1000);

// document.write(`<h2>${seconds} seconds</h2>`);

// let timerId = setInterval(() => alert('tick'), 2000);
// let timerId = setInterval(() => document.write(`<h2>${new Date().getSeconds()} seconds</h2>`), 1000);

// document.getElementById("seconds").innerHTML = "Hide";

// document.getElementById("p1").innerHTML = "New text!";


// document.querySelector('#seco')