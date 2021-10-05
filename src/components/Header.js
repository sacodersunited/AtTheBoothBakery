import React from 'react'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Header() {
  return (
    <>
      <div className="grid place-items-center bg-gray-100">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            width={160}
            layout="fixed"
            alt="At the Booth Bakery logo"
            quality="100"
          />
        </Link>
      </div>
      <div className=" flex bg-gray-100 p-5 justify-center shadow-md">
        <ul className="flex space-x-20 text-gray-700">
          <Link to="/">
            <NavLink>Home</NavLink>
          </Link>
          <Link to="/about">
            <NavLink>About</NavLink>
          </Link>
          <Link to="/desserts">
            <NavLink>Desserts</NavLink>
          </Link>
          <Link to="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </ul>
        <ul className="flex space-x-6 ml-10 justify-center">
          <li>
            <FaFacebook className="w-7 h-7 text-brand-pink" />
          </li>
          <li>
            <FaInstagramSquare className="w-7 h-7 text-brand-pink" />
          </li>
        </ul>
      </div>
    </>
  )
}

function NavLink({ children }) {
  return <li className="hover:text-brand-pink uppercase">{children}</li>
}
