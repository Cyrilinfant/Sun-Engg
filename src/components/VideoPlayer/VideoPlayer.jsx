
import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '..//..//assets/vid.mp4'

const VideoPlayer = ({palyState ,  setPlayState}) => {

    const player =useRef(null);

    const closePlayer = (e)=>{
        if (e.target === player.current){
            setPlayState(false)
        }
    }


  return (
    <div className={`video-player ${palyState?'' : 'hide'}`} ref={player} 
    onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default VideoPlayer