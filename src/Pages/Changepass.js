import React from 'react'

import Sidebar from './Sidebar_component/sidebar'
import Nav from './nav'
export default function Changepass() {
  return (
    <div className='Changepass'>
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <Sidebar/>
          </div>
          <div className='dashboard_body_body'>
            <div>
              <Nav/>
              <br />
              <br/>
            </div>
            
          </div>
        </div>
    </div>
  )
}
