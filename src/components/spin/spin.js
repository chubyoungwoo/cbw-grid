import Vue from 'vue';
import Spin from './spin.vue';

import { transferIndex, transferIncrease } from '../../utils/transfer-queue';

function handleGetIndex() {
    transferIncrease();
    return transferIndex;
}

let tIndex = handleGetIndex();

Spin.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {}),
        render(h) {
            let vnode = '';
            if (this.render) {
                vnode = h(
                    Spin,
                    {
                        props: {
                            fix: true,
                            fullscreen: true
                        }
                    },
                    [this.render(h)]
                );
            } else {
                vnode = h(Spin, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }

            let baseZIndex = 2010;
            if (this.$BEETABLE) {
                if (this.$BEETABLE.zIndex) {
                    baseZIndex += this.$BEETABLE.zIndex;
                }
            }

            return h(
                'div',
                {
                    class: 'bee-spin-fullscreen bee-spin-fullscreen-wrapper',
                    style: {
                        'z-index': baseZIndex + tIndex
                    }
                },
                [vnode]
            );
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const spin = Instance.$children[0];

    return {
        show() {
            spin.visible = true;
            tIndex = handleGetIndex();
        },
        remove(cb) {
            spin.visible = false;
            setTimeout(function() {
                spin.$parent.$destroy();
                if (
                    document.getElementsByClassName(
                        'bee-spin-fullscreen'
                    )[0] !== undefined
                ) {
                    document.body.removeChild(
                        document.getElementsByClassName(
                            'bee-spin-fullscreen'
                        )[0]
                    );
                }
                cb();
            }, 500);
        },
        component: spin
    };
};

export default Spin;
