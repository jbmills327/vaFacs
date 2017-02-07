angular.module("MyApp")
    .controller("MainCtrl", mainController);



mainController.$inject = ["$http"];



// vetlaunchfactory
function mainController($http) {

    var main = this;

    main.greeting = "This is a test";

    main.location = [];


    main.locations = function() {
        $http.get('api/locations')
            .then(function(res) {
                console.log("this is the return data", res.data[0].VAFacilityData);
                main.location = res.data[0].VAFacilityData;
                console.log("This is the main.location", main.location);
                // main.country = res.data.res.body;
                main.newArray = [];
                for (prop in main.location) {
                    main.newArray.push({
                        name: main.location[prop].name,
                        address: main.location[prop].address,
                        city: main.location[prop].city,
                        phone: main.location[prop].phone,
                        postal_code: main.location[prop].postal_code,
                        url: main.location[prop].url,
                        state: main.location[prop].state,
                        division: main.location[prop].division

                    })
                }
                console.log(main.newArray);
            });
    }
    main.locations();

    main.backToTop = function() {
        window.scrollTo(0, 0)
    }

}
