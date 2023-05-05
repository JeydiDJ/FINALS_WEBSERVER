<template>
  <div>
    <div class="jumbotron">
      <img src="@/assets/venice.jpg" class="w-100 position-absolute" style="z-index: -1; top: 0; left: 0;">
      <div class="container-fluid position-relative">
        <h1 class="display-4">Discover Your Next Adventure</h1>
        <p class="lead">Explore the world and create unforgettable memories with our travel services.</p>
        <router-link to="/categories" class="btn btn-primary btn-lg">BROWSE</router-link>
      </div>
    </div>

    <div class="container mt-5">
     <h2 class="text-uppercase mb-0 my-4">Popular Destinations</h2>
      <br>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="@/assets/paris.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Paris</h5>
              <p class="card-text">Experience the City of Love and its famous landmarks, such as the Eiffel Tower and Notre-Dame.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="@/assets/tokyo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tokyo</h5>
              <p class="card-text">Discover the bustling city of Tokyo and immerse yourself in its unique culture and traditions.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="@/assets/ny.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">New York City</h5>
              <p class="card-text">Explore the Big Apple and its iconic landmarks, such as the Statue of Liberty and Times Square.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

body {
  background-color: #212529;
}

.jumbotron {
  height: 600px;
  margin-bottom: 300px; /* add margin-bottom to push content down */
  color: white;
  font-size: 8rem; /* adjust the font size as needed */
  
}

.jumbotron .container-fluid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-primary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 0; /* add this line to make the border square */
}

.btn-primary:hover {
  background-color: white;
  color: black;
  border-color: white;
}

.card-img-top {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #353535;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.card:hover h5, .card:hover p, .card:hover a {
  color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 0; 
}

.card-img-height {
  height: 200px; /* or whatever height you want */
  object-fit: cover; /* to make sure the image covers the entire area */
}
</style>
