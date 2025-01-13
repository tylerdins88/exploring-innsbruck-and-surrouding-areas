<script setup>
import { ref } from "vue";
import austriaFlag from "./assets/austria-flag-map.jpg";
</script>

<template>
  <div>
    <img :src="austriaFlag" class="flag" alt="Austria Flag Map" />
  </div>
  <div class="austria-flag">
    <div class="container">
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/travel">Travel</router-link>
        <router-link to="/resorts">Snow Resorts</router-link>
        <router-link to="/places">Hotspots</router-link>
        <router-link to="/accommodations">Accommodations</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Styling for the theme toggle button */
.theme-toggle {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5em 1em;
  font-size: 1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.theme-toggle:hover {
  background-color: #eaeaea;
}

.austria-flag {
  background-image: url(./assets/austria-flag-map.jpg); /* Ensure path correctness */
  height: 333px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; /* Needed for the absolute positioning of `.container` */
  z-index: 0; /* Lower stacking order than the navbar */
}

.container {
  position: absolute; /* Allows child elements like the navbar to position freely */
  top: 0; /* Aligns the container to the top of the `.austria-flag` */
  left: 0;
  right: 0; /* Ensures it spans the full width of the `.austria-flag` */
  z-index: 10; /* Places it above the background image */
}

.navbar {
  display: flex; /* Align items in a row */
  justify-content: center; /* Centers the links horizontally */
  background-color: rgba(
    51,
    51,
    51,
    0.7
  ); /* Semi-transparent background for visibility */
  padding: 10px;
  margin-top: 130px;
}

/* Navbar links */
.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
