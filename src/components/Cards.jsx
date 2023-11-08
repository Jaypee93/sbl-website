import React from 'react'
import './Cards.css'

const Cards = () => {


  return (
    <div className='CardContainer'>
        <div className='Card'>
            <div className="playerOfTheWeek">
                <div className="powTitle">Player of the Week!</div>
                <div className="powImage">
                    
                </div>
                <div className="powStats"></div>
                <div className="powName">ska ha en länk till spelarprofil</div>
            </div>
        </div>
        <div className='Card'>
            <div className="sblPodden">

            </div>
        </div>
        <div className='Card'>
            <div className="sblStartingFive">

            </div>
        </div>
        <div className='Card'>
            <div className="burekReport">

            </div>
        </div>
    </div>
  )
}

export default Cards