<template>
  <div class="row">
    <div class="col-md-8">
      <h3 class="text-center mb-4">Destinations List</h3>
      <div v-if="loading" class="text-center">
        <p>Loading destinations...</p>
      </div>
      <div v-else>
        <div class="card p-3">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(destination, index) in destinations" :key="destination._id">
                <td>{{ destination.name }}</td>
                <td>{{ destination.location }}</td>
                <td>{{ destination.description }}</td>
                <td>
                  <router-link :to="{ name: 'update', params: { id: destination._id } }" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                  <button @click="deleteDestination(destination._id, index)" class="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <add-destination></add-destination>
    </div>
  </div>
</template>
 <script>
import axios from 'axios';
import AddDestination from './AddDestination.vue';

export default {
  name: 'Destinations',
  components: {
    AddDestination,
  },
  data() {
    return {
      destinations: [],
      loading: true,
    };
  },
  created() {
    this.fetchDestinations();
  },
  methods: {
    fetchDestinations() {
      let apiURL = 'http://localhost:4000/destinations';
      axios.get(apiURL).then((response) => {
        this.destinations = response.data;
        this.loading = false;
      }).catch(error => {
        console.log(error);
        this.loading = false;
      });
    },
    deleteDestination(id, index) {
      let apiURL = `http://localhost:4000/delete-destination/${id}`;
      axios.delete(apiURL).then(() => {
        this.destinations.splice(index, 1);
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>

  /* Import Poppins font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

  /* Apply Poppins font to the entire component */
  body {
    font-family: 'Poppins', sans-serif;
  }

  /* Style the table headers */
  th {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    background-color: #f5f5f5;
  }

  /* Style the table rows */
  tr {
    font-size: 14px;
  }

  /* Add hover effect to table rows */
  tr:hover {
    background-color: #91f2c7;
  }

  /* Style the Edit button */
  .btn-primary {
    background-color: #1e88e5;
    border-color: #1e88e5;
    font-size: 14px;
    font-weight: 500;
  }

  /* Add hover effect to Edit button */
  .btn-primary:hover {
    background-color: #0d47a1;
    border-color: #0d47a1;
  }

  /* Style the Delete button */
  .btn-danger {
    background-color: #e53935;
    border-color: #e53935;
    font-size: 14px;
    font-weight: 500;
  }

  /* Add hover effect to Delete button */
  .btn-danger:hover {
    background-color: #b71c1c;
    border-color: #b71c1c;
  }

  /* Style the box enclosing the table */
  .table-box {
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #262020;
    padding: 20px;
  }
</style>

