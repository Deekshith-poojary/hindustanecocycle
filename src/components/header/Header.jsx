import React,{useState} from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiMenu, FiXCircle } from 'react-icons/fi';

function Header({
  className = "",
}) {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "About",
      slug: "/about",
      active: true,
  },
  {
      name: "Services",
      slug: "/services",
      active: true,
  },
  {
      name: "Contact Us",
      slug: "/contact-us",
      active: true,
  },
  ]


  return (
    <header className={`py-3 bg-green-500 m-3 mt-5 rounded-3xl shadow-xs ${className}`}>
      <Container>
        <nav className='flex md:flex-row flex-col'>
          <div className='flex'> 
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <div className="md:hidden md:flex-col ml-auto mt-1">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl text-cyan-200">
              {menuOpen ? <FiXCircle /> : <FiMenu />}
            </button>
          </div>
          </div>
          <ul
            className={`
              flex-col  md:flex md:flex-row md:ml-auto gap-4 
              ${menuOpen ? 'flex m-0 text-cyan-400 text-shadow-amber-100 p-4 z-50' : 'hidden'} 
              md:static md:bg-transparent md:text-white md:shadow-none md:items-center
            `}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false);
                      }}
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full text-xl"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header