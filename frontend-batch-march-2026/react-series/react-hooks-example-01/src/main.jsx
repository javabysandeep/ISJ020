import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timer from './Timer.jsx'
import StudentTracker from './StudentTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentTracker />
  </StrictMode>,
)
