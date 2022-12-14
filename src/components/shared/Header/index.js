import React from 'react'
import { useContext } from 'react';
import { ImHammer } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut().then(result => console.log(result))
  };

  const menuItems =
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Apponinment</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>

      {
        user?.uid ?
          <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <button onClick={signOut}>LogOut</button>
          </>
          :
          <li><Link to='/login'>Login</Link></li>
      }
    </>



  return (
    <div className="navbar flex justify-between text-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <label className='lg:hidden' htmlFor="dashboard-drawer"><ImHammer className='text-black text-3xl font-semibold' /></label>

    </div>
  )
}

export default Header