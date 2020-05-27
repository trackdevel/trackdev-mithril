import m from 'mithril';
import ps from 'pubsub-js';

const UserSignup = function (vnode) {
    var username = '';
    var password = '';
    var email = '';
    var signupTopic;

    function setUsername(value) {
        username = value
    }

    function setPassword(value) {
        password = value
    }

    function setEmail(value) {
        email = value
    }


    function canSubmit() {
        return username !== '' && password !== '' && email !== '';
    }

    function signup() {
        ps.publish(signupTopic, {username, email, password});
    }

    return {
        oninit: (vnode) => signupTopic = vnode.attrs.signupTopic,

        view: function (vnode) {
            return m(".card.mx-auto[id='loginbox']", {"style": {"max-width": "30rem", "margin": "1rem"}},
                [
                    m("span.card-header",
                        "Sign in"
                    ),
                    m("div.card-body",
                        [
                            m("form.form-signin",
                                [
                                    m("div.form-label-group",
                                        [
                                            m("input.form-control[autofocus][id='inputUsername'][placeholder='Username'][required]", {
                                                oninput: function (e) {
                                                    setUsername(e.target.value)
                                                },
                                                value: username,
                                            }),
                                            m("label[for='inputUsername']",
                                                "Username"
                                            )
                                        ]
                                    ),
                                    m("div.form-label-group",
                                        [
                                            m("input.form-control[autofocus][id='inputEmail'][placeholder='Email'][required][type=email]", {
                                                oninput: function (e) {
                                                    setEmail(e.target.value)
                                                },
                                                value: email,
                                            }),
                                            m("label[for='inputEmail']",
                                                "Email"
                                            )
                                        ]
                                    ),
                                    m("div.form-label-group",
                                        [
                                            m("input.form-control[id='inputPassword'][placeholder='Password'][required][type='password']", {
                                                oninput: function (e) {
                                                    setPassword(e.target.value)
                                                },
                                                value: password,
                                            }),
                                            m("label[for='inputPassword']",
                                                "Password"
                                            )
                                        ]
                                    ),
                                    m("div.custom-control.custom-checkbox.mb-3",
                                        [
                                            m("input.custom-control-input[id='customCheck1'][type='checkbox']"),
                                            m("label.custom-control-label[for='customCheck1']",
                                                "Remember password"
                                            )
                                        ]
                                    ),
                                    m("button.btn.btn-lg.btn-primary.btn-block.text-uppercase[type='button']", {
                                            disabled: !canSubmit(),
                                            onclick: signup
                                        },
                                        "Sign up"
                                    )
                                ]
                            ),
                            m(m.route.Link, {href: "/login"}, "Log in")
                        ]
                    )
                ]
            )
        }
    }
};


export default UserSignup;
