import React, {cloneElement} from 'react';
import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    console.log(typeof props.children.map)
    return(
        <div>
            {props.children.map((child, i)=> {
                return cloneElement(child, {...props, key: i})
            })}
        </div>
    )
}