import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./create-post.css";

const CreatePost: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onJpnMin1ImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className="create-post-div">
      <img className="gradients-icon1" alt="" src="../gradients1.svg" />
      <div className="home-div1" onClick={onHomeTextClick}>
        Home
      </div>
      <div className="my-profile-div1" onClick={onMyProfileTextClick}>
        My Profile
      </div>
      <div className="user-div1">
        <div className="justinexamplecom-div1">justin@example.com</div>
        <img
          className="jpn-min-1-icon2"
          alt=""
          src="../jpnmin-11@2x.png"
          onClick={onJpnMin1ImageClick}
        />
      </div>
      <b className="create-generosity-b">Create Generosity</b>
      <b className="title-b">Title</b>
      <b className="tag-b">Tag</b>
      <b className="description-b">Description</b>
      <div className="input-div">
        <div className="rectangle-div28" />
        <div className="once-upon-a-time">Once upon a time...</div>
        <div className="div4">180</div>
      </div>
      <div className="input-div1">
        <div className="rectangle-div29" />
        <div className="mechanics-div1">Mechanics...</div>
      </div>
      <div className="input-div2">
        <div className="rectangle-div30" />
        <div className="the-start-of-a-wonderful-story">
          The start of a wonderful story...
        </div>
        <div className="div5">360</div>
      </div>
      <div className="post-button-div">
        <div className="rectangle-div31" />
        <b className="post-b">Post</b>
      </div>
      <div className="options-div">
        <div className="rectangle-div32" />
        <img className="frame-icon" alt="" src="../frame.svg" />
      </div>
    </div>
  );
};

export default CreatePost;
