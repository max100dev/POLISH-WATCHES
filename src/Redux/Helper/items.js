class Item {
    constructor(brand, model, price, movement, img, gender, trending, sale){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.movement = movement;
        this.img = img;
        this.gender = gender;
        this.trending = trending;
        this.sale = sale;
    };
}


export const item1 = new Item("Balticus", "Shark GW43 A21", "1020","automatic", "url(../img)", "men", 1, null);
export const item2 = new Item("Blonie", "A231 510", "2520","automatic", "url(../img)", "men", 1, null);
export const item3 = new Item("Chronos-Art", "Retro A222", "10020","automatic", "url(../img)", "men", 1, null);
export const item4 = new Item("Vratislava", "Grey 5231", "1520","automatic", "url(../img)", "men", 2, null);
export const item5 = new Item("GGerlach", "Design Retro", "5020","automatic", "url(../img)", "men", 1, null);
export const item6 = new Item("Balticus", "GW41 A18", "9020","automatic", "url(../img)", "women", 1, null);
export const item7 = new Item("Vratislava", "MO15 12", "3520","automatic", "url(../img)", "men",2, null );
export const item8 = new Item("Chronos-Art", "Y22 M125", "1120","automatic", "url(../img)","men", 1, null);
export const item9 = new Item("GGerlach", "Porsche", "20020","automatic", "url(../img)", "women", 1, null);

