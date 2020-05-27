import m from 'mithril';
import {ps} from '../../pubsub';

const Toast = {
    oninit: function (vnode) {
        this.removeToast = vnode.attrs.removeToast;
        this.toastId = vnode.attrs.toastId;
        this.message = vnode.attrs.message;
        this.intervalId = setTimeout(this.remove.bind(this), 3000)
    },

    remove: function () {
        clearTimeout(this.intervalId);
        this.removeToast(this.toastId)
    },

    view: function (vnode) {
        let component = this;
        return (
            <div key={vnode.attrs.toastId} className="notification is-warning">
                <button className="delete" onclick={vnode.attrs.removeToast}/>
                {vnode.attrs.message}
            </div>
        )
    }
};

export default Toast;
