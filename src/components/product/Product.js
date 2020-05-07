import Validate from '../../utilities/Validate';
import { productTypes } from '../../data';
import produce from 'immer'

export default class Product {
  static prds = []
  //children = []
  specialId = {};

  constructor(id, title, imgHero, imgs, childIds, children = [], price, info, count, productType, special = {}, specialId = '') {
    this.id = id;
    this.title = title;
    this.imgHero = imgHero;
    this.imgs = imgs;
    this.childIds = childIds;
    this.children = children;
    this.price = price;
    this.info = info;
    this.count = count;
    this.productType = productType;
    this.special = special;
    this.specialId = specialId;

    if (this.children.length === 0) {
      this._populateChildren();
    }
  }

  _populateChildren() {
    if (this.childIds.length === 0) return;

    this.childIds.forEach(title => {
      const product = Product.prds.find(p => p.title === title);
      this.children.push({ ...product });
    })
  }



  static construct(product) {
    const { id, title, imgHero, imgs, childIds, children, price, info, count, productType, special, specialId } = product;

    return new Product(id, title, imgHero, imgs, childIds, children, price, info, count, productType, special, specialId);
  }

  static setPrds(products) {
    Product.prds = products;
  }



  getImgs() {
    if (this.childIds.length === 0) return [{ src: this.imgHero, alt: this.imgs }];

    if (Product.prds.length === 0) return;

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
    this.children.map(child => {
      if (child.productType === childProductType) {
        produce(child, draft => {
          draft.special = value;
        })
      }
    })
  }


  buildSpecialId(value, childProductType) {

    if (value === null || childProductType === null) {
      throw new Error('Product.buildSpecialId missing arguments');
    }

    // check if children exist => set children special
    if (this.children.length !== 0) this._setChildSpecial(value, childProductType);

    this._setSpecial(value, childProductType);

    // check if special obj is empty
    if (Validate.isEmpty(this.special)) return;

    this.specialId = `${this.productType}_${JSON.stringify(this.special)}`;
  }
}