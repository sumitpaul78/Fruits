import RelatedProduct from "../../Component/Home/RelatedProduct";
import HomeSlider from "../../Component/Home/HomeSlider";
import ShortBanner from "../../Component/Home/ShortBanner";
import MainProduct from "../../Component/Home/MainProduct";
import Brand from "../../Component/Home/Brand";
import Blog from "../../Component/Home/Blog";

const HomePage =()=>{
    return(
   <>
    <div className="page-contain">
        <div id="main-content" className="main-content">
            <HomeSlider />
            <RelatedProduct />
            <ShortBanner />
            <MainProduct />
            <Brand />
            <Blog />
          </div>
       </div>
    
 </>
    );
}
export default HomePage;