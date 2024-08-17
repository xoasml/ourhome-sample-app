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
    width: 200,
    editable: true,
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
    foodKind: '조식',
    foodType: '한식',
    custNm: '김철수',
    custCd: 'CU001',
    storeNm: '강남점',
    cityNm: '강남구',
    custGp: '직원',
    orderDt: '2024-07-16',
    inDt: '2024-07-20',
    eatDt: '2024-08-10',
    currentSt: '유효',
    processedSt: '대기',
    orderNo: 'ON023412',
    eatRound: '2 회차',
    eatNo: 'EN000123',
    custNo: 'CNO123123',
    soNo: 'SO123123123',
    soFoodNo: 'SFN0909890',
    stockNm: '서울물류',
    stockCd: 'CSOD009',
    foodNm: '고급유린기',
    foodCd: 'FC1239770',
    foodNm2: '유린기',
    foodPrice: '43000',
    consumerPrice: '45000',
    settlementPrice: '41000',
    shippingAmount: '1000',
  },
  {
    foodKind: '중식',
    foodType: '양식',
    custNm: '이영희',
    custCd: 'CU002',
    storeNm: '서초점',
    cityNm: '서초구',
    custGp: '고객',
    orderDt: '2024-07-17',
    inDt: '2024-07-21',
    eatDt: '2024-08-11',
    currentSt: '유효',
    processedSt: '완료',
    orderNo: 'ON023413',
    eatRound: '3 회차',
    eatNo: 'EN000124',
    custNo: 'CNO123124',
    soNo: 'SO123123124',
    soFoodNo: 'SFN0909891',
    stockNm: '부산물류',
    stockCd: 'CSOD010',
    foodNm: '고급짜장면',
    foodCd: 'FC1239771',
    foodNm2: '짜장면',
    foodPrice: '50000',
    consumerPrice: '52000',
    settlementPrice: '48000',
    shippingAmount: '1500',
  },
  {
    foodKind: '석식',
    foodType: '중식',
    custNm: '박정수',
    custCd: 'CU003',
    storeNm: '부산점',
    cityNm: '부산진구',
    custGp: '관리자',
    orderDt: '2024-07-18',
    inDt: '2024-07-22',
    eatDt: '2024-08-12',
    currentSt: '취소',
    processedSt: '대기',
    orderNo: 'ON023414',
    eatRound: '4 회차',
    eatNo: 'EN000125',
    custNo: 'CNO123125',
    soNo: 'SO123123125',
    soFoodNo: 'SFN0909892',
    stockNm: '대구물류',
    stockCd: 'CSOD011',
    foodNm: '고급짬뽕',
    foodCd: 'FC1239772',
    foodNm2: '짬뽕',
    foodPrice: '47000',
    consumerPrice: '49000',
    settlementPrice: '45000',
    shippingAmount: '2000',
  },
  {
    foodKind: '조식',
    foodType: '일식',
    custNm: '최민수',
    custCd: 'CU004',
    storeNm: '대구점',
    cityNm: '중구',
    custGp: '직원',
    orderDt: '2024-07-19',
    inDt: '2024-07-23',
    eatDt: '2024-08-13',
    currentSt: '유효',
    processedSt: '완료',
    orderNo: 'ON023415',
    eatRound: '5 회차',
    eatNo: 'EN000126',
    custNo: 'CNO123126',
    soNo: 'SO123123126',
    soFoodNo: 'SFN0909893',
    stockNm: '광주물류',
    stockCd: 'CSOD012',
    foodNm: '고급스시',
    foodCd: 'FC1239773',
    foodNm2: '스시',
    foodPrice: '60000',
    consumerPrice: '62000',
    settlementPrice: '58000',
    shippingAmount: '2500',
  },
  {
    foodKind: '중식',
    foodType: '한식',
    custNm: '정다은',
    custCd: 'CU005',
    storeNm: '광주점',
    cityNm: '광산구',
    custGp: '고객',
    orderDt: '2024-07-20',
    inDt: '2024-07-24',
    eatDt: '2024-08-14',
    currentSt: '취소',
    processedSt: '완료',
    orderNo: 'ON023416',
    eatRound: '6 회차',
    eatNo: 'EN000127',
    custNo: 'CNO123127',
    soNo: 'SO123123127',
    soFoodNo: 'SFN0909894',
    stockNm: '인천물류',
    stockCd: 'CSOD013',
    foodNm: '고급비빔밥',
    foodCd: 'FC1239774',
    foodNm2: '비빔밥',
    foodPrice: '45000',
    consumerPrice: '47000',
    settlementPrice: '43000',
    shippingAmount: '1200',
  },
  {
    foodKind: '석식',
    foodType: '양식',
    custNm: '한지민',
    custCd: 'CU006',
    storeNm: '인천점',
    cityNm: '남동구',
    custGp: '관리자',
    orderDt: '2024-07-21',
    inDt: '2024-07-25',
    eatDt: '2024-08-15',
    currentSt: '유효',
    processedSt: '대기',
    orderNo: 'ON023417',
    eatRound: '7 회차',
    eatNo: 'EN000128',
    custNo: 'CNO123128',
    soNo: 'SO123123128',
    soFoodNo: 'SFN0909895',
    stockNm: '강릉물류',
    stockCd: 'CSOD014',
    foodNm: '고급스테이크',
    foodCd: 'FC1239775',
    foodNm2: '스테이크',
    foodPrice: '75000',
    consumerPrice: '77000',
    settlementPrice: '73000',
    shippingAmount: '3000',
  },
  {
    foodKind: '조식',
    foodType: '중식',
    custNm: '서지수',
    custCd: 'CU007',
    storeNm: '강릉점',
    cityNm: '강릉시',
    custGp: '직원',
    orderDt: '2024-07-22',
    inDt: '2024-07-26',
    eatDt: '2024-08-16',
    currentSt: '유효',
    processedSt: '완료',
    orderNo: 'ON023418',
    eatRound: '8 회차',
    eatNo: 'EN000129',
    custNo: 'CNO123129',
    soNo: 'SO123123129',
    soFoodNo: 'SFN0909896',
    stockNm: '제주물류',
    stockCd: 'CSOD015',
    foodNm: '고급짜장면',
    foodCd: 'FC1239776',
    foodNm2: '짜장면',
    foodPrice: '50000',
    consumerPrice: '52000',
    settlementPrice: '48000',
    shippingAmount: '1500',
  },
  {
    foodKind: '중식',
    foodType: '일식',
    custNm: '박성민',
    custCd: 'CU008',
    storeNm: '제주점',
    cityNm: '제주시',
    custGp: '고객',
    orderDt: '2024-07-23',
    inDt: '2024-07-27',
    eatDt: '2024-08-17',
    currentSt: '취소',
    processedSt: '대기',
    orderNo: 'ON023419',
    eatRound: '9 회차',
    eatNo: 'EN000130',
    custNo: 'CNO123130',
    soNo: 'SO123123130',
    soFoodNo: 'SFN0909897',
    stockNm: '울산물류',
    stockCd: 'CSOD016',
    foodNm: '고급돈카츠',
    foodCd: 'FC1239777',
    foodNm2: '돈카츠',
    foodPrice: '55000',
    consumerPrice: '57000',
    settlementPrice: '53000',
    shippingAmount: '2000',
  },
  {
    foodKind: '석식',
    foodType: '한식',
    custNm: '이준호',
    custCd: 'CU009',
    storeNm: '울산점',
    cityNm: '울산광역시',
    custGp: '관리자',
    orderDt: '2024-07-24',
    inDt: '2024-07-28',
    eatDt: '2024-08-18',
    currentSt: '유효',
    processedSt: '완료',
    orderNo: 'ON023420',
    eatRound: '10 회차',
    eatNo: 'EN000131',
    custNo: 'CNO123131',
    soNo: 'SO123123131',
    soFoodNo: 'SFN0909898',
    stockNm: '서울물류',
    stockCd: 'CSOD017',
    foodNm: '고급갈비찜',
    foodCd: 'FC1239778',
    foodNm2: '갈비찜',
    foodPrice: '90000',
    consumerPrice: '92000',
    settlementPrice: '88000',
    shippingAmount: '3000',
  },
  {
    foodKind: '조식',
    foodType: '양식',
    custNm: '김민호',
    custCd: 'CU010',
    storeNm: '서울점',
    cityNm: '서울특별시',
    custGp: '직원',
    orderDt: '2024-07-25',
    inDt: '2024-07-29',
    eatDt: '2024-08-19',
    currentSt: '취소',
    processedSt: '대기',
    orderNo: 'ON023421',
    eatRound: '11 회차',
    eatNo: 'EN000132',
    custNo: 'CNO123132',
    soNo: 'SO123123132',
    soFoodNo: 'SFN0909899',
    stockNm: '부산물류',
    stockCd: 'CSOD018',
    foodNm: '고급피자',
    foodCd: 'FC1239779',
    foodNm2: '피자',
    foodPrice: '35000',
    consumerPrice: '37000',
    settlementPrice: '33000',
    shippingAmount: '1500',
  },
]