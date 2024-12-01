import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     


import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }


  return (
    <nav className="nav-header">
    <ToastContainer position="top-right" autoClose={3000} />
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
