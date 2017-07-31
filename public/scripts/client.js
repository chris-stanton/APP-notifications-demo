
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-one'),
  handler: function(direction) {
    alertify.log("Log Alert");
  },
  // offset: 400
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-two'),
  handler: function(direction) {
    alertify.success("Success Alert");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-three'),
  handler: function(direction) {
    alertify.error("Error Alert");
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('section-three'),
  handler: function(direction) {
    alertify
    .closeLogOnClick(false)
    .log("<div>" +
            "<input id='input' type='text'>" +
            "<button type='button' onclick='inputButton()'> Submit </button>" +
          "</div>");
  },
  offset: 250
});

// button click listener
function inputButton (){
  var inputValue = document.getElementById('input').value;
  console.log(inputValue);
};

var waypoint = new Waypoint({
  element: document.getElementById('section-four'),
  handler: function(direction) {
    // alertify is need
    alertify
    .closeLogOnClick(true)
    .log("<a href='#section-one'>" +
            "<div> Top <img src='../public/assets/images/arrow-up.ico'></div>" +
          "</a>")
  },
  offset: 400
});
