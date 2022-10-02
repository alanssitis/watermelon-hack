import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Actions from "../components/actions";
import PortalPopup from "../components/portal-popup";
import "./main-page.css";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isActionsOpen, setActionsOpen] = useState(false);

  const onLogoutTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const openActions = useCallback(() => {
    setActionsOpen(true);
  }, []);

  const closeActions = useCallback(() => {
    setActionsOpen(false);
  }, []);

  const onExploreTextClick = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onGroupContainer15Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  return (
    <>
      <div className="main-page-div">
        <div className="nav-bar-div">
          <div className="logout-div1" onClick={onLogoutTextClick}>
            Logout
          </div>
          <div className="pendings-div" onClick={openActions}>
            Actions
          </div>
          <div className="my-profile-div2">My Profile</div>
          <div className="explore-div1" onClick={onExploreTextClick}>
            Explore
          </div>
        </div>
        <div className="logo-div">
          <div className="gengen-div">GenGen</div>
          <img className="butterfly-icon" alt="" src="../butterfly.svg" />
        </div>
        <div className="todays-gen-div">
          <div className="group-div32">
            <div className="featured-gen-ers-div">Featured Gen-ers</div>
          </div>
          <div className="check-out-todays-offers-of-ge">
            Check out today’s offers of Generosity.
          </div>
        </div>
        <div className="why-try-gengen">
          <div className="rectangle-div33" />
          <div className="why-try-gengen1">
            <span>{`Why try `}</span>
            <span className="gengen-span">GenGen?</span>
          </div>
          <div className="quick-communication-div">Quick communication</div>
          <div className="smooth-browsing-div">Smooth Browsing</div>
          <div className="swift-reviews-div">SwiFT Reviews</div>
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="rectangle-div36" />
          <div className="easy-experience-to-discover-of">
            Easy experience to discover offerings perfect for your need
          </div>
          <div className="be-matched-with-your-volunteer">
            Be matched with your volunteer as soon as they approve
          </div>
          <div className="an-easy-and-efficient-review-s">
            An easy and efficient review system for requestees
          </div>
          <img
            className="vuesaxlinearcategory-2-icon"
            alt=""
            src="../vuesaxlinearcategory2.svg"
          />
          <img
            className="vuesaxlineargroup-icon"
            alt=""
            src="../vuesaxlineargroup.svg"
          />
          <img
            className="vuesaxlinearempty-wallet-tic-icon"
            alt=""
            src="../vuesaxlinearemptywallettick.svg"
          />
        </div>
        <div className="footer-div">
          <div className="group-div33">
            <div className="group-div33" />
            <div className="group-div34">
              <div className="group-div35">
                <div className="group-div36">
                  <div className="group-div37">
                    <div className="product-div">Product</div>
                    <div className="group-div38">
                      <div className="terms-div">Terms</div>
                      <div className="privacy-policy-div">Privacy Policy</div>
                      <div className="copyright-div">Copyright</div>
                    </div>
                  </div>
                  <div className="group-div39">
                    <div className="product-div">Pages</div>
                    <div className="group-div40">
                      <div className="terms-div">Store</div>
                      <div className="privacy-policy-div">Collections</div>
                      <div className="copyright-div">Support</div>
                    </div>
                  </div>
                </div>
                <div className="group-div41">
                  <div className="group-div42">
                    <div className="gengen-div1">GenGen</div>
                    <img
                      className="butterfly-icon1"
                      alt=""
                      src="../butterfly1.svg"
                    />
                  </div>
                  <div className="group-div43">
                    <div className="group-div44">
                      <img
                        className="vuesaxlinearsms-icon"
                        alt=""
                        src="../vuesaxlinearsms.svg"
                      />
                      <div className="enquirygengencom-div">
                        Enquiry@GenGen.com
                      </div>
                    </div>
                    <div className="group-div45">
                      <div className="enquirygengencom-div">Cambridge, MA</div>
                      <img
                        className="vuesaxlinearsms-icon"
                        alt=""
                        src="../vuesaxlinearlocation.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="group-div46">
                  <img className="group-icon23" alt="" src="../group-294.svg" />
                  <div className="product-div">Follow us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="intro-image-icon" alt="" src="../intro-image@2x.png" />
        <div className="intro-blurb-div">
          <div className="explore-offers-of-generous-act">
            Explore offers of generous actions and contribute to your own
            community today.
          </div>
          <div className="generate-generosity-in-your-co">
            <span>Generate Generosity</span>
            <span className="gengen-span"> in your Community</span>
          </div>
          <div className="group-div47" onClick={onGroupContainer15Click}>
            <div className="frame-div13">
              <div className="digitalise-with-ease12">Explore</div>
            </div>
          </div>
        </div>
        <div className="justin-example-div">
          <div className="rectangle-div38" />
          <div className="group-div48">
            <div className="justin-div">Justin</div>
            <div className="gens-div">21 Gens</div>
          </div>
        </div>
        <div className="alan-example-div">
          <div className="rectangle-div38" />
          <div className="group-div49">
            <div className="alan-div14">Alan</div>
            <div className="gens-div">18 Gens</div>
          </div>
        </div>
        <div className="sarah-example-div">
          <div className="rectangle-div38" />
          <div className="group-div50">
            <div className="sarah-div2">Sarah</div>
            <div className="gens-div">13 Gens</div>
          </div>
        </div>
      </div>
      {isActionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeActions}
        >
          <Actions onClose={closeActions} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainPage;
