import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./registeration-page.css";

const RegisterationPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer12Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onGenGenTextClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="registeration-page-div">
      <div className="rectangle-div" />
      <div className="group-div">
        <b className="b">-</b>
      </div>
      <b className="lets-get-you-started">Let’s get you started</b>
      <div className="frame-div" />
      <div className="group-div1">
        <div className="b">Last Name</div>
        <div className="group-div2">
          <div className="doe-div">Doe</div>
          <div className="rectangle-div1" />
        </div>
      </div>
      <div className="group-div3">
        <div className="b">First Name</div>
        <div className="group-div2">
          <div className="doe-div">John</div>
          <div className="rectangle-div1" />
        </div>
      </div>
      <div className="group-div5">
        <div className="b">Email Address</div>
        <div className="group-div2">
          <div className="doe-div">yourname@email.com</div>
          <div className="rectangle-div1" />
        </div>
      </div>
      <div className="group-div7">
        <div className="b">Phone number</div>
        <div className="group-div2">
          <div className="div">+234</div>
          <div className="div1">800</div>
          <div className="div2">9700</div>
          <div className="div3">2738</div>
          <div className="rectangle-div1" />
          <img className="group-icon" alt="" src="../group-8079.svg" />
        </div>
      </div>
      <div className="group-div9">
        <div className="location-div">Location</div>
        <div className="optional-div">(Optional)</div>
        <div className="group-div10">
          <div className="doe-div">Select Location</div>
          <div className="rectangle-div1" />
          <img className="group-icon1" alt="" src="../group.svg" />
        </div>
      </div>
      <div className="group-div11">
        <div className="create-password-div">Create password</div>
        <div className="password-must-contain-a-minimu">
          Password must contain a minimum of 8 characters
        </div>
        <div className="password-must-contain-at-least">
          Password must contain at least one symbol e.g. @, !
        </div>
        <img className="group-icon2" alt="" src="../group-8081.svg" />
      </div>
      <div className="group-div12" onClick={onGroupContainer12Click}>
        <div className="rectangle-div6" />
        <b className="sign-up-b">Sign Up</b>
      </div>
      <b className="gengen-b" onClick={onGenGenTextClick}>
        GenGen
      </b>
      <div className="group-div13">
        <b className="b">Already a user?</b>
        <b className="login-b" onClick={onLoginTextClick}>
          Login
        </b>
      </div>
      <img className="stroke-5-icon" alt="" src="../stroke-5.svg" />
      <b className="you-have-not-lived-today-until">
        “You have not lived today until you have done something for someone who
        can never repay you.”
      </b>
      <div className="group-div14">
        <b className="john-bunyan">John Bunyan</b>
        <b className="location-div">-</b>
      </div>
    </div>
  );
};

export default RegisterationPage;
