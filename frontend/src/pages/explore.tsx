import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";

const Explore: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='otherText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='funLovingText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='culineryText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mechanicsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='activitiesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='academicsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='housekeepingText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='wellbeingText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="explore-div">
      <img className="gradients-icon" alt="" src="../gradients.svg" />
      <div className="home-div" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="my-profile-div" onClick={onMyProfileTextClick}>
        My Profile
      </div>
      <div className="user-div">
        <div className="justinexamplecom-div">justin@example.com</div>
        <img className="jpn-min-1-icon1" alt="" src="../jpnmin-11@2x.png" />
      </div>
      <b className="explore-generosity-b">Explore Generosity</b>
      <b className="wellbeing" data-scroll-to="wellbeingText">
        Wellbeing
      </b>
      <b className="other-b" data-scroll-to="otherText">
        Other
      </b>
      <b className="culinery-b" data-scroll-to="culineryText">
        Culinery
      </b>
      <b className="fun-loving-b" data-scroll-to="funLovingText">
        Fun-loving
      </b>
      <b className="housekeeping-b" data-scroll-to="housekeepingText">
        Housekeeping
      </b>
      <b className="academics-b" data-scroll-to="academicsText">
        Academics
      </b>
      <b className="mechanics-b" data-scroll-to="mechanicsText">
        Mechanics
      </b>
      <b className="activities-b" data-scroll-to="activitiesText">
        Activities
      </b>
      <div className="group-div22">
        <div className="choose-based-on-categories">
          <span>{`Choose based on `}</span>
          <span className="categories-span">Categories</span>
        </div>
        <div className="group-div23">
          <img
            className="rectangle-icon1"
            alt=""
            src="../rectangle-142@2x.png"
            onClick={onRectangleImageClick}
          />
          <img
            className="rectangle-icon2"
            alt=""
            src="../rectangle-141@2x.png"
            onClick={onRectangleImage1Click}
          />
          <img
            className="rectangle-icon3"
            alt=""
            src="../rectangle-140@2x.png"
            onClick={onRectangleImage2Click}
          />
          <img
            className="rectangle-icon4"
            alt=""
            src="../rectangle-139@2x.png"
            onClick={onRectangleImage3Click}
          />
          <img
            className="rectangle-icon5"
            alt=""
            src="../rectangle-1411@2x.png"
            onClick={onRectangleImage4Click}
          />
          <img
            className="rectangle-icon6"
            alt=""
            src="../rectangle-1412@2x.png"
            onClick={onRectangleImage5Click}
          />
          <img
            className="rectangle-icon7"
            alt=""
            src="../rectangle-1401@2x.png"
            onClick={onRectangleImage6Click}
          />
          <img
            className="rectangle-icon8"
            alt=""
            src="../rectangle-1391@2x.png"
            onClick={onRectangleImage7Click}
          />
          <div className="other-div">Other</div>
          <div className="fun-loving-div">Fun-loving</div>
          <div className="culinary-div">Culinary</div>
          <div className="mechanics-div">Mechanics</div>
          <div className="activities-div">Activities</div>
          <div className="academics-div">Academics</div>
          <div className="housekeeping-div">Housekeeping</div>
          <div className="wellbeing-div">Wellbeing</div>
        </div>
      </div>
      <div className="group-div24">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group13.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
      <div className="group-div25">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group14.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
      <div className="group-div26">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group15.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
      <div className="group-div27">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group16.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
      <div className="group-div28">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group17.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
      <div className="group-div29">
        <div className="component-8-div7">
          <div className="rectangle-div19" />
          <div className="alan-div8">Alan</div>
          <img
            className="mask-group-icon12"
            alt=""
            src="../mask-group12@2x.png"
          />
          <img className="vector-icon12" alt="" src="../vector6.svg" />
          <img className="group-icon15" alt="" src="../group18.svg" />
        </div>
        <div className="frame-div7">
          <div className="digitalise-with-ease6">Request</div>
        </div>
        <div className="your-listing-div11">*Your listing*</div>
      </div>
    </div>
  );
};

export default Explore;
