import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./profile-page.css";

const ProfilePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGenGenTextClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  return (
    <div className="profile-page-div">
      <img className="rectangle-icon" alt="" src="../rectangle-71.svg" />
      <div className="group-div15">
        <b className="b2">-</b>
      </div>
      <b className="gengen-b1" onClick={onGenGenTextClick}>
        GenGen
      </b>
      <img className="stroke-5-icon1" alt="" src="../stroke-51.svg" />
      <div className="user-options-div">
        <div className="action-button-div">
          <div className="actions-div">Actions</div>
          <img className="add-icon" alt="" src="../add.svg" />
        </div>
        <div className="avatar-div">
          <div className="seperator-div" />
          <div className="communitylocation-div">Cambridge, MA</div>
          <b className="profile-name-b">Justin</b>
        </div>
        <div className="logout-button-div">
          <div className="logout-div">Logout</div>
          <img className="block-icon" alt="" src="../block.svg" />
        </div>
        <img className="jpn-min-1-icon" alt="" src="../jpnmin-1@2x.png" />
      </div>
      <div className="communitylocation-div1">12 Genz</div>
      <div className="group-div16">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group@2x.png" />
          <img className="vector-icon" alt="" src="../vector.svg" />
          <img className="group-icon3" alt="" src="../group1.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
      <div className="group-div17">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group@2x.png" />
          <img className="vector-icon" alt="" src="../vector.svg" />
          <img className="group-icon3" alt="" src="../group2.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
      <div className="group-div18">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group2@2x.png" />
          <img className="vector-icon" alt="" src="../vector2.svg" />
          <img className="group-icon3" alt="" src="../group3.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
      <div className="group-div19">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group3@2x.png" />
          <img className="vector-icon" alt="" src="../vector3.svg" />
          <img className="group-icon3" alt="" src="../group4.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
      <div className="group-div20">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group3@2x.png" />
          <img className="vector-icon" alt="" src="../vector3.svg" />
          <img className="group-icon3" alt="" src="../group5.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
      <div className="group-div21">
        <div className="component-8-div">
          <div className="rectangle-div7" />
          <div className="alan-div">Alan</div>
          <img className="mask-group-icon" alt="" src="../mask-group5@2x.png" />
          <img className="vector-icon" alt="" src="../vector5.svg" />
          <img className="group-icon3" alt="" src="../group6.svg" />
        </div>
        <div className="frame-div1">
          <div className="digitalise-with-ease">Request</div>
        </div>
        <div className="your-listing-div">*Your listing*</div>
      </div>
    </div>
  );
};

export default ProfilePage;
