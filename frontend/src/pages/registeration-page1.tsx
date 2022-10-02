import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./registeration-page1.css";

const RegisterationPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="registeration-page-div1">
      <div className="rectangle-div41" />
      <b className="you-have-not-lived-today-until2">
        “You have not lived today until you have done something for someone who
        can never repay you.”
      </b>
      <div className="group-div51">
        <b className="john-bunyan2">John Bunyan</b>
        <b className="b4">-</b>
      </div>
      <div className="group-div52">
        <b className="b4">-</b>
      </div>
      <b className="lets-get-you-started1">Let’s get you started</b>
      <div className="frame-div14">
        <b className="learn-more-b">Learn More</b>
      </div>
      <div className="group-div53">
        <div className="b4">Last Name</div>
        <div className="group-div54">
          <div className="doe-div1">Doe</div>
          <div className="rectangle-div42" />
        </div>
      </div>
      <div className="group-div55">
        <div className="b4">First Name</div>
        <div className="group-div54">
          <div className="doe-div1">John</div>
          <div className="rectangle-div42" />
        </div>
      </div>
      <div className="group-div57">
        <div className="b4">Email Address</div>
        <div className="group-div54">
          <div className="doe-div1">yourname@email.com</div>
          <div className="rectangle-div42" />
        </div>
      </div>
      <div className="group-div59">
        <div className="b4">Phone number</div>
        <div className="group-div54">
          <div className="div6">+234</div>
          <div className="div7">800</div>
          <div className="div8">9700</div>
          <div className="div9">2738</div>
          <div className="rectangle-div42" />
          <img className="group-icon24" alt="" src="../group-80791.svg" />
        </div>
      </div>
      <div className="group-div61">
        <div className="location-div1">Location</div>
        <div className="optional-div2">(Optional)</div>
        <div className="group-div62">
          <div className="doe-div1">Select Location</div>
          <div className="rectangle-div42" />
          <img className="group-icon25" alt="" src="../group20.svg" />
        </div>
      </div>
      <div className="group-div63">
        <div className="create-password-div1">Create password</div>
        <div className="password-must-contain-a-minimu1">
          Password must contain a minimum of 8 characters
        </div>
        <div className="password-must-contain-at-least1">
          Password must contain at least one symbol e.g. @, !
        </div>
        <img className="group-icon26" alt="" src="../group-80812.svg" />
      </div>
      <div className="group-div64">
        <div className="rectangle-div47" />
        <b className="sign-up-b1">Sign Up</b>
      </div>
      <b className="gengen-b3">GenGen</b>
      <div className="group-div65">
        <b className="b4">Already a user?</b>
        <b className="login-b2" onClick={onLoginTextClick}>
          Login
        </b>
      </div>
      <img className="stroke-5-icon3" alt="" src="../stroke-53.svg" />
    </div>
  );
};

export default RegisterationPage1;
