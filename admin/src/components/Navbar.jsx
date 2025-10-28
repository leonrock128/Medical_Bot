import React, { useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {

    const {aToken,setAToken} = useContext(AdminContext)
    const {dToken,setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
      navigate('/')
      aToken && setAToken('')
      aToken && localStorage.removeItem('aToken')
      dToken && setDToken('')
      dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white border-gray-300'>
        <div className='flex items-center gap-2 text-xs'>
            <img className='w-30 h-13 sm:w-25 cursor-pointer' src={assets.profile_logo} alt="" />
            <p className='absolute left-32 border text-[10px] px-1.5 py-0.5 rounded-full border-gray-500 text-gray-600 custom-hide'>{aToken ? 'Admin' : 'Doctor'} </p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar