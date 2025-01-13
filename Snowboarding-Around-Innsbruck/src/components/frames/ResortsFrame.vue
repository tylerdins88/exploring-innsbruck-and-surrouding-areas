<template>
  <div class="lineUp">
    <div class="resortFrame">
      <div class="resortContent">
        <div v-html="resort.name"></div>
      </div>
      <img class="resortMap" :src="resort.map" alt="Updates Map" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resort: Object,
  },
};
</script>

<style scoped>
.lineUp {
  display: flex;
}
.date {
  height: 30px;
  font-size: 16px;
  border-bottom: 1px solid #006db0;
}
.resortFrame {
  border: 1px solid #006db0;
  border-radius: 15px;
  padding: 16px;
  width: 80%;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.resortFrame:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 109, 176), 0 12px 40px 0 rgba(0, 109, 176);
  transform: scale(1.01);
  transition: box-shadow 0.3s, transform 0.3s;
}
.resortContent {
  display: flex;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #006db0;
}

.resortMap {
  height: 300px;
  width: auto;
  border: 1px solid #006db0;
}
.resortFrame a:hover {
  background-color: silver;
}
@media screen and (max-width: 1040px) {
  .resortMap {
    max-height: 200px; /* Adjust height for smaller screens */
  }
}

@media screen and (max-width: 600px) {
  .lineUp {
    flex-direction: column;
  }
  .date {
    border: none;
    margin-left: 30px;
  }
  .resortFrame {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: flex-start; /* Align items to the start */
    width: 90%;
  }

  .resortMap {
    max-height: 150px; /* Adjust height for smaller screens */
    margin-top: 10px; /* Add margin between Map and content */
  }
}
</style>
