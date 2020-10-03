<template>
  <div>
    <h2 id="sidebar-toggler" v-on:click="toggleSidebar">-></h2>
    <div id="sidebar">
      <AboutCreator/>
      <Navigation/>
    </div>
    <div id="wrapper" v-on:click="toggleSidebar"/>
  </div>
</template>

<script>
import AboutCreator from "@/components/AboutCreator";
import Navigation from "@/components/Navigation";
export default {
  name: "Sidebar",
  components: {Navigation, AboutCreator},
  data: function () {
    return {isActive: false}
  },
  methods: {
    toggleSidebar: function () {
      if (this.isActive) {
        this.sidebar.classList.remove('active')
        this.wrapper.classList.remove('active')
        this.toggler.classList.remove('active')
      } else {
        this.sidebar.classList.add('active')
        this.wrapper.classList.add('active')
        this.toggler.classList.add('active')
      }
      this.isActive = !this.isActive
    }
  },
  computed: {
    sidebar: () => document.getElementById('sidebar'),
    wrapper: () => document.getElementById('wrapper'),
    toggler: () => document.getElementById('sidebar-toggler')
  },
  watch: {
    '$route': function () {
      if (this.isActive)
        this.toggleSidebar()
    }
  }
}
</script>

<style scoped>
  #sidebar {
    position: fixed;
    top: 0;
    height: 100vh;

    background-color: #16213e;
    border-left: 10px #1a1a2e solid;

    box-sizing: border-box;
    overflow-y: auto;

    z-index: -5;
    transition: .4s ease-in-out;
  }

  #sidebar.active {
    z-index: 10;
    right: 0;
  }

  @media screen and (max-width: 600px)
  { #sidebar { width: 100vw; right: -100vw; } }

  @media screen and (min-width: 600px)
  { #sidebar { width: 400px; right: -400px; } }

  #wrapper {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;

    background: radial-gradient(black, transparent) 50% 50%;
    background-size: 300% 300%;

    z-index: -5;
    opacity: 0;
    transition: .4s ease-in-out;
  }

  #wrapper.active {
    z-index: 5;
    opacity: .8;
  }

  #sidebar-toggler {
    position: fixed;
    top: 0; right: 15px;
    z-index: 15;

    transform: rotate(-540deg);
    transition: .4s ease-in-out;

    user-select: none;
  }

  #sidebar-toggler:hover
  { cursor: pointer; }

  #sidebar-toggler.active
  { transform: rotate(0); }
</style>