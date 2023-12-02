import { useRouter } from 'next/router'
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
// import { toast } from 'react-hot-toast'
import store from 'store'

interface Payload {
  email: string
  password: string
}
export interface UserState {
  user: { email: string; role: string } | null
  loading: boolean
  error: string | null
  logout: () => void
  login: (payload: Payload, actions: any) => Promise<void>
}

const defaultState: UserState = {
  user: null,
  loading: true,
  error: null,
  logout: () => {},
  login: async () => {},
}
const userContext = createContext<UserState>(defaultState)

type UserProviderProps = {
  children: ReactNode
}
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<null | { email: string; role: string }>(
    typeof window !== 'undefined' ? { email: '', role: '' } : null
  )
  const [bookmark, setBookmark] = useState<null | {
    email: string
    role: string
  }>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  const login = async (payload: Payload, actions: any) => {
    // setLoading(true)
    console.log('payload from store', { payload })
    try {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.status === 200) {
            // toast.success('Form submitted successfully')
            console.log('logged in')
            actions.resetForm()
            setLoading(false)
          } else {
            console.error(
              `Form submission failed, user/password is ${res.statusText}`
            )
          }
          return res.json()
        })
        .then((data) => {
          setUser(data.data)
          router.push('/dashboard')
        })
    } catch (error) {
      setError('failed to load user')
    }
  }
  const logout = () => {
    // toast.success('Logout  successfully')
    console.log('Logout  successfully')

    setUser(null)
    if (bookmark !== null && Object.keys(bookmark).length === 0) return

    localStorage.removeItem('bookmark')
    router.push('/login')
  }

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    const bookmarkFromLocalStorage = localStorage.getItem('bookmark')

    const parsedBookmark =
      bookmarkFromLocalStorage !== null
        ? JSON.parse(bookmarkFromLocalStorage)
        : []

    setBookmark(parsedBookmark)
  }, [user])

  return (
    <userContext.Provider
      value={{ user: bookmark, loading, error, logout, login }}
    >
      {children}
    </userContext.Provider>
  )
}

export const UseUser = () => {
  const context = useContext<UserState>(userContext)
  return context
}
