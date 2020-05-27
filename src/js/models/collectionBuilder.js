import Api from '../api';
import {ps} from '../pubsub';
import Immutable from 'immutable';
import m from 'mithril';


function CollectionBuilder(Model, name) {

    let instanceId = 0

    const proto = {
        get: function(params) {
            let instance = this
            return Api.get(Model.url, params)
                .then(function (data) {
                    instance.data = data
                    ps.publish(instance.iname + '_updated')
                })

        },
        map: function(f) {
            return this.data.toArray().map(f)

        },
        subscribe: function(topic, f) {
            ps.subscribe(this.iname + '_' + topic, f)
        }
    }

    return function (data) {
        data = data || []
        let instance = Object.create(proto)
        let collection = Immutable.List(data.map((item) => Model(item)))
        Object.defineProperty(instance, 'name', {
            get() {
                return name
            }
        })
        let iname = 'l_' + instanceId++
        Object.defineProperty(instance, 'iname', {
            get() {
                return iname
            }
        })
        Object.defineProperty(instance, 'data', {
            get() {
                return collection
            },
            set(list) {
                collection = Immutable.List(list.map(item => Model(item)))
            }
        })
        Object.defineProperty(instance, 'length', {
            get() {
                return collection.size
            }
        })

        return instance
    }
}

export default CollectionBuilder;
