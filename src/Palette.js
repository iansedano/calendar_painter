import React, {useContext} from "react"

import {settings} from "Calendar"

export default function Palette(){
    
    const context = useContext(settings)
    
    const colorMap = context.colorMap
    const selected = context.selectedEventType
    
    return (
        <div>Hello</div>
    )
}