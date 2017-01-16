(function() {
  'use strict';

  angular.module('gh')
    .filter('popularity', PopularityFilter);

  function PopularityFilter() {

    return function sortByPopularity(input) {
      var popularity = input.map(function getPopularity(repo) {
        repo.popularity = input.stargazers_count + ((2 * repo.forks_count) + (repo.open_issues_count/2));
        return repo;
      });

      popularity = popularity.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return -1;
        } else {
          return 1;
        }
      });
      return popularity;
    };
  }

}());
