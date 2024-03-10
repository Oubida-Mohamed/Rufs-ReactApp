import { useState } from "react";
// import {IonIcon} from "react-ion-icon";

export default function NavBar () {
    const [Open,setOpen] = useState(false); 
  return <>
  <header className="bg-slate-100 shadow-md">
    <div className="container-fluid">
      <div className="row h-20 items-center">
      <div className="col-6 flex justify-start">
          <div className='md:hidden relative'>
            {/* eslint-disable-next-line */}
            <a className='menu-open-btn' href="#" onClick={()=>setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-slate-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </a>
            <nav className={`offcanvas-menu fixed bg-slate-100 h-screen top-0 w-2/3 shadow-md flex items-center px-8 ${(Open)?'-translate-x-0':'-translate-x-full'}`}>
            {/* eslint-disable-next-line */}
              <a className='menu-close-btn absolute top-6 left-6' href='#' onClick={()=>setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-slate-800">
                  <path strokeLinecap='round' strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
              <ul>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>Home</a></li>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>Portfolio</a></li>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>Services</a></li>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>Blog</a></li>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>About</a></li>
                <li className='my-5'><a className='text-xl font-semibold text-slate-800 hover:text-red-500 duration-300' href='/'>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <a className="items-center text-2xl font-bold text-slate-800 h-10" href="/">
            <span>
              <ion-icon name="logo-ionic" size='large'></ion-icon>
            </span>
            RUFS
          </a>
        </div>
        
      </div>
    </div>
  </header>
  
  </>
}