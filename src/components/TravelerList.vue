<template>
  <div class="row" style="background-image: url('../assets/GGB.jpg');">
    <div class="col-md-12">
      <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(destination, index) in destinations" :key="destination._id">
              <td>{{ destination.name }}</td>
              <td>{{ destination.email }}</td>
              <td>{{ destination.phone }}</td>
              <td>{{ destination.location }}</td>
              <td>{{ destination.date }}</td>
              <router-link :to="{ name: 'update', params: { id: destination._id } }" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                <button @click="deleteDestination(destination._id, index)" class="btn btn-sm btn-danger">Delete</button>
                       
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
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

@font-face {
  font-family: 'Poppins';
  src: url('../assets/Poppins/Poppins-Regular.ttf') format('truetype');
}
   table {
  margin: 0 auto;
  padding: 20px;
  max-width: 900px;
}

/* Style the table header */
thead th {
  text-align: left;
  background-color: #263238;
  color: #fff;
  padding: 10px;
}

/* Style the table rows */
tbody tr {
  border-bottom: 1px solid #eee;
}

/* Style the table cells */
td {
  padding: 10px;
}

/* Style the "Edit" and "Delete" buttons */
.btn-primary {
  background-color: #4caf50;
  border-color: #4caf50;
}

.btn-primary:hover {
  background-color: #388e3c;
  border-color: #388e3c;
}

.btn-danger {
  background-color: #f44336;
  border-color: #f44336;
}

.btn-danger:hover {
  background-color: #c62828;
  border-color: #c62828;
}

/* Style the "Add Destination" button */
.add-destination-btn {
  background-color: #fff;
  border-color: #4caf50;
  color: #4caf50;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
}

.add-destination-btn:hover {
  background-color: #4caf50;
  color: #fff;
}



body {
  font-family: 'Poppins', sans-serif;
}


</style>
