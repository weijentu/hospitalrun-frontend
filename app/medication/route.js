import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import { t } from 'hospitalrun/macro';
import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';

export default AbstractModuleRoute.extend({
  addCapability: 'add_medication',
  moduleName: 'medication',
  newButtonText: t('medication.buttons.newButton'),
  sectionTitle: t('medication.sectionTitle'),

  additionalButtons: computed(function() {
    let intl = this.get('intl');
    let additionalButtons = [];
    if (this.currentUserCan('fulfill_medication')) {
      additionalButtons.push({
        buttonIcon: 'octicon octicon-checklist',
        buttonAction: 'dispenseMedication',
        buttonText: intl.t('medication.buttons.dispenseMedication'),
        class: 'btn btn-primary'
      });
    }
    if (this.currentUserCan(this.get('addCapability'))) {
      additionalButtons.push({
        buttonIcon: 'octicon octicon-mail-reply',
        buttonAction: 'returnMedication',
        buttonText: intl.t('medication.buttons.returnMedication'),
        class: 'btn btn-primary'
      });
    }
    if (!isEmpty(additionalButtons)) {
      return additionalButtons;
    }
  }),

  additionalModels: [{
    name: 'aisleLocationList',
    findArgs: ['lookup', 'aisle_location_list']
  }, {
    name: 'expenseAccountList',
    findArgs: ['lookup', 'expense_account_list']
  }, {
    name: 'sexList',
    findArgs: ['lookup', 'sex']
  }, {
    name: 'warehouseList',
    findArgs: ['lookup', 'warehouse_list']
  }],

  actions: {
    dispenseMedication() {
      if (this.currentUserCan('fulfill_medication')) {
        this.transitionTo('medication.edit', 'dispense');
      }
    },

    returnMedication() {
      if (this.currentUserCan(this.get('addCapability'))) {
        this.transitionTo('medication.return', 'new');
      }
    }
  }
});
