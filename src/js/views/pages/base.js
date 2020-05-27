import m from 'mithril'
import Header from '../components/header';
import Errors from '../components/errors';

function BasePage(Component, options) {
    return {
        view: () => (
            <div>
                <Header/>
                <div class="main-content">
                    {
                        Component != null
                            ? <Component {...options}/>
                            : (null)
                    }
                </div>
                <Errors errorTopic='error'/>
            </div>
        )
    }
}

export default BasePage;
