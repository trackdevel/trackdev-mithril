import PS from 'pubsub-js';

export function psTransform(topicIn, topicOut) {
    ps.subscribe(topicIn, (msg, data) => ps.publish(topicOut, data));
}
export var ps = PS;

let id = 0;

const psProto = {

    subscribe: function(topic, f) {
        ps.subscribe(this.id + '.' + topic, f)
    },

    publish: function(topic, data) {
        ps.publish(this.id + '.' + topic, data)
    }

}

export function PSInstance() {

    let internalId = 'psi_' + id++;

    let o = Object.create(psProto);

    Object.defineProperty(o, 'id', {
        get: () => internalId
    });

    return o;
}
