import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import apiClient from '../../SpotifyApi'

export default function Sidebar() {
    const [image, setImage] = useState("")

    useEffect(() => {
        apiClient.get("me").then((response) => {
            console.log(response.data.images[0].url)
            setImage(response.data.images[0].url)
        })
    })

    return (
        <div className='sidebar-container'>
            <img src={image} alt="profile-img" className="profile-img" />
            <div>
                <SidebarButton tittle={"Feed"} to={"/feed"} icon={ <MdSpaceDashboard />} />
                <SidebarButton tittle={"Trending"} to={"/trending"} icon={ <FaGripfire />} />
                <SidebarButton tittle={"Player"} to={"/player"} icon={ <FaPlay />} />
                <SidebarButton tittle={"Favourites"} to={"/favorites"} icon={ <MdFavorite />} />
                <SidebarButton tittle={"Library"} to={"/"} icon={ <IoLibrary />} />
            </div>
            <SidebarButton tittle={"Sign Out"} to={""} icon={ <FaSignOutAlt />} />
        </div>
    )
}
