import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Travel from './views/Travel.vue';
import Places from './views/Places.vue';
import Resorts from './views/Resorts.vue';
import Accommodations from './views/Accommodations.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/travel', name: 'Travel', component: Travel },
    { path: '/places', name: 'Places', component: Places },
    { path: '/resorts', name: 'Resorts', component: Resorts },
    { path: '/accommodations', name: 'Accommodations', component: Accommodations }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
