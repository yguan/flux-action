/*jslint nomen: true*/
/*global module */

function createPayload(actionType, data) {
    return {
        actionType: actionType,
        data: data
    };
}

function Action(name, dispatcher) {
    this.name = name;
    this.dispatcher = dispatcher;
    this.callbacks = [];
}

Action.prototype = {
    dispatch: function (data) {
        this.dispatcher.dispatch(createPayload(this.name, data));
    },
    register: function (callback) {
        this.callbacks.push(callback);
    }
};

module.exports = Action;