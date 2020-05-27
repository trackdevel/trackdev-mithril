import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../styles/mystyles.scss'
import m from 'mithril';
import Auth from "./controllers/auth";
import PageNotFound from "./views/pages/PageNotFound";
import Home from './views/pages/home';
import Login from './views/pages/login';
import Signup from './views/pages/signup';
import Profile from './views/pages/profile';
import Courses from './views/pages/courses';

Auth.checkActiveSession().finally(initRouting)

function PrivateRoute(Component) {
    return {
        onmatch: function () {
            if (!Auth.isLoggedIn()) m.route.set('/login');
            else return Component;
        }
    }
}

function initRouting() {
    m.route.prefix = '';
    m.route(document.getElementById('content'), '/',
        {
            '/': PrivateRoute(Home),
            '/profile': PrivateRoute(Profile),
            '/courses': PrivateRoute(Courses),
            '/login': {
                onmatch: function () {
                    if (Auth.isLoggedIn()) m.route.set('/');
                    else return Login;
                }
            },
            '/signup': {
                onmatch: function () {
                    if (Auth.isLoggedIn()) m.route.set('/');
                    else return Signup;
                }
            },
            '/:404...': PageNotFound
        }
    )
}




