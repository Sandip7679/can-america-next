"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderBottom = ({SiteSetting}) => {
  const siteSetting = JSON.parse(SiteSetting);
  // const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [immigrationServices, setImmigrationServices] = useState([]);

  // const dispatch = useDispatch();
  // const [siteSetting, setSiteSetting] = useState({});
  // const [studyPrograms, setStudyPrograms] = useState([]);
  const [temporaryResidence, setTemporaryResidence] = useState([]);
  const [workPermit, setWorkPermit] = useState([]);
  const [permanentResidence, setPermanentResidence] = useState([]);
  const [familySponsorship, setFamilySponsorship] = useState([]);
  const [businessImmigration, setBusinessImmigration] = useState([]);
  const [expressEntry, setExpressEntry] = useState([]);
  const [provincialNomineeProgram, setProvincialNomineeProgram] = useState([]);
  const [otherServices, setOtherServices] = useState([]);
  const validPaths = ["/study-in-canada", "/study-in-usa", "/study-in-the-uk"];

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
      .then((serviceData) => {
        // console.log("categories data", data);
        // setImmigrationServices(data);

        setTemporaryResidence(
          serviceData["Temporary Residence"][0]["Temporary Residence"]
        );
        setWorkPermit(serviceData["Work Permit"][0]["Work Permit"]);
        // setPermanentResidence(serviceData["Permanent Residence"][0]["Permanent Residence"]);
        setExpressEntry(serviceData["Express Entry"][0]["Express Entry"]);
        setProvincialNomineeProgram(
          serviceData["Provincial Nominee Program"][0][
            "Provincial Nominee Program"
          ]
        );
        setFamilySponsorship(
          serviceData["Family Sponsorship"][0]["Family Sponsorship"]
        );
        setBusinessImmigration(
          serviceData["Business Immigration"][0]["Business Immigration"]
        );
        setOtherServices(serviceData["Other Services"][0]["Other Services"]);
      }).catch((err) => {
        console.log(err);
      });

    // let ImmigrationServices = buildCategory(categories);
    // console.log("serviceData", serviceData);

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
      <div className={scrolled ? "header headerFixed" : "header"}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-md-block">
          <div className="container-fluid">
            <Link href={"/"} className="navbar-brand">
              <img src={siteSetting?.logo} alt="" className="logo" />
            </Link>
            <div className="menu-main-menu">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <a href="#">
                    About{" "}
                    <small>
                      <i className="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <ul className="sub-dropdown">
                    <li>
                      <Link href={"/why-can-america"}>Why Can-America</Link>
                    </li>
                    <li>
                      <Link href={"/who-we-are"}>Who We Are</Link>
                    </li>
                    <li>
                      <Link href={"/our-team"}>Our Team</Link>
                    </li>
                    <li>
                      <Link href={"/testimonials"}>Testimonials</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Immigration Services{" "}
                    <small>
                      <i className="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <div className="sub-dropdown megamenu">
                    <div className="row">
                      <div className="col-md-3">
                        <h3 className="menu-heading">
                          <Link href={"/temporary-residence"}>
                            Temporary Residence
                          </Link>
                        </h3>

                        <ul>
                       
                          {temporaryResidence?.map((item) => (
                            <li key={item._id}>
                              <Link href={`/temporary-residence/${item.slug}/`}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <div className="menu-sub-heading">
                              <Link href="/work-permit">Work Permit</Link>
                            </div>
                          </li>

                         
                          {workPermit?.map((item) => (
                            <li key={item._id}>
                              <Link href={`/work-permit/${item.slug}/`}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h3 className="menu-heading">
                          <Link href={"/permanent-residence"}>
                            Permanent Residence
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                              <li>
                                {/* <a className="menu-sub-heading"> */}
                                  <Link href={"/express-entry"} className="menu-sub-heading">
                                    Express Entry
                                  </Link>
                                {/* </a> */}
                              </li>
                              {expressEntry?.map((item) => (
                                <li key={item._id}>
                                  <Link href={`/express-entry/${item.slug}/`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}

                              <li>
                                {/* <a className="menu-sub-heading"> */}
                                  <Link href={"/provincial-nominee-program"} className="menu-sub-heading">
                                    Provincial Nominee Program
                                  </Link>
                                {/* </a> */}
                              </li>
                              {provincialNomineeProgram?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/provincial-nominee-program/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul>
                              <li>
                                {/* <a className="menu-sub-heading"> */}
                                  <Link href={"/family-sponsorship"} className="menu-sub-heading">
                                    Family Sponsorship
                                  </Link>
                                {/* </a> */}
                              </li>
                              {familySponsorship?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/family-sponsorship/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                {/* <a className="menu-sub-heading"> */}
                                  <Link href={"/business-immigration"} className="menu-sub-heading">
                                    Business Immigration
                                  </Link>
                                {/* </a> */}
                              </li>
                              {businessImmigration?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/business-immigration/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h3 className="menu-heading">
                          <Link href={"/other-services"}>Other Services</Link>
                        </h3>
                        <ul>
                          {otherServices?.map((item) => (
                            <li key={item._id}>
                              <Link href={`/${item.slug}/`}>{item.name}</Link>
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
                      <i className="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  {/* <ul className="sub-dropdown">
                    {studyPrograms.map((program) => {
                      const slug = getSlugFromType(program.title);
                      const path = validPaths.includes(`/${slug}`)
                        ? `/${slug}`
                        : `/study-programs/${slug}`;

                      return (
                        <li key={program._id}>
                          <Link href={path}>{program.title}</Link>
                        </li>
                      );
                    })}
                  </ul> */}
                </li>
                <li>
                  <Link href="/assesment">Assesments</Link>
                </li>
                <li>
                  <a href="#">
                    News &amp; Events{" "}
                    <small>
                      <i className="fa-solid fa-chevron-down"></i>
                    </small>
                  </a>
                  <ul className="sub-dropdown">
                    <li>
                      <Link href="/news">Latest News</Link>
                    </li>
                    <li>
                      <Link href="/events">Events</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/contact"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex d-md-none justify-content-between align-items-center p-2">
          <Link href={"/"} className="navbar-brand">
            <img src={siteSetting?.logo} alt="" className="logo" />
          </Link>
          <i
            className="fa-solid fa-bars menu-icon"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></i>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="nav-wrap">
              <ul className="nav nav-pills flex-column nav-tabs-vertical profile-nav">
                <li className="nav-item">
                  <Link href={"/"} className="nav-link">
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
                        <Link href={"/why-can-america"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Why
                          Can-America
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href={"/who-we-are"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Who We Are
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href={"/our-team"} className="nav-link">
                          <i className="fa-light fa-arrow-right"></i> Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href={"/testimonials"} className="nav-link">
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
                          href={"/temporary-residence"}
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubOne"
                          aria-expanded="true"
                          aria-controls="collapseSubOne"
                        >
                          <i className="fa-light fa-arrow-right"></i>{" "}
                          {/* <Link href={"/temporary-residence"}> */}
                            Temporary Residence
                          {/* </Link>{" "} */}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </Link>
                        <div
                          id="collapseSubOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ul>
                              {temporaryResidence?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/temporary-residence/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                {/* <a href="" className="menu-sub-heading"> */}
                                  <Link href={"/work-permit"} className="menu-sub-heading">Work Permit</Link>
                                {/* </a> */}
                              </li>
                              {workPermit?.map((item) => (
                                <li key={item._id}>
                                  <Link href={`/work-permit/${item.slug}/`}>
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
                          href={"/permanent-residence"}
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubTwo"
                          aria-expanded="true"
                          aria-controls="collapseSubTwo"
                        >
                          <i className="fa-light fa-arrow-right"></i>{" "}
                          {/* <Link href={"/permanent-residence"}> */}
                            Permanent Residence
                          {/* </Link>{" "} */}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </a>
                        <div
                          id="collapseSubTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ul>
                              <li>
                                {/* <a href="#" className="menu-sub-heading"> */}
                                  <Link href={"/express-entry"} className="menu-sub-heading">
                                    Express Entry
                                  </Link>
                                {/* </a> */}
                              </li>
                              {expressEntry?.map((item) => (
                                <li key={item._id}>
                                  <Link href={`/express-entry/${item.slug}/`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                {/* <a href="#" className="menu-sub-heading"> */}
                                  <Link href={"/provincial-nominee-program"} className="menu-sub-heading">
                                    Provincial Nominee Program
                                  </Link>
                                {/* </a> */}
                              </li>
                              {provincialNomineeProgram?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/provincial-nominee-program/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                {/* <a href="#" className="menu-sub-heading"> */}
                                  <Link href={"/family-sponsorship"} className="menu-sub-heading">
                                    Family Sponsorship
                                  </Link>
                                {/* </a> */}
                              </li>
                              {familySponsorship?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/family-sponsorship/${item.slug}/`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <li>
                                {/* <a className="menu-sub-heading"> */}
                                  <Link href={"/business-immigration"} className="menu-sub-heading">
                                    Business Immigration
                                  </Link>
                                {/* </a> */}
                              </li>
                              {businessImmigration?.map((item) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/business-immigration/${item.slug}/`}
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
                          href={"/other-services"}
                          className="nav-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSubThree"
                          aria-expanded="true"
                          aria-controls="collapseSubThree"
                        >
                          <i className="fa-light fa-arrow-right"></i>
                          {/* <Link href={"/other-services"}> */}
                            Other Services
                          {/* </Link>{" "} */}
                          <span className="dd-arrow">
                            <i className="fa-light fa-angle-down"></i>
                          </span>
                        </a>
                        <div
                          id="collapseSubThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <ul>
                              {otherServices?.map((item) => (
                                <li key={item._id}>
                                  <Link href={`/${item.slug}/`}>{item.name}</Link>
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
                        <Link href={"/study-in-canada"} className="nav-link">
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
                        <Link href={"/study-in-canada"} className="nav-link">
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
                  <Link href={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
