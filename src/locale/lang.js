import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.beegridtable !== 'undefined') {
            if (!('langs' in window.beegridtable)) {
                window.beegridtable.langs = {};
            }
            window.beegridtable.langs[lang.i.locale] = lang;
        }
    }
}

