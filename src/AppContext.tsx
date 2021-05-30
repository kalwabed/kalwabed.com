import { useContext, createContext, useState, useEffect } from 'react'

interface AppCtx {
  isMounted: boolean
}

const AppContext = createContext<AppCtx | undefined>(undefined)

export const useAppContext = (): AppCtx => {
  return useContext(AppContext)
}

const Provider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return <AppContext.Provider value={{ isMounted }}>{children}</AppContext.Provider>
}

export default { Provider, Consumer: AppContext.Consumer }
