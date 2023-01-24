"use strict";
function collections_home_url() {
    var url = document.location.href;
    url = decodeURIComponent(url.substr(url.lastIndexOf('/text')));
    let new_url;
    switch (url) {
        case '/text?f[subcollection_ssi][]=lh&match=one&search_field=Alt':
            new_url = '/lh';
            break;
        case '/text?f[subcollection_ssi][]=sks&match=one&search_field=Alt':
            new_url = '/sks';
            break;
        case '/text?f[subcollection_ssi][]=lhv&match=one&search_field=Alt':
            new_url = '/lhv';
            break;
        case '/text?f[subcollection_ssi][]=pmm&match=one&search_field=Alt':
            new_url = '/pmm';
            break;
        case '/text?f[subcollection_ssi][]=adl&match=one&search_field=Alt':
            new_url = '/adl';
            break;
        case '/text?f[subcollection_ssi][]=gv&match=one&search_field=Alt':
            new_url = '/gv';
            break;
        case '/text?f[subcollection_ssi][]=tfs&match=one&search_field=Alt':
            new_url = '/tfs';
            break;
        case '/text?f[subcollection_ssi][]=letters&match=one&search_field=Alt':
            new_url = '/letters';
            break;
        default:
            new_url = '';
    }
    if(new_url !== ''){
        history.replaceState(url,null,new_url);
    }
}

window.addEventListener('load', collections_home_url, false);
