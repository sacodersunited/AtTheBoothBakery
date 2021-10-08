import React from 'react'
import { Link } from 'gatsby'
import Container from './Container'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className=" bg-brand-lightPurple text-gray-200 p-12 border-b-4 border-brand-pink text-sm">
        <Container>
          <div className="flex justify-end space-x-5 md:space-x-20">
            <div className="flex flex-col">
              <a href="tel:+12102211234">210-221-1234</a>
              <a href="mailto:attheboothbakery@email.com">
                attheboothbakery@email.com
              </a>
            </div>
            <div className="flex flex-col uppercase space-y-2 ">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Desserts</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Link className="uppercase underline" to="/">
                Desserts
              </Link>
              <Link to="/">Cheesecakes</Link>
              <Link to="/">Cookies</Link>
              <Link to="/">Breads</Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-brand-darkPurple text-gray-200">
        <Container>
          <div className="flex justify-between py-5">
            <a
              className="hover:text-brand-pink"
              href="https://sacodersunited.com"
            >
              @sacodersunited
            </a>
            <div className="flex">
              <a href="https://facebook.com">
                <FaFacebook className="w-5 h-5 hover:text-brand-pink" />
              </a>
              <a href="https://instagram.com">
                <FaInstagramSquare className="ml-5 w-5 h-5 hover:text-brand-pink" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
