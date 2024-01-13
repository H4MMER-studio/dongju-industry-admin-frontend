class Util {
  getProductName(
    type:
      | 'air-conditioner'
      | 'freeze-protection-damper-coil'
      | 'exhaust-unit'
      | 'bubble-damper'
      | 'fully-sealed-door'
      | 'air-blower'
  ) {
    switch (type) {
      case 'air-conditioner':
        return '공기조화기';

      case 'freeze-protection-damper-coil':
        return '동파방지댐퍼코일';

      case 'bubble-damper':
        return '버블댐퍼';

      case 'exhaust-unit':
        return '배기유니트';

      case 'fully-sealed-door':
        return '밀폐도어';

      case 'air-blower':
        return '송풍기';

      default:
        return '-';
    }
  }

  getInquiryType(type: 'estimate' | 'after-service' | 'etc') {
    switch (type) {
      case 'estimate':
        return '견적문의';

      case 'after-service':
        return 'A/S문의';

      case 'etc':
        return '그 외 문의';

      default:
        return '-';
    }
  }
}

const ComponentsUtil = new Util();

export { ComponentsUtil };
