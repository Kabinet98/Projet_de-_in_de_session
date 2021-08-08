import "../Css/Categories.css";

const Categories = ({ Icon, categoryName }) => {
  const VideosDropdown = ["Animation","Courses","Series Animation " , "Music Videos", "Comedy Videos", "Movies", "Tv Emission"];
  const FilesDropdown = ["Audio", "Comics", "Books", "Mangas"];
  const SongsDropdown = ["Music", "Podcast Radio", "Samples"];
  const ApplicationsDropdown = ["Windows", "Mac OS", "Linux", "IOS", "Android", "Formation", "Others"];
  const VideoGamesDropdown = ["Windows", "Mac OS", "Linux", "IOS", "Android", "Smartphone", "Nintendo"];
  const GpsDropdown = ["Applications", "Cartes", "Others"]
  return (
    <div className="category">
      {categoryName === "Videos" && (
        <>
          <ul >
              <span className="videosUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            
            {VideosDropdown.map((videos, key) => (
              <li key={key}>{videos} </li>
            ))}
          </ul>
        </>
      )}
      {categoryName === "Files" && (
        <>
          <ul>
          <span className="FilesUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            {FilesDropdown.map((file, key) => (
              <li key={key} >{file} </li>
            ))}
          </ul>
        </>
      )}
      {categoryName === "Songs" && (
        <>
          <ul>
          <span className="SongsUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            {SongsDropdown.map((song, key) => (
              <li key={key}>{song} </li>
            ))}
          </ul>
        </>
      )}
      {categoryName === "Applications" && (
        <>
          <ul>
          <span className="ApplicationsUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            {ApplicationsDropdown.map((application, key) => (
              <li key={key}>{application} </li>
            ))}
          </ul>
        </>
      )}
      {categoryName === "VideoGames" && (
        <>
          <ul>
          <span className="VideoGamesUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            {VideoGamesDropdown.map((videosGames, key) => (
              <li key={key}>{videosGames} </li>
            ))}
          </ul>
        </>
      )}
      {categoryName === "Gps" && (
        <>
          <ul>
          <span className="GpsUl">{Icon && <Icon />}  <span style={{marginLeft:"2px"}} >{categoryName}</span></span>
            {GpsDropdown.map((gps, key) => (
              <li key={key}>{gps} </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default Categories;
