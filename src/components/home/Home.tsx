import MusicPlayer from '../musicPlayer/MusicPlayer'
import './Home.scss'

function Home(props: any) {
  return (
    <div className="home-page">
      <div className="header flex-row">
        <p className="h6 bold">Your Soundscape</p>
        <div className="links flex-row flex-start">
          <a className="link" href="/auth/logout">Logout</a>
        </div>
      </div>
      <div className="container flex-col flex-start"></div>
      <MusicPlayer token={props.token} />
    </div>
  )
}

export default Home