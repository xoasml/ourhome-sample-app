<script setup lang="ts">
import RealGrid from "realgrid";
import {RealGridVue, RGDataColumn} from "realgrid-vue";
import {ref} from "vue";

// DEV LICENSE KEY
RealGrid.setLicenseKey("upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy57ygNQll9FOJMVWpaY093J")
const gridRef = ref<RealGridVue>();


interface IColumn {
  fieldName: string;
  width: number;
}

interface IData {
  [key: string]: string | number | undefined;
}

interface IProps {
  columns: IColumn[];
  data: IData[];
}

const props = defineProps<IProps>();

</script>

<template>
  <div style="width: 1000px; height: 400px">
    <RealGridVue ref="gridRef" :auto-generate-field="true" :rows="props.data">
      <template v-for="(column) in props.columns" :key="column.fieldName">
        <RGDataColumn :field-name="column.fieldName" :width="column.width"></RGDataColumn>
      </template>
    </RealGridVue>
  </div>
</template>
