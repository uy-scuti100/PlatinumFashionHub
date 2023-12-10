interface InfoProp {
    image: any;
    text: string;
}

import menshirt from "../public/menShirt.jpg";
import menstrouser from "../public/menstrouser.jpg";
import menshoodies from "../public/menshoodies.jpg";
import mensdenim from "../public/mensdenim2.jpg";
import mensshort from "../public/mensshort.jpg";
import menshoe from "../public/messhoe.jpg";
import men2piece from "../public/222piece.jpg";

import womentop from "../public/womentop.jpg";
import womenstrouser from "../public/womenstrouser.jpg";
import gown from "../public/gown.jpg";
import women2piece from "../public/women2piece.jpg";
import womendenim from "../public/womendenim.jpg";
import womenbikini from "../public/womenbikinini.jpg";
import lingerie from "../public/lingerie.jpg";
import wsh from "../public/wsh.jpg";


export const menCategories: InfoProp[] = [
    { image: menshirt, text: "Shirts" },
    { image: menstrouser, text: "Trousers" },
    { image: menshoodies, text: "Hoodies" },
    { image: mensdenim, text: "Denim Jackets" },
    { image: men2piece, text: "2 Piece" },
    { image: mensshort, text: "Shorts" },
    { image: menshoe, text: "Shoes" },
];
export const wommenCategories: InfoProp[] = [
    { image: womentop, text: "Tops" },
    { image: womenstrouser, text: "Trousers/Cargo Pants" },
    { image: gown, text: "Gowns" },
    { image: women2piece, text: "Two Piece (Up and Down)" },
    { image: womendenim, text: "Denim Jackets" },
    { image: womenbikini, text: "Bikini" },
    { image: lingerie, text: "Lingerie" },
    { image: wsh, text: "Shoes" },
];