import React from 'react'
import { Image } from 'rebass'

const picture = (props) =>{

    return(
        <div>
        <Image src={props.src}/>
        {props.children}
        </div>
    )
}

export default Image