! function() {
var analytics = window.analytics = window.analytics || [];
if (!analytics.initialize)
    if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      window.analytics.methods = ['identify', 'track', 'trackLink', 'trackForm', 'trackClick', 'trackSubmit', 'page', 'pageview', 'ab', 'alias', 'ready', 'group', 'on', 'once', 'off'];
      window.analytics.factory = function(method) {
        return function() {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          window.analytics.push(args);
          return window.analytics;
        };
      };
      for (var i = 0; i < window.analytics.methods.length; i++) {
        var method = window.analytics.methods[i];
        window.analytics[method] = window.analytics.factory(method);
      }

      var staticUrl = "https://qastatic.hopscotch.in/sass-dev";
      var currentHost = window.location.hostname;
      if (currentHost === 'www.hopscotch.in' || currentHost === 'beta.hopscotch.in' ||
          currentHost === 'hopscotch.in') {
          staticUrl = "https://static.hopscotch.in/sass-prod";
      }

      // Load analytics async
      analytics.load = function(callback) {
        if (document.getElementById('analytics-js')) return;

        // We make a copy if our dummy object
        window.a = window.analytics;
        var script = document.createElement('script');
        script.async = true;
        script.id = 'analytics-js';
        script.type = 'text/javascript';
        script.src = staticUrl + "/analytics.min.js";
        script.addEventListener('load', function(e) {
          if (typeof callback === 'function') {
            callback(e);
          }
        }, false);
        var first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(script, first);
      };
      analytics.SNIPPET_VERSION = "4.1.0";

      analytics.load(function(){
          // On load init our integrations
          var xhr = new XMLHttpRequest();

          xhr.open('GET', staticUrl + "/config.json");
          xhr.onload = function() {
              if (xhr.status === 200) {
                let config;
                try {
                  config = JSON.parse(xhr.responseText);
                  config = JSON.parse(atob(config.data));
                } catch (error) {
                  console.log('Json parsing failed');
                  return;
                }
                window.analytics.initialize(config);
                // Now copy whatever we applied to our dummy object to the real analytics
                while (window.a.length > 0) {
                  var item = window.a.shift();
                  var method = item.shift();
                  if (window.analytics[method]) window.analytics[method].apply(window.analytics, item);
                }
                window.analytics.page();
              } else {
                  console.log('Request failed.  Returned status of ' + xhr.status);
              }
          };
          xhr.send();
      });
  }
}();


// ADD this script to index.html to load analytics.min.js in your project
