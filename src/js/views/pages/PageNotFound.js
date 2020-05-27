import m from 'mithril';
import Header from '../components/header';

const PageNotFound = {
    view: function () {
        return m("div",
            [
                m(Header),
                m(".card.mx-auto", {"style": {"max-width": "30rem", "margin": "1rem"}},
                    [
                        m("span.card-header",
                            "Page not found"
                        )]
                )
            ]
        )
    }
};


export default PageNotFound;
