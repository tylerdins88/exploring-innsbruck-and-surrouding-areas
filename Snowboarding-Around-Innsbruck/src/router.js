import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/travel",
			name: "Travel",
			component: () => import("@/views/Travel.vue"),
		},
		{
			path: "/places",
			name: "Places",
			component: () => import("@/views/Places.vue"),
		},
		{
			path: "/resorts",
			name: "Resorts",
			component: () => import("@/views/Resorts.vue"),
		},
		{
			path: "/accommodations",
			name: "Accommodations",
			component: () => import("@/views/Accommodations.vue"),
		},
		{
			path: "/resorts/:name",
			name: "ResortDetails",
			component: () => import("@/views/ResortDetails.vue"),
			props: true, // Pass the :name route param as a prop to ResortDetails
		},
	],
});

export default router;
