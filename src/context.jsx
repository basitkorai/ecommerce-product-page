import { createContext, useContext, useEffect, useState } from 'react'
import images from './data'

const getLocalStorage = () => {
  const list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)
  const [totalItems, setTotalItems] = useState(getLocalStorage)
  const [totalAmount, setTotalAmount] = useState(totalItems * 125)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(totalItems))
    setTotalAmount(totalItems * 125)
  }, [totalItems])
  const prevImage = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextImage = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const checkNumber = (number) => {
    if (number > images.length - 1) {
      return 0
    }
    if (number < 0) {
      return images.length - 1
    }
    return number
  }

  const closeLightbox = (e) => {
    const target = e.target.classList

    if (
      target.contains('lightbox__body') ||
      target.contains('lightbox__content') ||
      target.contains('product__lightbox')
    ) {
      setLightbox(false)
    }
  }

  const removeCartItems = () => {
    setTotalItems(0)
  }
  const functions = {
    isSidebarOpen,
    setIsSidebarOpen,
    lightbox,
    setLightbox,
    index,
    setIndex,
    prevImage,
    nextImage,
    checkNumber,
    closeLightbox,
    totalItems,
    setTotalItems,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    removeCartItems,
  }
  return (
    <AppContext.Provider value={{ ...functions }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export default AppProvider
