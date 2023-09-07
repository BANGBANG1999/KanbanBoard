import React from 'react'
import TodoCard from '../TodoCard/TodoCard'
import DoingCard from '../DoingCard/DoingCard'
import DoneCard from '../DoneCard/DoneCard'
import "./allcards.css"


function AllCards() {
  
  return (
    <>
        <div className="allcards">
            <TodoCard status="todo"/>
            <DoingCard status="doing" />
            <DoneCard status="done"/>
        </div>
    </>
  )
}

export default AllCards
