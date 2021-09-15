import { AUTOMATIC_MOVEMENT, BRAND_BALTICUS, BRAND_BLONIE, BRAND_CHRONOS_ART, BRAND_GGERLACH, BRAND_LEONPROKOP, BRAND_VRATISLAVA, FOR_MEN, FOR_WOMEN, HIGHEST_PRICE_LIST, LOWEST_PRICE_LIST, PAGE_BACK, PAGE_FORWARD, QUARTZ_MOVEMENT, TRENDING_LIST } from "../Constants/filterTypes"

export const trendingList = () => {
    return {
        type: TRENDING_LIST
    }
}

export const lowestPriceList = () => {
    return {
        type: LOWEST_PRICE_LIST
    }
}

export const highestPriceList = () => {
    return {
        type: HIGHEST_PRICE_LIST
    }
}

export const pageForward = () => {
    return {
        type: PAGE_FORWARD
    }
}

export const pageBack = () => {
    return {
        type: PAGE_BACK
    }
}

export const forMen = () => {
    return {
        type: FOR_MEN
    }
}

export const forWomen = () => {
    return {
        type: FOR_WOMEN
    }
}

export const priceRange = (minNum, maxNum) => {
    return {
        type: FOR_MEN,
        payload: {
            minNum: minNum,
            maxNum: maxNum
        }
    }
}

export const automaticMovement = () => {
    return {
        type: AUTOMATIC_MOVEMENT
    }
}

export const quartzMovement = () => {
    return {
        type: QUARTZ_MOVEMENT
    }
}

export const brandBalticus = () => {
    return {
        type: BRAND_BALTICUS
    }
}

export const brandBlonie = () => {
    return {
        type: BRAND_BLONIE
    }
}

export const brandChronosArt = () => {
    return {
        type: BRAND_CHRONOS_ART
    }
}

export const brandGgerlach = () => {
    return {
        type: BRAND_GGERLACH
    }
}

export const brandLeonProkop = () => {
    return {
        type: BRAND_LEONPROKOP
    }
}

export const brandVratislava = () => {
    return {
        type: BRAND_VRATISLAVA
    }
}

