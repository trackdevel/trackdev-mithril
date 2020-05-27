import m from 'mithril';
import {ps} from '../../pubsub';
import Toast from "./toast";

const Errors = function (initialVnode) {
    var errors = [];
    var id = 0;


    const component = {
        oninit: function (vnode) {
            ps.subscribe(vnode.attrs.errorTopic, function (msg, payload) {
                if (payload.show) {
                    errors.push({id: id++, data: payload.data});
                    m.redraw();
                }
            });
        },

        remove: function(id) {
            errors = errors.filter((error) => error.id !== id);
            m.redraw();
        },

        getErrors: () => errors.map(error => m(Toast, {
                toastId: error.id,
                removeToast: component.remove,
                message: error.data.message
            }
        )),

        view: function (vnode) {
            return m(".error-container",
                component.getErrors()
            )
        }
    };

    return component;
};


export default Errors;
