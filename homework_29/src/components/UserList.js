import React, { useState, useEffect } from "react";
import "./UserList.css"
import User from "./User/User";
import { Outlet, useLoaderData } from "react-router-dom";

function UserList() {
  const usersData = useLoaderData();
  // const [users, setUsers] = useState([]);
  // const [albums, setAlbums] = useState([]);
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // const fetchAlbums = (userId) => {
  //   fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
  //     .then((response) => response.json())
  //     .then((data) => setAlbums(data));
  // };

  // const fetchPhotos = (albumId) => {
  //   fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  //     .then(response => response.json())
  //     .then(data => setPhotos(data));
  // };

  return (
    <div className="container" >
      <h1>Список користувачів</h1>
      <Outlet />
      {usersData.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <Outlet />
    </div>
  );
}

export default UserList;
