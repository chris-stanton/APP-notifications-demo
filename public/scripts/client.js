
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyDotJS'),
  handler: function(direction) {
    alertify.log("Alertify.js");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyJS'),
  handler: function(direction) {
    alertify.log("Alertify JS");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-sweetAlert2'),
  handler: function(direction) {
    alertify.log("SweetAlert 2");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-four'),
  handler: function(direction) {
    alertify.log("Swaypoint four");
  },
  offset: 200
});
