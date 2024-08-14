<template>
  <RealGrid :columns="gridColumns" :data="gridData"></RealGrid>
</template>

<script setup lang="ts">
import RealGrid from '../components/RealGrid.vue'; // RealGrid 컴포넌트의 경로에 맞게 수정

// 컬럼 설정을 가진 [json]을 정의
const gridColumns = [
  { fieldName: 'field1', width: 100 },
  { fieldName: 'field2', width: 100 },
  // 필요에 따라 더 많은 컬럼을 추가
];

// fetch response.json 추가
const gridData = [
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
  { field1: '컬럼1데이터', field2: '컬럼2데이터' },
]

</script>