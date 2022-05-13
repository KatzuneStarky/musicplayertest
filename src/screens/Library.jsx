import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import APIKit from "../../src/SpotifyApi";
import { AiFillPlayCircle } from 'react-icons/ai'
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Library() {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        APIKit.get("me/playlists").then(function (response) {
            setPlaylist(response.data.items);
            console.log(response)
        });
    });

const navigate = useNavigate()

const playPlaylist = (id) =>{
    navigate("/player", { state: { id: id } })
}

    return (
        <div className="screen-container">
            <div className="library-body">
                {playlist?.map((playlist) => (
                    <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                        <img src={playlist?.images[0]?.url} alt="playlist-art" className="playlist-image" />
                        <p className="playlist-title">{playlist.name}</p>
                        <p className="playlist-subtitle">{playlist.tracks.total} songs</p>
                        <div className="playlist-fade">
                            <IconContext.Provider value={{ size: "50px", color: "#e99d72"}}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
