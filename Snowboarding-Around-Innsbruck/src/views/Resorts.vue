<template>
  <div>
    <h1>Snow Resorts</h1>
    <p>
      This page will describe the different snow resorts I have visited in
      Austria. I purchased a Tirol Snow card which gives you access to over 90
      places to visit! We call them snow resorts because of the various
      activities you can do at them. Snowboarding, Skiing, Tobogganing, and
      more!
    </p>
    <p>
      Discussed here will be the best ways to access them. Prices of the places.
      A map of the resorts and an explanation of the terrain. Ill give a review
      of the food that I tried and which hut you can find it at. Lastly will be
      a overall synopsis of the resort including recommend skill levels.
    </p>
    <p>
      For the travel routes, I will start them based from the Innsbruck
      Hauptbahnhof. Hauptbahnhof is German for "main station". Meaning all
      routes are starting at the main bus & train station in the city of
      Innsbruck.
    </p>
  </div>
  <resort-frame :resort="resort[0]" v-if="resort.length > 0" />
  <resort-frame :resort="resort[1]" v-if="resort.length > 1" />
</template>

<script>
import ResortFrame from "../components/frames/ResortsFrame.vue";

import PatscherkofelMap from "../assets/resort-maps/patscherkofel-resort.jpg";
import AlpbachtalMap from "../assets/resort-maps/alpbachtal-resort.jpg";

export default {
  name: "Resorts",
  components: {
    ResortFrame,
  },
  data() {
    return {
      resort: [
        {
          name: "Patscherkofel",
          map: PatscherkofelMap,
        },
        {
          name: "Alpbachtal",
          map: AlpbachtalMap,
        },
      ],
    };
  },
};
</script>
