const CookieWarning = () => {
  const [show, setShow] = React.useState(true);
  const handle = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <div
          
          className="ot-sdk-row fixed-bottom navbar-light bg-light"
        >
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
      {!show && (
        <div className="container fixed-bottom bg-light">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <svg className="bi" width="30" height="24">
                  {/* <use xlink:href="#bootstrap" /> */}
                </svg>
              </a>
              <span className="mb-3 mb-md-0 text-muted">
                &copy; 2023 DiMuzio Bank, Inc
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#twitter" /> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#instagram" /> */}
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlink:href="#facebook" /> */}
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      )}
    </>
  );
};
