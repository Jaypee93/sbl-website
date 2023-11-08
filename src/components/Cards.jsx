import React from 'react'
import './Cards.css'

import gh from "../assets/GH.png"

const Cards = () => {


  return (
    <div className='CardContainer'>
        <div className='Card'>
            <div className="playerOfTheWeek">
                <div className="powTitle">Player of the Week!</div>
                <div className="powImage">
                    <img src={gh} alt="GustavHansson" />
                </div>

                <div className="powStats">
                    <div className="pts">
                        <div>PTS</div>
                        <div>24</div>
                    </div>
                    <div className="ass">
                        <div>ASS</div>
                        <div>8</div>
                    </div>
                    <div className="reb">
                        <div>REB</div>
                        <div>2</div>
                    </div>
                    <div className="eff">
                        <div>EFF</div>
                        <div>21</div>
                    </div>
                </div>

                <div className="powName"></div>
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