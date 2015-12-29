angular.module('starter.controllers', ['Kp.Factory'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $localStorage, $state, $ionicHistory) {


    $scope.Name = $localStorage.Name;

})

.controller('HomeCtrl', function (KpFactory, $scope, $ionicModal, $timeout, $localStorage, $state, $ionicHistory) {

    debugger;
    // Form data for the login modal

    $scope.loginData = {};

    // Create the login modal that we will use later



    // Triggered in the login modal to close it

    $scope.closeLogin = function () {
        $scope.modal.hide();
    };
    $scope.closeSignup = function () {
        $scope.modal.hide();
    };

    // Open the login modal

    $scope.login = function () {
        $scope.loginData = {};
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {

            $scope.modal = modal;
            $scope.modal.show();
        });
        // $scope.modal.show();
    };

    $scope.signup = function () {
        $scope.loginData = {};
        $ionicModal.fromTemplateUrl('templates/signup.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });


    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        debugger;
        var LoginArray = {

            "UserName": $scope.loginData.username,
            "password": $scope.loginData.password

        };

        alert("First Step");
        KpFactory.getCategory().then(function (response) {

            debugger;
            alert("Final Step");
            alert(JSON.stringify(response.Data));


        });

        alert("firstStep");
        $scope.LoginData = {};

        //KpFactory.getLogin(LoginArray).then(function (response) {

        //    debugger;
        //    alert("SecondStep");
        //    if (response.Data != null) {

        //        $scope.LoginData = response.Data;

        //        $localStorage.Username = $scope.loginData.username;
        //        $localStorage.Password = $scope.loginData.password;

        //        $localStorage.UserId = response.Data[0].UserId;
        //        $localStorage.Email = response.Data[0].Email;
        //        $localStorage.City = response.Data[0].City;
        //        $localStorage.Website = response.Data[0].Website;
        //        $localStorage.Phone = response.Data[0].Phone;
        //        $localStorage.Name = response.Data[0].FirstName + " " + response.Data[0].LastName;
        //        $localStorage.Gender = response.Data[0].Gender;
        //        $localStorage.Photo = response.Data[0].Photo;
        //        $scope.Name = response.Data[0].FirstName + " " + response.Data[0].LastName;


        //        $timeout(function () {
        //            $scope.closeLogin();
        //        }, 100);

        //        $state.go("app.dashbord")
        //    }
        //    else {

        //        alert("Wrong Login Cradentials");

        //    }
        //    // console.log(response);
        //});


    };


    $scope.doSignup = function () {
        debugger;




        var SignupArray = {
            "UserName": $scope.loginData.username,
            "Password": $scope.loginData.password,
            "email": $scope.loginData.email,
            "parentId": "0",
            "FirstName": "",
            "LastName": "",
            "gender": "M",
            "Pin": "12345",
            "birth": "01/01/1990",
            "Zipcode": "",
            "mobile": $scope.loginData.mobile,
            "altemail": $scope.loginData.email,
            "question": "",
            "answer": "",
            "photo": ""
        };


        KpFactory.getSignup(SignupArray).then(function (response) {

            debugger;

            if (response.Data != null) {
                $scope.LoginData = response.Data;

                $timeout(function () {
                    $scope.closeLogin();
                }, 100);

                $state.go("home")
            }
            else {

                alert("Wrong Input");

            }
            // console.log(response);
        });



    };


})




.controller('MyProfileCtrl', function ($scope, $localStorage, $state, $ionicHistory) {

    // alert("my profile");   

    $scope.ProfileData = {};

    $scope.ProfileData.Username = $localStorage.Username;
    $scope.ProfileData.Password = $localStorage.Password;
    $scope.ProfileData.Email = $localStorage.Email;
    $scope.ProfileData.City = $localStorage.City;
    $scope.ProfileData.Website = $localStorage.Website;
    $scope.ProfileData.Phone = $localStorage.Phone;

    $scope.UpdateProfile = function () {

        alert("dd");
        // alert($scope.ProfileData.Username);
        // alert($scope.ProfileData.Password);
        // alert($localStorage.Username);
        // alert($localStorage.Password);


    };

})
.controller('MyStatementCtrl', function ($scope, $state, $ionicHistory) {

    //  alert("my statement");


})
    .controller('MyCardCtrl', function ($scope, $state, $ionicHistory) {

        //  alert("my statement");


    }).directive('flipContainer', function () {
        return {
            restrict: 'C',
            link: function ($scope, $elem, $attrs) {
                $scope.flip = function () {
                    $elem.toggleClass('flip');
                }
            }
        };
    })
.controller('DashbordCtrl', function (KpFactory, $scope, $state, $ionicHistory, $localStorage) {

    alert("DashbordCtrl");

    var StatementArray = {
        "Emailid": $localStorage.Email
    };

    $scope.LoginData = {};

    KpFactory.getStatement(StatementArray).then(function (response) {

        debugger;

        if (response.Data != null) {

            $scope.PointBalance = response.Data[0].Consumeramountbalance;


        }
        else {

            //   alert("Wrong Login Cradentials");
            $scope.PointBalance = "0000";
        }
        // console.log(response);
    });




});


