import { isEmpty } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import SelectValues from 'hospitalrun/utils/select-values';
import { computed } from '@ember/object';

export default Mixin.create({
  defaultVisitTypes: [
    '住院',
    '门诊',
    '追踪',
    '影像',
    '测试',
    '药物'
  ],

  _getVisitTypes(includeEmpty) {
    let defaultVisitTypes = this.get('defaultVisitTypes');
    let visitTypesList = this.get('visitTypesList');
    let visitList;
    if (isEmpty(visitTypesList)) {
      visitList = defaultVisitTypes;
    } else {
      visitList = visitTypesList.get('value');
    }
    visitList = SelectValues.selectValues(visitList, includeEmpty);
    return visitList;
  },

  visitTypes: computed('visitTypesList', 'defaultVisitTypes', function() {
    return this._getVisitTypes();
  }),

  visitTypesWithEmpty: computed('visitTypesList', 'defaultVisitTypes', function() {
    return this._getVisitTypes(true);
  })
});
