import m from "mithril";
import Auth from '../../controllers/auth';
import BasePage from './base';
import UserLogin from "../components/user/login";

const doLogin = (username, password) => Auth.login({username, password}).then(() => m.route.set('/'));

export default () => BasePage(UserLogin, {doLogin})
