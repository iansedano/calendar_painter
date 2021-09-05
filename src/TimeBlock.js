import React from "react"




export default function TimeBlock({divisions}) {
    return (
        <td className="cell">
            {
                new Array(divisions).fill('').map((_, i) =>{
                    return (
                        <div key={i} className="sub-cell brushable"></div>
                    )
                })
            }
        </td>
    )
}
