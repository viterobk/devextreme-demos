<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="orders"
      :show-borders="true"
      key-expr="ID"
    >
      <DxSelection mode="single"/>
      <DxColumn
        :width="130"
        data-field="OrderNumber"
        caption="Invoice Number"
      />
      <DxColumn
        :width="160"
        data-field="OrderDate"
        data-type="date"
      />
      <DxColumn data-field="Employee"/>
      <DxColumn
        data-field="CustomerStoreCity"
        caption="City"
      />
      <DxColumn
        data-field="CustomerStoreState"
        caption="State"
      />
      <DxColumn
        data-field="SaleAmount"
        alignment="right"
        format="currency"
      />
      <DxSummary>
        <DxTotalItem
          column="OrderNumber"
          summary-type="count"
        />
        <DxTotalItem
          :customize-text="customizeDate"
          column="OrderDate"
          summary-type="min"
        />
        <DxTotalItem
          column="SaleAmount"
          summary-type="sum"
          value-format="currency"
        />
      </DxSummary>
    </DxDataGrid>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxSummary,
  DxTotalItem
} from 'devextreme-vue/data-grid';
import Globalize from 'globalize';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';

import service from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxSelection,
    DxSummary,
    DxTotalItem
  },
  data() {
    return {
      orders: service.getOrders()
    };
  },
  methods: {
    customizeDate(data) {
      return `First: ${ Globalize.formatDate(data.value, { date: 'medium' })}`;
    }
  }
};
</script>
<style scoped>
#gridContainer {
    height: 440px;
}
</style>
