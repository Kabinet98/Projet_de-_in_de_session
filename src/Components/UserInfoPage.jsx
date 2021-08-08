import "../Css/UserInfoPage.css";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Avatar, IconButton } from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import clsx from "clsx";
const UserInfoPage = ({ src, name, email, phoneNumber, ethereumAddress }) => {
  const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      "&$checked": {
        color: purple[500],
      },
      "&$checked + $track": {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  const [state, setState] = useState({
    checkedA: true,
  });
  const [check, setCheck] = useState(true);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? setCheck(true) : setCheck(false);
  };
  const useStyles = makeStyles({
    sizeAvatar: {
      height: 200,
      width: 200,
    },
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      borderRadius: "50%",
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "#137cbd",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },
  });
  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const classes = useStyles();

  return (
    <div className="user__info__page">
      <div className="user__info__page__top">
        <div className="avatar">
          <Avatar src={src} className={classes.sizeAvatar} />
        </div>
        <span className="span">
          {" "}
          {name} - {email} - {phoneNumber} - {ethereumAddress}{" "}
        </span>
        <div className="role">
          <label style={{ fontSize: "18px" }}>Receiver</label>
          <FormGroup style={{ marginLeft: "10px" }}>
            <FormControlLabel
              control={
                <PurpleSwitch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Donator"
            />
          </FormGroup>
        </div>
      </div>
      <div className="user__info__page__bottom">
        {check ? (
          <>
            <form className="upload__file">
              <div className="ethereum__account">
                <input type="text" placeholder="Ethereum Address" required />
                <IconButton color="primary">
                  <DoneAllIcon />
                </IconButton>
              </div>
              <div className="input__file">
                <input type="file" id="file" required />
              </div>
              <div className="file_category">
                <label id="category">Select Category</label>
                <select htmlFor="category" id="select">
                  <optgroup label="Videos">
                    <option value="Animation" key="0">
                      Animation
                    </option>
                    <option value="Courses" key="1">
                      Courses
                    </option>
                    <option value="Series Animation" key="2">
                      Series Animation
                    </option>
                    <option value="Music Videos" key="3">
                      Music Videos
                    </option>
                    <option value="Comedy Videos" key="4">
                      Comedy Videos
                    </option>
                    <option value="Movies" key="5">
                      Movies
                    </option>
                    <option value="Tv Emissions" key="6">
                      Tv Emission
                    </option>
                  </optgroup>
                  <optgroup label="Files">
                    <option value="Audio" key="7">
                      Audio
                    </option>
                    <option value="Comics" key="8">
                      Comics
                    </option>
                    <option value="Books" key="9">
                      Books
                    </option>
                    <option value="Mangas" key="10">
                      Mangas
                    </option>
                  </optgroup>
                  <optgroup label="Songs">
                    <option value="Music" key="11">
                      Music
                    </option>
                    <option value="Podcast Radio" key="12">
                      Podcast Radio
                    </option>
                    <option value="Samples" key="13">
                      Samples
                    </option>
                  </optgroup>
                  <optgroup label="Applications">
                    <option value="Windows" key="14">
                      Windows
                    </option>
                    <option value="Mac OS" key="15">
                      Mac OS
                    </option>
                    <option value="Linux" key="16">
                      Linux
                    </option>
                    <option value="IOS" key="17">
                      IOS
                    </option>
                    <option value="Android" key="18">
                      Android
                    </option>
                    <option value="Formation" key="19">
                    Formation
                    </option>
                    <option value="Others" key="20">
                    Others
                    </option>
                    <option value="Smartphone" key="21">
                    Smartphone
                    </option>
                    <option value="Nintendo" key="22">
                    Nintendo
                    </option>
                  </optgroup>
                  <optgroup label="Video Games">
                  <option value="Windows" key="23">
                      Windows
                    </option>
                    <option value="Mac OS" key="24">
                      Mac OS
                    </option>
                    <option value="Linux" key="25">
                      Linux
                    </option>
                    <option value="IOS" key="26">
                      IOS
                    </option>
                    <option value="Android" key="27">
                      Android
                    </option>
                    <option value="Smartphone" key="28">
                    Smartphone
                    </option>
                    <option value="Nintendo" key="29">
                    Nintendo
                    </option>
                  </optgroup>
                  <optgroup label="Gps">
                    <option value="Applications" key="30">
                    Applications
                    </option>
                    <option value="Cartes" key="31">
                    Cartes
                    </option>
                    <option value="Others" key="32">
                    Others
                    </option>
                    
                  </optgroup>
                </select>
              </div>
              <textarea
                rows="10"
                style={{
                  outline: "none",
                  fontSize: "16px",
                  borderRadius: "7px",
                }}
                required
              />
              <RadioGroup
                defaultValue="Donate"
                aria-label="pricing"
                name="Donate"
              >
                <FormControlLabel
                  value="Donate"
                  control={<StyledRadio />}
                  label="Donate"
                />
                <FormControlLabel
                  value="Sell"
                  control={<StyledRadio />}
                  label="Sell"
                />
              </RadioGroup>
              <div className="price">
                <input type="text" placeholder="Price" required />
              </div>
              <div className="bouton">
                <IconButton color="primary" type="submit">
                  <DoneAllIcon /> <span> Upload</span>
                </IconButton>
              </div>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default UserInfoPage;
