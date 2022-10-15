import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import TabMenu from 'primevue/tabmenu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';
import Button from 'primevue/button';


import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router)
app.use(PrimeVue);

app.component('TabMenu', TabMenu);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Row', Row);
app.component('Button', Button)

app.mount('#app')
