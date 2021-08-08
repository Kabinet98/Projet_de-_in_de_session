import "../Css/DownloadList.css";
import QueueIcon from "@material-ui/icons/Queue";
import DownloadLater from "./DownloadLater";
import { useSelector } from "react-redux";
import { downloadListSelector } from "../app/features/DownloadLaterSlice";
const DownloadList = () => {
  const downloadList = useSelector(downloadListSelector);
  return (
    <div className="downloadList" style={{ padding: "6px" }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2vh",
          color: "#b3cde0",
        }}
      >
        {" "}
        <QueueIcon />
        <span style={{ marginLeft: "3px" }}> DownloadList </span>
      </span>
        {downloadList?.length === 0 && <span>Nothing inside</span>}

      {downloadList?.map((downloadList) => (
        <DownloadLater
          id={downloadList?.id}
          src={downloadList?.img}
          description={downloadList?.description}
          addedDate={downloadList?.date}
          title={downloadList?.title}
        />
      ))}
    </div>
  );
};
export default DownloadList;
