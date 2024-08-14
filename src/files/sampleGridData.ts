import {ValueType} from "realgrid";

export const fields = [
  {
    fieldName: "foodKind", // 식사유형
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "foodType", // 식사구분
    dataType: ValueType.TEXT,
  },

  /** 고객 구분 Start **/
  {
    fieldName: "custNm", // 고객명
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "custCd", // 고객코드
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "storeNm", // 점포구분
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "cityNm", // 지역구분
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "custGp", // 고객그룹
    dataType: ValueType.TEXT,
  },
  /** 고객 구분 End **/

  /** 식자재 Start **/
  {
    fieldName: "orderDt", // 주문일
    dataType: ValueType.DATE,
  },
  {
    fieldName: "inDt", // 입고일
    dataType: ValueType.DATE,
  },
  /** 식자재 End **/

  {
    fieldName: "eatDt", // 식사일
    dataType: ValueType.DATE,
  },

  /** 식자재 유효기간 Start **/
  {
    fieldName: "currentSt", // 식자재-현재 상태
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "processedSt", // 식자재-처리상태
    dataType: ValueType.TEXT,
  },
  /** 식자재 유효기간 End **/

  {
    fieldName: "orderNo", // 주문번호
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "eatRound", // 식사회차
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "eatNo", // 식단번호
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "custNo", // 고객번호
    dataType: ValueType.TEXT,
  },

  /** ERP 식자재 S/O Start **/
  {
    fieldName: "soNo", // SO(번호)
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "soFoodNo", // S/O식자재번호
    dataType: ValueType.TEXT,
  },
  /** ERP 식자재 S/O End **/

  {
    fieldName: "stockNm", // 입고처
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "stockCd", // 코드
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "foodNm", // 식자재명
    dataType: ValueType.TEXT,
  },

  /** 식자재 정보 Start **/
  {
    fieldName: "foodCd", // 코드
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "foodNm2", // 식자재명
    dataType: ValueType.TEXT,
  },

  {
    fieldName: "foodPrice", // 식사 단가
    dataType: ValueType.NUMBER,
  },

  /** 식자재 원가 **/
  {
    fieldName: "consumerPrice", // 소비자가
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "settlementPrice", // 결재 단가
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "shippingAmount", // 배송 운임 조정액
    dataType: ValueType.NUMBER,
  },
]

export const columns = [
  {
    fieldName: "foodKind", // 식사유형
    name: "foodKind",
    header: {
      text: '식사유형'
    },
  },
  {
    fieldName: "foodType", // 식사구분
    name: "foodType",
    header: {
      text: '식사구분'
    },
  },

  /** 고객 구분 Start **/
  {
    fieldName: "custNm", // 고객명
    name: "custNm",
    header: {
      text: '고객명'
    },
  },
  {
    fieldName: "custCd", // 고객코드
    name: "custCd",
    header: {
      text: '고객코드'
    },
  },
  {
    fieldName: "storeNm", // 점포구분
    name: "storeNm",
    header: {
      text: '점포구분'
    },
  },
  {
    fieldName: "cityNm", // 지역구분
    name: "cityNm",
    header: {
      text: '지역구분'
    },
  },
  {
    fieldName: "custGp", // 지역구분
    name: "custGp",
    header: {
      text: '고객그룹'
    },
  },
  /** 고객 구분 End **/

  /** 식자재 Start **/
  {
    fieldName: "orderDt", // 주문일
    name: "orderDt",
    header: {
      text: '주문일'
    },
  },
  {
    fieldName: "inDt", // 입고일
    name: "inDt",
    header: {
      text: '입고일'
    },
  },
  /** 식자재 End **/

  {
    fieldName: "eatDt", // 식사일
    name: "eatDt",
    header: {
      text: '식사일'
    },
  },

  /** 식자재 유효기간 Start **/
  {
    fieldName: "currentSt", // 식자재-현재 상태
    name: "currentSt",
    header: {
      text: '현재 상태'
    },
  },
  {
    fieldName: "processedSt", // 식자재-처리상태
    name: "processedSt",
    header: {
      text: '처리상태'
    },
  },
  /** 식자재 유효기간 End **/

  {
    fieldName: "orderNo", // 주문번호
    name: "orderNo",
    header: {
      text: '주문번호'
    },
  },
  {
    fieldName: "eatRound", // 식사회차
    name: "eatRound",
    header: {
      text: '식사회차'
    },
  },
  {
    fieldName: "eatNo", // 식단번호
    name: "eatNo",
    header: {
      text: '식단번호'
    },
  },
  {
    fieldName: "custNo", // 고객번호
    name: "custNo",
    header: {
      text: '고객번호'
    },
  },

  /** ERP 식자재 S/O Start **/
  {
    fieldName: "soNo", // SO(번호)
    name: "soNo",
    header: {
      text: 'SO(번호)'
    },
  },
  {
    fieldName: "soFoodNo", // S/O식자재번호
    name: "soFoodNo",
    header: {
      text: 'S/O식자재번호'
    },
  },
  /** ERP 식자재 S/O End **/

  {
    fieldName: "stockNm", // 입고처
    name: "stockNm",
    header: {
      text: '입고처'
    },
  },
  {
    fieldName: "stockCd", // 코드
    name: "stockCd",
    header: {
      text: '코드'
    },
  },
  {
    fieldName: "foodNm", // 식자재명
    name: "foodNm",
    header: {
      text: '식자재명'
    },
  },

  /** 식자재 정보 Start **/
  {
    fieldName: "foodCd", // 코드
    name: "foodCd",
    header: {
      text: '코드'
    },
  },
  {
    fieldName: "foodNm2", // 식자재명
    name: "foodNm2",
    header: {
      text: '식자재명'
    },
  },

  {
    fieldName: "foodPrice", // 식사 단가
    name: "foodPrice",
    header: {
      text: '식사 단가'
    },
    numberFormat: '#,##0',
  },

  /** 식자재 원가 **/
  {
    fieldName: "consumerPrice", // 소비자가
    name: "consumerPrice",
    header: {
      text: '소비자가'
    },
    numberFormat: '#,##0',
  },
  {
    fieldName: "settlementPrice", // 결재 단가
    name: "settlementPrice",
    header: {
      text: '결재 단가'
    },
    numberFormat: '#,##0',
  },
  {
    fieldName: "shippingAmount", // 배송 운임 조정액
    name: "shippingAmount",
    header: {
      text: '배송 운임 조정액'
    },
    numberFormat: '#,##0',
  },
]

export const layouts = [
  'foodKind',
  'foodType',
  {
    name: 'customer', // 고객
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: '고객구분',
      tooltip: '123',
      showTooltip: true,
    },
    items: [
      { column: 'custNm', groupShowMode: 'always' },
      { column: 'custCd', groupShowMode: 'expand' },
      { column: 'storeNm', groupShowMode: 'expand' },
      { column: 'cityNm', groupShowMode: 'expand' },
      { column: 'custGp', groupShowMode: 'expand' },
    ],
  },
  {
    name: 'foodDtInfo', // 식자재
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: '식자재',
    },
    items: [
      { column: 'orderDt', groupShowMode: 'always' },
      { column: 'inDt', groupShowMode: 'expand' },
    ],
  },
  'eatDt',
  {
    name: 'foodDtPeriod', // 식자재 유효기간
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: '식자재 유효기간',
    },
    items: [
      { column: 'currentSt', groupShowMode: 'always' },
      { column: 'processedSt', groupShowMode: 'expand' },
    ],
  },
  'orderNo',
  'eatRound',
  'eatNo',
  'custNo',
  {
    name: 'foodDtPeriod', // ERP 식자재 S/O
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: 'ERP 식자재 S/O',
    },
    items: [
      { column: 'soNo', groupShowMode: 'always' },
      { column: 'soFoodNo', groupShowMode: 'expand' },
    ],
  },
  'stockNm',
  'stockCd',
  'foodNm',
  {
    name: 'foodInfo', // 식자재 정보
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: '식자재 정보',
    },
    items: [
      { column: 'foodCd', groupShowMode: 'always' },
      { column: 'foodNm2', groupShowMode: 'expand' },
    ],
  },
  'foodPrice',
  {
    name: 'foodPriceInfo', // 식자재 원가
    direction: 'horizontal',
    expandable: true,
    expanded: true,
    header: {
      text: '식자재 원가',
    },
    items: [
      { column: 'consumerPrice', groupShowMode: 'always' },
      { column: 'settlementPrice', groupShowMode: 'expand' },
      { column: 'shippingAmount', groupShowMode: 'expand' },
    ],
  },
]

export const rows = [
  {
    foodKind:'조식',
    foodType:'한식',
    custNm:'김아무개',
    custCd:'CU001',
    storeNm:'강남점',
    cityNm:'강남구',
    custGp:'직원',
    orderDt:'2024-07-16',
    inDt:'2024-07-20',
    eatDt:'2024-08-10',
    currentSt:'유효',
    processedSt:'대기',
    orderNo:'ON023412',
    eatRound:'2 회차',
    eatNo:'EN000123',
    custNo:'CNO123123',
    soNo:'SO123123123',
    soFoodNo:'SFN0909890',
    stockNm:'서울물류',
    stockCd:'CSOD009',
    foodNm:'고급유린기',
    foodCd:'FC1239770',
    foodNm2:'유린기',
    foodPrice:'43000',
    consumerPrice:'45000',
    settlementPrice:'41000',
    shippingAmount:'1000',
  }
]