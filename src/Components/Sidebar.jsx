import { Avatar } from "@material-ui/core";
import "../Css/Sidebar.css";
import Categories from "./Categories";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import GamepadIcon from "@material-ui/icons/Gamepad";
import MapIcon from "@material-ui/icons/Map";
import { Link } from "react-router-dom";
import { userSelector } from "../app/features/UserSlice";
import { useSelector } from "react-redux";

const Sidebar = ({ username, src }) => {
  const user = useSelector(userSelector);

  return (
    <div className="sidebar">
      <Link to={user ? "/userInfo" : "/"} style={{ textDecoration: "none" }}>
        <div className="sidebarUserInfo">
          {src ? (
            <Avatar src={src} />
          ) : (
            <Avatar src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg" />
          )}
          <span className="username" style={{ marginLeft: "2px" }}>
            {username}
          </span>
        </div>
      </Link>
      <Categories Icon={LocalMoviesIcon} categoryName="Videos" />
      <Categories Icon={AttachFileIcon} categoryName="Files" />
      <Categories Icon={LibraryMusicIcon} categoryName="Songs" />
      <Categories Icon={DesktopMacIcon} categoryName="Applications" />
      <Categories Icon={GamepadIcon} categoryName="VideoGames" />
      <Categories Icon={MapIcon} categoryName="Gps" />
    </div>
  );
};
export default Sidebar;
