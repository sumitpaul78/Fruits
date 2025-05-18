import React from "react";
// import Data from "../db/relatedProduct.json";
import Productlist from "./Productlist";

const RelatedProduct = () => {
    // const [products, setRelated] = useState(Data.products);
    // console.log(products);
    return(
        <>
        <div className="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
        <div className="container">
            <div className="biolife-title-box">
                <span className="subtitle">All the best item for You</span>
                <h3 className="main-title">Related Products</h3>
            </div>
            {/* <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
                <div className="tab-head tab-head__icon-top-layout icon-top-layout">
                    <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
                        <li className="tab-element active">
                            <a href="#tab01_1st" className="tab-link"><span className="biolife-icon icon-lemon"></span>Oranges</a>
                        </li>
                        <li className="tab-element" >
                            <a href="#tab01_2nd" className="tab-link"><span className="biolife-icon icon-grape2"></span>Grapes</a>
                        </li>
                        <li className="tab-element" >
                            <a href="#tab01_3rd" className="tab-link"><span className="biolife-icon icon-blueberry"></span>Blueberries</a>
                        </li>
                        <li className="tab-element" >
                            <a href="#tab01_4th" className="tab-link"><span className="biolife-icon icon-orange"></span>Lemon</a>
                        </li>
                        <li className="tab-element" >
                            <a href="#tab01_5th" className="tab-link"><span className="biolife-icon icon-broccoli"></span>Vegetables</a>
                        </li>
                    </ul>
                </div>
             <div className="tab-content">
                    <div id="tab01_1st" className="tab-contain active">
                     <Productlist />
                    </div>
                    <div id="tab01_2nd" className="tab-contain">
                    <Productlist />
                    </div>
                    <div id="tab01_3rd" className="tab-contain">
                    <Productlist />
                    </div>
                    <div id="tab01_4th" className="tab-contain">
                    <Productlist />
                    </div>
                    <div id="tab01_5th" className="tab-contain">
                    <Productlist />
                    </div>
              </div>
            </div> */}
            <div class="container mt-5">
	<ul class="nav nav-tabs" role="tablist">
		<li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">First Panel</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Second Panel</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Third Panel</a>
		</li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane p-3 active" id="tabs-1" role="tabpanel">
      <Productlist />
		</div>
		<div class="tab-pane p-3" id="tabs-2" role="tabpanel">
			<p>Second Panel</p>
		</div>
		<div class="tab-pane p-3" id="tabs-3" role="tabpanel">
			<p>Third Panel</p>
		</div>
	</div>
</div>
        </div>
      </div>
        </>
    );

}

export default RelatedProduct;