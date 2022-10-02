import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./login-page.css";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleRectangle2Click = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onGenGenTextClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onRedirectToRegisterClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login-page-div">
      <b className="login-to-your-account">Login to your account</b>
      <div className="email-address-div1">
        <div className="enter-password-div">Email Address</div>
        <div className="group-div30">
          <div className="yournameemailcom-div1">yourname@email.com</div>
          <div className="rectangle-div25" />
        </div>
      </div>
      <div className="communitylocation-div2">
        <div className="community-div">Community</div>
        <div className="optional-div1">(Optional)</div>
        <div className="group-div31">
          <div className="yournameemailcom-div1">Select Location</div>
          <div className="rectangle-div25" />
          <img className="group-icon21" alt="" src="../group19.svg" />
        </div>
      </div>
      <div className="password-div">
        <div className="enter-password-div">Enter password</div>
        <img className="group-icon22" alt="" src="../group-80811.svg" />
      </div>
      <div className="login-button-div" onClick={onLoginButtonContainerClick}>
        <div className="rectangle-div27" onClick={onRectangleRectangle2Click} />
        <b className="login-b1">Login</b>
      </div>
      <b className="gengen-b2" onClick={onGenGenTextClick}>
        GenGen
      </b>
      <div className="redirect-to-register" onClick={onRedirectToRegisterClick}>
        <b className="enter-password-div">Do not have an account?</b>
        <b className="register-b">Register</b>
      </div>
      <div className="orange-block-div" />
      <div className="quote-div">
        <b className="john-bunyan1">John Bunyan</b>
        <b className="b3">-</b>
        <b className="you-have-not-lived-today-until1">
          “You have not lived today until you have done something for someone
          who can never repay you.”
        </b>
      </div>
      <img className="stroke-5-icon2" alt="" src="../stroke-52.svg" />
    </div>
  );
};

export default LoginPage;
