

export default class Product {
  static prds = []
  children = []

  constructor(id, title, imgHero, imgs, childIds, price, info, count, productType, special = '') {
    this.id = id;
    this.title = title;
    this.imgHero = imgHero;
    this.imgs = imgs;
    this.childIds = childIds;
    this.price = price;
    this.info = info;
    this.count = count;
    this.productType = productType;
    this.special = special;

    this.populateChildren();
  }

  populateChildren() {
    if (this.childIds.length === 0) return;

    this.childIds.forEach(id => {
      const product = Product.prds.find(p => p.id === id);
      this.children.push({...product});
    })
  }

  setSpecial(value) {
    this.special = value;
  }

  static create(product) {
    const { id, title, imgHero, imgs, childIds, price, info, count, productType, special } = product;

    return new Product(id, title, imgHero, imgs, childIds, price, info, count, productType, special);
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

  
}