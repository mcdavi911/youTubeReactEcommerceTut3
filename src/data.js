
//import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Smartphone from '@material-ui/icons/Smartphone'
import Camera from '@material-ui/icons/Camera'
import WorkOutline from '@material-ui/icons/WorkOutline'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ThreeSixty from '@material-ui/icons/ThreeSixty'
import CreditCard from '@material-ui/icons/CreditCard'
import GUID from './utilities/GUID'

import ProductTypes from './utilities/ProductTypes';





export const itemCategories = [
  { id: GUID.uuidv4(), label: ProductTypes.kit, icon: WorkOutline },
  { id: GUID.uuidv4(), label: ProductTypes.lense, icon: Camera },
  { id: GUID.uuidv4(), label: ProductTypes.case, icon: Smartphone },
  { id: GUID.uuidv4(), label: ProductTypes.tripod, icon: PhotoCamera },
  { id: GUID.uuidv4(), label: ProductTypes.accessory, icon: ThreeSixty },
  { id: GUID.uuidv4(), label: ProductTypes.prepaidCredit, icon: CreditCard }
]

export const devices = {
  apple: [
    { id: GUID.uuidv4(), name: 'IPhone 11' },
    { id: GUID.uuidv4(), name: 'IPhone 11 Pro' },
  ],
  samsung: [
    { id: GUID.uuidv4(), name: 'Note 9' },
    { id: GUID.uuidv4(), name: 'Note 8' },
  ],
  huawei: [
    { id: GUID.uuidv4(), name: 'Mate 9' },
    { id: GUID.uuidv4(), name: 'P 30' },
  ]
}




export let products = [
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
    special: '',
    specialId: '',
    productType: ProductTypes.case,
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
    special: '',
    specialId: '',
    productType: ProductTypes.arm
  },
  {
    id: GUID.uuidv4(),
    title: "Starter Kit Duo",
    imgHero: "img/products/kit-duo-pack.jpg",
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
    special: '',
    specialId: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Nodalview 360°",
    imgHero: "img/products/lens360.png",
    childIds: [],
    imgs: [],
    price: 18,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    special: '',
    specialId: '',
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
    special: '',
    specialId: '',
    productType: ProductTypes.lense
  },
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
    special: '',
    specialId: '',
    productType: ProductTypes.motor
  },

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
    special: '',
    specialId: '',
    productType: ProductTypes.prepaidCredit

  },
  {
    id: GUID.uuidv4(),
    title: "Motorised Duo Pack",
    imgHero: "img/products/nodalview-pack-duo-motorised-V2.png",
    childIds: [],
    imgs: [],
    price: 649,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    special: '',
    specialId: '',
    productType: ProductTypes.kit
  },
  {
    id: GUID.uuidv4(),
    title: "Pro Pack 125",
    imgHero: "img/products/Nodalview-pro-kit-125.jpg",
    childIds: [
      "Nodalview Cases",
      "Nodalview Arm",
      "Nodalview 360°",
      "Nodalview Pro Photo Lens",
      "Nodalview Motor",
      "100 HDR Photos",
    ],
    imgs: [],
    price: 599,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    special: '',
    specialId: '',
    productType: ProductTypes.kit
  },

];








/*
export const productDetail =
{
  id: 3,
  title: "Starter Kit Duo",
  imgHero: "img/products/kit-duo-pack.jpg",
  childIds: [1, 2, 4, 5, 6],
  imgs: [],
  price: 138,
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
  count: 0,
  special: '',
  productType: productTypes.KIT
};
*/