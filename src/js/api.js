import m from 'mithril';
import Auth from './controllers/auth';

const Api = {Auth};

const API_PREFIX = '/api'

Api.post = (url, data, params) =>
    m.request({
            method: 'POST',
            url: API_PREFIX + url,
            body: data,
            params,
            background: true
        }
    );

Api.get = (url, params) =>
    m.request({
            method: 'GET',
            url: API_PREFIX + url,
            params,
            background: true
        }
    );

export default Api;
