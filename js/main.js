

var app = angular.module('miniMe', [
  'ngRoute', 'ngMap', 'ngAnimate'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

    // Pages
    .when("/work", { templateUrl: "partials/work.html", controller: "PageCtrl" })
    .when("/dog", { templateUrl: "partials/dog.html", controller: "PageCtrl" })

    .when("/abilities", { templateUrl: "partials/abilities.html", controller: "PageCtrl" })
    .when("/blog", { templateUrl: "partials/blog.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
} ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
    console.log("Page Controller reporting for duty.");
    $scope.pageClass = 'page-effect';
    $scope.title = 'Joshua Kornreich';
    $scope.personal = {
        name: 'Joshua Kornreich',
        email: 'joshua@tier27.com',
        address: '1021 PA Ave E, Warren, PA',
        phone: '(954) 882-3115',
    }

    $scope.languages = [
        { name: 'Python', level: 81, },
        { name: 'MySQL', level: 79, },
        { name: 'Javascript', level: 73, },
        { name: 'PHP', level: 72, },
        { name: 'Perl', level: 57, },
        { name: 'Ruby', level: 49, },
    ]

    $scope.frameworks = [
        { name: 'Django', level: 86, },
        { name: 'jQuery', level: 85, },
        { name: 'AngularJS', level: 78, },
        { name: 'Laravel', level: 77, },
        { name: 'Rails', level: 63, },
        { name: 'Node.js', level: 53, },
    ]

});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 2, category: 'branding', src: "lms.png", description: 'Love My School', url_details: "http://app.lovemyschool.in:9000/" },
          { num: 1, category: 'marketing', src: "courtier.png", description: 'Courtier', url_details: "http://www.courtierwines.com/" },
          { num: 1, category: 'marketing', src: "youstartme.png", description: 'Youstart.me', url_details: "https://www.youstart.me/" },
          { num: 3, category: 'design', src: "esm2.png", description: 'Environmental Marketplace', url_details: "http://esm.development.tier27.com/" },
          { num: 3, category: 'design', src: "skava2.png", description: 'SkavaONE Calculator', url_details: "http://www.tier27.com/portfolio/SkavaONECalculator/" },
          ];
    $scope.images_dog = [
          { num: 1, category: 'branding', src: "daisy5.jpg", description: 'She loves sticks.', url_details: "details.html" },
          { num: 2, category: 'design', src: "daisy7.jpg", description: 'She has like-minded friends.', url_details: "details.html" },
          { num: 3, category: 'photo', src: "daisy15.jpg", description: 'She is innocent.', url_details: "details.html" },
          { num: 5, category: 'design', src: "daisy6.jpg", description: 'She had a friend when she was a puppy.', url_details: "details.html" },
          { num: 6, category: 'photo', src: "daisy2.jpg", description: 'She is most at ease in the snow.', url_details: "details.html" },
          { num: 7, category: 'marketing', src: "daisy9.jpg", description: 'She celebrates Christmas.', url_details: "details.html" },
          { num: 8, category: 'design', src: "daisy10.jpg", description: 'She is patient.', url_details: "details.html"},
          { num: 4, category: 'marketing', src: "daisy8.jpg", description: 'She is tolerant.', url_details: "details.html" },
          { num: 9, category: 'design', src: "daisy14.jpg", description: 'She is extremely tolerant.', url_details: "details.html"},
          ];

});


//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);






