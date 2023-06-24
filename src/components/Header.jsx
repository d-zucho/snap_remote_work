import Logo from '../assets/snap.svg'

import './styles/header.styles.css'

const Header = () => {
  return (
    <header>
      {/* Header container */}
      <div className='container'>
        <div className='logo-container'>
          <img className='logo' src={Logo} alt='logo' />
        </div>

        {/* Nav left */}
        <div className='nav-links'>
          <nav className='nav-left'>
            <ul>
              {/* <li>
                <img src={Logo} alt='logo' />
              </li> */}
              <li className='nav-item'>
                <a href='#'>Features</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Company</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Careers</a>
              </li>
              <li className='nav-item'>
                <a href='#'>About</a>
              </li>
            </ul>
          </nav>
          {/* Login / Register */}
          <div className='login-register'>
            <span className='login'>Login</span>
            <button type='button' className='register'>
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
