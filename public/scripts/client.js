
console.log("client.js sourced!");

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyDotJS'),
  handler: function(direction) {
    alertify.log("alertify.js: Standard log message");
  },
  offset: 100
});

  function alertifyDotJSAlertLogs() {
    var logOption = document.getElementById('alertifyDotJS-logs').value;
    console.log(logOption);
    if (logOption === 'log'){
      alertify.log("alertify.js: Standard log message");
    } else if (logOption === 'success') {
      alertify.success("alertify.js: Standard success message");
    } else if (logOption === 'error') {
      alertify.error("alertify.js: Standard errormessage");
    } else if (logOption === 'click-close'){
      alertify
        .closeLogOnClick(true)
        .log("Click me to close!")
    } else if (logOption === 'click-disabled'){
      alertify
        .closeLogOnClick(true)
        .log("Click me to close!")
        .closeLogOnClick(false)
        .log("You can't click to close this!")
    } else if (logOption === 'hide'){
      alertify.delay(10000).log("Hiding in 10 seconds");
    } else {
      alert('make a selection');
      return
    };
  };// end logAlerts()

  function alertifyDotJSAlerts() {
    var alertsOption = document.getElementById('alertifyDotJS-alerts').value;
    if (alertsOption === 'dialog'){
      alertify.alert("Dialog Alert");
    } else if (alertsOption === 'confirm'){
      alertify.confirm("Confirm Dialog", function () {
      // user clicked "ok"
      }, function() {
      // user clicked "cancel"
      });
    } else if (alertsOption === 'prompt'){
      alertify
        .defaultValue("Default Value")
        .prompt("Prompt Dialog",
        function (val, ev) {
          // The click event is in the event variable, so you can use it here.
          ev.preventDefault();
          // The value entered is availble in the val variable.
          alertify.success("You've clicked OK and typed: " + val);
        }, function(ev) {
          // The click event is in the event variable, so you can use it here.
          ev.preventDefault();
          alertify.error("You've clicked Cancel");
        });
    } else if (alertsOption === 'promise-aware'){
      if ("function" !== typeof Promise) {
        alertify.alert("Your browser doesn't support promises");
        return;
      };
        alertify.confirm("Confirm?").then(function (resolvedValue) {
        resolvedValue.event.preventDefault();
        alertify.alert("You clicked the " + resolvedValue.buttonClicked + " button!");
        });
    } else {
      alertify.alert("make a selection");
      return
    };
  };// end alertifyDotJSAlerts()








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
