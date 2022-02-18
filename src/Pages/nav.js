import React from 'react'
import {CgProfile} from 'react-icons/cg'
export default function nav() {

    const style = {
        fontSize: '1.3rem',
        display: 'flex',
        float : 'right',
    }
    const style1 = {
        display: 'inline-flex',
    }
  return (
        <div className="nav" style={style}>
            <div style={style1}>
                <h4 style={{margin : '10px'}}><CgProfile /></h4>
                <h4 style={{margin : '10px'}}> saibharat2002@gmail.com</h4>
            </div>
        </div>
  )
}
