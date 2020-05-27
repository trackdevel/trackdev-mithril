import Api from '../api';
import {ps} from '../pubsub';
import Immutable from 'immutable';
import m from 'mithril';


function ModelBuilder(url, name, definition) {
    let Model = new Immutable.Record(definition)

    let instanceId = 0

    const proto = {
        getById: function(id, params) {
            let instance = this
            return Api.get(url + '/' + id, params)
                .then(function (data) {
                    instance.data = data
                    ps.publish(this.iname + '_updated')
                })

        },
        create: function(data, params) {
            let instance = this
            return Api.post(url, data)
                .then(function (data) {
                    instance.data = data
                    ps.publish(instance.iname + '_updated')
                })

        },
        set: function(data) {
            this.data = data
            ps.publish(this.iname + '_updated')
        },
        delete: function(id) {
            return Api.delete(url + '/' + id);
        },
        subscribe(topic, f) {
            ps.subscribe(this.iname + '_' + topic, f)
        },
        get(key) { return this.data.get(key); }
    }

    function Constructor(data) {
        let instance = Object.create(proto)
        let record = Model(data)
        Object.defineProperty(instance, 'name', {
            get() {
                return name
            }
        })
        let iname = 'm_' + instanceId++
        Object.defineProperty(instance, 'iname', {
            get() {
                return iname
            }
        })
        Object.defineProperty(instance, 'data', {
            get() {
                return record
            },
            set(obj) {
                record = record.merge(obj)
            }
        })
        return instance
    }

    Object.defineProperty(Constructor, 'url', {
        get() {
            return url
        }
    })

    return Constructor

}

export default ModelBuilder;
