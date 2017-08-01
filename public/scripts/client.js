
console.log("client.js sourced!");


/////////////////////////////////////
///          alertify.js          ///
/////////////////////////////////////
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
    console.log(alertsOption);
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




/////////////////////////////////////
///          Alertify JS          ///
/////////////////////////////////////
var waypoint = new Waypoint({
  element: document.getElementById('waypoint-alertifyJS'),
  handler: function(direction) {
    alertify.success("Alertify JS: Normal message");
  },
  offset: 100
});

  function alertifyJSAlertLogs() {
    var alertifyJSLogs = document.getElementById('alertifyJS-logs').value;
    console.log(alertifyJSLogs);
  };// end alertifyJSAlertLogs()

  function alertifyJSAlerts() {
    var alertifyJSAlerts = document.getElementById('alertifyJS-alerts').value;
    console.log(alertifyJSAlerts);
  };// end alertifyJSAlertLogs()




/////////////////////////////////////
///             Notyf             ///
/////////////////////////////////////
// Creates an instance for Notyf
var notyf = new Notyf();

var waypoint = new Waypoint({
  element: document.getElementById('waypoint-notyf'),
  handler: function(direction) {
    alertify.log("Notyf");
  },
  offset: 100
});

  function notyfLogs() {
    var notyfLogs = document.getElementById('notyf-logs').value;
    console.log(notyfLogs);
    if (notyfLogs === 'success') {
      notyf.confirm('Your changes have been successfully saved!');
    } else if (notyfLogs === 'error'){
      notyf.alert('You must fill out the form before moving forward');
    } else {
      alert("make a selection");
      return
    }
  };// end notyfLogs()




/////////////////////////////////////
///          SweetAlert 2         ///
/////////////////////////////////////
var waypoint = new Waypoint({
  element: document.getElementById('waypoint-sweetAlert2'),
  handler: function(direction) {
    alertify.log("SweetAlert 2");
  },
  offset: 100
});

  function sweetAlert2Alerts() {
    var sweetAlert2Alerts = document.getElementById('sweetAlert2-alerts').value;
    console.log(sweetAlert2Alerts);
    if (sweetAlert2Alerts === 'basic'){
      swal('Basic Alert');
    } else if (sweetAlert2Alerts === 'success'){
      swal(
          'Success',
          'You clicked the button!',
          'success'
          )
    } else if (sweetAlert2Alerts === 'error'){
      swal(
          'Error',
          'Your imaginary file has been deleted.',
          'error'
        )
    } else if (sweetAlert2Alerts === 'warning'){
      swal(
          'Warning',
          'Your imaginary file has been deleted.',
          'warning'
        )
    } else if (sweetAlert2Alerts === 'info'){
      swal(
          'Info',
          'Your imaginary file has been deleted.',
          'info'
        )
    } else if (sweetAlert2Alerts === 'question'){
      swal(
          'Question',
          'Your imaginary file has been deleted.',
          'question'
        )
    } else if (sweetAlert2Alerts === 'timerClose'){
      swal({
          title: 'Auto close alert!',
          text: 'I will close in 2 seconds.',
          timer: 2000
        }).then(
          function() {},
          // handling the promise rejection
          function(dismiss) {
            if (dismiss === 'timer') {
              console.log('I was closed by the timer')
            }// end if
          }// end function
        )// end .then
    } else if (sweetAlert2Alerts === 'warning2'){
      swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then(function() {
      swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
    } else if (sweetAlert2Alerts === 'chaining'){
      swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          animation: false,
          progressSteps: ['1', '2', '3']
      })
      var steps = [
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
        },
          'Question 2',
          'Question 3'
      ]
      swal.queue(steps).then(function (result) {
        swal.resetDefaults()
        swal({
          title: 'All done!',
          html:
            'Your answers: <pre>' +
              JSON.stringify(result) +
            '</pre>',
          confirmButtonText: 'Lovely!',
          showCancelButton: false
        })
      }, function () {
        swal.resetDefaults()
      })
    } else {
      swal('make a selection');
      return
    };// end if else


  };// end sweetAlert2Alerts()
