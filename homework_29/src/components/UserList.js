import React, { useState, useEffect } from "react";
import "./UserList.css"

function UserList() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const fetchAlbums = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  };

  const fetchPhotos = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  };

  return (
    <div className="container" >
      <h1>Список користувачів</h1>
      {users.map((user) => (
        <div className="userContainer"  key={user.id}>
          <h2>{user.name}</h2>
          <button className="btnAlbum" onClick={() => fetchAlbums(user.id)}>Album</button>
          {albums.length > 0 && user.id === albums[0].userId && (
            <ul className="albumList">
              {albums.map((album) => (
                <li className="album" key={album.id}>
                  {album.title}
                  <button className="btnPhoto"  onClick={() => fetchPhotos(album.id)}>Photos</button>
                  {photos.length > 0 && album.id === photos[0].albumId && (
                    <ul>
                      {photos.map((photo) => (
                        <li key={photo.id}>
                          <img src={photo.thumbnailUrl} alt={photo.title} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
