quranApp.controller ('HomeController', function ($scope, navSvc, $routeParams,$http){

    $scope.QuranData = QuranData;

    // Navigate to
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };

    $scope.view = function (translation) {
        console.log ( "from home sending to " + translation.name);
        navSvc.slidePage("/sura/" + translation.name);
    };

    // Navigate back
    $scope.back = function () {
        navSvc.back();
    };

});

quranApp.controller ('SuraController', function ($scope, navSvc, $routeParams,$http){

    $scope.QuranData = QuranData;

    //alert("on sura controller");

    $scope.$on('$routeChangeSuccess', function (ev, current, previous) {
        if ($scope.translationName== null){
            $scope.translationName = current.params.translationName;
            console.log("found translation Name : " + $scope.translationName);
        }
    });

        // Navigate to
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };

    $scope.view = function (suraIndex,suraName) {
        //alert($scope.translationName);
        navSvc.slidePage("/sura/" + $scope.translationName + "/" + suraIndex + "/" +suraName);
    };

    // Navigate back
    $scope.back = function () {
        navSvc.back();
    };

});



quranApp.controller ('AyatController', function ($scope, navSvc, $routeParams,$http){

    $scope.QuranData = QuranData;

    //alert('on ayat controller');

    $scope.$on('$routeChangeSuccess', function (ev, current, previous) {
        //alert('on ayat controller change')
        if ( current.params.suraIndex != null){
        $scope.translationName = current.params.translationName;
        $scope.suraIndex = current.params.suraIndex;
        $scope.suraName = current.params.suraName;

        var filename = QuranData.Translations[$scope.translationName].filename;

            require(["translations/" +filename ], function(util) {
                //This function is called when scripts/helper/util.js is loaded.
                //If util.js calls define(), then this function is not fired until
                //util's dependencies have loaded, and the util argument will hold
                //the module value for "helper/util".

                start = QuranData.Sura[$scope.suraIndex][0];
                length = QuranData.Sura[$scope.suraIndex][1];

                var ayats = Array();
                //var lines = data.split('\n');
                //console.log(JSON.stringify(lines));
                for (i = start;i<start+length;i++){
                    ayats.push(QuranData.lines[i]);
                }

                $scope.ayats = ayats;
                $scope.$apply();

            });
        }
        /*

        var script = document.createElement('script');

        script.onload = function() {

            console.log("script loaded");
            console.log($scope);
            start = QuranData.Sura[$scope.suraIndex][0];
            length = QuranData.Sura[$scope.suraIndex][1];

            var ayats = Array();
            for (i = start;i<start+length;i++){
                ayats.push(QuranData.bnhoque[i]);
            }

            $scope.ayats = ayats;

        };
        */
        //alert(filename);


    });



    // Navigate to
    $scope.slidePage = function (path,type) {
        navSvc.slidePage(path,type);
    };

    $scope.view = function (translationName) {
        //alert(translationName);
    };

    // Navigate back
    $scope.back = function () {
        navSvc.back();
    };

});













