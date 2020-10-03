<template>
  <div id="app">
    <Sidebar/>
    <transition v-bind:name="transitionDirection" appear mode="out-in">
      <router-view/>
    </transition>
    <a id="easter-egg" href="https://www.youtube.com/watch?v=x9dD-YsGPbw">
      Поймёшь.
    </a>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marmelad&display=swap');

@font-face {
  font-family: 'JetBrains Mono';
  src: url('assets/fonts/JetBrainsMono-Regular.eot?') format('embedded-opentype'),
  url('assets/fonts/JetBrainsMono-Regular.woff') format('woff'),
  url('assets/fonts/JetBrainsMono-Regular.woff2') format('woff2');
}

body {
  margin: 0; padding: 0;
  background-color: #1a1a2e;
}

#app {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 10px 10%;

  color: white;

  font-size: 18px;
  font-family: 'Marmelad', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "JetBrains Mono", monospace;
}

section > p:first-of-type:first-letter {
  font-size: 1.2em;
  color: #e94560;
}

a {
  color: #e94560;
  text-decoration: none;
  transition: .3s ease-in-out;
}

a:hover {
  text-shadow: #e27688 0 0 7px;
}

code {
  border: #0f3460 5px solid;
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
}

span.code {
  font-family: "JetBrains Mono", monospace;
  background-color: #282b2f;
  border: 2px #0f3460 solid;
  padding: 1px 5px;
}

.fade-right-enter-active, .fade-right-leave-active, .fade-left-enter-active, .fade-left-leave-active {
  transition: .5s ease-in-out;
}
.fade-right-enter, .fade-left-enter, .fade-right-leave-to, .fade-left-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.fade-right-enter, .fade-left-leave-to { transform: translate(5%) }
.fade-right-leave-to, .fade-left-enter { transform: translate(-5%) }

#easter-egg {
  color: #1a1a2e;
  position: fixed;
  bottom: 0; right: 0;
}
</style>
<script>
import Sidebar from "@/components/Sidebar"

export default {
  name: 'App',
  components: {Sidebar},
  data: function () {
    return {
      transitionDirection: 'fade-left',
    }
  },
  watch: {
    $route: function (to, from) {
      this.transitionDirection = !from.path.startsWith(to.path) ?
          'fade-left' : 'fade-right'
    }
  },
}
</script>