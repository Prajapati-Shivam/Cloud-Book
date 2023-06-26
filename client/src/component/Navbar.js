import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className="text-gray-600 bg-white shadow-md z-50 body-font fixed top-0 w-full flex items-center">
      <div className="container mx-auto flex flex-wrap p-4 flex-col sm:flex-row">
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
                className={`mr-5 text-gray text-md hover:text-gray-900 ${location.pathname === item.path ? 'font-medium text-black' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        {localStorage.getItem('token') &&
          <button
            onClick={handleLogout}
            className="inline-flex text-center items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Logout
          </button>}
      </div>
    </nav>

  )
}

export default Navbar