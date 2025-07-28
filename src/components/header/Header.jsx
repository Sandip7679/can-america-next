// import "./Header.scss";
// import logo from "../../assets/Can-America.png"

import mongoose from "mongoose";

import dbConnect from "@/lib/mongoose";
import SiteSetting from "@/models/SiteSetting";
// import Banner from "@/models/Banner";
// import Category from "@/models/Category";
import Link from "next/link";
import HeaderBottom from "./HeaderBottom";
import StudyProgram from "@/models/StudyProgram";

const Header = async () => {
  

  let db = await dbConnect();

  // const collections = await db.connection.db.listCollections().toArray();
  // console.log("collections..", collections);

  let siteSetting = await SiteSetting?.findOne({}).lean();
  let studyProgram = await StudyProgram?.findOne({}).lean();
  // console.log("studyProgram", studyProgram);

  // let categories = await Category.find({}).lean();
  // console.log("categories", categories);

 
  // const getSlugFromType = (type) => {
  //   return type
  //     .toLowerCase()
  //     .replace(/\s+/g, "-") // spaces to dashes
  //     .replace(/[^a-z\-]/g, ""); // remove special chars
  // };

  return (
    <>
      <header>
        {/* <ToastContainer /> */}

        <div className="header-top d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div>
                  Need Assistance:{" "}
                  <a href="tel:(+1) 647-673-7979">
                    {siteSetting?.contact_first}
                  </a>{" "}
                  or{" "}
                  <a href="mailto:info@canamerica.ca">
                    {siteSetting?.email_first}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-end">
                  <ul className="header-link me-3">
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <Link href="/faq">FAQ's</Link>
                    </li>
                  </ul>
                  
                  <ul className="social-media">
                    {siteSetting?.social_media?.slice(0, 5).map((item) => (
                      <li key={item._id}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.class ? (
                            <i className={item.class}></i>
                          ) : (
                            <img src={item.icon} alt="social" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderBottom SiteSetting={JSON.stringify(siteSetting)}/>
      </header>
    </>
  );
};

export default Header;
