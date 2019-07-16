import { map } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import SelectValues from 'hospitalrun/utils/select-values';
import { computed } from '@ember/object';

export default Mixin.create({
  appointmentStatusList: [
    '出现',
    '预约',
    '取消',
    '错过'
  ],
  appointmentStatuses: map('appointmentStatusList', SelectValues.selectValuesMap),

  appointmentStatusesWithEmpty: computed(function() {
    return SelectValues.selectValues(this.get('appointmentStatusList'), true);
  })
});
