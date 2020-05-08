import Validate from '../../utilities/Validate';
import { productTypes } from '../../data';
import produce from 'immer'

export default class Product {
  static products = []
  //children = []
  specialId = {};

  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.imgHero = product.imgHero;
    this.imgs = product.imgs;
    this.childIds = product.childIds;
    this.children = product.children ? product.children : [];
    this.price = product.price;
    this.info = product.info;
    this.count = product.count;
    this.productType = product.productType;
    this.special = product.special;
    this.specialId = product.specialId;

    if (this.children.length === 0) {
      this._populateChildren();
    }
  }

  _populateChildren() {
    if (this.childIds.length === 0) return;

    this.childIds.forEach(title => {
      const product = Product.products.find(p => p.title === title);
      this.children.push({ ...product });
    })
  }

  static setProducts(products) {
    Product.products = products;
  }


  getImgs() {
    if (this.childIds.length === 0) return [{ src: this.imgHero, alt: this.title }];

    if (Product.products.length === 0) return;

    const childImgs = this.children.map(p => ({ src: p.imgHero, alt: p.title }))

    return [{ src: this.imgHero, alt: this.title }, ...this.imgs, ...childImgs];
  }

  get getChildren() {
    if (this.childIds.length === 0) {
      console.error('No children found in this kit');
    }

    return this.children;
  }


  _setSpecial(value, productType) {
    this.special = {
      ...this.special,
      [productType]: value
    };
  }


  _setChildSpecial(value, childProductType) {
  
    const newChildren = [];

    this.children.forEach(child => {
      const newChild = { ...child };
      if (newChild.productType === childProductType) {
        newChild.special = value;
      }

      newChildren.push(newChild);
    })

    this.children = [...newChildren];
  }


  buildSpecialId(value, childProductType) {

    if (value === null || childProductType === null) {
      throw new Error('Product.buildSpecialId missing arguments');
    }

    // check if children exist => set children special
    if (this.children.length !== 0) this._setChildSpecial(value, childProductType);

    console.log('children HERE', this.children);

    this._setSpecial(value, childProductType);

    // check if special obj is empty
    if (Validate.isEmpty(this.special)) return;

    this.specialId = `${this.productType}_${JSON.stringify(this.special)}`;
  }
}