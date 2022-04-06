import React from 'react'
import './DashboardBugCard.css'
export default function Dashboard_bug_card(props) {
  return (
    <div className='Dashboard_bug_card'>
        <div className='card'>
            <h2>Bug : {props.name}</h2>
            <p>Description : {props.description}</p>
            <p>Created At : {props.createdAt} </p>
        </div>
    </div>
  )
}
