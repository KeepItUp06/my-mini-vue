export const EMPTY_OBJ = {}

export const extend = Object.assign

export const isObject = (val) => (val !== null && typeof val === 'object')

export const hasChanged = (val, newValue) => (!Object.is(val, newValue))

export const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key)

export const camelize = (str) => str.replace(/-(\w)/g, (_, c: string) => c ? c.toUpperCase() : '')

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const toHandleKey = (str) => str ? 'on' + capitalize(str) : ''


function getSequence(arr) {
    const p = arr.slice()
    const result = [0]
    let i, j, u, v, c
    const len = arr.length
    for (let i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1]
            if (arr[j] < arrI) {
                p[i] = j
                result.push(i)
                continue
            }
            u = 0
            v = result.length - 1
            while (u < v) {
                c = (u + v) >> 1
                if (arr[result[c]] < arrI) {
                    u = c + 1
                } else {
                    v = c
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1]
                }
                result[u] = i
            }
        }

    }
    u = result.length
    v = result[u - 1]
    while (u-- > 0) {
        result[u] = v
        v = p[v]
    }
    return result
}

