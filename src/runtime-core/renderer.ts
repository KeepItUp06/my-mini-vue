import { shapeFlags } from "../shared/shapeFlags"
import { createComponentInstance, setupComponent } from "./component"
import { Fragment, Text } from "./vnode"

export function render(vnode, container) {
    patch(vnode, container, null)
}

export function patch(vnode, container, parentComponent) {

    const { shapeFlag, type } = vnode

    //fragment 只渲染children

    switch (type) {
        case Fragment:
            processFragment(vnode, container, parentComponent)
            break
        case Text:
            processText(vnode, container)
            break

        default:
            if (shapeFlag & shapeFlags.ELEMENT) {
                //去处理element
                processElement(vnode, container, parentComponent)
            } else if (shapeFlag & shapeFlags.STATEFUL_COMPONENT) {
                //去处理组件
                processComponent(vnode, container, parentComponent)
            }
            break
    }
}

function processText(vnode, container){
    const {children} = vnode
    const textNode = (vnode.el = document.createTextNode(children))
    container.append(textNode)
}

function processFragment(vnode, container, parentComponent) {
    mountChildren(vnode, container, parentComponent)
}

function processElement(vnode: any, container: any, parentComponent) {
    mountElement(vnode, container, parentComponent)
}

function processComponent(vnode: any, container: any, parentComponent) {
    mountComponent(vnode, container, parentComponent)
}

function mountElement(vnode: any, container: any, parentComponent) {
    const el = (vnode.el = document.createElement(vnode.type))

    //string array
    const { children, shapeFlag } = vnode

    if (shapeFlag & shapeFlags.TEXT_CHILDREN) {
        el.textContent = children
    } else if (shapeFlag & shapeFlags.ARRAY_CHILDREN) {
        mountChildren(vnode, el, parentComponent)
    }

    //props
    const { props } = vnode
    for (const key in props) {
        const val = props[key]

        const isOn = (key: string) => /^on[A-Z]/.test(key)

        if (isOn(key)) {
            const event = key.slice(2).toLocaleLowerCase()
            el.addEventListener(event, val)
        } else {
            el.setAttribute(key, val)
        }
    }

    container.append(el)
}

function mountChildren(vnode, container, parentComponent) {
    vnode.children.forEach(v => {
        patch(v, container, parentComponent)
    })
}

function mountComponent(initialVNode: any, container, parentComponent) {
    const instance = createComponentInstance(initialVNode, parentComponent)

    setupComponent(instance)
    setupRenderEffect(instance, initialVNode, container)
}

function setupRenderEffect(instance: any, initialVNode, container) {
    const { proxy } = instance
    const subTree = instance.render.call(proxy)

    // vnode -> patch
    // vnode -> element -> mount 

    patch(subTree, container, instance)

    initialVNode.el = subTree.el
}

