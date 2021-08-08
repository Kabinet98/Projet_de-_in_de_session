import "../Css/Feed.css";
import Donation from "./Donation";
import logo from "../Images/give.svg";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import GamepadIcon from "@material-ui/icons/Gamepad";
import MapIcon from "@material-ui/icons/Map";
import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { auth, provider } from "../app/Firebase";
import { login, logout, userSelector } from "../app/features/UserSlice";
import { changeLabel, labelSelector } from "../app/features/LabelSlice";
import { useDispatch, useSelector } from "react-redux";
const Feed = () => {
  const dispatch = useDispatch();
  const label = useSelector(labelSelector);
  const user = useSelector(userSelector);
  const [checked, setChecked] = useState(true);
  const [all, setAll] = useState([]);
  const getFedd = async () => {
    const data = await fetch("/datas.json");
    const response = await data.json();
    const Videos = response.Videos;
    const Songs = response.Songs;
    const Files = response.Files;
    setAll([...Videos, ...Songs, ...Files]);
  };

  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [wordSearched, setWordSearched] = useState(null);
  const HandleSearch = async (e) => {
    e.preventDefault();
    setSearch(value);
    console.log(search);
    setValue("");
    let looking = all;
    looking
      ?.map((look) => {
        if(look?.title?.toLowerCase().includes(search?.toLowerCase()))
        {
          setWordSearched(look);
        }
        return wordSearched;
      });  
   

  };
  const HandleChange = (e) => {
    if (e.target.checked) {
      const findLabel = e.target.value;
      dispatch(
        changeLabel({
          label: findLabel,
        })
      );
    }
  };
  useEffect(() => {
    getFedd();
    const unsubscribe = auth.onAuthStateChanged((Authuser) => {
      if (Authuser) {
        dispatch(
          login({
            uid: Authuser.uid,
            name: Authuser.displayName,
            photo: Authuser.photoURL,
            email: Authuser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  const authenticate = () => {
    auth
      .signInWithPopup(provider)
      .then((authuser) => {
        dispatch(login(authuser));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="feed">
      <div className="fedd__header">
        <div className="feed__header__top">
          <img src={logo} alt="Logo" />
          <form onSubmit={HandleSearch}>
            <div className="SearchBar">
              <input
                type="text"
                placeholder="Search ......"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <IconButton color="primary" onClick={HandleSearch}>
                <SearchIcon />
              </IconButton>
            </div>
          </form>
          {user ? (
            <button className="logout" onClick={signOut}>
              Logout
            </button>
          ) : (
            <button className="login" onClick={authenticate}>
              Login
            </button>
          )}
        </div>
        <div className="feed__header__bottom">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<AllInclusiveIcon />}
                  checkedIcon={<AllInclusiveIcon />}
                  name="filter"
                  value="All"
                  onChange={HandleChange}
                  checked={!checked}
                  onClick={() => setChecked(!checked)}
                />
              }
              label="All"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<LocalMoviesIcon />}
                  checkedIcon={<LocalMoviesIcon />}
                  name="filter"
                  value="Videos"
                  onChange={HandleChange}
                />
              }
              label="Videos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<AttachFileIcon />}
                  checkedIcon={<AttachFileIcon />}
                  name="filter"
                  value="Files"
                  onChange={HandleChange}
                />
              }
              label="Files"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<LibraryMusicIcon />}
                  checkedIcon={<LibraryMusicIcon />}
                  name="filter"
                  value="Songs"
                  onChange={HandleChange}
                />
              }
              label="Songs"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<DesktopMacIcon />}
                  checkedIcon={<DesktopMacIcon />}
                  name="filter"
                  value="Applications"
                  onChange={HandleChange}
                />
              }
              label="Applications"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<GamepadIcon />}
                  checkedIcon={<GamepadIcon />}
                  name="filter"
                  value="Videos Games"
                  onChange={HandleChange}
                />
              }
              label="Videos Games"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<MapIcon />}
                  checkedIcon={<MapIcon />}
                  name="filter"
                  value="Gps"
                  onChange={HandleChange}
                />
              }
              label="Gps"
            />
          </FormGroup>
        </div>
      </div>
      <div className="feed__body">
        <p
          style={{
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            marginLeft: "4px",
          }}
        >
          <AllInclusiveIcon /> {label ? label : "All"}{" "}
        </p>
        <div className="feed__bodyDonation">
          {wordSearched && label !== "All" ? (
            <Donation
              id={wordSearched?.key}
              key={wordSearched?.key}
              src={wordSearched?.donatorAvatar}
              donatorName={wordSearched?.donatorName}
              uploadImage={wordSearched?.backgroundImage}
              description={wordSearched?.description}
              word={wordSearched?.word}
              title={wordSearched?.title}
              addDownloadList="Add to download list"
              size={wordSearched?.size}
            />
          ) : (
            all?.map((all) => (
              <Donation
                id={all?.key}
                key={all?.key}
                src={all?.donatorAvatar}
                donatorName={all?.donatorName}
                uploadImage={all?.backgroundImage}
                description={all?.description}
                word={all?.word}
                title={all?.title}
                addDownloadList="Add to download list"
                size={all?.size}
              />
            ))
          )}
          
        </div>
      </div>
    </div>
  );
};
export default Feed;
