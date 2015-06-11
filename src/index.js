/*jslint nomen: true*/
/*global module,require,localStorage,window */

var Action = require('./action');
var Dispatcher = require('flux').Dispatcher;

module.exports = {
    createActions: function (config) {
        var dispatcher = new Dispatcher();
        var group = config.group || '';
        var actions = {
            group: group
        };

        dispatcher.register(function (payload) {
            if (actions.hasOwnProperty(payload.actionType)) {
                actions[payload.actionType].callbacks.forEach(function (callback) {
                    callback.fn.call(callback.scope || this, payload.data);
                });
            }

            if(config.logger) {
                config.logger.log({
                    payload: payload,
                    group: group
                }); // You can log all action here.
            }
            // console.log(payload); // You can log all action here.
        });

        config.names.forEach(function (name) {
            actions[name] = new Action(name, dispatcher);
        });

        return actions;
    }
};