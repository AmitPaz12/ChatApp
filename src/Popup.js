import React from 'react'
import "./Popup.css"

const Popup = props => {
  return (
    <div className="popup-box">
        <div className="box">
            <button type="button" class="btn-close" onClick={props.handleClose} aria-label="Close"></button>
            {props.content}
        </div>
    </div>
  )
}

export default Popup
