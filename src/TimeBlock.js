import React from "react"




export default function TimeBlock({divisions, index}) {
    return (
        <td className="cell" index={index + 1}>
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
