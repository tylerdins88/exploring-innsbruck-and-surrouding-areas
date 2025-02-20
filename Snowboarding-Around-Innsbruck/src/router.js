import { createRouter, createWebHistory, useRouter } from "vue-router";
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
			path: "/hotspots",
			name: "HotSpots",
			component: () => import("@/views/HotSpots.vue"),
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
			props: true,
			beforeEnter: (to, from, next) => {
				// Decode URL encoding (e.g., %20 -> space)
				let decodedName = decodeURIComponent(to.params.name);

				// Remove all spaces and hyphens
				let formattedName = decodedName.replace(/[\s-]+/g, '');

				// If formattedName is different, redirect to corrected path
				if (formattedName !== to.params.name) {
					next({ path: `/resorts/${formattedName}`, replace: true });
				} else {
					next(); // Continue as normal
				}
			}
		}
	],
});

export default router;
