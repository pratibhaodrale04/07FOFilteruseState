import { restList } from "../utils/mockData";
import RestCardComponent from "./RestCardComponent ";
import { useState } from "react";

const BodyComponent = ()=>{
  // let listOfRestaurants = [
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "15867",
  //           name: "Hunan",
  //           cloudinaryImageId: "lavt8mqr6zgbesjaukvb",
  //           locality: "New BEL Road",
  //           areaName: "New Bel Road",
  //           costForTwo: "₹850 for two",
  //           cuisines: [
  //             "Chinese",
  //             "Thai"
  //           ],
  //           avgRating: 4.4,
  //           parentId: "2084",
  //           avgRatingString: "4.4",
  //           totalRatingsString: "10K+",
  //           promoted: true,
  //           adTrackingId: "cid=13114887~p=0~adgrpid=13114887#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=15867~eid=e57ffc8a-71dc-4d74-906f-66091a9d94be~srvts=1715590718606~collid=83647",
  //           sla: {
  //             deliveryTime: 44,
  //             lastMileTravel: 5,
  //             serviceability: "SERVICEABLE",
  //             slaString: "40-45 mins",
  //             lastMileTravelString: "5.0 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-13 22:45:00",
  //             opened: true
  //           },
  //           badges: {
  //             imageBadges: [
  //               {
  //                 imageId: "newg.png",
  //                 description: "Gourmet"
  //               }
  //             ],
  //             textExtendedBadges: [
  //               {
  //                 iconId: "guiltfree/GF_Logo_android_3x",
  //                 shortDescription: "options available",
  //                 fontColor: "#7E808C"
  //               }
  //             ]
  //           },
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textBased: {},
  //               imageBased: {
  //                 badgeObject: [
  //                   {
  //                     attributes: {
  //                       imageId: "newg.png",
  //                       description: "Gourmet"
  //                     }
  //                   }
  //                 ]
  //               },
  //               textExtendedBadges: {
  //                 badgeObject: [
  //                   {
  //                     attributes: {
  //                       fontColor: "#7E808C",
  //                       iconId: "guiltfree/GF_Logo_android_3x",
  //                       description: "",
  //                       shortDescription: "options available"
  //                     }
  //                   }
  //                 ]
  //               }
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "50% OFF",
  //             subHeader: "UPTO ₹100"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "4.1",
  //               ratingCount: "1K+"
  //             },
  //             source: "GOOGLE",
  //             sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=15867&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "666036",
  //           name: "Byg Brewski Brewing Company",
  //           cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/3/19/8d30ab6e-d42d-4f6b-90e0-3f512c351154_bf9e71b4-b119-47dd-aaed-36083323643e.png_compressed",
  //           locality: "Tumkur Road",
  //           areaName: "Yeshwanthpur",
  //           costForTwo: "₹600 for two",
  //           cuisines: [
  //             "Pizzas",
  //             "Burgers",
  //             "Pan-Asian",
  //             "Pastas",
  //             "Grill",
  //             "Biryani",
  //             "Mexican"
  //           ],
  //           avgRating: 4.4,
  //           parentId: "7382",
  //           avgRatingString: "4.4",
  //           totalRatingsString: "1K+",
  //           promoted: true,
  //           adTrackingId: "cid=13429978~p=2~adgrpid=13429978#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=666036~eid=b450e7b1-50df-42cf-be87-5aa2eb7d7b76~srvts=1715590718606~collid=83647",
  //           sla: {
  //             deliveryTime: 35,
  //             lastMileTravel: 3,
  //             serviceability: "SERVICEABLE",
  //             slaString: "35-40 mins",
  //             lastMileTravelString: "3.0 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-14 00:00:00",
  //             opened: true
  //           },
  //           badges: {},
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textBased: {},
  //               imageBased: {},
  //               textExtendedBadges: {}
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "50% OFF",
  //             subHeader: "UPTO ₹100",
  //             discountTag: "POCKET HERO",
  //             discountCalloutInfo: {
  //               message: "Free Delivery",
  //               logoCtx: {
  //                 logo: "v1655895371/free_delivery_logo_hqipbo.png"
  //               }
  //             }
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "--"
  //             }
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=666036&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "376716",
  //           name: "Chinese Wok",
  //           cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //           locality: "Ms Ramaiah Nagar",
  //           areaName: "Sanjay Nagar",
  //           costForTwo: "₹250 for two",
  //           cuisines: [
  //             "Chinese",
  //             "Asian",
  //             "Tibetan",
  //             "Desserts"
  //           ],
  //           avgRating: 4.1,
  //           parentId: "61955",
  //           avgRatingString: "4.1",
  //           totalRatingsString: "5K+",
  //           promoted: true,
  //           adTrackingId: "cid=13303058~p=4~adgrpid=13303058#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=376716~eid=a177a553-9cc2-423b-8058-0c7cf05324d0~srvts=1715590718606~collid=83647",
  //           sla: {
  //             deliveryTime: 37,
  //             lastMileTravel: 5.7,
  //             serviceability: "SERVICEABLE",
  //             slaString: "35-40 mins",
  //             lastMileTravelString: "5.7 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-14 01:00:00",
  //             opened: true
  //           },
  //           badges: {},
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textExtendedBadges: {},
  //               textBased: {},
  //               imageBased: {}
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "ITEMS",
  //             subHeader: "AT ₹149"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "--"
  //             }
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=376716&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "376843",
  //           name: "Big Bowl",
  //           cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
  //           locality: "Ms Ramaiah Nagar",
  //           areaName: "Sanjay Nagar",
  //           costForTwo: "₹250 for two",
  //           cuisines: [
  //             "North Indian",
  //             "Chinese",
  //             "Tibetan",
  //             "Desserts"
  //           ],
  //           avgRating: 4.2,
  //           parentId: "434792",
  //           avgRatingString: "4.2",
  //           totalRatingsString: "1K+",
  //           promoted: true,
  //           adTrackingId: "cid=13303632~p=5~adgrpid=13303632#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=376843~eid=9641d5f9-e759-4f73-8f87-de0c1ac8110d~srvts=1715590718606~collid=83647",
  //           sla: {
  //             deliveryTime: 40,
  //             lastMileTravel: 5.7,
  //             serviceability: "SERVICEABLE",
  //             slaString: "35-40 mins",
  //             lastMileTravelString: "5.7 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-14 01:00:00",
  //             opened: true
  //           },
  //           badges: {},
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textBased: {},
  //               imageBased: {},
  //               textExtendedBadges: {}
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "ITEMS",
  //             subHeader: "AT ₹149"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "--"
  //             }
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=376843&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "121702",
  //           name: "Grill Biriyanis",
  //           cloudinaryImageId: "vf4k4cviibmdbshbv6a2",
  //           locality: "Jalahalli",
  //           areaName: "Jalahalli Peenya",
  //           costForTwo: "₹300 for two",
  //           cuisines: [
  //             "Biryani",
  //             "Andhra",
  //             "Tandoor",
  //             "Grill"
  //           ],
  //           avgRating: 4.1,
  //           parentId: "21649",
  //           avgRatingString: "4.1",
  //           totalRatingsString: "10K+",
  //           promoted: true,
  //           adTrackingId: "cid=13428588~p=6~adgrpid=13428588#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=121702~eid=5828f935-27f2-47da-9ac9-7d0d8d46fb59~srvts=1715590718606~collid=83647",
  //           sla: {
  //             deliveryTime: 33,
  //             lastMileTravel: 7,
  //             serviceability: "SERVICEABLE",
  //             slaString: "30-35 mins",
  //             lastMileTravelString: "7.0 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-14 00:00:00",
  //             opened: true
  //           },
  //           badges: {},
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textBased: {},
  //               imageBased: {},
  //               textExtendedBadges: {}
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "20% OFF",
  //             subHeader: "UPTO ₹50"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "3.8",
  //               ratingCount: "1K+"
  //             },
  //             source: "GOOGLE",
  //             sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=121702&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "5569",
  //           name: "Mainland China",
  //           cloudinaryImageId: "rhf4k9bhbnkawkcd2jer",
  //           locality: "Rajajinagar",
  //           areaName: "Rajajinagar",
  //           costForTwo: "₹850 for two",
  //           cuisines: [
  //             "Chinese",
  //             "Asian",
  //             "Oriental",
  //             "Thai",
  //             "Pan-Asian",
  //             "Seafood",
  //             "Desserts"
  //           ],
  //           avgRating: 4.3,
  //           parentId: "617",
  //           avgRatingString: "4.3",
  //           totalRatingsString: "1K+",
  //           sla: {
  //             deliveryTime: 29,
  //             lastMileTravel: 2,
  //             serviceability: "SERVICEABLE",
  //             slaString: "25-30 mins",
  //             lastMileTravelString: "2.0 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-13 23:00:00",
  //             opened: true
  //           },
  //           badges: {
  //             imageBadges: [
  //               {
  //                 imageId: "Rxawards/_CATEGORY-Chinese.png",
  //                 description: "Delivery!"
  //               },
  //               {
  //                 imageId: "newg.png",
  //                 description: "Gourmet"
  //               }
  //             ]
  //           },
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textExtendedBadges: {},
  //               textBased: {},
  //               imageBased: {
  //                 badgeObject: [
  //                   {
  //                     attributes: {
  //                       imageId: "Rxawards/_CATEGORY-Chinese.png",
  //                       description: "Delivery!"
  //                     }
  //                   },
  //                   {
  //                     attributes: {
  //                       imageId: "newg.png",
  //                       description: "Gourmet"
  //                     }
  //                   }
  //                 ]
  //               }
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "₹125 OFF",
  //             subHeader: "ABOVE ₹249",
  //             discountTag: "FLAT DEAL"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "4.0",
  //               ratingCount: "1K+"
  //             },
  //             source: "GOOGLE",
  //             sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=5569&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "6926",
  //           name: "FreshMenu",
  //           cloudinaryImageId: "6c4de7b481d3614370e5062b2f33e7d6",
  //           locality: "Dr. Rajkumar road",
  //           areaName: "Rajajinagar",
  //           costForTwo: "₹250 for two",
  //           cuisines: [
  //             "Continental",
  //             "Chinese",
  //             "Oriental",
  //             "Asian",
  //             "Healthy Food",
  //             "Fast Food",
  //             "Indian",
  //             "Desserts"
  //           ],
  //           avgRating: 4,
  //           parentId: "398",
  //           avgRatingString: "4.0",
  //           totalRatingsString: "10K+",
  //           sla: {
  //             deliveryTime: 27,
  //             lastMileTravel: 0.6,
  //             serviceability: "SERVICEABLE",
  //             slaString: "25-30 mins",
  //             lastMileTravelString: "0.6 km",
  //             iconType: "ICON_TYPE_EMPTY"
  //           },
  //           availability: {
  //             nextCloseTime: "2024-05-14 00:00:00",
  //             opened: true
  //           },
  //           badges: {
  //             textExtendedBadges: [
  //               {
  //                 iconId: "guiltfree/GF_Logo_android_3x",
  //                 shortDescription: "options available",
  //                 fontColor: "#7E808C"
  //               }
  //             ]
  //           },
  //           isOpen: true,
  //           type: "F",
  //           badgesV2: {
  //             entityBadges: {
  //               textBased: {},
  //               imageBased: {},
  //               textExtendedBadges: {
  //                 badgeObject: [
  //                   {
  //                     attributes: {
  //                       shortDescription: "options available",
  //                       fontColor: "#7E808C",
  //                       iconId: "guiltfree/GF_Logo_android_3x",
  //                       description: ""
  //                     }
  //                   }
  //                 ]
  //               }
  //             }
  //           },
  //           aggregatedDiscountInfoV3: {
  //             header: "EVERY ITEM",
  //             subHeader: "@ ₹129"
  //           },
  //           orderabilityCommunication: {
  //             title: {},
  //             subTitle: {},
  //             message: {},
  //             customIcon: {}
  //           },
  //           differentiatedUi: {
  //             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //             differentiatedUiMediaDetails: {
  //               mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //               lottie: {},
  //               video: {}
  //             }
  //           },
  //           reviewsSummary: {},
  //           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //           restaurantOfferPresentationInfo: {},
  //           externalRatings: {
  //             aggregatedRating: {
  //               rating: "--"
  //             }
  //           },
  //           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //         },
  //         analytics: {},
  //         cta: {
  //           link: "swiggy://menu?restaurant_id=6926&source=collection&query=Chinese",
  //           text: "RESTAURANT_MENU",
  //           type: "DEEPLINK"
  //         },
  //         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  //       },
  //       relevance: {
  //         type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //         sectionId: "MENU_RETURN_FOOD"
  //       }
  //     }
  //   }
  // ];

  const [ listOfRestaurants, setListOfRestaurants ] = useState(restList);
    return <div className="search-bar">
    <h1>SEARCH</h1>
    <div className="filter">
    <button className="filter-btn" onClick={() => {
      const filteredRestaurants = listOfRestaurants.filter(
        (rest) => rest.card.card.info.avgRating > 4.2);
        console.log("size", filteredRestaurants.length);
        setListOfRestaurants(filteredRestaurants);
    }
    }>Top Rated Restaurants</button>
    </div>
    <div className="rest-container">
    {
      listOfRestaurants.map((restCards)=>(
            <RestCardComponent key={restCards.card.card.info.id} restData={restCards}/>
        ))
    }
    </div>
    </div>
};

export default BodyComponent;