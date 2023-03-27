import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    }
  ]
  return (
    <nav className="text-gray-600 bg-blue-100 body-font">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className='text-xl'>📖</span>
          <span className="ml-3 text-xl">CloudBook</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {navItems.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={`mr-5 font-medium text-gray text-md hover:text-gray-900 ${location.pathname === item.path ? 'text-black underline' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        <Link
          to='/login'
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2">
          Login
        </Link>
        <Link
          to='/signup'
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign Up
        </Link>
      </div>
    </nav>

  )
}

export default Navbar