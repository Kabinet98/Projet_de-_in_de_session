import { Avatar } from "@material-ui/core";

import "../Css/Donation.css";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { useDispatch } from "react-redux";
import { addToList } from "../app/features/DownloadLaterSlice";
import {Link} from 'react-router-dom';
const Donation = ({
  id,
  src,
  donatorName,
  size,
  uploadImage,
  description,
  word,
  addDownloadList,
  title
}) => {
  const DescriptionSize = (description) => {
    return description?.length <= 160
      ? description
      : description?.slice(0, 160) + ".......";
  };
  const dispatch = useDispatch();
  
  const addToDownloadList = () => {
    dispatch(
      addToList({
        id: id,
        img: uploadImage,
        title: title,
        description: description,
        date: new Date().toUTCString(),
      })
    );
  };

  return (
    <div className="donation">
      <div className="donation__header">
        <Avatar src={src} style={{ marginRight: "10px" }} />
        <span>{donatorName} </span>
        <span style={{ display: "none" }}>{id} </span>
        <span
          style={{
            fontWeight: "bold",
            color: "crimson",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <StarOutlineIcon /> {size}{" "}
        </span>
      </div>
      <div className="donation__body">
        <img src={uploadImage} alt="" className="img" />
      </div>
      <div className="donation__bottom">
        <p style={{fontWeight:'bold', fontSize:"22px", marginBottom:"2px"}}>{title} </p>
        <p> {DescriptionSize(description)} </p>
        <Link to={`fileDescription/${id}`} className="button">
          {word}{" "}
        </Link>
        <button className="addDownloadLists" onClick={addToDownloadList}>
          {addDownloadList}{" "}
        </button>
      </div>
    </div>
  );
};
export default Donation;
