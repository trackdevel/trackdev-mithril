import m from 'mithril';
import {ps} from '../../pubsub';
import Auth from '../../controllers/auth';

function Header() {
    function logout() {
        Auth.logout().then(() => m.route.set('/'))
    }

    return {
        oninit: function (vnode) {
            ps.subscribe('localstorage.set.user', (user) => {
                m.redraw();
            });
        },

        view: function () {
            let coursesLink = null;
            let rightButtons = null;
            if (Auth.isLoggedIn()) {
                coursesLink = (<m.route.Link className="navbar-item" href={"/courses"}>Courses</m.route.Link>)
                rightButtons = [
                    <m.route.Link className="navbar-item" href={"/profile"}>{Auth.getUsername()}</m.route.Link>,
                    <div class="navbar-item">
                        <div className="buttons">
                            <div className="button is-light" onclick={logout}>Logout</div>
                        </div>
                    </div>
                ]
            }

            return (
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <m.route.Link className="navbar-item" href="/">
                            <img src="images/logo.png" width="112" height="28"/>
                        </m.route.Link>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-start">
                            {coursesLink}
                        </div>

                        <div className="navbar-end">
                            {rightButtons}
                        </div>
                    </div>
                </nav>
            )
        }
    }
};

export default Header;
