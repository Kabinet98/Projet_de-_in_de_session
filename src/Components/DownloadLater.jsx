import "../Css/DownloadLater.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import {
  removeFromList,
} from "../app/features/DownloadLaterSlice";
const DownloadLater = ({ id, src, title, description, addedDate }) => {
  const dispatch = useDispatch();
  const DescriptionSize = (description) => {
    if (description) {
      return description.length <= 90
        ? description
        : description.slice(0, 90) + ".......";
    }
  };
  return (
      <div className="bigContent">

    <Link to={`fileDescription/${id}`} className="downloadLater">
      <div className="downloadLater__description">
        <div className="downloadLater__delete__top">
          <div className="downloadLater__delete_top_description">
            <img src={src} alt={src} />
          </div>
          <div className="title">
            <span>{title} </span>
            <span>{DescriptionSize(description)} </span>
          </div>
        </div>
      </div>
    </Link>
        <div className="downloadLater__delete__bottom">
          <small>{addedDate} </small>
          <div className="downloadLater__delete__bottom__options">
            <IconButton color="secondary" onClick={() =>dispatch(removeFromList({id}))}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
  );
};
export default DownloadLater;
