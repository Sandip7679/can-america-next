"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderBottom = ({ siteSetting }) => {
  const [scrolled, setScrolled] = useState(false);
  const [immigrationServices, setImmigrationServices] = useState([]);


  // const dispatch = useDispatch();
    // const [siteSetting, setSiteSetting] = useState({});
    // const [studyPrograms, setStudyPrograms] = useState([]);
    // const [temporaryResidence, setTemporaryResidence] = useState([]);
    // const [workPermit, setWorkPermit] = useState([]);
    // // const [permanentResidence, setPermanentResidence] = useState([])
    // const [familySponsorship, setFamilySponsorship] = useState([]);
    // const [businessImmigration, setBusinessImmigration] = useState([]);
    // const [expressEntry, setExpressEntry] = useState([]);
    // const [provincialNomineeProgram, setProvincialNomineeProgram] = useState([]);
    // const [otherServices, setOtherServices] = useState([]);
    // const validPaths = ["/study-in-canada", "/study-in-usa", "/study-in-the-uk"];
  
    // const [scrolled, setScrolled] = useState(false);
    // useEffect(() => {
    //   (async () => {
    //     const [sitesettingdata, studyProgramData, serviceData] =
    //       await Promise.all([
    //         dispatch(SiteSetting()).unwrap(),
    //         dispatch(StudyProgramThunk()).unwrap(),
    //         dispatch(CategoriesThunk()).unwrap(),
    //       ]);
    //     setSiteSetting(sitesettingdata);
    //     setStudyPrograms(studyProgramData);
    //     setTemporaryResidence(
    //       serviceData["Temporary Residence"][0]["Temporary Residence"]
    //     );
    //     setWorkPermit(serviceData["Work Permit"][0]["Work Permit"]);
    //     // setPermanentResidence(serviceData["Permanent Residence"][0]["Permanent Residence"]);
    //     setExpressEntry(serviceData["Express Entry"][0]["Express Entry"]);
    //     setProvincialNomineeProgram(
    //       serviceData["Provincial Nominee Program"][0][
    //         "Provincial Nominee Program"
    //       ]
    //     );
    //     setFamilySponsorship(
    //       serviceData["Family Sponsorship"][0]["Family Sponsorship"]
    //     );
    //     setBusinessImmigration(
    //       serviceData["Business Immigration"][0]["Business Immigration"]
    //     );
    //     setOtherServices(serviceData["Other Services"][0]["Other Services"]);
    //   })();
  
    // }, []);

  useEffect(() => {
    
    fetch(`/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log("categories data", data);
        setImmigrationServices(data);
      });

    // let ImmigrationServices = buildCategory(categories);
    console.log("ImmigrationServices", immigrationServices);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <div className={scrolled ? "header headerFixed" : "header"}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-md-block">
          <div class="container-fluid">
            <Link to={"/"} class="navbar-brand">
              <img src={siteSetting?.logo} alt="" class="logo" />
            </Link>
            <div class="menu-main-menu">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <a href="#">
                    About{" "}
                    <small>
                      <i class="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <ul class="sub-dropdown">
                    <li>
                      <Link to={"/why-can-america"}>Why Can-America</Link>
                    </li>
                    <li>
                      <Link to={"/who-we-are"}>Who We Are</Link>
                    </li>
                    <li>
                      <Link to={"/our-team"}>Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/testimonials"}>Testimonials</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Immigration Services{" "}
                    <small>
                      <i class="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <div class="sub-dropdown megamenu">
                    <div class="row">
                      <div class="col-md-3">
                        <h3 class="menu-heading">
                          <Link to={"/temporary-residence"}>
                            Temporary Residence
                          </Link>
                        </h3>

                        <ul>
                       
                          {temporaryResidence?.map((item) => (
                            <li key={item._id}>
                              <Link to={`/temporary-residence/${item.slug}/`}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <a class="menu-sub-heading">
                              <Link to="/work-permit">Work Permit</Link>
                            </a>
                          </li>

                         
                          {workPermit?.map((item) => (
                            <li key={item._id}>
                              <Link to={`/work-permit/${item.slug}/`}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <h3 class="menu-heading">
                          <Link to={"/permanent-residence"}>
                            Permanent Residence
                          </Link>
                        </h3>
                        <div class="row">
                          <div class="col-md-6">
                            <ul>
                              <li>
                                <a class="menu-sub-heading">
                                  <Link to={"/express-entry"}>
                                    Express Entry
                                  </Link>
                                </a>
                              </li>
                              {expressEntry?.map((item) => (
                                <li key={item._id}>
                                  <Link to={`/express-entry/${item.slug}/`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}

                              <li>
                                <a class="menu-sub-heading">
                                  <Link to={"/provincial-nominee-program"}>
                                    Provincial Nominee Program
                                  </Link>
                                </a>
                              </li>
                              {provincialNomineeProgram?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/provincial-nominee-program/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div class="col-md-6">
                            <ul>
                              <li>
                                <a class="menu-sub-heading">
                                  <Link to={"/family-sponsorship"}>
                                    Family Sponsorship
                                  </Link>
                                </a>
                              </li>
                              {familySponsorship?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/family-sponsorship/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <a class="menu-sub-heading">
                                  <Link to={"/business-immigration"}>
                                    Business Immigration
                                  </Link>
                                </a>
                              </li>
                              {businessImmigration?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/business-immigration/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <h3 class="menu-heading">
                          <Link to={"/other-services"}>Other Services</Link>
                        </h3>
                        <ul>
                          {otherServices?.map((item) => (
                            <li key={item._id}>
                              <Link to={`/${item.slug}/`}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Study Programs{" "}
                    <small>
                      <i class="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <ul className="sub-dropdown">
                    {studyPrograms.map((program) => {
                      const slug = getSlugFromType(program.title);
                      const path = validPaths.includes(`/${slug}`)
                        ? `/${slug}`
                        : `/study-programs/${slug}`;

                      return (
                        <li key={program._id}>
                          <Link to={path}>{program.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <Link to="/assesment">Assesments</Link>
                </li>
                <li>
                  <a href="#">
                    News &amp; Events{" "}
                    <small>
                      <i class="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <ul class="sub-dropdown">
                    <li>
                      <Link to="/news">Latest News</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex d-md-none justify-content-between align-items-center p-2">
          <Link to={"/"} class="navbar-brand">
            <img src={siteSetting?.logo} alt="" class="logo" />
          </Link>
          <i
            class="fa-solid fa-bars menu-icon"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></i>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="nav-wrap">
              <ul className="nav nav-pills flex-column nav-tabs-vertical profile-nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link  position-relative d-block w-100 collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseExampleOne"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    About
                    <span className="dd-arrow">
                      <i className="fa-light fa-angle-down"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExampleOne">
                    <ul className="sub-menu">
                      <li className="nav-item">
                        <Link to={"/why-can-america"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Why
                          Can-America
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/who-we-are"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Who We Are
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/our-team"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/testimonials"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i>{" "}
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  position-relative d-block w-100 collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseExampleTwo"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExampleTwo"
                  >
                    Immigration Services
                    <span className="dd-arrow">
                      <i className="fa-light fa-angle-down"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExampleTwo">
                    <ul className="sub-menu">
                      <li className="nav-item">
                        <Link
                          to={"/temporary-residence"}
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubOne"
                          aria-expanded="true"
                          aria-controls="collapseSubOne"
                        >
                          <i className="fa-light fa-arrow-right"></i>{" "}
                          <Link to={"/temporary-residence"}>
                            Temporary Residence
                          </Link>{" "}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          id="collapseSubOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <ul>
                              {temporaryResidence?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/temporary-residence/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <a href="" class="menu-sub-heading">
                                  <Link to={"/work-permit"}>Work Permit</Link>
                                </a>
                              </li>
                              {workPermit?.map((item) => (
                                <li key={item._id}>
                                  <Link to={`/work-permit/${item.slug}/`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          href=""
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubTwo"
                          aria-expanded="true"
                          aria-controls="collapseSubTwo"
                        >
                          <i className="fa-light fa-arrow-right"></i>{" "}
                          <Link to={"/permanent-residence"}>
                            Permanent Residence
                          </Link>{" "}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </a>
                        <div
                          id="collapseSubTwo"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <ul>
                              <li>
                                <a href="#" class="menu-sub-heading">
                                  <Link to={"/express-entry"}>
                                    Express Entry
                                  </Link>
                                </a>
                              </li>
                              {expressEntry?.map((item) => (
                                <li key={item._id}>
                                  <Link to={`/express-entry/${item.slug}/`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <a href="#" class="menu-sub-heading">
                                  <Link to={"/provincial-nominee-program"}>
                                    Provincial Nominee Program
                                  </Link>
                                </a>
                              </li>
                              {provincialNomineeProgram?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/provincial-nominee-program/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <a href="#" class="menu-sub-heading">
                                  <Link to={"/family-sponsorship"}>
                                    Family Sponsorship
                                  </Link>
                                </a>
                              </li>
                              {familySponsorship?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/family-sponsorship/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                <a class="menu-sub-heading">
                                  <Link to={"/business-immigration"}>
                                    Business Immigration
                                  </Link>
                                </a>
                              </li>
                              {businessImmigration?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    to={`/business-immigration/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          href=""
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubThree"
                          aria-expanded="true"
                          aria-controls="collapseSubThree"
                        >
                          <i className="fa-light fa-arrow-right"></i>
                          <Link to={"/other-services"}>
                            Other Services
                          </Link>{" "}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </a>
                        <div
                          id="collapseSubThree"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <ul>
                              {otherServices?.map((item) => (
                                <li key={item._id}>
                                  <Link to={`/${item.slug}/`}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link  position-relative d-block w-100 collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseExampleThree"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExampleThree"
                  >
                    Study Programs
                    <span className="dd-arrow">
                      <i className="fa-light fa-angle-down"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExampleThree">
                    <ul className="sub-menu">
                      <li className="nav-item">
                        <Link to={"/study-in-canada"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          Canada
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          USA
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          the UK
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a href="" className="nav-link">
                    Assesments
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link  position-relative d-block w-100 collapsed"
                    data-bs-toggle="collapse"
                    href="#collapseExampleFour"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExampleFour"
                  >
                    News & Events
                    <span className="dd-arrow">
                      <i className="fa-light fa-angle-down"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExampleFour">
                    <ul className="sub-menu">
                      <li className="nav-item">
                        <Link to={"/study-in-canada"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          Canada
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          USA
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Study in
                          the UK
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderBottom;
