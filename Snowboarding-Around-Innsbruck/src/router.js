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
    { path: '/accommodations', name: 'Accommodations', component: Accommodations },
    {
        path: '/resorts/:name',
        name: 'ResortDetails',
        component: (to) => {
            const components = {
                Patscherkofel: () => import('./components/resort-pages/Patscherkofel.vue'),
                Alpbachtal: () => import('./components/resort-pages/Alpbachtal.vue'),
            };

            return components[to.params.name] ? components[to.params.name]() : Promise.reject(new Error('Component not found'));
        },
        props: true, // Pass the route params as props
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

