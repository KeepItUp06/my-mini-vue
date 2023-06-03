import { ref, h } from '../../lib/guide-mini-vue.esm.js'

//1.左侧对比 (ab)c -> (ab)de
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C')
// ]

// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'D'}, 'D'),
//     h('p', {key:'E'}, 'E')
// ]

//2.右侧对比 a(bc) -> de(bc)
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C')
// ]

// const nextChildren = [
//     h('p', {key:'D'}, 'D'),
//     h('p', {key:'E'}, 'E'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C')
// ]

//3.a新的比旧的长 (ab) -> (ab)c
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
// ]

// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C'),
//     h('p', {key:'D'}, 'D')
// ]

//3.b 新的比旧的长 (ab) -> c(ab)
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
// ]
// const nextChildren = [
//     h('p', {key:'D'}, 'D'),
//     h('p', {key:'C'}, 'C'),
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
// ]

//4.a 旧的比新的长
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C'),
// ]
// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
// ]

//4.b 旧的比新的长
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C'),

// ]
// const nextChildren = [
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C'}, 'C'),
// ]

//5.a.1  ab(cd)fg -> ab(ec)fg
// const prevChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'C', id:'c-prev'}, 'C'),
//     h('p', {key:'D'}, 'D'),
//     h('p', {key:'F'}, 'F'),
//     h('p', {key:'G'}, 'G'),

// ]
// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'E'}, 'E'),
//     h('p', {key:'C', id:'c-next'}, 'C'),
//     h('p', {key:'F'}, 'F'),
//     h('p', {key:'G'}, 'G'),
// ]

//5.a.2  ab(ced)fg -> ab(ec)fg
// const prevChildren = [
//     h('p', { key: 'A' }, 'A'),
//     h('p', { key: 'B' }, 'B'),
//     h('p', { key: 'C', id: 'c-prev' }, 'C'),
//     h('p', { key: 'E' }, 'E'),
//     h('p', { key: 'D' }, 'D'),
//     h('p', { key: 'F' }, 'F'),
//     h('p', { key: 'G' }, 'G'),
// ]
// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'E'}, 'E'),
//     h('p', {key:'C', id:'c-next'}, 'C'),
//     h('p', {key:'F'}, 'F'),
//     h('p', {key:'G'}, 'G'),
// ]

//5.a.2  ab(cde)fg -> ab(ecd)fg
// const prevChildren = [
//     h('p', { key: 'A' }, 'A'),
//     h('p', { key: 'B' }, 'B'),
//     h('p', { key: 'C', id: 'c-prev' }, 'C'),
//     h('p', { key: 'D' }, 'D'),
//     h('p', { key: 'E' }, 'E'),
//     h('p', { key: 'F' }, 'F'),
//     h('p', { key: 'G' }, 'G'),
// ]
// const nextChildren = [
//     h('p', {key:'A'}, 'A'),
//     h('p', {key:'B'}, 'B'),
//     h('p', {key:'E'}, 'E'),
//     h('p', {key:'C', id:'c-next'}, 'C'),
//     h('p', { key: 'D' }, 'D'),
//     h('p', {key:'F'}, 'F'),
//     h('p', {key:'G'}, 'G'),
// ]

//5.a.2  ab(ce)fg -> ab(ecd)fg
// const prevChildren = [
//         h('p', { key: 'A' }, 'A'),
//         h('p', { key: 'B' }, 'B'),
//         h('p', { key: 'C', id: 'c-prev' }, 'C'),
//         h('p', { key: 'E' }, 'E'),
//         h('p', { key: 'F' }, 'F'),
//         h('p', { key: 'G' }, 'G'),
//     ]
//     const nextChildren = [
//         h('p', {key:'A'}, 'A'),
//         h('p', {key:'B'}, 'B'),
//         h('p', {key:'E'}, 'E'),
//         h('p', {key:'C', id:'c-next'}, 'C'),
//         h('p', { key: 'D' }, 'D'),
//         h('p', {key:'F'}, 'F'),
//         h('p', {key:'G'}, 'G'),
//     ]


//5.a.2  ab(cdez)fg -> ab(dcye)fg
// const prevChildren = [
//         h('p', { key: 'A' }, 'A'),
//         h('p', { key: 'B' }, 'B'),
//         h('p', { key: 'C' }, 'C'),
//         h('p', { key: 'D' }, 'D'),
//         h('p', { key: 'E' }, 'E'),
//         h('p', { key: 'Z' }, 'Z'),
//         h('p', { key: 'F' }, 'F'),
//         h('p', { key: 'G' }, 'G'),
//     ]
//     const nextChildren = [
//         h('p', {key:'A'}, 'A'),
//         h('p', {key:'B'}, 'B'),
//         h('p', {key:'D'}, 'D'),
//         h('p', {key:'C'}, 'C'),
//         h('p', {key:'Y'}, 'Y'),
//         h('p', {key:'E'}, 'E'),
//         h('p', {key:'F'}, 'F'),
//         h('p', {key:'G'}, 'G'),
//     ]

//fix
const prevChildren = [
        h('p', { key: 'A' }, 'A'),
        h('p', {}, 'C'),
        h('p', { key: 'B' }, 'B'),
        h('p', { key: 'D' }, 'D'),

    ]
    const nextChildren = [
        h('p', {key:'A'}, 'A'),
        h('p', {key:'B'}, 'B'),
        h('p', {}, 'C'),
        h('p', {key:'D'}, 'D'),
    ]


export default {
    name: 'ArrayToArray',
    setup() {
        const isChange = ref(false)
        window.isChange = isChange

        return {
            isChange
        }
    },

    render() {

        const self = this

        return self.isChange === true ? h('div', {}, nextChildren) : h('div', {}, prevChildren)
    }
}