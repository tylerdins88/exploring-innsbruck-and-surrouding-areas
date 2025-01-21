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
      My starting point for my routes is described at the end of the travel
      section. Please be sure to understand this and adjust accordingly to where
      you are located. I will try to include the Innsbruck Hauptbahnhof in as
      many routes as possible. Or add a tidbit of how to get from there
      Hauptbahnhof to where I am going.
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
          description:
            "Patscherkofel is one of two closest resorts to Innsbruck. It is located to the south of the town. You can take bus directly from the Tivoli Stadion to within a minute walk of the Gondola.",
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
