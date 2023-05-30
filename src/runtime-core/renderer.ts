import { isObject } from "../shared/index"
import { shapeFlags } from "../shared/shapeFlags"
import { createComponentInstance, setupComponent } from "./component"

export function render(vnode, container){


    patch(vnode, container)
}

export function patch(vnode, container){

    const { shapeFlag } = vnode

    if(shapeFlag & shapeFlags.ELEMENT ){
        //去处理element
        processElement(vnode, container)
    }else if(shapeFlag & shapeFlags.STATEFUL_COMPONENT){
        //去处理组件
        processComponent(vnode, container)
    }
}

function processElement(vnode: any, container: any) {
    mountElement(vnode, container)
}

function processComponent(vnode: any, container: any){
    mountComponent(vnode, container)
}

function mountElement(vnode: any, container: any){
    const el = (vnode.el = document.createElement(vnode.type))

    //string array
    const { children, shapeFlag } = vnode

    if(shapeFlag & shapeFlags.TEXT_CHILDREN){
        el.textContent = children
    }else if(shapeFlag & shapeFlags.ARRAY_CHILDREN){
        mountChildren(vnode, el)
    } 

    //props
    const { props } = vnode
    for(const key in props){
        const val = props[key]

        const isOn = (key: string) => /^on[A-Z]/.test(key)

        if(isOn(key)){
            const event = key.slice(2).toLocaleLowerCase()
            el.addEventListener(event, val)
        }else{
            el.setAttribute(key, val)
        }
    }

    container.append(el)
}

function mountChildren(vnode, container){
    vnode.children.forEach(v => {
        patch(v, container)
    })
}

function mountComponent(initialVNode: any, container){
    const instance = createComponentInstance(initialVNode)

    setupComponent(instance)
    setupRenderEffect(instance, initialVNode, container)
}

function setupRenderEffect(instance: any, initialVNode, container) {
    const { proxy } = instance
    const subTree = instance.render.call(proxy)

    // vnode -> patch
    // vnode -> element -> mount 

    patch(subTree, container)

    initialVNode.el = subTree.el
}

