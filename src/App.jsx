import { RouterProvider } from 'react-router-dom'
import './App.css'
import NavberProvider from './Context/NavberProvider'
import router from './Routes/router'

function App() {

  return (
    <>
      <NavberProvider>
        <RouterProvider router={router} />
      </NavberProvider>
    </>
  )
}

export default App
