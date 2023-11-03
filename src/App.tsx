import { useEffect, useState } from 'react'
import './App.scss'
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  const [start, setStart] = useState(false);
  const [token, setToken] = useState('')

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token')
      const json = await response.json()
      setToken(json.access_token)
      setStart(true)
    }
    getToken()
  }, [])

  return (
    <div>
      { (start) ? ( (token === '') ? <Login /> : <Home token={token} /> ) : null }
    </div>
  )
}

export default App
