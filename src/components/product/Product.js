import Validate from '../../utilities/Validate';
import { productList } from '../../data';

export default class Product {
  static products = [];
  //children = []

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

    if (Product.products.length === 0) {
      Product.products = productList;
    }

    if (this.children.length === 0) {
      this._populateChildren();
    }

    this._populateImgs();
  }

  _populateChildren() {
    if (this.childIds.length === 0) return;

    this.childIds.forEach(title => {
      const product = Product.products.find(p => p.title === title);
      this.children.push({ ...product });
    })
  }

  _populateImgs() {
    if (this.childIds.length === 0) {
      this.imgs = [{ src: this.imgHero, alt: this.title }];
      return;
    }

    const childImgs = this.children.map(p => ({ src: p.imgHero, alt: p.title }));

    this.imgs = [{ src: this.imgHero, alt: this.title }, ...childImgs];
  }

  /*
  static setProducts(products) {
    Product.products = products;
  }
  */


  getImgs() {
    //if (this.childIds.length === 0) return [{ src: this.imgHero, alt: this.title }];

    if (Product.products.length === 0) return;

    const childImgs = this.children.map(p => ({ src: p.imgHero, alt: p.title }));

    return [{ src: this.imgHero, alt: this.title }, ...this.imgs, ...childImgs];
  }

  get getChildren() {
    if (this.childIds.length === 0) {
      console.error('No children found in this kit');
    }

    return this.children;
  }

  

  _setSpecial(value, title) {

    this.special = {
      ...this.special,
      [title]: value
    };
  }


  _setChildSpecial(value, childTitle) {

    const newChildren = [];

    this.children.forEach(child => {
      const newChild = { ...child };
      if (newChild.title === childTitle) {
        newChild.special = value;
      }

      newChildren.push(newChild);
    })

    this.children = [...newChildren];
  }

  _sortObjKeys(obj) {
    const unordered = { ...obj };

    const ordered = {};
    Object.keys(unordered).sort().forEach(function (key) {
      ordered[key] = unordered[key];
    });

    obj = { ...ordered };
    return obj;
  }


  buildId(value, title) {

    if (value == null || title == null) {
      throw new Error('Product.buildId missing arguments');
    }

    // if children exist => set children special
    if (this.children.length !== 0) this._setChildSpecial(value, title);

    // set product special
    this._setSpecial(value, title);

    // check if special obj is empty
    if (Validate.isEmpty(this.special)) return;

    this.special = this._sortObjKeys(this.special);

    this.id = `${this.title}_${JSON.stringify(this.special)}`;
  }
}