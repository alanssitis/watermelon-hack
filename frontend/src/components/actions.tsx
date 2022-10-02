import { FunctionComponent } from "react";
import "./actions.css";

type ActionsType = {
  onClose?: () => void;
};

const Actions: FunctionComponent<ActionsType> = ({ onClose }) => {
  return (
    <div className="actions-div1">
      <div className="component-8-div6">
        <div className="rectangle-div13" />
        <div className="alan-div6">Alan</div>
        <img className="mask-group-icon6" alt="" src="../mask-group6@2x.png" />
        <img className="vector-icon6" alt="" src="../vector6.svg" />
        <img className="group-icon9" alt="" src="../group7.svg" />
      </div>
      <div className="your-listing-div6">*Your listing*</div>
      <div className="pending-invitations-div">
        <div className="pending-assistance-div">Pending assistance</div>
      </div>
      <div className="component-9-div">
        <div className="rectangle-div14" />
        <div className="sarah-div">Sarah</div>
        <img className="mask-group-icon7" alt="" src="../mask-group7@2x.png" />
        <img className="vector-icon7" alt="" src="../vector6.svg" />
        <img className="group-icon10" alt="" src="../group8.svg" />
      </div>
      <div className="component-10-div">
        <div className="rectangle-div13" />
        <div className="jack-div">Jack</div>
        <img className="mask-group-icon8" alt="" src="../mask-group8@2x.png" />
        <img className="vector-icon8" alt="" src="../vector6.svg" />
        <img className="group-icon11" alt="" src="../group9.svg" />
      </div>
      <div className="your-listing-div7">*Your listing*</div>
      <div className="your-listing-div8">*Your listing*</div>
      <div className="component-11-div">
        <div className="rectangle-div13" />
        <div className="alan-div6">Alan</div>
        <img className="mask-group-icon6" alt="" src="../mask-group9@2x.png" />
        <img className="vector-icon6" alt="" src="../vector6.svg" />
        <img className="group-icon12" alt="" src="../group10.svg" />
      </div>
      <div className="your-listing-div9">*Your listing*</div>
      <div className="pending-invitations-div1">
        <div className="pending-assistance-div">Pending requests</div>
      </div>
      <div className="component-12-div">
        <div className="rectangle-div14" />
        <div className="sarah-div">Sarah</div>
        <img className="mask-group-icon7" alt="" src="../mask-group10@2x.png" />
        <img className="vector-icon7" alt="" src="../vector6.svg" />
        <img className="group-icon13" alt="" src="../group11.svg" />
      </div>
      <div className="component-13-div">
        <div className="rectangle-div13" />
        <div className="jack-div">Jack</div>
        <img className="mask-group-icon8" alt="" src="../mask-group11@2x.png" />
        <img className="vector-icon8" alt="" src="../vector6.svg" />
        <img className="group-icon14" alt="" src="../group12.svg" />
      </div>
      <div className="your-listing-div10">*Your listing*</div>
    </div>
  );
};

export default Actions;
