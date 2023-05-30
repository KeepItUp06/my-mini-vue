import { h } from '../../lib/guide-mini-vue.esm.js'
import { Foo } from './Foo.js'

window.self = null

export const App = {
    name:'App',
    render(){

        window.self = this

        // return h('div',{
        //     id: 'root',
        //     class: ['red', 'blue'],
        //     onClick(e){
        //         console.log(e)
        //     },
        //     onMousedown(e){
        //         console.log(e);
        //     } 
        // }, 
        // [h('div', {}, 'hi,' + this.msg), h(Foo, {count:1})]
        // [h('p',{class: 'green'}, '我是p1'),h('p',{class: 'orange'}, '我是p2')]
        // )
        return h('div', {}, [h('div', {}, 'App'), h(Foo, {
            onAdd(a,b){
                console.log('onAdd', a, b);
            },
            onAddFoo(a, b){
                console.log('onAddFoo');
            }
        })])

    },

    setup(){

        return{
            msg:'Liuly'
        }
    }
}