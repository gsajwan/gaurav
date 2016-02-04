/*! Tiny Pub/Sub - v0.7.0 - 2016-02-03
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2016 "Cowboy" Ben Alman; Licensed MIT */
(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));