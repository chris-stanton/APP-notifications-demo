
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyDotJS'),
  handler: function(direction) {
    alertify.log("alertify.js: Standard log message");
  },
  offset: 100
});

function logAlerts() {
  var logOption = document.getElementById('alertifyDotJS-logs').value;
  console.log(logOption);
  if (logOption === 'log'){
    alertify.log("alertify.js: Standard log message");
  } else if(logOption === 'success') {
    alertify.success("alertify.js: Standard success message");
  } else if(logOption === 'error') {
    alertify.error("alertify.js: Standard errormessage");
  } else {
    alert('make a selection');
    return
  }
};// end logAlerts()










var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyJS'),
  handler: function(direction) {
    alertify.success("Alertify JS: Normal message");
  },
  offset: 100
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-notyf'),
  handler: function(direction) {
    alertify.log("Notyf");
  },
  offset: 100
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-sweetAlert2'),
  handler: function(direction) {
    alertify.log("SweetAlert 2");
  },
  offset: 100
});
