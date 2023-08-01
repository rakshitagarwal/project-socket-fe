import homeTabIcon1 from "../../assets/images/tabIcon1.png";
import homeTabIcon2 from "../../assets/images/tabIcon2.png";
import homeTabIcon3 from "../../assets/images/tabIcon3.png";
import homeTabIcon4 from "../../assets/images/tabIcon4.png";

export const CATEGORY_ENUM = {
  CAR: "fd1c35d0-70a3-410d-889b-5cefe63fdc16",
  BIKE: "8dc48bc3-d4cb-4d06-a700-46b1a52bd830",
  HEALTH: "fdc370ce-ee2d-4dd5-be66-aca112146317",
};
export const FAQ_CATEGORY = [
  { id: "15766530-0696-4542-830a-d49970838601", name: "Two Wheeler" },
  { id: "15766530-0696-4542-830a-d49970838602", name: "Car" },
  { id: "15766530-0696-4542-830a-d49970838603", name: "Health" },
  { id: "15766530-0696-4542-830a-d49970838604", name: "General" },
];

export const BLOG_CATEGORY_ARRAY = [
  { id: "15766530-0691-4242-830a-d40070838602", name: "Car" },
  { id: "15766530-0691-4242-830a-d40070838603", name: "Health" },
  { id: "15766530-0691-4242-830a-d40070838604", name: "Two Wheeler" },
  { id: "15766530-0691-4242-830a-d40070838605", name: "Other" },
];

export const BLOG_CATEGORY_OBJ = {
  CAR: BLOG_CATEGORY_ARRAY[0],
  HEALTH: BLOG_CATEGORY_ARRAY[1],
  TWO_WHEELER: BLOG_CATEGORY_ARRAY[2],
  OTHER: BLOG_CATEGORY_ARRAY[3],
};

export const ITEM_STATUS = [
  {
    label: "Active",
    value: true,
  },
  {
    label: "In-Active",
    value: false,
  },
];

//Home  TabLinks
export const HOME_TABS = [
  {
    value: "Recent_Bids",
    text: "Recent Bids",
    tabIcon: homeTabIcon1,
  },
  {
    value: "Buy_Plays",
    text: "Buy Plays",
    tabIcon: homeTabIcon2,
  },
  {
    value: "Activate_Bot",
    text: "Activate Bot",
    tabIcon: homeTabIcon3,
  },
  {
    value: "Product_Info",
    text: "Product Info",
    tabIcon: homeTabIcon4,
  },
];


//Upcoming Auction

export const UPCOMING_AUCTION_TABS = [
  {
    value: "Auction Start",
    text: "Auction Start",
    tabIcon: homeTabIcon1,
  },
  {
    value: "TERMS",
    text: "Terms",
    tabIcon: homeTabIcon2,
  },
  {
    value: "Product Info",
    text: "Product Info",
    tabIcon: homeTabIcon3,
  },
];
//my auction 
export const MY_AUCTION_TABS = [
  {
    value: "Recent Bids",
    text: "Recent Bids",
    tabIcon: homeTabIcon1,
  },
  {
    value: "Winning Info",
    text: "Winning Info",
    tabIcon: homeTabIcon2,
  },
  {
    value: "Product Info",
    text: "Product Info",
    tabIcon: homeTabIcon3,
  },
];