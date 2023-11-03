import './Login.scss'
import { FaSpotify } from 'react-icons/fa'

function Login() {
  return (
    <div className="login-page">
      <div className="container flex-col flex-center">
        <p className="h1 centered">Discover your Spotify Soundscape.</p>
        <p className="centered">Visualize and explore your music taste.</p>
        <a className="button flex-row" href="/auth/login">Login with Spotify <FaSpotify className="icon"/></a>
      </div>
      <div className="circle-container flex-col flex-center">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Login