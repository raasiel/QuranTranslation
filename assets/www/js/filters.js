/**
 * Created with IntelliJ IDEA.
 * User: shafqat
 * Date: 6/22/13
 * Time: 4:14 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Filters */
angular.module('quranApp.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);
