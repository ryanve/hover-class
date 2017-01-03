typeof document == 'undefined' ?
  require('open')('index.html') :
angular.module('test', ['hoverClass']).controller('test', ['$timeout', '$scope', function($timeout, $scope) {

  var tests = {
    area: function() {
      $(this).mouseenter()
      if (!$(this).hasClass('area--activated')) throw new Error('Fail: area')
      $(this).mouseleave()
      if ($(this).hasClass('area--activated')) throw new Error('Fail: area')
    },
    target: function() {
      $(this).mouseenter()
      if (!$('.target--activated').length) throw new Error('Fail: target')
      $(this).mouseleave()
      if ($('.target--activated').length) throw new Error('Fail: target')
    }
  }

  function tester(name) {
    var test = tests[name].bind(this)

    function apply() {
      $scope.$apply(test)
    }

    $timeout(apply).then(function() {
        $timeout(apply).then(function() {
          console.log('Test Passed', name)
        })
    })
  }

  $('[hover-class="area--activated"]').each(function() {
    tester.call(this, 'area')
  })

  $('[hover-class^="{"').each(function() {
    tester.call(this, 'target')
  })

}]);
