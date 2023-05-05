<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <a class="navbar-brand" href="/">
        <img src="@/assets/logo.png" alt="Logo" width="50" height="50">
        TRAVELIST 
        </a>

       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bookings">Bookings</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/destinations">Destinations</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.navbar {
  background-color: #212529;
  font-family: 'Poppins', sans-serif;
}

.navbar-brand {
  font-size: 24px;
  font-weight: 600;
}

.nav-link {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-left: 20px;
}

.nav-link:hover {
  color: #ffc107;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="rgba(255, 255, 255, 1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>');
}
</style>
