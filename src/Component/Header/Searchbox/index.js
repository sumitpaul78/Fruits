const Searchbox =()=>{
    return(
        <>
     <div className="header-search-bar layout-01">
                                <form action="#" className="form-search" name="desktop-seacrh" method="get">
                                    <input type="text" name="s" className="input-text" value="" placeholder="Search here..." />
                                    <select name="category">
                                        <option value="-1" selected>All Categories</option>
                                        <option value="vegetables">Vegetables</option>
                                        <option value="fresh_berries">Fresh Berries</option>
                                        <option value="ocean_foods">Ocean Foods</option>
                                        <option value="butter_eggs">Butter & Eggs</option>
                                        <option value="fastfood">Fastfood</option>
                                        <option value="fresh_meat">Fresh Meat</option>
                                        <option value="fresh_onion">Fresh Onion</option>
                                        <option value="papaya_crisps">Papaya & Crisps</option>
                                        <option value="oatmeal">Oatmeal</option>
                                    </select>
                                    <button type="submit" className="btn-submit"><i className="biolife-icon icon-search"></i></button>
                                </form>
                            </div>
        </>
    );
}
export default Searchbox;