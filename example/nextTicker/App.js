import { h, ref, nextTick, getCurrentInstance } from '../../lib/guide-mini-vue.esm.js'

export default {
    name: 'App',

    setup() {
        const count = ref(1)
        const instance = getCurrentInstance()

        const onClick = () => {
            for(let i=0;i<100;i++){
                count.value = i
            }

            nextTick(() => {
                console.log(instance);
            })
        }



        return {
            count,
            onClick
        }
    },

    render() {

        const button = h('button', {onClick : this.onClick}, 'update')
        const p = h('div', {}, 'count: ' + this.count)

        return h('div',{},[button, p])
    }
}