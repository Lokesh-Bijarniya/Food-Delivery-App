import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <div className="">
        <div>
            <h1 className="text-4xl text-center font-serif p-6 italic">BiteBase</h1>
        </div>
        <nav className="h-16 flex items-center justify-center px-24">
          <div className="flex items-center space-x-12 cursor-pointer ">
            <Link to='/' className="text-lg  text-gray-500 visited:text-gray-900 ">
              Home
            </Link>
            <a to="/about" className="text-lg text-gray-500 visited:text-gray-600">
              About
            </a>
            <a to="/contact" className="text-lg text-gray-500 visited:text-gray-600">
              Contact
            </a>
          </div>
        </nav>
    </div>
  )
}
