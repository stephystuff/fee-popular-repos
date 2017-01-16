(function() {
  'use strict';

  angular.module('gh')
    .directive('paneledContent', PaneledContentDirective);

  function PaneledContentDirective() {
    return {
      templateUrl: 'repos/paneled-content.template.html',
      restrict: 'A',
      scope: {
      },
      transclude: true
    };
  }

}());
