
export default class ProductTypes {

  static types = {
    KIT: 'kits',
    LENSE: 'lenses',
    CASE: 'cases',
    ARM: 'arm',
    MOTOR: 'motor',
    TRIPOD: 'tripods',
    PREPAID_CREDIT: 'prepaid credits',
    ACCESSORY: 'accessories'
  };

  
  static typesModel = {
    KIT: 'kits',
    LENSE: {
      PANORAMA: 'lense360',
      PHOTO: 'lensePhoto'
    },
    CASE: 'cases',
    TRIPOD: 'tripods',
    PREPAID_CREDIT: 'prepaid credits',
    ACCESSORY: {
      ARM: 'arm',
      MOTOR: 'motor'
    }
  }


  static display(type) {
    switch (type) {
      case ProductTypes.types.ARM:
        return ProductTypes.types.ACCESSORY;
      case ProductTypes.types.MOTOR:
        return ProductTypes.types.ACCESSORY;
      default:
        return type;
    }
  }

  static kit = ProductTypes.types.KIT;

  static lense = ProductTypes.types.LENSE;

  static case = ProductTypes.types.CASE;

  static arm = ProductTypes.types.ARM;

  static motor = ProductTypes.types.MOTOR;

  static tripod = ProductTypes.types.TRIPOD;

  static prepaidCredit = ProductTypes.types.PREPAID_CREDIT;

  static accessory = ProductTypes.types.ACCESSORY;
}
