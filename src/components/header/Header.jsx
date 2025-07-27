import "./header.scss";
// import logo from "../../assets/Can-America.png"
import mongoose from "mongoose";

import dbConnect from "@/lib/mongoose";
import SiteSetting from "@/models/SiteSetting";
import Banner from "@/models/Banner";
import Category from "@/models/Category";

const Header = async () => {
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

  let db = await dbConnect();

  const collections = await db.connection.db.listCollections().toArray();
  console.log("collections..", collections);

  let sitedata = await SiteSetting?.findOne({}).lean();
  console.log("sitedata", sitedata);

  let categories = await Category.find({}).lean();
  // console.log("categories", categories);

  // let categoriTree = buildCategoryTreeEfficient(categories);

  // function buildCategoryTreeEfficient(flatArray) {
  //   const idMap = {};
  //   const tree = [];

  //   flatArray.forEach((item) => {
  //     idMap[item.id] = {...item, categories: [] };
  //   });
  //   flatArray.forEach((item) => {
  //     const node = idMap[item.id];
  //     if (item.parent_id === null || item.parent_id === undefined) {
  //       tree.push(node);
  //     } else {
  //       const parent = idMap[item.parent_id];
  //       if (parent) {
  //         parent.categories.push(node);
  //       } else {
  //         tree.push(node);
  //       }
  //     }
  //   });
  //   return tree;
  // }

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

        {/* <div class="header-top d-none d-md-block">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
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
              <div class="col-md-6">
                <div class="d-flex justify-content-end">
                  <ul class="header-link me-3">
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <NavLink to="/faq">FAQ's</NavLink>
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
        </div> */}
      </header>
    </>
  );
};

export default Header;
