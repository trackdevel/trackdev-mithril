import m from 'mithril'

const UserLogin = function () {
    let username = '';
    let password = '';

    function setUsername(value) {
        username = value
    }

    function setPassword(value) {
        password = value
    }

    function canSubmit() {
        return username !== '' && password !== ''
    }

    return {
        view: function (vnode) {
            return (
                <div class="columns is-mobile is-centered">
                    <div class="column is-half card">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" oninput={(e) => setUsername(e.target.value)}/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"/>
                            </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"/>
                            </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" oninput={(e) => setPassword(e.target.value)}/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"/>
                            </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success" onclick={() => vnode.attrs.doLogin(username, password)}>
                                    Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default UserLogin;
