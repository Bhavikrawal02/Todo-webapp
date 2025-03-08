import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex mx-auto py-1 bg-violet-600 justify-between p-8 text-white">
        <div className="logo text-xl font-bold ">I-TASK</div>
        <ul className="flex gap-5 cursor-pointer ">
            <li className="hover:font-bold">HOME</li>
            <li className="hover:font-bold transition-all">YOUR TASK</li>
        </ul>
    </nav>
  )
}

export default Navbar
