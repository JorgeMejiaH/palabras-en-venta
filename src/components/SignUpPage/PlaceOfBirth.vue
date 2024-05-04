<template>
  <div class="place-of-birth-container">
    <label for="PlaceOfBirth" class="lbl-birth-place"
      >Ciudad de nacimiento:</label
    >
    <select v-model="placeOfBirth" @change="handleChange" id="birth-place" class="in-user-input">
      <option value="null" disabled >Selecciona una ciudad</option>
      <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
    </select>
    <div v-if="!isValidPlaceOfBirth" class="error-message">
      Ingresa un lugar de nacimiento válido.
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import hostMixin from "@/mixins/host.js";


export default {
  mixins: [hostMixin],
  beforeMount(){
    this.fetchCities();
  },
  data() {
    return {
      cities: [],
      PlaceOfBirth: null,
      isValidPlaceOfBirth: true,
    };
  },
  methods: {

    fetchCities() {
      // Make a GET request to fetch cities
      axios.get(hostMixin.data().host + '/api/cities/')
        .then(response => {
          // Update the cities array with the fetched data
          this.cities = response.data;
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    },
    handleChange(event) {

      const city_id = event.target.value;

      if(city_id == 'null'){
        this.isValidPlaceOfBirth = false;
      }else{
        this.isValidPlaceOfBirth = true;
      }

      this.$emit("validBirthPlace", {
        city_id: city_id,
        is_valid: city_id != 'null' ? true : false
      });
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
.place-of-birth-container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 4%;
}

</style>
