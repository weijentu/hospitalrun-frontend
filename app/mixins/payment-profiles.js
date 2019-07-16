import Mixin from '@ember/object/mixin';
import SelectValues from 'hospitalrun/utils/select-values';
export default Mixin.create({
  paymentProfiles: [
    '自费',
    '折扣',
    '免费'
  ].map(SelectValues.selectValuesMap)
});
