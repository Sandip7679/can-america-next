// import Header from '../../../components/header/Header'
// import Footer from '../../../components/footer/Footer'
// import banner from "../../../assets/Study-in-Canada-1.jpg";
// import banner2 from "../../../assets/why-can-america.jpg";
// import banner3 from "../../../assets/Our-vision.jpg";
// import banner4 from "../../../assets/Experience.jpg";
// import banner5 from "../../../assets/quality-of-service.jpg";
// import banner6 from "../../../assets/Credibility.jpg";
// import banner7 from "../../../assets/Specialised-staff.jpg";
import dbConnect from "@/lib/mongoose";
import WhyCanAmericaModel from "@/models/WhyCanAmericaModel";


export const metadata = {
  title: "About Us - CanAmerica Immigration",
  description: "Learn about CanAmerica Immigration services.",
  openGraph: {
    title: "About CanAmerica Immigration",
    description: "Expert guidance for your immigration journey.",
    url: "https://canamericaimmigration.com/about",
    siteName: "CanAmerica Immigration",
    locale: "en_US",
    type: "website",
  },
};


const WhyCanAmerica = async () => {
  let db = await dbConnect();
  let whycanAmericadata = await WhyCanAmericaModel.findOne({}).lean();
  console.log('whycanAmericadata...',whycanAmericadata);

  return (
    <>
      <div className="inner-banner">
        <div className="inner-banner-cont">
          <h2>Why Can-America</h2>
          <ul className="bread-crumb">
            <li>
              <a href="">Home</a>
            </li>
            <li>Why Can-America</li>
          </ul>
        </div>
        {/* {banner && <img src={banner?.image} alt="" />} */}
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-end">
              <img src={whycanAmericadata?.image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="sec-title mb-2">
                {whycanAmericadata?.title}
              </h2>

              <div
                dangerouslySetInnerHTML={{ __html: whycanAmericadata?.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {whycanAmericadata?.our_strengths?.map((item, index) => (
        <section className={index % 2 === 0 ? "bg-color-1" : ""} key={item._id}>
          <div className="container">
            <div className="row">
              <div
                className={`col-md-6 ${index % 2 === 0 ? "order-md-2" : ""}`}
              >
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="sec-title mb-2">{item.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WhyCanAmerica;
