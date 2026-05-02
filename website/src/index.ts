import { createApp } from 'vue';
import main from './main.vue';

import psoda from 'psoda';

import 'psoda/style.css';
const app = createApp(main);
app.use(psoda);

app.mount('#app');
