/*jslint nomen: true*/
/*global module,require,localStorage,window */

var Action = require('./action');
var Dispatcher = require('flux').Dispatcher;

module.exports = {
    createActions: function (names) {
        var dispatcher = new Dispatcher();
        var actions = {};

        dispatcher.register(function (payload) {
            if (actions.hasOwnProperty(payload.actionType)) {
                actions[payload.actionType].callbacks.forEach(function (callback) {
                    callback.fn.call(callback.scope || this, payload.data);
                });
            }

            // console.log(payload); // You can log all action here.
        });

        names.forEach(function (name) {
            actions[name] = new Action(name, dispatcher);
        });

        return actions;
    }
};