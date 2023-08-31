import { RiEBike2Fill } from 'react-icons/ri'
import { useGlobalContext } from '../context'
import Navbar from './Navbar'
import Product from './Product'
import Sidebar from './Sidebar'

const ProductPage = () => {
  const { isCartOpen, setIsCartOpen, isSidebarOpen, setIsSidebarOpen } =
    useGlobalContext()
  return (
    <div
      className="app-wrapper"
      onClick={(e) => {
        if (isCartOpen && !e.target.classList.contains('xcart')) {
          setIsCartOpen(false)
        }

        if (isSidebarOpen && !e.target.classList.contains('xside')) {
          setIsSidebarOpen(false)
        }
      }}
    >
      <header>
        <Sidebar />
        <Navbar />
      </header>
      <main>
        <Product />
      </main>
    </div>
  )
}
export default ProductPage
