<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const intervalMS = 60 * 60 * 1000; // 1시간 (60분 * 60초 * 1000밀리초)
// const intervalMS = 1000; // 1시간 (60분 * 60초 * 1000밀리초)

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
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
      v-if="needRefresh"
      class="pwa-toast"
      role="alert"
  >
    <div class="message">
      <span v-if="needRefresh">
        새로운 업데이트가 있습니다. 페이지를 새로 고치세요.
      </span>
    </div>
    <button @click="updateServiceWorker()">
      새로 고침
    </button>
    <button @click="close">
      닫기
    </button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0px #8885;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
