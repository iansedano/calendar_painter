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
        
    //     <div
    //         className="TimeBlock"
            
    //         onMouseOver={(e) => {
    //             console.log(e)
    //             if (e.buttons === 1) {
    //                 e.target.style.backgroundColor = "red"
    //             }
    //         }}
    //     />
    // )
}
