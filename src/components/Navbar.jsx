import React from 'react'

const Navbar = ({ searchText, setSearchText }) => {
  const link = (
    <>
    <li>HOME</li>
    <li>MENU</li>
    <li>ABOUT</li>
    <li>CONTACT</li>
    </>
  )
  return (
   <>
   <div className="navbar  shadow-md bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-1000">
<div className='w-11/12 mx-auto flex justify-between'>
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-black/40 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
<div className='flex item center gap-10'>
      <a className="btn btn-ghost text-xl text-blue-700">SHEBA 360 BD</a>
      <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-6">
      {link}
    </ul>
  </div>
</div>
  </div>
  
  <div className="navbar-end ">
    <label className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within:border-blue-400 transition duration-300">
      <svg
        className="h-[1em] opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="bg-transparent outline-none text-sm text-white placeholder-white/60 w-24 md:w-40"
      />
    </label>
    
    
  </div>
</div>
</div>
   </>
  )
}

export default Navbar
