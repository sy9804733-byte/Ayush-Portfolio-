import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <div className="content">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">Your app starts here</p>
      </div>
    </div>
  )
}
