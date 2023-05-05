<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3 class="text-center">Update Traveler</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleUpdateForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="destination.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="destination.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="destination.phone" required>
              </div>
              <div class="form-group">
                <label for="destination">Destination</label>
                <input type="text" class="form-control" id="destination" v-model="destination.destination" required>
              </div>
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" class="form-control" id="date" v-model="destination.date" required>
              </div>
              <div class="form-group">
                <button class="btn btn-danger btn-block">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        traveler: {}
      };
    },
    created() {
      let apiURL = `http://localhost:4000/edit-destination/${this.$route.params.id}`;
      axios.get(apiURL).then((res) => {
        this.traveler = res.data;
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:4000/update-destination/${this.$route.params.id}`;
        axios
          .put(apiURL, this.traveler)
          .then((res) => {
            console.log(res);
            this.$router.push("/view");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  </script>
  