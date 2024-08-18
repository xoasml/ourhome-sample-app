<script setup lang="ts">
import ReloadPrompt from './components/ReloadPrompt.vue'
import {onMounted, ref, Ref} from "vue";

const gridName: Ref<string | HTMLDivElement> = ref('test');

import RealGridCreate from '@/files/realGridCreate';
import { fields, columns, layouts, rows } from '@/files/sampleGridData';
import {GridView, LocalDataProvider} from "realgrid";

let gridView: GridView;
let dataProvider: LocalDataProvider;
const vm = this;

const gridDataCnt:Ref<number> = ref(0);
onMounted(() => {
  // dataProvider = new LocalDataProvider(false);
  // gridView = new GridView('test');
  // gridView.setDataSource(dataProvider);
  // dataProvider.setFields(fields);
  // gridView.setColumns(columns);
  const setGridData = {
    gridName: gridName.value,
    columns,
    fields,
    vm,
    existFavorite: true,
    layout: layouts,
    existCalendar: true,
  };
  const grid = new RealGridCreate(setGridData);
  gridView = grid.getGridView();
  dataProvider = grid.getDataProvider();
  let rowsList = [...rows, ...rows];
  rowsList = [...rowsList, ...rowsList,...rowsList, ...rowsList,...rowsList, ...rowsList];
  console.log('2',dataProvider)
  gridDataCnt.value = rowsList.length;
  dataProvider.setRows(rowsList);
})

const isFixCol = ref(false);
const isFixRow = ref(false);
const fixGrid = (type: string) => {
  const current = gridView.getCurrent();
  if (type === 'column') {
    if (isFixCol.value) {
      gridView.setFixedOptions({ colCount: 0 });
    } else {
      const name = current.column;
      const colIndex = name ? gridView.layoutByName(name).root.vindex : 0;
      gridView.setFixedOptions({colCount: colIndex + 1});

    }
    isFixCol.value = !isFixCol.value;
  } else if (type === 'row') {
    if (isFixRow.value) {
      gridView.setFixedOptions({ rowCount: 0 });
    } else {

      const rowIndex = current.itemIndex < 0 ? 0 : current.itemIndex;

      gridView.setFixedOptions({
        exceptFromSorting: false,
        rowCount: rowIndex + 1,
      });
    }
    isFixRow.value = !isFixRow.value;
  }
}

const panes:Ref<{title: string;   content: string;   key: string;}[]> = ref([
  { title: '식사재메뉴', content: 'BookingRequest', key: 'BookingRequest' },
  { title: '샘플 메뉴', content: 'SampleTwo', key: 'SampleTwo' },
]);
const activeKey: Ref<string> = ref(panes.value[0].key);
// const newTabIndex = ref(0);
    // selected: 'ManageRequest',
const currentTab = ref(0);

const current =  ref([]);
const active =  ref(false);
const confiOpen =  ref(false);
const myinfoOpen =  ref(false);
const selectValue =  ref('');
const selectOptions =  ref(['KOREA', 'ENGLISH', 'VIETNAM']);

const showModal:Ref<boolean> =  ref(true);
</script>

<template>
  <ReloadPrompt />
  <div id="header">
    <div class="header_top">
      <div class="top_section">
        <div class="top_left">
          <h1><img src="@/assets/img/logo_k.png" /></h1>
<!--          <span>SampleDevelop</span>-->
          <span>샘플 개발</span>
        </div>
        <div class="top_right">
          <button class="btn_confi" @click="confiOpen = !confiOpen">
            <i class="user"><img src="@/assets/img/icon_man.png" alt="User" /></i>
            <span>confimation</span>
            <i class="arrow"><img src="@/assets/img/arrow_down.png" alt="down" /></i>
          </button>
          <!-- confimation 드롭다운 메뉴 -->
          <div class="confi_dropdown_box" :class="{ drop_active: myinfoOpen }">
            <a class="">자주 찾는 메뉴</a>
            <a class="">마이페이지</a>
            <a class="">로그아웃</a>
          </div>
          <!-- //confimation 드롭다운 메뉴 -->
          <button class="btn_menu" @click="myinfoOpen = !myinfoOpen" :class="{ myinfo_on: myinfoOpen }"></button>
          <!-- 내정보 드롭다운 메뉴 -->
          <div class="myinfo_dropdown_box" :class="{ drop_myinfo: confiOpen }">
            <div class="myinfo_head">
              <div class="profile">
                <i><img src="@/assets/img/icon_man_m.png" alt="프로필 사진" /></i>
                <span class="profile_info">구매자</span>
              </div>
              <MultiSelect id="adderss01" style="width: 105px; flex-shrink: 0" v-model="selectValue" :options="selectOptions" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="KOREA"></MultiSelect>
            </div>
            <div class="myinfo_body">
              <table>
                <colgroup>
                  <col style="width: 30%" />
                  <col style="width: 70%" />
                </colgroup>
                <tr>
                  <th class="t-l">회사명</th>
                  <td>Wood world company</td>
                </tr>
                <tr>
                  <th class="t-l">회사 코드</th>
                  <td>r4890</td>
                </tr>
                <!-- 등록된 주소가 없을경우 -->
                <tr>
                  <th class="t-l">기본 배송지 주소</th>
                  <td><button class="btn_deep_gray">배송지 관리</button></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="a-c">
                      <span class="f-g">등록된 정보가 없습니다.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="t-l">기본 배송지 주소</th>
                  <td><button class="btn_deep_gray">배송지 관리</button></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="address_detail">
                      <span>[호치민대리점]</span>
                      <span>cities and provinces county districts</span>
                      <span>Hïu Bang, Huyen Th¡ch Thât,Thành phô Hà Noi, Viet Nam</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="t-l">배송지 연락처 1</th>
                  <td>0000-000-0000</td>
                </tr>
                <tr>
                  <th class="t-l">배송지 연락처 2</th>
                  <td>0000-000-0000</td>
                </tr>
              </table>
            </div>
            <div class="myinfo_footer">
              <!-- 지정된 영업 사원이 있는 경우 -->
              <div class="profile">
                <i><img src="@/assets/img/icon_man_m.png" alt="프로필 사진" /></i>
                <div class="profile_info">
                  <span>김 영업</span>
                  <small>000-000-0000</small>
                  <small>Dongwha@dongwha.com</small>
                </div>
              </div>
              <!-- //지정된 영업 사원이 있는 경우 -->
              <!-- 지정된 영업 사원이 없는 경우 -->
              <div class="profile">
                <i><img src="@/assets/img/icon_man_m.png" alt="프로필 사진" /></i>
                <div class="profile_info">
                  <span>지정된 영업사원이 없습니다.</span>
                  <small>대표 연락처 : 000-000-0000</small>
                </div>
              </div>
              <!-- //지정된 영업 사원이 없는 경우 -->
            </div>
          </div>
          <!-- //내정보 드롭다운 메뉴 -->
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="bottom_section">
        <ul class="navi">
          <li>
            <button class="btn_main">대메뉴 1</button>
          </li>
          <li>
            <button class="btn_main">대메뉴 2</button>
          </li>
          <li>
            <button class="btn_main">대메뉴 3</button>
          </li>
          <li>
            <button class="btn_main">대메뉴 4</button>
          </li>
          <li>
            <button class="btn_main">대메뉴 5</button>
          </li>
        </ul>

        <!-- 서브메뉴
        기본상태 sub_navi 클래스만 존해
        메인 메뉴 마우스 오버시 active 클래스 추가
         -->
        <div class="sub_navi sub_navi">
          <div class="sub_navi_cate">
            <p class="sub_navi_title">Sample estimate management</p>
            <ul>
              <li>
                <button @click="active = !active" class="btn_fav" :class="{ fav_on: active }"></button>
                <a>Sample estimate management</a>
              </li>
              <li>
                <button @click="active = !active" class="btn_fav" :class="{ fav_on: active }"></button>
                <a>일반견적현황</a>
              </li>
              <li>
                <button @click="active = !active" class="btn_fav" :class="{ fav_on: active }"></button>
                <a>표준판가조회</a>
              </li>
            </ul>
          </div>
          <div class="sub_navi_cate">
            <p class="sub_navi_title">샘플견적</p>
            <ul>
              <li>
                <button @click="active = !active" class="btn_fav" :class="{ fav_on: active }"></button>
                <a>샘플견적요청</a>
              </li>
              <li>
                <button @click="active = !active" class="btn_fav" :class="{ fav_on: active }"></button>
                <a>샘플견적현황</a>
              </li>
            </ul>
          </div>
          <div class="sub_navi_cate">
            <p class="sub_navi_title">부킹상세</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="container">
    <!-- 컨텐츠 -->
    <div class="body_contents">
      <div id="MainTabS">
        <button class="btn_home" ><img src="@/assets/img/icon_home_g.png" alt="home" /></button>
        <button class="btn_delete_tab">Delete All</button>

        <ul class="main-tab-menu">
          <li class="main-tab" v-for="(tab, index) in panes" v-bind:class="{ active: currentTab === index }" :key="index">
            <a v-on:click="(currentTab = index), (activeKey = tab.key)">{{ tab.title }}</a>
            <button class="tabs-close-x"></button>
          </li>
        </ul>
        <div v-for="(pane, pIndex) in panes" :key="pIndex" :class="{ 'none-display': currentTab !== pIndex }">
<!--          <component :is="pane.content" v-show="currentTab === pIndex" />-->
          <div class="realgrid_container realgrid_container07">
            <div class="real_head">
              <div class="real_head_left">
                <small>
                  총
                  <i>{{ gridDataCnt }}</i>
                  건
                </small>
              </div>
              <div class="real_head_right">
                <button class="btn_default btn_print_fuction">
                  상단 우측 버튼 영역
                </button>
<!--                <button class="btn_default btn_process">-->
<!--                  btnDepositoryTransform-->
<!--                </button>-->
<!--                <button class="btn_default btn_process">-->
<!--                  btnDepositoryRequest-->
<!--                </button>-->
<!--                <button class="btn_default btn_function">-->
<!--                  btnSave-->
<!--                </button>-->
<!--                <button class="btn_default btn_function">-->
<!--                  btnDelete-->
<!--                </button>-->
<!--                <button class="btn_default btn_function">-->
<!--                  btnCancel-->
<!--                </button>-->
              </div>
            </div>
            <div class="real_top_filter">
              <div class="real_top_left"></div>
              <div class="real_top_right">
<!--                <button class="btn_default btn_filter">-->
<!--                   <img src="@/assets/img/icon_vertical.png" /> -->
<!--                  <span v-if="true">filterOn</span>-->
<!--                  <span v-else>filterOff</span>-->
<!--                </button>-->
                <button class="btn_default btn_filter" @click="fixGrid('column')">
                  <img src="@/assets/img/icon_vertical.png" />
                  <span v-if="isFixCol">열 고정 해제</span>
                  <span v-else>열 고정</span>
                </button>
                <button class="btn_default btn_filter" @click="fixGrid('row')">
                  <img src="@/assets/img/icon_hori.png" />
                  <span v-if="isFixRow">행 고정 해제</span>
                  <span v-else>행 고정</span>
                </button>
              </div>
            </div>

            <div class="real_body real_body05">
              <div id="test" style="width: 100%; height: 100%"></div>
            </div>
            <div class="real_footer">
              <div class="footer_left">
                <!-- //drop down -->
                <button class="btn_default btn_function">
                  하단 좌측 버튼 영역
                </button>
<!--                <button class="btn_default btn_function" >-->
<!--                  download-->
<!--                </button>-->
              </div>
              <div class="footer_right">
                <button class="btn_default btn_critical_process">
                  하단 우측 버튼 영역
                </button>
<!--                <button class="btn_default btn_critical_process">-->
<!--                  btn1-->
<!--                </button>-->
<!--                <button class="btn_default btn_critical_process">-->
<!--                  btn1-->
<!--                </button>-->
<!--                <button class="btn_default btn_print_fuction">-->
<!--                  btn1-->
<!--                </button>-->
<!--                <button class="btn_default btn_critical_process">-->
<!--                  btn1-->
<!--                </button>-->
<!--                <button class="btn_default btn_process">-->
<!--                  btn1-->
<!--                </button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //컨텐츠 -->
  </div>
<!--  <div :class="showModal ? `vm&#45;&#45;container`:`none-display vm&#45;&#45;container`">-->
<!--    <div style="left: 720px;-->
<!--      width: 480px;-->
<!--      height: auto;-->
<!--      top: 389px;" class="vm&#45;&#45;modal">-->
<!--      <div class="modal">-->
<!--        <div slot="top-right" class="btn_modal_close">-->
<!--          <button @click="showModal = false"></button>-->
<!--        </div>-->
<!--        <p class="modal_title">새로고침</p>-->
<!--        <div class="modal_content">-->
<!--          <p>새로고침</p>-->
<!--        </div>-->
<!--        <div class="modal_btn_contents">-->
<!--          <button class="btn_deep_gray" @click="showModal = false">-->
<!--            아니오-->
<!--          </button>-->
<!--          <button class="btn_primary">-->
<!--            예-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->



</template>

<style lang="scss">
@import '@/assets/scss/index';
@import '@/assets/fonts/font.css';

</style>
