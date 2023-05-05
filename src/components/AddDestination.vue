<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card p-4">
        <h3 class="text-center mb-4" style="color: white;">Add New Destination</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <input type="text" class="form-control" v-model="destination.name" placeholder="Name" required>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="destination.location" placeholder="Location" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="5" v-model="destination.description" placeholder="Description" required></textarea>
          </div>
          <div class="form-group">
            <input type="date" class="form-control" v-model="destination.date" placeholder="Date" required>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" v-model="destination.email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="tel" class="form-control" v-model="destination.phone" placeholder="Phone" required>
          </div>
          <div class="form-group">
            <button class="btn btn-danger btn-block">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      destination: {
        name: '',
        location: '',
        description: '',
        date: '',
        email: '',
        phone: '',
      }
    }
  },
  methods: {
    handleSubmitForm() {
      console.log(this.destination);
      let apiURL = 'http://localhost:4000/create-destination';

      return axios.post(apiURL, this.destination)
        .then(() => {
          this.$router.push('/view')
          this.destination = {
            name: '',
            location: '',
            description: '',
            date: '',
            email: '',
            phone: '',
          }
          return true // or return Promise.resolve()
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped>
.form-group input[type="text"], 
.form-group input[type="email"], 
.form-group input[type="tel"], 
.form-group input[type="date"], 
.form-group textarea {
  font-family: 'Poppins', sans-serif;
}
.card {
  background-color: #212529;
  max-width: 800px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 20px;
}

.destination-form-box {
  background-color: #212529;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
</style>
