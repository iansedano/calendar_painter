import React, {useReducer} from "react"

import reducer, {initialState, EVENT_COLOR_MAP} from "state"
import Week from "Week"
import Palette from "Palette"

import "./index.css"

export const settings = React.createContext()

export default function Calendar() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return(
    <div
      className="unselectable Calendar" // unselectable CSS used as fallback to JavaScript below
      ref={(node)=>{
          if (node) node.addEventListener("selectstart", (e)=>{ // without "if" fails when updating context
            e.preventDefault()
            return false
          })
      }} // adding via ref as per https://github.com/facebook/react/issues/16521
      onMouseDown={()=> false}
    >
      <settings.Provider value ={{state, dispatch}}>
        <Week/>
        <Palette/>
      </settings.Provider>
    </div>
    )
  }
  
  
  