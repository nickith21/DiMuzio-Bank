const CookieWarning = () => {
  const [show, setShow] = React.useState(true);
  const handle = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <div className="ot-sdk-row fixed-bottom navbar-light bg-light">
          <div
            id="onetrust-group-container"
            className="ot-sdk-eight ot-sdk-columns"
          >
            <div className="banner_logo"></div>
            <div id="onetrust-policy">
              <p id="onetrust-policy-text">
                This website uses cookies to enhance user experience and to
                analyze performance and traffic on our website. We also share
                information about your use of our site with our social media,
                advertising and analytics partners. To learn more please visit
                our{" "}
                <a
                  href="#/cookiePolicy/"
                  aria-label="More information about your privacy"
                >
                  Cookie Notice
                </a>
              </p>
            </div>
          </div>
          <div
            id="onetrust-button-group-parent"
            className="ot-sdk-three ot-sdk-columns"
          >
            <div id="onetrust-button-group">
              {" "}
              <button
                className="btn btn-danger"
                type="button"
                id="onetrust-accept-btn-handler"
                onClick={handle}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
