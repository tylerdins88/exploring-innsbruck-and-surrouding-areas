<template>
  <div class="max-w-7xl mx-auto px-4 py-6 space-y-8">
    <h1 class="text-4xl font-bold text-center text-gray-800">
      Travel Guidance
    </h1>
    <div class="prose max-w-none text-gray-700">
      <p class="prose max-w-none text-gray-700 font-bold">
        Add tips for understanding what to do. Consider adding phone plan
        information? Add in somewhere to have euro coins to use public
        bathrooms. Grocery stores not open sunday, except main bus station.
        Discuss most things closing at 7 pm / 19:00. Talk about lockers at bus
        stations or contacting places about luggage storage if arriving early.
        Discuss the sauna culture.
      </p>
      <p>
        Welcome to the Travel Guidance page. I will explain the travel apps I
        used on my trip. You will find out how to get from Munich to Innsbruck,
        learn how to use the local public transport system to get from the main
        Innsbruck station to your accommodations, and explore my two main bus
        stations with tips for using the bus system.
      </p>
      <p class="prose max-w-none text-gray-700 font-bold">
        First thing I will describe is recommended apps to have for your trip.
      </p>
    </div>

    <!-- Travel Apps Section -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(app, index) in travelApps"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-4 text-center cursor-pointer"
        @click="openModal(app)"
      >
        <img :src="app.img" :alt="app.alt" class="w-20 h-20 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ app.name }}
        </h3>
        <h6 class="text-sm font-normal text-gray-800 mb-2">
          {{ app.description }}
        </h6>
      </div>
    </div>

    <!-- Travel Steps Section -->
    <div class="prose max-w-none text-gray-700 font-bold">
      <h2>From Munich to Innsbruck</h2>
      <p class="prose max-w-none text-gray-700 font-normal">
        When I started this trip, I flew from the United States to Munich,
        Germany. Munich is the closest & largest international airport to
        Innsbruck. To get from the airport to Innsbruck, I used the Omio app.
        Below is an example of my search and the trip I chose to take. This cost
        $77. Please be aware of transfers and knowing where to be. This route
        here I had to transfer between my arrival and departure platforms.
      </p>
    </div>
    <div class="flex flex-wrap gap-4 justify-center">
      <img
        src="../assets/travel-photos/munich-search.png"
        alt="Munich to Innsbruck Search"
        class="w-96 h-80 rounded shadow-md"
      />
      <img
        src="../assets/travel-photos/munich-overview.png"
        alt="Munich to Innsbruck Overview"
        class="w-96 rounded shadow-md"
      />
    </div>

    <!-- Innsbruck Hauptbahnhof Section -->
    <div class="prose max-w-none text-gray-700">
      <h2 class="prose max-w-none text-gray-700 font-bold">
        Innsbruck Hauptbahnhof
      </h2>
      <p class="prose max-w-none text-gray-700 font-normal">
        Hauptbahnhof, meaning "main station," has been operating since 1853 and
        is one of Austria's oldest and busiest stations. This is both the main
        station for the bus and the trains. Below you will see a photo of the
        inside of the main station and a layout of the building. Pay attention
        to which station area your train will leave from.
      </p>
    </div>
    <div class="flex flex-wrap gap-4 justify-center">
      <img
        src="../assets/travel-photos/inside-hauptbahnhof.jpg"
        alt="Inside Hauptbahnhof"
        class="w-80 rounded shadow-md"
      />
      <img
        src="../assets/travel-photos/innsbruck-hbf-layout.png"
        alt="Innsbruck Hauptbahnhof Layout"
        class="w-96 rounded shadow-md"
      />
    </div>

    <!-- Bus System Section -->
    <div class="prose max-w-none text-gray-700">
      <h2 class="prose max-w-none text-gray-700 font-bold">
        Tips for the Bus System
      </h2>
      <p class="prose max-w-none text-gray-700 font-normal">
        Some key tips for the bus system include arriving 2 minutes early,
        reading signs for routes, and pressing the "STOP" button to notify the
        driver of your stop. Below is an image of the two main bus stops I used
        in Innsbruck.
      </p>
    </div>
    <div class="flex justify-center">
      <img
        src="../assets/travel-photos/main-bus-stops.jpg"
        alt="Main Bus Stops Used"
        class="w-96 rounded shadow-md"
      />
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="selectedApp"
    class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 relative"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-white hover:text-red-600 text-sm p-1"
      >
        Close
      </button>
      <img
        :src="selectedApp.img"
        :alt="selectedApp.alt"
        class="w-24 h-24 mx-auto rounded-md"
      />
      <h3 class="text-2xl font-semibold text-center text-gray-800">
        {{ selectedApp.name }}
      </h3>
      <p class="text-gray-700 text-center text-sm">
        {{ selectedApp.modalInfo }}
      </p>
      <div class="flex justify-center space-x-4 mt-4">
        <!-- Google Play Button -->
        <a
          :href="selectedApp.googlePlayLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            class="w-20 h-7 mr-2"
          />
        </a>
        <!-- App Store Button -->
        <a
          :href="selectedApp.appleStoreLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-gray-800 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="App Store"
            class="w-5 h-5 mr-2"
          />
          App Store
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import obbAppImage from "@/assets/travel-photos/obb-app.png";
import bergfexAppImage from "@/assets/travel-photos/bergfex-app.png";
import omioAppImage from "@/assets/travel-photos/omio-app.png";
import hotelsTonightImage from "@/assets/travel-photos/hotels-tonight.png";
import windyAppImage from "@/assets/travel-photos/windy-app.png";
import OpenSnowImage from "@/assets/travel-photos/opensnow.jpeg";
import BookingImage from "@/assets/travel-photos/booking.png";

export default {
  name: "TravelGuidance",
  data() {
    return {
      travelApps: [
        {
          name: "OBB Tickets",
          img: obbAppImage,
          alt: "OBB Tickets App",
          description:
            "Main app for Austrian trains. Find schedules, buy tickets, and manage your trips.",
          modalInfo:
            "OBB Tickets is the primary app for train travel in Austria. Upon opening the app, you will see the “Timetable & Tickets” section with a search icon at the top of the screen—click this to begin. Enter the locations you need to travel between, the date of travel, the departure time, and passenger details. On the next screen, select the ticket that best suits your needs. Be sure to purchase your train ticket before boarding, as ticket inspectors routinely check passengers between train cars. You can see an example of this app in the “Getting from Munich to Innsbruck” section below.",
          googlePlayLink:
            "https://play.google.com/store/search?q=obb%20tickets&c=apps&hl=en_US",
          appleStoreLink: "https://apps.apple.com/app/obb-tickets/id123456789",
        },
        {
          name: "Omio",
          img: omioAppImage,
          alt: "Omio App",
          description:
            "Best app for cross-country travel in Europe, including train and bus options.",
          modalInfo:
            "Omio is similar to OBB Tickets but covers travel throughout a larger portion of Europe. The home screen prompts you to enter your destination, starting location, travel date, and passenger details. This is my go-to app for country-to-country travel, and it’s what I used to travel from Munich to Innsbruck.",
          googlePlayLink:
            "https://play.google.com/store/search?q=omio&c=apps&hl=en_US",
          appleStoreLink: "https://apps.apple.com/app/omio/id192837465",
        },
        {
          name: "Booking.com",
          img: BookingImage,
          alt: "Booking.com App",
          description: "App used to make reservations.",
          modalInfo:
            "Save on your next trip with the Booking.com app! Find great hotel or apartment deals and book in just a few minutes. You can also book flights, rental cars, and more through the app.",
          googlePlayLink:
            "https://play.google.com/store/apps/details?id=com.booking&pcampaignid=web_share",
          // Iphone or Ipad Only
          appleStoreLink:
            "https://apps.apple.com/us/app/booking-com-hotels-travel/id367003839?ppid=6283143b-2049-4a5b-9b5a-2aa95f71e6e1",
        },
        {
          name: "Hotels Tonight",
          img: hotelsTonightImage,
          alt: "Hotels Tonight App",
          description: "Great for last-minute bookings at affordable rates.",
          modalInfo:
            "Hotels Tonight is an excellent app for finding last-minute hotel deals. Simply enter your city and travel dates, and the app will present a selection of affordable hotel rooms to choose from. It’s a reliable option for spontaneous bookings.",
          googlePlayLink:
            "https://play.google.com/store/search?q=hotels%20tonight&c=apps&hl=en_US",
          appleStoreLink:
            "https://apps.apple.com/app/hotels-tonight/id293847562",
        },
        {
          name: "bergfex Ski",
          img: bergfexAppImage,
          alt: "bergfex Ski App",
          description:
            "Get weather updates, lift information, and maps for snow resorts.",
          modalInfo:
            "bergfex Ski is the ultimate app for snow resorts, providing detailed weather information. When you open the app, it displays an overview of your favorite resorts. I recommend searching for the resorts you plan to visit and adding them to your favorites. The overview includes webcam views and a five-day weather forecast. Clicking on an individual resort provides additional details such as maps, lift statuses, weather updates, webcams, and more to help plan your trip. You can also view the current day’s ticket prices, which may vary depending on the season.",
          googlePlayLink:
            "https://play.google.com/store/apps/details?id=com.bergfex.mobile.android&hl=en_US",
          appleStoreLink: "https://apps.apple.com/app/bergfex-ski/id987654321",
        },
        {
          name: "OpenSnow",
          img: OpenSnowImage,
          alt: "OpenSnow App",
          description: "Snow and Ski App",
          modalInfo:
            "OpenSnow is your trusted source for the most accurate snow forecast, snow report, high-resolution 3D maps, and ski conditions.",
          googlePlayLink:
            "https://play.google.com/store/apps/details?id=com.opensnow.android&pcampaignid=web_share",
          // Iphone or Ipad Only
          appleStoreLink:
            "https://apps.apple.com/us/app/opensnow-snow-forecast/id780890907",
        },
        {
          name: "Windy.app",
          img: windyAppImage,
          alt: "Windy.App",
          description: "Wind and weather information for current location.",
          modalInfo:
            "Detailed app that gives precise wind data and weather data. Used to scope which areas will be less windy on certain days.",
          googlePlayLink:
            "https://play.google.com/store/apps/details?id=co.windyapp.android&pcampaignid=web_share",
          appleStoreLink:
            "https://apps.apple.com/us/app/windy-app-windy-weather-map/id997079492",
        },
      ],
      selectedApp: null, // Tracks the currently selected app for the modal
    };
  },
  methods: {
    openModal(app) {
      this.selectedApp = app;
    },
    closeModal() {
      this.selectedApp = null;
    },
  },
};
</script>
