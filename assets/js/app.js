(function () {

    'use strict';

    var app = angular.module(
        'app',
        []
    );

    app.run(['$window', '$rootScope', '$timeout', '$location', '$http', function ($window, $rootScope, $timeout, $location, $http) {

        $rootScope.strToTime = function (timestamp, return_type = '') {

            if (timestamp == '') {

                timestamp = $rootScope.getUnixtime();

            }

            var objDate = new Date(
                new Date(timestamp * 1000).toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})
            );

            var day = objDate.getDate();
            if ((objDate.getDate()).toString().length == 1) {
                day = '0' + '' + objDate.getDate();
            }

            var month = objDate.getMonth() + 1;
            if ((objDate.getMonth() + 1).toString().length == 1) {
                month = '0' + '' + (objDate.getMonth() + 1);
            }

            var date = day + '/' + month + '/' + objDate.getFullYear();

            var hour = objDate.getHours();
            if ((objDate.getHours()).toString().length == 1) {
                hour = '0' + '' + objDate.getHours();
            }

            var minutes = objDate.getMinutes();
            if ((objDate.getMinutes()).toString().length == 1) {
                minutes = '0' + '' + objDate.getMinutes();
            }

            var seconds = objDate.getSeconds();
            if ((objDate.getSeconds()).toString().length == 1) {
                seconds = '0' + '' + objDate.getSeconds();
            }

            if (return_type == 'date') {

                return date;

            } else if (return_type == 'time') {

                return hour + ':' + minutes + ':' + seconds;

            } else if (return_type == 'hours') {

                return hour + ':' + minutes;

            } else {

                return date + ' ' + hour + ':' + minutes + ':' + seconds;

            }

        };

        /*
        * @field date accept 00/00/0000
        */
        $rootScope.getUnixtime = function (date = '') {

            if (date) {

                if (date.match(/\//g)) {
                    var date = date.replace(/\//g, '-');
                }

                var array_date = date.split('-');

                // Remove hour
                var year = array_date[2];

                if (year.match(/\s/g)) {

                    year = year.split(' ');


                    year = year[0];

                }

                var objDate = new Date(new Date(year + '-' + array_date[1] + '-' + array_date[0]).toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));

            } else {

                var objDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));

            }

            //objDate.setTime(objDate.getTime() + objDate.getTimezoneOffset() * 60 * 1000);

            return Math.floor(objDate / 1000);

        };


        $rootScope.getNews = function () {

            $rootScope.loading_application = true;

            $http({
                method: 'get',
                url: 'https://veja.abril.com.br/wp-json/wp/v2/posts?page=' + $rootScope.data_news_page_number + '&per_page=' + $rootScope.data_news_per_page,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (response) {

                $rootScope.loading_application = false;

                if ($rootScope.data_news_page_number === 1) {

                    $rootScope.data_news = response.data;

                } else {

                    $rootScope.data_news = $rootScope.data_news.concat(response.data);

                }

                $rootScope.data_news_page_number += 1;

            }, function (error) {

                $rootScope.loading_application = false;

                alert('Ocorreu um erro ao obter as notícias.');

                console.log(error);

            });

        };

        $rootScope.data_news_page_number = 1;
        $rootScope.data_news_per_page = 10;

        $rootScope.getNews();

    }]);

})();