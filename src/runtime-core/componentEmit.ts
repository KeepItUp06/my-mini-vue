import { camelize, toHandleKey } from "../shared/index"

export function emit(instance, event, ...args) {
    //instance.props -> event
    const { props } = instance


    //TPP
    //先去写一个特定的行为 -> 重构成通用的行为


    const handleName = toHandleKey(camelize(event))

    const handler = props[handleName]
 
    handler & handler(...args)
}