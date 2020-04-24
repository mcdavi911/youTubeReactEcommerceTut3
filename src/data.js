import Search from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
//import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Smartphone from '@material-ui/icons/Smartphone'
import Camera from '@material-ui/icons/Camera'
import WorkOutline from '@material-ui/icons/WorkOutline'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ThreeSixty from '@material-ui/icons/ThreeSixty'
import CreditCard from '@material-ui/icons/CreditCard'

export const productType = {
  KIT: 'kits',
  LENSE: 'lenses',
  CASE: 'cases',
  MOTOR: 'motor',
  TRIPOD: 'tripods',
  PREPAID_CREDIT: 'prepaid credits'
}


export const itemCategories = [
  { label: productType.KIT, icon: WorkOutline },
  { label: productType.LENSE, icon: Camera },
  { label: productType.CASE, icon: Smartphone },
  { label: productType.MOTOR, icon: ThreeSixty },
  { label: productType.TRIPOD, icon: PhotoCamera },
  { label: productType.PREPAID_CREDIT, icon: CreditCard },
]

export const devices = {
  apple: [
    { id: 1, name: 'IPhone 11' },
    { id: 2, name: 'IPhone 11 Pro' },
  ],
  samsung: [
    { id: 3, name: 'Note 9' },
    { id: 4, name: 'Note 8' },
  ],
  huawei: [
    { id: 5, name: 'Mate 9' },
    { id: 6, name: 'P 30' },
  ]
}


export const products = [
  {
    id: 1,
    title: "Nodalview Cases",
    imgHero: "img/products/cases.jpg",
    childIds: [],
    imgs: [],
    price: 19,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.CASE,
  },
  {
    id: 2,
    title: "Nodalview Arm",
    imgHero: "img/products/brasnodal-nodalview.jpg",
    childIds: [],
    imgs: [],
    price: 39,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.LENSE
  },
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
    category: productType.KIT
  },
  {
    id: 4,
    title: "Nodalview 360°",
    imgHero: "img/products/lens360.png",
    childIds: [],
    imgs: [],
    price: 18,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.LENSE
  },
  {
    id: 5,
    title: "Nodalview Pro Photo Lens",
    imgHero: "img/products/nodalview-pro-photo-lens.jpg",
    childIds: [],
    imgs: [],
    price: 24,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.LENSE
  },
  {
    id: 6,
    title: "Nodalview Motor",
    imgHero: "img/products/nodalview-motor.jpg",
    childIds: [],
    imgs: [],
    price: 129,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.MOTOR
  },

  {
    id: 7,
    title: "100 HDR Photos",
    imgHero: "img/products/nodalivew-100Hdr-prepaid.jpg",
    childIds: [],
    imgs: [],
    price: 129,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.PREPAID_CREDIT

  },
  {
    id: 8,
    title: "Motorised Duo Pack",
    imgHero: "img/products/nodalview-pack-duo-motorised-V2.png",
    childIds: [],
    imgs: [],
    price: 649,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.KIT
  },
  {
    id: 9,
    title: "Pro Pack 125",
    imgHero: "img/products/Nodalview-pro-kit-125.jpg",
    childIds: [],
    imgs: [],
    price: 599,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
    count: 0,
    category: productType.KIT
  }
];



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
  category: productType.KIT
};
