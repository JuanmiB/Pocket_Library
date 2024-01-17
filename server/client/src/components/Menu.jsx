import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate
} from 'react-router-dom'
import './Menu.css'
const links = [
  'Home',
  'About',
  'Contact',
  'Blog',
  'Careers'
]

const Layout = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isOpen = isMenuOpen ? 'open' : ''

  const onClick = (link) => {
    toggleMenu()
    navigate(link)
  }
  return (
    <>
    <button
    className={`burger ${isOpen}`}
    onClick={toggleMenu}
    >
    </button>
    <div className={`background ${isOpen}`}></div>
    <div className={`menu ${isOpen}`}>
    <nav>
        {links.map((link, index) => (
            <a
            key={index}
            className={isMenuOpen ? 'appear' : ''}
            style={{ transitionDelay: `0.${index + 1}s` }}
            onClick={() => onClick(link)}
            >
                {link}
            </a>
        ))}
    </nav>
        </div>
    <main className={`page ${isOpen}`}>
    <Outlet />
    </main>
    </>
  )
}

const Page = ({ title, content }) => {
  return (
        <>
        <h2>{title}</h2>
        <p>{content}</p>
        </>
  )
}

const About = () => {
  return (
        <Page
        title='About'
        content='This is the about page'
        />
  )
}

export const Example = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}/>
                <Route path='about' element={<About />} />
            </Routes>
        </BrowserRouter>
  )
}
