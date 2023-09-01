import { FocusTrap } from '@mui/base'
import { useGlobalContext } from '../context'
import { useEffect, useRef } from 'react'
import iconClose from '../assets/images/icon-close.svg'

const Sidebar = () => {
  const closeSidebarBtn = useRef(null)
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  useEffect(() => {
    if (isSidebarOpen) {
      closeSidebarBtn.current.focus()
    }
  }, [isSidebarOpen])

  return (
    <FocusTrap open={isSidebarOpen}>
      <div className="sidebar xside" role="navigation">
        <ul
          className={
            isSidebarOpen
              ? 'sidebar sidebar-list show-sidebar xside'
              : 'sidebar-list hide-sidebar xside'
          }
          id="sidebar"
        >
          <button
            ref={closeSidebarBtn}
            tabIndex={isSidebarOpen ? 0 : -1}
            className="btn-close xside"
            onClick={() => {
              setIsSidebarOpen(false)
            }}
            aria-label="close sidebar"
          >
            <img src={iconClose} alt="" />
          </button>
          <li className="nav-item xside">
            <a tabIndex={isSidebarOpen ? 0 : -1} href="" className="nav-link">
              Collections
            </a>
          </li>
          <li className="nav-item xside">
            <a tabIndex={isSidebarOpen ? 0 : -1} href="" className="nav-link">
              Men
            </a>
          </li>
          <li className="nav-item xside">
            <a tabIndex={isSidebarOpen ? 0 : -1} href="" className="nav-link">
              Women
            </a>
          </li>
          <li className="nav-item about xside">
            <a tabIndex={isSidebarOpen ? 0 : -1} href="" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item contact xside">
            <a tabIndex={isSidebarOpen ? 0 : -1} href="" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </FocusTrap>
  )
}
export default Sidebar
