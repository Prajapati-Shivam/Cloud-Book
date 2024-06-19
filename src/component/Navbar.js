import { Link, useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import logo from '../asset/logo.png';
import onlyLogo from '../asset/onlyLogo.png';
import { FilePlus, Home, Info, LogOut, NotebookPen } from 'lucide-react';

const Navbar = () => {
  const context = useContext(noteContext);
  const { setAddModalOpen } = context;
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [
    {
      name: 'Notes',
      logo: NotebookPen,
      path: '/',
    },
    {
      name: 'Add Note',
      logo: FilePlus,
      path: '/',
    },
    {
      name: 'About',
      logo: Info,
      path: '/about',
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-lg px-2 sm:px-8 md:px-16'>
      <Link to='/'>
        <span className='font-bold text-xl tracking-tight hidden sm:block'>
          <img src={logo} alt='CloudBook' className='w-40' />
        </span>
        <span className='font-bold text-xl tracking-tight sm:hidden'>
          <img src={onlyLogo} alt='CloudBook' className='w-10' />
        </span>
      </Link>
      <div className='sm:block hidden'>
        <div className='flex justify-between items-center gap-x-3'>
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              onClick={() => {
                if (link.name === 'Add Note') {
                  setAddModalOpen(true);
                }
              }}
              className={`hover:bg-gray-100 p-2 rounded-sm font-medium text-md flex item-center`}
            >
              <span className='mr-1'>
                <link.logo />
              </span>
              <span>{link.name}</span>
            </Link>
          ))}
          {localStorage.getItem('token') && (
            <button
              onClick={handleLogout}
              className='inline-flex text-center items-center bg-gray-200 border-0 focus:outline-none hover:bg-gray-300 p-2 rounded text-md font-medium'
            >
              <LogOut className='mr-1' />
              Logout
            </button>
          )}
        </div>
      </div>
      <div className='block sm:hidden'>
        <div className='flex justify-between items-center'>
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              onClick={() => {
                if (link.name === 'Add Note') {
                  setAddModalOpen(true);
                }
              }}
              className={`${
                location.pathname === link.path
                  ? 'text-gray-900'
                  : 'text-gray-500'
              } hover:text-gray-900 font-medium pr-4 text-xl`}
            >
              <link.logo />
            </Link>
          ))}
          {localStorage.getItem('token') && (
            <button
              onClick={handleLogout}
              className='inline-flex items-center 0 text-2xl'
            >
              <LogOut />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
