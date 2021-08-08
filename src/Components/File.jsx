import FileDescription from "./FileDescription";
import MessageIcon from "@material-ui/icons/Message";
import { Avatar, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "../Css/File.css";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../app/features/UserSlice";
//import macaddress from "macaddress";

const File = () => {
  const [all, setAll] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const user = useSelector(userSelector);
  const getFedd = async () => {
    const data = await fetch("/datas.json");
    const response = await data.json();
    const Videos = response.Videos;
    const Songs = response.Songs;
    const Files = response.Files;
    setAll([...Videos, ...Songs, ...Files]);
  };

  const { key } = useParams();
  /* const getMacAddress = () => {
   macaddress.one(function (err, mac) {
    console.log("Mac address for this host: %s", mac);
   });
  }; */
  useEffect(() => {
    getFedd();
  }, []);

  return (
    <div className="file">
      {all
        .filter((all) => all?.key === key)
        .map((all, key) => (
          <FileDescription
            key={key}
            backgroundImg={all.backgroundImage}
            donatorSrc={all.donatorAvatar}
            description={all.description}
            word={all.word}
            donatorName={all.donatorName}
            title={all.title}
            filePlace={all.file}
          />
        ))}

      <h2>
        {" "}
        <MessageIcon /> Comments Space
      </h2>
      <div className="comments__done">
        {all
          .filter((all) => all.key === key)
          .map((all, key) =>
            all.comments.map((comment) => (
              <Comments
                key={key}
                src={comment.commentatorAvatar}
                comment={comment.message}
                timestamp={comment.timestamp}
              />
            ))
          )}
      </div>
      <form>
        <div className="comment__section">
          <Avatar src={user?.photo} />
          <form className="comment__input">
            <input
              type="text"
              placeholder="Comment"
              className="comment"
              maxLength="150"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
            <IconButton color="primary">
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </form>
    </div>
  );
};
export default File;
