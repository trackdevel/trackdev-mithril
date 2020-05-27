import m from 'mithril'

const UserProfile = function () {
    return {
        view: function (vnode) {
            return (
                <form className="columns">
                    <div className="is-four-fifths is-offset-one-fifth">
                        <div className="field">
                            <label className="label">Username</label>
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="username" placeholder="Email"
                                       value={vnode.attrs.user.get('username')}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"/>
                            </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"/>
                            </span>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email"
                                       value={vnode.attrs.user.get('email')}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"/>
                            </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"/>
                            </span>
                            </p>
                        </div>
                        <label className="label">Roles</label>
                        <div className="select">
                            <select>
                                {vnode.attrs.user.get('roles').map((role) => (<option>{role}</option>))}
                            </select>
                        </div>
                    </div>
                </form>
            )
        }
    };
}

export default UserProfile;
