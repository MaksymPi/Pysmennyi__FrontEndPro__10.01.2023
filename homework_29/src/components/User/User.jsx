import { useLocation, useRouteLoaderData, Link, Outlet } from "react-router-dom";
import Albums from "./Albums";

const User = ({ user }) => {
    const location = useLocation();
    // const userData = useRouteLoaderData('users');

    // console.log(userData);
    
    return (
        <div className="userContainer"  key={user.id}>
          <h2>{user.name}</h2>
          <Link to={`${location.pathname}?userId=${user.id}`}>
            <button className="btnAlbum">Album</button>
          </Link>
          <Albums />
          {/* {albums.length > 0 && user.id === albums[0].userId && (
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
          )} */}
          <Outlet />
        </div>
    )
}

export default User;