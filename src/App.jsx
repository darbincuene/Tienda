import Navbar from "./componentes/Navbar/index.jsx"
//import Navega from "./componentes/Navega/inicio.jsx"

import { useRoutes, BrowserRouter } from 'react-router-dom'   
import Ini from "./Pages/ini"
import Home from "./Pages/Home"
import Caballeros from "./Pages/Caballeros"
import Descripcion from "./Pages/descri"
import { CartContextProvider } from "./Context/index.jsx"


const AppRoutes = () => {
  let routes = useRoutes([
   {path: '/', element: <Home/>},
   {path: '/caballeros', element: <Caballeros/>},
   {path:'/descripcion',element:<Descripcion/>}
 
   

  ])  
  return routes
}

function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    
      <Navbar/>
      <Ini/>
   
    <AppRoutes/>
     
      </BrowserRouter>
      </CartContextProvider>
    </>

    )
}

export default App
