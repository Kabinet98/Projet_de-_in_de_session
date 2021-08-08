import { Avatar, Button } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Ethereum from "../Images/icons8-ethereum.svg";
import "../Css/FileDescription.css";
import Web3 from "web3";
import { useState } from "react";
import { Link } from "react-router-dom";
const FileDescription = ({
  backgroundImg,
  donatorSrc,
  donatorName,
  title,
  description,
  filePlace,
  word,
  price,
}) => {
  const DescriptionSize = (description) => {
    return description.length <= 360
      ? description
      : description.slice(0, 1000) + ".......";
  };
  const [buy, setBuy] = useState(false);
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  const PayByEthereum = async () => {
    await web3.eth
      .sendTransaction({
        from: "0xB8921DE9F4d7d4839c075a06827EDE3F7D49b24B",
        to: "0xFa341905395cC6C1658eFDB6BCC853CBB9A93b13",
        value: "10000000000000000",
      })
      .on("transactionHash", function (hash) {
        console.log(hash);
        setBuy(true);
        console.log(buy);
      })
      .on("receipt", function (receipt) {
        console.log(receipt);
      })
      .on("confirmation", function (confirmationNumber, receipt) {})
      .on("error", console.error);
  };

  return (
    <div
      className="file__description"
      style={{
        background: `url(${backgroundImg}) no-repeat`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover/center",
      }}
    >
      <div className="file__description__info">
        <div className="description">
          <h1>{title} </h1>
          <p>{DescriptionSize(description)} </p>
          <div className="payment">
            {buy || word === "Download" ? (
              <>
                <Link
                  to={`/Videos/${filePlace}`}
                  target="_blank"
                  download
                  id="downloadLink"
                >
                  <CloudDownloadIcon style={{ marginRight: "1.2vh" }} />
                  Download
                </Link>{" "}
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={PayByEthereum}
                >
                  <Avatar src={Ethereum} /> Pay
                </Button>{" "}
              </>
            )}
            <div className="avatar__description">
              <Avatar src={donatorSrc} />
              <span>{donatorName} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileDescription;
