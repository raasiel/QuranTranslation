/**
 * Created with IntelliJ IDEA.
 * User: shafqat
 * Date: 6/22/13
 * Time: 4:14 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Directives */
angular.module('quranApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        }}])
