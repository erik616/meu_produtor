import './global.css'

import { Products } from './componets/products/Products'
import { Home } from "./pages/home/Home"

export function App() {

  return (
    <div className="App">
      <Home />
      <Products />
    </div>
  )
}
