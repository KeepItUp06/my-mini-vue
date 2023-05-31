import { h, createTextVNode, getCurrentInstance } from '../../lib/guide-mini-vue.esm.js'
import { Foo } from './Foo.js'

export default {
    name:'App',
    render(){
        const app = h('div', {}, 'App')
        const foo = h(Foo, 
            {}, 
        {
            header: ({age}) => [h('p', {}, 'header' + age), createTextVNode('你好呀 Liuly')], 
            footer: ({age}) => h('p', {}, 'footer' + age)
        }
        )
        return h('div', {}, [app, foo])
    },

    setup(){
        console.log(getCurrentInstance(), 'app');
        return {}
    }
}