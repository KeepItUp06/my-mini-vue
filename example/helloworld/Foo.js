import { h, renderSlots, getCurrentInstance } from '../../lib/guide-mini-vue.esm.js'

export const Foo = {
    name:'Foo',
    setup() {
        console.log(getCurrentInstance(), 'foo');
        return {}
    },

    render() {
        const foo = h('p', {}, 'foo')

        //Foo .vnode .children
        const age = 18
        return h('div', {}, [
            renderSlots(this.$slots, 'header', {age}),
            foo, 
            renderSlots(this.$slots, 'footer', {age})])
    }
}