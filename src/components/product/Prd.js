

export default class Prd {
  static prds = []
  children = []

  constructor(id, title, imgHero, imgs, childIds, price, info, count, productType) {
    this.id = id;
    this.title = title;
    this.imgHero = imgHero;
    this.imgs = imgs;
    this.childIds = childIds;
    this.price = price;
    this.info = info;
    this.count = count;
    this.productType = productType;

    this.populateChildren();
  }

  populateChildren() {
    if (this.childIds.length === 0) return;

    this.childIds.forEach(id => {
      const product = Prd.prds.find(p => p.id === id);
      this.children.push(product);
    })
  }


  static create(product) {
    const { id, title, imgHero, imgs, childIds, price, info, count, productType } = product;

    return new Prd(id, title, imgHero, imgs, childIds, price, info, count, productType);
  }

  static setPrds(products) {
    Prd.prds = products;
  }

  

  get getImgs() {
    if (this.childIds.length === 0) return { src: this.imgHero, alt: this.imgs };

    if (Prd.prds.length === 0) return;

    const childImgs = this.children.map(p => ({ src: p.imgHero, alt: p.title }))

    return [{ src: this.imgHero, alt: this.title }, ...this.imgs, ...childImgs];
  }

  get getChildren() {
    if (this.childIds.length === 0) {
      throw new Error('No children found')
    }

   

    return this.children;
  }
}