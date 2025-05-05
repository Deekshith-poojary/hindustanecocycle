import React,{useState} from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';

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
    <header className={`py-3 text-yellow-200 ${className}`}>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <div className="md:hidden md:flex-col ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          <ul
            className={`
              flex-col md:flex-row md:flex ml-auto gap-4 
              ${menuOpen ? 'flex absolute top-16 left-0 w-full bg-gray-900 text-shadow-amber-100 p-4 z-50 shadow-md' : 'hidden'} 
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
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
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