import { createVNode } from "./vnode";

//h函数 编译文件

export function h(type, props?, children?){

    return createVNode(type, props, children)
}