import { useRegisterSW } from 'virtual:pwa-register/vue'
export default refresh()
{
  const {
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl) {
      console.log(`Service Worker at Refresh: ${swUrl}`)
    },
  })

  if (needRefresh) {
    updateServiceWorker()
  }
}