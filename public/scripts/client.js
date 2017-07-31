
console.log("client.js sourced!");

// Waypoints.js event triggers
var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyDotJS'),
  handler: function(direction) {
    alertify.log("alertify.js");
  },
  offset: 100
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyJS'),
  handler: function(direction) {
    alertify.log("Alertify JS");
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
