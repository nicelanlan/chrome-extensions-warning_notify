function Notifier() {}

    // Returns "true" if this browser supports notifications.
    Notifier.prototype.HasSupport = function() {
      if (window.webkitNotifications) {
        return true;
      } else {
        return false;
      }
    }

    // Request permission for this page to send notifications. If allowed,
    // calls function "cb" with true.
    Notifier.prototype.RequestPermission = function(cb) {
      window.webkitNotifications.requestPermission(function() {
        if (cb) { cb(window.webkitNotifications.checkPermission() == 0); }
      });
    }

    // Popup a notification with icon, title, and body. Returns false if
    // permission was not granted.
    Notifier.prototype.Notify = function(icon, title, body) {
      if (window.webkitNotifications.checkPermission() == 0) {
        var popup = window.webkitNotifications.createNotification(
        icon, title, body);
        popup.show();

        return true;
      } else {

      }

      return false;
    }

    function getNotification() {
      var notifier = new Notifier();
      if(!notifier.Notify("", "Notifier", "Hello Desktop!")) {
        notifier.RequestPermission();
        notifier.Notify("", "Notifier", "Hello Desktop!")
      }
    }

    var timer;
    function startWatch() {
      timer = setInterval(getKpiValue, 6000);
    }

    function watchKpiValue() {
      var kpiValue = getKpiValue();
    }
 //&& xmlHttpRequest.status==200
    function getKpiValue() {
      // var xmlHttpRequest = new XMLHttpRequest();
      // xmlHttpRequest.onreadystatechange = function() {
      //   if(xmlHttpRequest.readyState == 4) {
      //     var kpiValue = xmlHttpRequest.responseText;
      //     if(kpiValue >= 100) {
      //       getNotification();
      //       clearInterval(timer);
      //     }
      //   }
      // }
      // xmlHttpRequest.open("POST", "http://localhost:9000/hello/getKpiValue", true);
      // xmlHttpRequest.send();
      return 123;
    } 

    document.addEventListener('DOMContentLoaded', startWatch);