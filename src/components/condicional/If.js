export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === "Else"
    })[0]

    console.log(elseChild)

    const ifChildren = props.children.filter(child => {
        return child != elseChild
    })[0]

    if(props.test){
        return props.children
    }else if(elseChild){
        return false
    }
}

export const Else = props => props.children