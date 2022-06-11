import { AuthContextProvider } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'

import styles from './Navbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const {user} = useAuthContext()
  const {logout } = useLogout()
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to='/'>myMoney</Link></li>

            {!user && (
              <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
              </>
            )}
            {user && (
              <>
                <li>Hello, {user.displayName}</li>
                <li className='btn' onClick={logout}>Logout</li>
              </>
            )}
        </ul>
    </nav>
  )
}
