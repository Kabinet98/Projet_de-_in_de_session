import { Avatar } from "@material-ui/core";
import "../Css/Comments.css";
const Comments = ({ src, comment, timestamp }) => {
  return (
    <div className="comments">
      <Avatar src={src} />
      <input type="text" value={comment} disabled  className="doneComment" />
      <small>{timestamp} </small>
    </div>
  );
};
export default Comments;
