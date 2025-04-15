import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping,faUser,faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function LeftNavbar() {
  return (
    <div className="w-60 h-screen bg-[#a8b2a1] text-white fixed left-0 top-0 p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">SiteName</h1>
      <div className="border-r border-pink-500"><a href="/Home">Home</a></div>

      <div className="border-r border-pink-500"><a href="/Browse">
      <FontAwesomeIcon icon={faBagShopping} /> Browse
      </a></div>

      <div className="border-r border-pink-500"><a href="/Profile">
      <FontAwesomeIcon icon={faUser} /> Profile
      </a></div>

      <div className="border-r border-pink-500"><a href="/PostItem">
      <FontAwesomeIcon icon={faPlusCircle} /> Post Item
      </a></div>
    </div>
  );
}