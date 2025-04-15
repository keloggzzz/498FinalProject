import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBagShopping,faUser,faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function LeftNavbar() {
  return (
    <div className="w-60 h-screen bg-[#a8b2a1] text-[#2e2e2e] fixed left-0 top-0 flex flex-col gap-6">
      <div className='flex justify-center items-center mt-2'>
      <img
          src={"https://i.ibb.co/Y4bcHT4K/Login-Logo.png"}
          alt={"Site Logo"}
          className="w-full h-30 object-cover"
        />
      </div>

      <div className="ml-4 text-lg p-3 hover:bg-[#cad9bc] hover:text-black/35 hover:transition-discrete duration-400"><a href="/Home">
      <FontAwesomeIcon icon={faHome} className='mr-2' /> Home
      </a></div>

      <div className="ml-4 text-lg p-3 hover:bg-[#cad9bc] hover:text-black/35 hover:transition-discrete duration-400"><a href="/Browse">
      <FontAwesomeIcon icon={faBagShopping} className='mr-2' /> Browse
      </a></div>

      <div className="ml-4 text-lg p-3 hover:bg-[#cad9bc] hover:text-black/35 hover:transition-discrete duration-400"><a href="/Profile">
      <FontAwesomeIcon icon={faUser} className='mr-2'/> Profile
      </a></div>

      <div className="ml-4 text-lg p-3 hover:bg-[#cad9bc] hover:text-black/35 hover:transition-discrete duration-400"><a href="/PostItem">
      <FontAwesomeIcon icon={faPlusCircle} className='mr-2'/> Post Item
      </a></div>
    </div>
  );
}