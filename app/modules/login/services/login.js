'use strict';

angular.module('login')
  .factory('LoginFactory', function ($scope, $state) {
    var factory = {};

    factory.login = function (id, username, password) {
        this.id = id
        this.username = username;
        this.password = password;

        this.fromServer = function (user) {
            this.id = user.ID;
            this.username = user.Username;
            this.password = user.Password;

            return this;
        };

        this.toServer = function () {
            var user = {};

            user.ID = this.id;
            user.Username = this.username;
            user.Password = this.password;

            return user;
        };
    };

    factory.SendUser = function (user) {

    };

    factory.GetUser = function (user) {

    };

    factory.UpdateUser = function (user) {

    };

    factory.DeleteUser = function (user) {

    };

    return factory;
  });
