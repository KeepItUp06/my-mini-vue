import { shapeFlags } from "../shared/shapeFlags"

export function createVNode(type, props?, children?){

    const vnode = {
        type,
        props,
        children,
        el:null,
        shapeFlag: getShapeFlag(type)
    }

    if(typeof children === 'string'){
        vnode.shapeFlag |= shapeFlags.TEXT_CHILDREN
    }else if(Array.isArray(children)){
        vnode.shapeFlag |= shapeFlags.ARRAY_CHILDREN
    }
 
    return vnode
}

function getShapeFlag(type){
    return typeof type === 'string' 
    ? shapeFlags.ELEMENT
    : shapeFlags.STATEFUL_COMPONENT
}