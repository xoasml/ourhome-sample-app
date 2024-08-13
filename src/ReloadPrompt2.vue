<script setup lang="ts">
import { ref } from 'vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

const needRefresh = ref(false);
const updateServiceWorker = ref(null);

// const intervalMS = 60 * 60 * 1000; // 1시간 (60분 * 60초 * 1000밀리초)
const intervalMS = 1000; // 1시간 (60분 * 60초 * 1000밀리초)

const { updateServiceWorker: updateSW } = useRegisterSW({
  immediate: true,
  onRegisteredSW(url, registry) {
    updateServiceWorker.value = registry;
    console.log('Service Worker Registered:', url);

    // 1시간마다 주기적으로 업데이트 확인
    setInterval(() => {
      console.log('Checking for SW updates...');
      registry.update().then(() => {
        if (registry.installing || registry.waiting) {
          console.log('New update found');
          needRefresh.value = true; // 필요한 조건을 설정하여 프롬프트 표시
        }
      });
    }, intervalMS); // 1시간 간격
  },
});

const refreshApp = () => {
  if (updateServiceWorker.value) {
    updateSW(true);
    needRefresh.value = false;
  }
};
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
    <button @click="refreshApp">새로 고침</button>
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