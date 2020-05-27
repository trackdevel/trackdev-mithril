import m from "mithril";
import UserSignup from "../components/user/signup";
import Errors from "../components/errors";
import Header from '../components/header';

const Signup = {
    view: () => m('div', [
        m(Header),
        m(UserSignup, {signupTopic: 'view.signup.request'}),
        m(Errors, { errorTopic: 'error'})
    ])
};

export default Signup;
