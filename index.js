!function(root, name, make) {
  (window.angular || require('angular')).module(name, []).directive(name, make = make())
  typeof module != 'undefined' && module.exports ? module.exports = make : root[name] = make
}(this, 'hoverClass', function() {
  return function() {
    var angular = window.angular || require('angular')

    function listen(scope, element, atts, event, method) {
      element.on(event, function() {
        var raw = atts.hoverClass
        var map = scope.$eval(raw)

        angular.isObject(map) ? angular.forEach(map, function(classes, target) {
          angular.element(target)[method](classes)
        }) : element[method](raw)
      })
    }

    return {
      restrict: 'A',
      link: function (scope, element, atts) {
        listen(scope, element, atts, 'mouseenter', 'addClass')
        listen(scope, element, atts, 'mouseleave', 'removeClass')
      }
    }
  }
});
