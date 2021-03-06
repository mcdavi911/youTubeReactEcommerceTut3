
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
//import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Camera from '@material-ui/icons/Camera'
import WorkOutline from '@material-ui/icons/WorkOutline'
import ThreeSixty from '@material-ui/icons/ThreeSixty'
import CreditCard from '@material-ui/icons/CreditCard'
import GUID from './utilities/GUID'

import ProductTypes from './utilities/ProductTypes';
import Product from './components/product/Product';


const TripodIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tripod</title><polygon points="21 20 13 12 13 4 15 4 15 2 9 2 9 4 11 4 11 12 3 20 4.41 21.41 11 14.83 11 22 13 22 13 14.83 19.59 21.41 21 20" /></svg>
    </SvgIcon>
  )
}


const CasesIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cases</title><path d="M17,1H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V3A2,2,0,0,0,17,1ZM10,9a3,3,0,1,1,3-3A3,3,0,0,1,10,9Z"/></svg>
    </SvgIcon>
  )
}



export const itemCategories = [
  { id: GUID.uuidv4(), label: ProductTypes.kit, icon: WorkOutline },
  { id: GUID.uuidv4(), label: ProductTypes.lense, icon: Camera },
  { id: GUID.uuidv4(), label: ProductTypes.case, icon: CasesIcon },
  { id: GUID.uuidv4(), label: ProductTypes.tripod, icon: TripodIcon },
  { id: GUID.uuidv4(), label: ProductTypes.motor, icon: ThreeSixty },
  { id: GUID.uuidv4(), label: ProductTypes.prepaidCredit, icon: CreditCard }
]

export const listDevices = {
  apple: [
    { id: GUID.uuidv4(), label: 'IPhone 11' },
    { id: GUID.uuidv4(), label: 'IPhone 11 Pro' },
  ],
  samsung: [
    { id: GUID.uuidv4(), label: 'Note 9' },
    { id: GUID.uuidv4(), label: 'Note 8' },
  ],
  huawei: [
    { id: GUID.uuidv4(), label: 'Mate 9' },
    { id: GUID.uuidv4(), label: 'P 30' },
  ]
}

export const listArms = [
  { id: GUID.uuidv4(), label: 'Arm A' },
  { id: GUID.uuidv4(), label: 'Arm B' },
  { id: GUID.uuidv4(), label: 'Arm C' }
];

export const listLense360 = [
  { id: GUID.uuidv4(), label: 'Lense360 A' },
  { id: GUID.uuidv4(), label: 'Lense360 B' },
  { id: GUID.uuidv4(), label: 'Lense360 C' }
];

export const listLensePhoto = [
  { id: GUID.uuidv4(), label: 'LensePhoto A' },
  { id: GUID.uuidv4(), label: 'LensePhoto B' },
  { id: GUID.uuidv4(), label: 'LensePhoto C' },
  { id: GUID.uuidv4(), label: 'LensePhoto D' },
];




const kits = [
  {
    id: GUID.uuidv4(),
    title: "Starter Kit 360°",
    imgHero: "img/products/nodalview-starter-kit-360.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Starter Kit Photo",
    imgHero: "img/products/nodalview-starter-kit-photo.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview Pro Photo Lens"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Starter Kit Duo",
    imgHero: "img/products/starter-kit-duo.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Kit Duo",
    imgHero: "img/products/kit-duo-pack.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor",
      "100 360° Panoramas",
      "100 HDR Photos"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Pro Kit 125",
    imgHero: "img/products/Nodalview-pro-kit-125.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Pro Kit 300",
    imgHero: "img/products/Nodalview-pro-kit-300.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor"
    ],
    imgs: [],
    price: 138,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Kit Demo",
    imgHero: "img/products/nodalview-pack-duo-motorised-V2.png",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor"
    ],
    imgs: [],
    price: 649,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: true,
    special: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Nodalview Arm",
    imgHero: "img/products/brasnodal-nodalview.jpg",
    childIds: [],
    imgs: [],
    price: 39,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.kit
  },
];

const lenses = [
  {
    id: GUID.uuidv4(),
    title: "Nodalview 360°",
    imgHero: "img/products/lens360.jpg",
    childIds: [],
    imgs: [],
    price: 18,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.lense
  },
  {
    id: GUID.uuidv4(),
    title: "Nodalview Pro Photo Lens",
    imgHero: "img/products/nodalview-pro-photo-lens.jpg",
    childIds: [],
    imgs: [],
    price: 24,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.lense
  },
]

const cases = [
  {
    id: GUID.uuidv4(),
    title: "Nodalview Cases",
    imgHero: "img/products/cases.jpg",
    childIds: [],
    imgs: [],
    price: 19,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.case,
  }
]

const tripods = [
  {
    id: GUID.uuidv4(),
    title: "Nodalview Tripod",
    imgHero: "img/products/tripod.jpg",
    childIds: [],
    imgs: [],
    price: 59,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.tripod,
  }
];

const prepaidCredits = [
  {
    id: GUID.uuidv4(),
    title: "100 HDR Photos",
    imgHero: "img/products/nodalivew-100Hdr-prepaid.jpg",
    childIds: [],
    imgs: [],
    price: 129,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit

  },
  {
    id: GUID.uuidv4(),
    title: "500 HDR Photos",
    imgHero: "img/products/nodalview-prepaid-500-hdr.jpg",
    childIds: [],
    imgs: [],
    price: 299,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "1000 HDR Photos",
    imgHero: "img/products/nodalview-prepaid-1000-hdr.jpg",
    childIds: [],
    imgs: [],
    price: 399,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "100 360° Panoramas",
    imgHero: "img/products/nodalview-prepaid-100-360.jpg",
    childIds: [],
    imgs: [],
    price: 349,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "250 360° Panoramas",
    imgHero: "img/products/nodalview-prepaid-250-360.jpg",
    childIds: [],
    imgs: [],
    price: 749,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "250 360° Panoramas",
    imgHero: "img/products/nodalview-prepaid-1000-360.jpg",
    childIds: [],
    imgs: [],
    price: 2399,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  }

];

const bundles = [
  {
    id: GUID.uuidv4(),
    title: "Basic Bundle",
    imgHero: "img/products/nodalview-unlimited-basic.png",
    childIds: [],
    imgs: [],
    price: 59,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "Pro Bundle",
    imgHero: "img/products/nodalview-unlimited-pro.png",
    childIds: [],
    imgs: [],
    price: 99,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  },
  {
    id: GUID.uuidv4(),
    title: "Gold Bundle",
    imgHero: "img/products/nodalview-unlimited-gold.png",
    childIds: [],
    imgs: [],
    price: 139,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.prepaidCredit,
  }
];


const accessories = [
  {
    id: GUID.uuidv4(),
    title: "Nodalview Motor",
    imgHero: "img/products/nodalview-motor.jpg",
    childIds: [],
    imgs: [],
    price: 129,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    productNew: false,
    special: '',
    productType: ProductTypes.motor
  },
];



export const productList = [
  ...kits,
  ...cases,
  ...tripods,
  ...accessories,
  ...lenses,
  ...prepaidCredits,
  ...bundles
];


//export const productDetail = 