<template>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3 class="text-center mb-4">Choose a Category</h3>
        <div class="list-group">
          <router-link to="/destinations/beaches" class="list-group-item">
            <div class="thumbnail">
                <img src="@/assets/beach.jpg" alt="Beaches">
              <div class="caption">
                <h4>Beaches</h4>
                <p>Discover our amazing beach destinations</p>
              </div>
            </div>
          </router-link>
          <router-link to="/destinations/mountains" class="list-group-item">
            <div class="thumbnail">
              <img src="@/assets/mountaiN.jpg" alt="Mountains">
              <div class="caption">
                <h4>Mountains</h4>
                <p>Experience the beauty of our mountain destinations</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  

  <style scoped>
.list-group-item {
  position: relative;
  overflow: hidden;
  padding: 0;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}

.list-group-item:hover img {
  transform: scale(1.1);
}

.list-group-item img {
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.4s ease-in-out;
}

.list-group-item:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.4s ease-in-out;
}

.list-group-item:hover:before {
  opacity: 1;
}

.list-group-item .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: #fff;
  text-align: center;
}

.list-group-item .caption h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  text-transform: uppercase;
}

.list-group-item .caption p {
  margin-bottom: 0;
}


</style>