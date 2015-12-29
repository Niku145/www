angular.module('Kp.Factory',[])
        .factory('KpFactory', function ($localStorage, $rootScope, $http, $cordovaOauth, $q) {

          //  alert("dd");
            returnData = {};
            returnData.API_URL = function () {
                //return "http://zappzi.com.hostinguk.co.uk/api/Services/";

                return "http://kpmobileservices.kontactpoints.com/api/Services/";
            }                     

            returnData.getLogin = function (LoginArray) {                              
                alert("ThirdStep new");
                //document.domain = 'www.zappzi.kontactpoints.com';
                var URL = this.API_URL() + "Login";
                alert(URL);
                var FetchedData = $http.post(URL,LoginArray).then(function (result) {
                    debugger;
                    //  console.log(JSON.stringify(result));
                    alert("Success");
                    return result.data;
                }, function (err) {
                    debugger;
                    alert("Error new");
                    alert(JSON.stringify(err));
                  //  console.log("error returned");
                   // console.log(JSON.stringify(err));
                })
                return $q.when(FetchedData);
            }

            returnData.getCategory = function () {
                //document.domain = 'www.zappzi.kontactpoints.com';
                var URL = "http://217.194.223.35/Zappzi/api/Services/GetCategory";
                alert(URL);

                var FetchedData = $http.get(URL).then(function (result) {

                    alert("Success");
                    console.log(JSON.stringify(result));
                    return result.data;

                }, function (err) {
                    alert("Error");
                    alert(JSON.stringify(err))
                    console.log("error returned");
                    console.log(JSON.stringify(err));
                })
                return $q.when(FetchedData);
            }

            returnData.getSignup = function (SignupArray) {
                debugger;
                //document.domain = 'www.zappzi.kontactpoints.com';
                var URL = this.API_URL() + "Registration";
                var FetchedData = $http.post(URL, SignupArray).then(function (result) {
                    debugger;
                    console.log(JSON.stringify(result));
                    return result.data;
                }, function (err) {
                    debugger;
                    console.log("error returned");
                    console.log(JSON.stringify(err));
                })
                return $q.when(FetchedData);
            }

            returnData.getStatement = function (StatementArray) {
                debugger;
                //document.domain = 'www.zappzi.kontactpoints.com';
                var URL = this.API_URL() + "Verify_Consumer";
                var FetchedData = $http.post(URL, StatementArray).then(function (result) {
                    debugger;
                    console.log(JSON.stringify(result));
                    return result.data;
                }, function (err) {
                    debugger;
                    console.log("error returned");
                    console.log(JSON.stringify(err));
                })
                return $q.when(FetchedData);
            }
           
            return returnData;
        })