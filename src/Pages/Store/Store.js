import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Item from '../../Components/Item'
import { brandBalticus, brandBlonie, brandChronosArt, brandGgerlach, brandLeonProkop, brandVratislava, forMen, forWomen, trendingList } from '../../Redux/Actions/filterActions';



function Store() {
    
    const state =  useSelector(state => state) ;
    const dispatch = useDispatch();
    

    // Displaying mobile filter button option.
    const showFilter = (e) => {
        const categorySelector = e.target.nextElementSibling;
        categorySelector.setAttribute("id", "show-filter")
    }

    const hideFilter = (e) => {
        const categorySelector = e.target.parentElement
        categorySelector.setAttribute("id", "hide-filter")
        categorySelector.removeAttribute("id")
    }

    
    return (
        <section className='store-page'>
            <button onClick={showFilter} className="mobile-category-selector">FILTER</button>
            <aside className="category-selector">
                <button onClick={hideFilter} className="close-mobile-category"></button>
                <div className="category-1 cat">
                
                    <h3>For:</h3>
                    <label className="checkbox" htmlFor="FOR_MEN">
                        <h4>Men</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(forMen()) : null }  type="checkbox" className="checkbox-input" id="FOR_MEN" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="FOR_WOMEN">
                        <h4>Women</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(forWomen()) : null } type="checkbox" className="checkbox-input" id="FOR_WOMEN" />
                        <div className="checkbox-box"></div>
                    </label>
                </div>
                <div className="category-2 cat">
                    <h3>Price Range:</h3>
                    <div className="price-range">
                        <input className="min-num" type="number" />
                        <h1 className="hyphen">-</h1>
                        <input className="max-num" type="number" />
                        <h3 className="currency">zł</h3>
                    </div>
                </div>
                <div className="category-3 cat">
                    <h3>Movement:</h3>
                    <label className="checkbox" htmlFor="movement-box-automatic">
                        <h4>Automatic</h4>
                        <input type="checkbox" className="checkbox-input" id="movement-box-automatic" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="movement-box-quartz">
                        <h4>Quartz</h4>
                        <input type="checkbox" className="checkbox-input" id="movement-box-quartz" />
                        <div className="checkbox-box"></div>
                    </label>
                </div>
                <div className="category-4 cat">
                    <h3>Brand:</h3>
                    
                    
                    <label className="checkbox" htmlFor="brand-box-balticus">
                        <h4>Balticus</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandBalticus()) : null } type="checkbox" className="checkbox-input" id="brand-box-balticus" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="brand-box-blonie">
                        <h4>Blonie</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandBlonie()) : null } type="checkbox" className="checkbox-input" id="brand-box-blonie" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="brand-box-chronos-art">
                        <h4>Chronos-Art</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandChronosArt()) : null } type="checkbox" className="checkbox-input" id="brand-box-chronos-art" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="brand-box-ggerlach">
                        <h4>GGerlach</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandGgerlach()) : null } type="checkbox" className="checkbox-input" id="brand-box-ggerlach" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="brand-box-prokop">
                        <h4>Leon Prokop</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandLeonProkop()) : null } type="checkbox" className="checkbox-input" id="brand-box-prokop" />
                        <div className="checkbox-box"></div>
                    </label>
                    <label className="checkbox" htmlFor="brand-box-vratislava">
                        <h4>Vratislava</h4>
                        <input onChange={(e) => e.target.checked ? dispatch(brandVratislava()) : null } type="checkbox" className="checkbox-input" id="brand-box-vratislava" />
                        <div className="checkbox-box"></div>
                    </label>
                </div>
                <div className="category-5 cat">

                </div>
            </aside>

            <main className="main-store">
                <div className="navigator navigator-top">
                    <select name="" className="items-filter">
                        <option value="trending">Trending</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>

                    <div className="page-nav page-nav-top">
                        <div className="page-back"></div>
                        <h4 className="page-nav-title">Page <span className="current-site">1</span> of <span className="next-page">15</span></h4>
                        <div className="page-forward"></div>
                    </div>
                </div>

                <div className="item-container">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    
                </div>

                <div className="navigator navigator-bottom">
                    

                    <div className="page-nav">
                        <div className="page-back"></div>
                        <h4 className="page-nav-title">Page <span className="current-site">1</span> of <span className="next-page">15</span></h4>
                        <div className="page-forward"></div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Store
