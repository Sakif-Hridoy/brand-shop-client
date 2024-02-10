import banner from "../assets/banner.jpg";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="container">
      <img className="mx-auto w-[95%] h-[630px]" src={banner} alt="" />
      <h2 className="banner-txt text-2xl md:text-4xl lg:text-5xl font-semibold lg:leading-[10px]">
        Buy Your Favourite Smart Things <br /> From Tech World
      </h2>
      <p className="mt-10 banner-txtp">
        Find and Buy Your Gadget<br /> On Tech World
      </p>
    </div>
  );
};

export default Banner;
