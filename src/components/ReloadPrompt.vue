<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

// const intervalMS = 60 * 60 * 1000; // 1시간 (60분 * 60초 * 1000밀리초)
const intervalMS = 1000; // 1시간 (60분 * 60초 * 1000밀리초)

const { needRefresh, updateServiceWorker } = useRegisterSW({
  onRegisteredSW(swUrl, register) {
    console.log(`Service Worker at ReloadPrompt: ${swUrl}`)
    if (register) {
      setInterval(() => {
        console.log('Checking for sw update');
        register.update(); // 서비스 워커 업데이트 확인
      }, intervalMS);
    }

  },
})

async function close() {
  // offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
      v-if="needRefresh"
      class="vm--container"
      role="alert"
  >
    <div style="left: 720px;
      width: 480px;
      height: auto;
      top: 389px;" class="vm--modal">
      <div class="modal">
        <div slot="top-right" class="btn_modal_close">
          <button @click="close"></button>
        </div>
        <div class="message">
          <p class="title">알림</p>
          <div style="margin-bottom: 20px">
            <p class="text" style="margin-bottom: 8px">업데이트 내용이 있습니다.</p>
            <p class="text" >업데이트 하시겠습니까?</p>
          </div>
        </div>
        <div class="modal_btn_contents">
          <button class="btn_deep_gray" @click="close">
            아니오
          </button>
          <button class="btn_primary" @click="updateServiceWorker()">
            예
          </button>
        </div>
      </div>
    </div>
  </div>
</template>





<style>

.pwa-toast {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 99;
  text-align: left;
  box-shadow: 3px 4px 5px 0px #8885;
  background-color: #f7f7f7;

}

.title{
  font-weight: bold;
  font-size: larger;
  margin-bottom: 25px;
  margin-top: 25px;
}

.message {
  text-align: center;
}

.text {
  font-size: large;
}

</style>
