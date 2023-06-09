import { h, ref } from '../../lib/guide-mini-vue.esm.js'
import Child from './Child.js'

export default {
    name: 'App',
    setup() {
        const msg = ref('123')
        const count = ref(1)

        window.msg = msg

        const changeChildProps = () => {
            msg.value = '456'
        }

        const changCount = () => {
            count.value++
        }

        return {
            msg,
            count,
            changCount,
            changeChildProps
        }
    },

    render() {
        return h('div', {}, [
            h('div', {}, '你好'),
            h(
                'button',
                {
                    onClick: this.changeChildProps
                },
                'change child props'
            ),
            h(Child, {
                msg: this.msg
            }),
            h(
                'button',
                {
                    onClick: this.changCount
                },
                'change self count'
            ),
            h('p', {}, 'count: ' + this.count)
        ])
    }
}