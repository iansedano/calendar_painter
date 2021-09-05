import React, {useContext} from "react"

import {EVENT_COLOR_MAP, ACTION_ENUM} from "state"
import {settings} from "Calendar"

export default function Palette(){
  
  const context = useContext(settings)
  const selected = context.state.selectedEventType
  
  return (
    <div className="arrange-vertically">
    {
      Array.from(EVENT_COLOR_MAP).map((item) => {
        return (
          <button
            key={item[0]}
            style={{backgroundColor:item[1]}}
            onClick={(e)=>{
              context.dispatch({
                type:ACTION_ENUM.SELECT_EVENT,
                eventType:e.target.innerText
              })
            }}
          >{item[0]}</button>
          )
        })
      }
      </div>
      )
    }