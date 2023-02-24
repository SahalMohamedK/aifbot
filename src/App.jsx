import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Robots from './pages/Robots'
import Settings from './pages/Settings'
import Tasks from './pages/Tasks'

function App() {
 

  return (
    <Router>
      <Routes>                
        <Route index element={<Home />} />
        <Route path='/overview' element={<Dashboard title='Overview'><Overview /></Dashboard>} />
        {/* <Route path='/robots' element={<Dashboard title='Robots'><Robots /></Dashboard>} />
        <Route path='/tasks' element={<Dashboard title='Tasks'><Tasks /></Dashboard>} />
        <Route path='/settings' element={<Dashboard title='Settings'><Settings /></Dashboard>} /> */}
      </Routes>
    </Router>
  )
}

export default App
