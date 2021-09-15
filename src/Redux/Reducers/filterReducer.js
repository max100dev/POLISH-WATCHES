import { AUTOMATIC_MOVEMENT, BRAND_BALTICUS, BRAND_BLONIE, BRAND_CHRONOS_ART, BRAND_GGERLACH, BRAND_LEONPROKOP, BRAND_VRATISLAVA, FOR_MEN, FOR_WOMEN, HIGHEST_PRICE_LIST, LOWEST_PRICE_LIST, PRICE_RANGE, QUARTZ_MOVEMENT, TRENDING_LIST } from "../Constants/filterTypes";
import { item1, item2, item3, item4, item5, item6, item7, item8, item9 } from "../Helper/items";

const initalState = {
    items: [item1, item2, item3, item4, item5, item6, item7, item8, item9],
    itemsOnScreen: [item1, item2, item3, item4, item5, item6, item7, item8, item9],
    subItemsOnScreen: [],
    filtersApplied: {
        men: null,
        women: null,
        automatic: null,
        quartz: null,
        price: null,
        balticus: null,
        blonie: null,
        ggerlach: null,
        chronos: null,
        leonprokop: null,
        vratislava: null,
        trending: null,
        highestPrice: null,
        lowestPrice: null
    },
    filterGender(gender) {
        this.filtersApplied.gender = true;
        return this.itemsOnScreen.filter(item => item.gender === gender)
    },
    filterMovement(movement) {
        this.filtersApplied.movement = true;
        return this.itemsOnScreen.filter(item => item.movement === movement)
    },
    filterPirce(minPrice, maxPrice) {
        this.filtersApplied.price = true;
        return this.itemsOnScreen.filter(item => item.price >= minPrice && item.price <= maxPrice )
    },
    filterBrand(brand) {
        this.filtersApplied.brand = true;
        return this.itemsOnScreen.filter(item => item.brand === brand) 
    },
    filterTrending() {
        this.filtersApplied.trending = true;
        return this.itemsOnScreen.sort((a,b) => b.trending - a.trending)
    },
    filterHighestPrice() {
        this.filtersApplied.highestPrice = true;
        return this.itemsOnScreen.sort((a,b) => b.price - a.price)
    },
    filterLowestPrice() {
        this.filtersApplied.lowestPrice = true;
        return this.itemsOnScreen.sort((a,b) => a.price - b.price)
    }
}

const filterReducer = (state = initalState, action) => {
    switch(action.type) {
        case FOR_MEN:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.gender ? state.itemsOnScreen : state.filterGender("men")
            }
        case FOR_WOMEN:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.gender ? state.itemsOnScreen : state.filterGender("women")
            }
        case AUTOMATIC_MOVEMENT:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.movement ? state.itemsOnScreen : state.filterMovement("automatic")
            }
        case QUARTZ_MOVEMENT:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.movement ? state.itemsOnScreen :  state.filterMovement("quartz")
            }
        case PRICE_RANGE:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.price ? state.itemsOnScreen :  state.filterMovement(action.payload.minNum, action.payload.maxNum)
            }
        case BRAND_BLONIE:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("Blonie")
            }
        case BRAND_BALTICUS:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("Balticus")
            }
        case BRAND_CHRONOS_ART:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("Chronos-Art")
            }
        case BRAND_GGERLACH:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("GGerlach")
            }
        case BRAND_VRATISLAVA:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("Vratislava")
            }
        case BRAND_LEONPROKOP:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.brand ? state.itemsOnScreen :  state.filterBrand("Leon Prokop")
            }
        case TRENDING_LIST:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.trending ? state.itemsOnScreen :  state.filterTrending()
            }
        case HIGHEST_PRICE_LIST:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.highestPrice ? state.itemsOnScreen :  state.filterHighestPrice()
            }
        case LOWEST_PRICE_LIST:
            return {
                ...state,
                itemsOnScreen: state.filtersApplied.lowestPrice ? state.itemsOnScreen :  state.filterLowestPrice()
            }
    }
}

export default filterReducer