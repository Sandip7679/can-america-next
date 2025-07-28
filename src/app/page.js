import Image from "next/image";
import styles from "./page.module.css";
import dbConnect from "@/lib/mongoose";
import Banner from "@/models/Banner";



export const metadata = {
  title: "Home - CanAmerica Immigration",
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
export default async function Home() {
  let db = await dbConnect();
  let banner = await Banner.findOne({ type: "Home" }).lean();

  return (
    <div>
      <section
        className="banner-sec"
        style={{ background: `url(${banner?.image}) center center no-repeat` }}
      >
        <div className="container">
          <div className="banner-cont">
            <h2>{banner?.main_title}</h2>
            <p>{banner?.sub_title}</p>
            <div className="d-md-flex gap-3">
              <div className="btn-red-solid can-btn">
                Initial Assessment{" "}
                <i className="fa-solid fa-angle-right ms-2"></i>
              </div>
              <a
                href={banner?.consultant_link || "#"}
                className="btn-red-outline can-btn mt-3 mt-md-0 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Consultation{" "}
                <i className="fa-solid fa-angle-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
