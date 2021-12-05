import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import VCalendar from 'v-calendar';

const app = createApp(App)

app
    .use(store)
    .use(router)
    .use(VCalendar, {})
    .mount('#app')

export default app