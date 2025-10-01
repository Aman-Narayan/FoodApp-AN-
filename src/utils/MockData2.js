// Resturant link :-> https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9218109&lng=80.94013749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// Home section :-> https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJTzF8LABXmTkR_ka-um9Bjvo

const Mockdata = [
    {
      id: "750579",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
      action: {
        link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        text: "Pizzas",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for pizza",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750591",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      action: {
        link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        text: "Biryani",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for biryani",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "749868",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
      action: {
        link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        text: "Cakes",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for cake",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750589",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
      action: {
        link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        text: "Burgers",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for burger",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "749772",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
      action: {
        link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
        text: "Noodles",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for noodles",
        "altTextCta": "open"
      },
      "entityId": "80463",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750222",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
      action: {
        link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
        text: "Rolls",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for roll",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750201",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
      action: {
        link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
        text: "Paratha",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for paratha",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "749768",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
      action: {
        link: "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
        text: "Momos",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for momos",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750131",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
      action: {
        link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
        text: "Dosa",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for dosa",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750587",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
      action: {
        link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
        text: "Chinese",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chinese",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750208",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
      action: {
        link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
        text: "Pastry",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for Pastry",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750635",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
      action: {
        link: "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_CCS_Kebabs&type=rcv2",
        text: "Kebabs",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for kebabs",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80451&tags=layout_CCS_Kebabs",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750206",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
      action: {
        link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
        text: "Pasta",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pasta",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750216",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
      action: {
        link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        text: "Pav Bhaji",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pav bhaji",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "749876",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
      action: {
        link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
        text: "Chole Bhature",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chhole bhatoore",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750596",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
      action: {
        link: "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
        text: "Ice Cream",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for icecream",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750260",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasmalai.png",
      action: {
        link: "https://www.swiggy.com/collections/80390?collection_id=80390&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
        text: "Rasmalai",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for rasmalai",
        "altTextCta": "open"
      },
      "entityId": "80390",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750643",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
      action: {
        link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
        text: "Idli",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurants curated for idly",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750586",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
      action: {
        link: "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
        text: "Gulab Jamun",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for gulab jamun",
        "altTextCta": "open"
      },
      "entityId": "80430",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    },
    {
      id: "750256",
      imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png",
      action: {
        link: "https://www.swiggy.com/collections/80388?collection_id=80388&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
        text: "Rasgulla",
        type: "WEBLINK"
      },
      entityType: "BANNER",
      "accessibility": {
        "altText": "restaurant curated for rasgulla",
        "altTextCta": "open"
      },
      "entityId": "80388",
      "frequencyCapping": {

      },
      "externalMarketing": {

      }
    }
  ]
  