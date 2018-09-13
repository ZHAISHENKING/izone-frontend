import axios from "axios";
import qs from 'qs';
import baseURL from './configUrl.js';

function baseRequest(method, path, params, data, type) {
    method = method.toUpperCase() || 'GET';
    let url = '';
    let paramsobj = { params: params };
    if (type === 'msg') {
        url = baseURL.onbaseURL;
    } else {
        url = baseURL.baseURL;
    }
    axios.defaults.baseURL = url;
    if (method === 'POST') {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        return axios.post(path, qs.stringify(data));
    } else if (method === 'GET') {
        return axios.get(path, paramsobj);
    } else {
        return axios.delete(path, qs.stringify(data));
    }
}


export let get_category = function get_category(params){
    return baseRequest("GET", '/category/all/', params, '');
};

export let get_all_video = function get_all_video(params){
    return baseRequest("GET", '/video/all/', params, '');
};

export let get_all_img = function get_all_img(params){
    return baseRequest("GET", '/image/all/', params, '');
};

export let get_img = function get_all_img(params){
    return baseRequest("GET", '/image/'+params.id, params, '');
};