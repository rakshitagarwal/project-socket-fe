//auction id 
export const STATUSTOURL= {
  LOST: "my-auction",
  WON: "my-auction",
  ONGOING: "live-auction",
  Regsitered: "upcoming-auction",
};


//validation messages
export const VALIDATEMESSAGE = {
  INVALIDEMAIL : "Invalid email",
  EMPTYEMAIL : "Please enter your email !",
}



//OLD DATA
export const LS = {
  AUTH_TOKEN: "ATOKEN",
  REF_TOKEN: "RTOKEN",
  USER_INFO: "user_info",
  USER_PREFERENCE: "user-preference",
  PRODUCTS: "products",
};

export const BREADCRUM = {
  POLICY_LEADER: "Policy Leader",
  ABOUT_US: "About us",
  CONTACT_US: "Contact us",
  ADD_CONTACT_US: "Add Contact",
  UPDATE_CONTACT_US: "Update Contact",
  FAQS: "FAQs",
  HOME: "Home",
  PRIVACY_POLICY: "Privacy Policy",
  PARTNERS: "Partners",
  ADD_PARTNER: "Add Partner",
  UPDATE_PARTNER: "Update Partner",
  POST: "Post",
  GENERAL_SECTION: "General Sections",
  STATIC_PAGES: "Static pages",
  LEADS: "Leads",
  EMAIL: "Email",
  NEWS: "News",
  OFFERS: "Offers",
  SOCIAL_MEDIA_LINK: "Social media links",
  ADD_SOCIAL_MEDIA_LINK: "Add Social media links",
  UPDATE_SOCIAL_MEDIA_LINK: "Update Social media links",
  PROFILE: "Profile",
  ADD_FAQS: "Add FAQ",
  LANGUAGE: "Language",
  EDIT_FAQ: "Edit FAQ",
  BIMA_BHAI_VIDEOS: "Raksha videos",
  PARENT_BIMA_BHAI_VIDEO: "Parent Raksha Video",
  ADD_BIMA_BHAI_VIDEOS: "Add video",
  EDIT_BIMA_BHAI_VIDEOS: "Update video",
  LEAD_PAGE: "Lead page",
  LEAD_PAGE_ADD_SECTIONS: "Add section",
  LEAD_PAGE_SECTION_LIST: "Section list",
  LEAD_PAGE_UPDATE_SECTIONS: "Update section",
  // blog
  BLOG: "Blog",
  BLOG_CATEGORY: "Blog Category",
  ADD_BLOG: "Add Blog",
  EDIT_BLOG: "Edit Blog",
  // banner
  BANNER: "Banner",
  ADD_BANNER: "Banner Add",
  EDIT_BANNER: "Banner Edit",
  TESTIMONIAL: "Testimonial",
  ADD_TESTIMONIAL: "Add Testimonial",
  UPDATE_TESTIMONIAL: "Update Testimonial",
  // insurer
  INSURER: "Insurer",
  ADD_INSURER: "Add Insurer",
  EDIT_INSURER: "Update Insurer",
};

export const ROUTES_PATH = Object.freeze({
  BASE: "/",
  HOME: "/live-auction",
  LOGIN: "/login",
  REGISTRATION: "/register",
  UPCOMING_AUCTION: "/upcoming-auction",
  MODAL_DEMO: "/modal-demo",
  HOME_DASHBOARD: "/home-dashboard",
});

export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

export const TWO_WHEELER_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "City",
    id: "city",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Whatsapp",
    id: "mobile",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Email",
    id: "email",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Vehicle No",
    id: "vehicle_no",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Make Company",
    id: "make_company",
    customClassNames: "width-120  min-w-135",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Model",
    id: "company_model",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Last Insurer Details",
    id: "last_insurer",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Preferred Time",
    id: "preferedTime",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remark",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const FOUR_WHEELER_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "City",
    id: "city",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Whatsapp",
    id: "mobile",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Email",
    id: "email",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Vehicle No",
    id: "vehicle_no",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Make Company",
    id: "make_company",
    customClassNames: "width-120 min-w-135",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Model",
    id: "company_model",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Last Insurer Details",
    id: "last_insurer",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Preferred Time",
    id: "preferedTime",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remark",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const HEALTH_INSURANCE_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Gender",
    id: "gender",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Age",
    id: "age",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "State",
    id: "state",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "City",
    id: "city",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Pincode",
    id: "pincode",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Whatsapp",
    id: "mobile",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Email",
    id: "email",
    customClassNames: "width-120",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Having Health Insurance ?",
    id: "isInsured",
    customClassNames: "min-w-201",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Sum insured",
    id: "insurer_amount",
    customClassNames: "min-w-111",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Type of policy",
    id: "policyType",
    customClassNames: "min-w-119",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Preferred Day & Calling time",
    id: "preferedTime",
    customClassNames: "min-w-216",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Last Insurer Details",
    id: "last_insurer",
    customClassNames: "min-w-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Preferred Time",
    id: "preferedTime",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remarks",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const COMMERCIAL_INSURANCE_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remark",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const OTHER_INSURANCE_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remark",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const TRAVEL_INSURANCE_HEADER = [
  {
    value: "Full Name",
    id: "fullname",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Mobile",
    id: "phone",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Remarks",
    id: "remark",
    customClassNames: "width-260",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const DEFAULT_FAQ_HEADER = [
  {
    value: "Question",
    customClassNames: " ",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Answer",
    customClassNames: " ",
    customStyle: {},
    clickEvent: () => {},
  },
  {
    value: "Status",
    customClassNames: " ",
    customStyle: {},
    clickEvent: () => {},
  },
];

export const DEFAULT_FAQ_DATA = [
  {
    id: "1",
    question: "This is demo",
    answer: "lorem e ef wef wef wef ef we fwlfkjlkjwe wefweiojs qw   qw",
    status: false,
    lang: "en",
  },
  {
    id: "2",
    question: "This is demo",
    answer: "lorem e ef wef wef wef ef we fwlfkjlkjwe wefweiojs qw   qw",
    status: false,
    lang: "en",
  },
  {
    id: "3",
    question: "This is demo",
    answer: "lorem e ef wef wef wef ef we fwlfkjlkjwe wefweiojs qw   qw",
    status: false,
    lang: "en",
  },
  {
    id: "4",
    question: "This is demo",
    answer: "lorem e ef wef wef wef ef we fwlfkjlkjwe wefweiojs qw   qw",
    status: false,
    lang: "en",
  },
];

export const SUCCESS_TOAST = {
  LOGIN: "successLogin",
  LOGOUT: "successLogout",
  ADD_FAQ: "successAddFaq",
  EDIT_FAQ: "successEditFaq",
  DELETE_FAQ: "successDeleteFaq",
  DOWNLOAD_EXCEL: "successDownloadExcel",
  ADD_ABOUTUS: "successAddAboutUs",
  EDIT_ABOUTUS: "successEditAboutUs",
  DELETE_ABOUTUS: "successDeleteAboutUs",
  ADD_PRIVACY: "successAddPrivacy",
  EDIT_PRIVACY: "successEditPrivacy",
  DELETE_PRIVACY: "successDeletePrivacy",
  UPLOAD_IMAGE: "successUploadImage",
  ADD_BIMA_BHAI_VIDEOS: "successAddBimabhaiVideo",
  UPDATE_BIMA_BHAI_VIDEOS: "successUpdateBimabhaiVideo",
  DELETE_BIMA_BHAI_VIDEOS: "successDeleteBimabhaiVideo",
  ADD_LEAD_PAGES_TEXT_SECTION: "successAddLeadPagesTextSection",
};

export const ERROR_TOAST = {
  LOGIN: "errorLogin",
  LOGOUT: "errorLogout",
  DOWNLOAD_PDF: "errorDownloadExcel",
  UPLOAD_IMAGE: "errorUploadImage",
};

export const TEMP_TABS = [
  {
    value: "Car",
    id: 12332165456,
  },
  {
    value: "Bike",
    id: 12332165456,
  },
  {
    value: "Health",
    id: 12332165456,
  },
];

export const TAB_ALL_PUBLISH_DRAFT = [
  {
    value: "All",
    id: "All",
  },
  {
    value: "Publish",
    id: "active",
  },
  {
    value: "Draft",
    id: "inactive",
  },
];

export const TABLE_TYPE = {
  MULTIPLE_SELECT: "multiple_select",
};

export const PAGE_LIMIT = [
  {
    value: 10,
    lable: "10",
  },
  {
    value: 25,
    lable: "25",
  },
  {
    value: 50,
    lable: "50",
  },
  {
    value: 100,
    lable: "100",
  },
];

export const ACTION_ENUM = {
  DELETE: "delete",
  PUBLISH: "publish",
  DRAFT: "draft",
};

export const PRODUCT_TYPE = {
  BIKE: "Bike",
  CAR: "Car",
  HEALTH: "Health",
  COMMERCIAL: "Commercial",
  TRAVEL: "Travel",
  OTHERS: "Others",
};

export const ALL_PUBLISH_DRAFT = {
  ALL: "All",
  PUBLISH: "Publish",
  DRAFT: "Draft",
};

export const PAGE_ENUMS = {
  LEAD: "lead",
  PAGES: "pages",
  HOME: "home",
  PRIVACY: "privacy",
  ABOUT_US: "about-us",
  STATIC_PAGES: "static-pages",
  PARTNERS: "partners",
  ADD_PARTNER: "add-partner",
  UPDATE_PARTNER: "update-partner",
  FAQS: "faqs",
  CONTACT_US: "contact-us",
  ADD_CONTACT_US: "add-contact-us",
  UPDATE_CONTACT_US: "update-contact-us",
  BLOGS: "blogs",
  GENERAL_SECTIONS: "general-sections",
  SOCIAL_MEDIA_LINK: "social-media-links",
  ADD_SOCIAL_MEDIA_LINK: "add-social-media-links",
  UPDATE_SOCIAL_MEDIA_LINK: "update-social-media-links",
  EMAILS: "emails",
  OFFERS: "offers",
  NEWS: "news",
  SETTINGS: "settings",
  USER_PROFILE: "user-profile",
  ADD_FAQ: "add-faq",
  LANGUAGE: "language",
  EDIT_FAQ: "edit-faq",
  BIMA_BHAI_VIDEOS: "bima-bhai-videos",
  ADD_BIMA_BHAI_VIDEOS: "add-bimabhai-videos",
  EDIT_BIMA_BHAI_VIDEOS: "edit-bimabhai-videos",
  LEAD_PAGE: "lead-page",
  LEAD_PAGE_ADD_SECTION: "lead-page-add-section",
  LEAD_PAGE_EDIT_SECTION: "lead-page-edit-section",
  BANNER: "banner",
  ADD_BANNER: "add-banner",
  TESTIMONIAL: "testimonial",
  ADD_TESTIMONIAL: "add-testimonial",
  EDIT_TESTIMONIAL: "edit-testimonial",
  INSURER: "insurer",
  ADD_INSURER: "add-insurer",
  EDIT_INSURER: "edit-insurer",
};

export const SUPER_ADMIN_USER_DATA = {
  role: "super-admin",
  pages: [
    PAGE_ENUMS.LEAD,
    PAGE_ENUMS.PAGES,
    PAGE_ENUMS.HOME,
    PAGE_ENUMS.PRIVACY,
    PAGE_ENUMS.ABOUT_US,
    PAGE_ENUMS.STATIC_PAGES,
    PAGE_ENUMS.PARTNERS,
    PAGE_ENUMS.ADD_PARTNER,
    PAGE_ENUMS.UPDATE_PARTNER,
    PAGE_ENUMS.FAQS,
    PAGE_ENUMS.CONTACT_US,
    PAGE_ENUMS.ADD_CONTACT_US,
    PAGE_ENUMS.UPDATE_CONTACT_US,
    PAGE_ENUMS.BLOGS,
    PAGE_ENUMS.GENERAL_SECTIONS,
    PAGE_ENUMS.SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.EMAILS,
    PAGE_ENUMS.OFFERS,
    PAGE_ENUMS.NEWS,
    PAGE_ENUMS.USER_PROFILE,
    PAGE_ENUMS.ADD_FAQ,
    PAGE_ENUMS.LANGUAGE,
    PAGE_ENUMS.EDIT_FAQ,
    PAGE_ENUMS.ADD_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.UPDATE_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.ADD_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.EDIT_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.LEAD_PAGE,
    PAGE_ENUMS.LEAD_PAGE_ADD_SECTION,
    PAGE_ENUMS.LEAD_PAGE_EDIT_SECTION,
    PAGE_ENUMS.BANNER,
    PAGE_ENUMS.ADD_BANNER,
    PAGE_ENUMS.TESTIMONIAL,
    PAGE_ENUMS.ADD_TESTIMONIAL,
    PAGE_ENUMS.EDIT_TESTIMONIAL,
    PAGE_ENUMS.INSURER,
    PAGE_ENUMS.ADD_INSURER,
    PAGE_ENUMS.EDIT_INSURER,
  ],
};

export const ADMIN_USER_DATA = {
  role: "sub-admin",
  pages: [
    PAGE_ENUMS.LEAD,
    PAGE_ENUMS.PAGES,
    PAGE_ENUMS.HOME,
    PAGE_ENUMS.PRIVACY,
    PAGE_ENUMS.ABOUT_US,
    PAGE_ENUMS.STATIC_PAGES,
    PAGE_ENUMS.PARTNERS,
    PAGE_ENUMS.ADD_PARTNER,
    PAGE_ENUMS.UPDATE_PARTNER,
    PAGE_ENUMS.FAQS,
    PAGE_ENUMS.CONTACT_US,
    PAGE_ENUMS.ADD_CONTACT_US,
    PAGE_ENUMS.UPDATE_CONTACT_US,
    PAGE_ENUMS.BLOGS,
    PAGE_ENUMS.GENERAL_SECTIONS,
    PAGE_ENUMS.SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.EMAILS,
    PAGE_ENUMS.OFFERS,
    PAGE_ENUMS.NEWS,
    PAGE_ENUMS.SETTINGS,
    PAGE_ENUMS.USER_PROFILE,
    PAGE_ENUMS.ADD_FAQ,
    PAGE_ENUMS.LANGUAGE,
    PAGE_ENUMS.EDIT_FAQ,
    PAGE_ENUMS.ADD_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.UPDATE_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.ADD_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.EDIT_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.LEAD_PAGE,
    PAGE_ENUMS.LEAD_PAGE_ADD_SECTION,
    PAGE_ENUMS.LEAD_PAGE_EDIT_SECTION,
    PAGE_ENUMS.BANNER,
    PAGE_ENUMS.ADD_BANNER,
    PAGE_ENUMS.TESTIMONIAL,
    PAGE_ENUMS.ADD_TESTIMONIAL,
    PAGE_ENUMS.EDIT_TESTIMONIAL,
    PAGE_ENUMS.INSURER,
    PAGE_ENUMS.ADD_INSURER,
    PAGE_ENUMS.EDIT_INSURER,
  ],
};

export const CMS_USER_DATA = {
  role: "cms-editor",
  pages: [
    PAGE_ENUMS.PAGES,
    PAGE_ENUMS.HOME,
    PAGE_ENUMS.PRIVACY,
    PAGE_ENUMS.ABOUT_US,
    PAGE_ENUMS.STATIC_PAGES,
    PAGE_ENUMS.PARTNERS,
    PAGE_ENUMS.ADD_PARTNER,
    PAGE_ENUMS.UPDATE_PARTNER,
    PAGE_ENUMS.FAQS,
    PAGE_ENUMS.CONTACT_US,
    PAGE_ENUMS.ADD_CONTACT_US,
    PAGE_ENUMS.UPDATE_CONTACT_US,
    PAGE_ENUMS.BLOGS,
    PAGE_ENUMS.GENERAL_SECTIONS,
    PAGE_ENUMS.SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.EMAILS,
    PAGE_ENUMS.OFFERS,
    PAGE_ENUMS.NEWS,
    PAGE_ENUMS.SETTINGS,
    PAGE_ENUMS.USER_PROFILE,
    PAGE_ENUMS.ADD_FAQ,
    PAGE_ENUMS.LANGUAGE,
    PAGE_ENUMS.EDIT_FAQ,
    PAGE_ENUMS.ADD_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.UPDATE_SOCIAL_MEDIA_LINK,
    PAGE_ENUMS.BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.ADD_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.EDIT_BIMA_BHAI_VIDEOS,
    PAGE_ENUMS.LEAD_PAGE,
    PAGE_ENUMS.LEAD_PAGE_ADD_SECTION,
    PAGE_ENUMS.LEAD_PAGE_EDIT_SECTION,
    PAGE_ENUMS.BANNER,
    PAGE_ENUMS.ADD_BANNER,
    PAGE_ENUMS.TESTIMONIAL,
    PAGE_ENUMS.ADD_TESTIMONIAL,
    PAGE_ENUMS.EDIT_TESTIMONIAL,
    PAGE_ENUMS.INSURER,
    PAGE_ENUMS.ADD_INSURER,
    PAGE_ENUMS.EDIT_INSURER,
  ],
};

export const CRM_USER_DATA = {
  role: "crm-editor",
  pages: [
    PAGE_ENUMS.LEAD,
    // PAGE_ENUMS.SETTINGS,
    // PAGE_ENUMS.USER_PROFILE
  ],
};

// TODO: side menu routes removed as per the scope of the project second phase
export const sideBarMenu = [
  {
    pathName: `/${ROUTES_PATH.LEADS}`,
    title: "Leads",
    icon: "mdi mdi-view-dashboard",
    childs: false,
    enum: PAGE_ENUMS.LEAD,
  },
  {
    title: "Pages",
    childs: true,
    icon: "mdi mdi-email-outline",
    enum: PAGE_ENUMS.PAGES,
    childList: [
      {
        pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.PRIVACY}`,
        title: "Privacy Policy",
        childs: false,
        enum: PAGE_ENUMS.PRIVACY,
      },
      {
        pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.LEAD_PAGE}`,
        title: "Lead Pages",
        childs: false,
        enum: PAGE_ENUMS.LEAD_PAGE,
      },
      {
        pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.FAQS}`,
        title: "FAQs",
        childs: false,
        enum: PAGE_ENUMS.FAQS,
      },
      {
        pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.BLOG}`,
        title: "Blog",
        childs: false,
        enum: PAGE_ENUMS.BLOGS,
      },
      // {
      //   pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.ABOUT_US}`,
      //   title: "About Us",
      //   childs: false,
      //   enum: PAGE_ENUMS.ABOUT_US,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.STATIC_PAGES}`,
      //   title: "Static Pages",
      //   childs: false,
      //   enum: PAGE_ENUMS.STATIC_PAGES,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.PARTNERS}`,
      //   title: "Partners",
      //   childs: false,
      //   enum: PAGE_ENUMS.PARTNERS,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.CONTACT_US}`,
      //   title: "Contact Us",
      //   childs: false,
      //   enum: PAGE_ENUMS.CONTACT_US,
      // },
    ],
  },
  {
    pathName: `/${ROUTES_PATH.BIMA_BHAI_VIDEOS}`,
    title: "Raksha Videos",
    childs: false,
    icon: "mdi mdi-buffer",
    enum: PAGE_ENUMS.BIMA_BHAI_VIDEOS,
  },
  {
    pathName: `/${ROUTES_PATH.TESTIMONIAL}`,
    title: "Testimonials",
    childs: false,
    icon: "mdi mdi-badge-account-horizontal",
    enum: PAGE_ENUMS.TESTIMONIAL,
  },
  {
    title: "General Sections",
    childs: true,
    icon: "mdi mdi-clipboard-outline",
    enum: PAGE_ENUMS.GENERAL_SECTIONS,
    childList: [
      {
        pathName: `/${ROUTES_PATH.GENERAL_SECTION}/${ROUTES_PATH.SOCIAL_MEDIA_LINK}`,
        title: "Social Media Links",
        childs: false,
        enum: PAGE_ENUMS.SOCIAL_MEDIA_LINK,
      },
      {
        pathName: `/${ROUTES_PATH.PAGES}/${ROUTES_PATH.INSURER}`,
        title: "Insurer",
        childs: false,
        enum: PAGE_ENUMS.INSURER,
      },
      // {
      //   pathName: `/${ROUTES_PATH.GENERAL_SECTION}/${ROUTES_PATH.LANGUAGE}`,
      //   title: "Language",
      //   childs: false,
      //   enum: PAGE_ENUMS.LANGUAGE,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.GENERAL_SECTION}/${ROUTES_PATH.EMAIL}`,
      //   title: "Email",
      //   childs: false,
      //   enum: PAGE_ENUMS.EMAILS,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.GENERAL_SECTION}/${ROUTES_PATH.OFFERS}`,
      //   title: "Offers",
      //   childs: false,
      //   enum: PAGE_ENUMS.OFFERS,
      // },
      // {
      //   pathName: `/${ROUTES_PATH.GENERAL_SECTION}/${ROUTES_PATH.NEWS}`,
      //   title: "News",
      //   childs: false,
      //   enum: PAGE_ENUMS.NEWS,
      // },
    ],
  },
  // {
  //   title: "Settings",
  //   childs: true,
  //   icon: "mdi mdi-chart-line",
  //   enum: PAGE_ENUMS.SETTINGS,
  //   childList: [
  //     {
  //       pathName: `/${ROUTES_PATH.SETTINGS}/${ROUTES_PATH.USER_PROFILE}`,
  //       title: "User Profile",
  //       childs: false,
  //       enum: PAGE_ENUMS.USER_PROFILE,
  //     },
  //   ],
  // },
  {
    pathName: `/${ROUTES_PATH.BANNER}`,
    title: "Banner",
    icon: "mdi mdi-image-size-select-actual",
    childs: false,
    enum: PAGE_ENUMS.BANNER,
  },
];

export const DefaultCateories = [{ label: "All", value: "" }];

export const DefaultLanguages = [{ label: "en", value: "en" }];

export const FILE_TYPE = {
  VIDEO: "video/*",
  IMAGE: "image/*",
};

export const LEAD_PAGE_SECTION_TYPE = {
  VIDEO: "Video",
  Text: "Text",
};
