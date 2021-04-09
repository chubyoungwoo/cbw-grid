import { t } from '../locale';

export default {
    methods: {
        t (...args) {
            console.log('t', args);
            return t.apply(this, args);
        }
    }
};
