import { useState, useEffect } from 'react'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import './MusicPlayer.scss'

function MusicPlayer(props: any) {

  return <>
    <div className='music-player-container flex-col'>
      <div className="top flex-row">
        <div className='image'></div>
        <div className="text">
          <p className='small'>Set your listening device on Spotify as 'Spotify Soundscape'.</p>
        </div>
      </div>
      <div className='player flex-col flex-center'>
        <input type="range" min="0" max="1" step="0.0001" defaultValue="0" className="slider" id="slider" />
        <div className='controls flex-row flex-center'>
          <button><MdSkipPrevious /></button>
          <button><MdPlayArrow /></button>
          <button><MdSkipNext /></button>
        </div>
      </div>
    </div>
  </>
}

export default MusicPlayer