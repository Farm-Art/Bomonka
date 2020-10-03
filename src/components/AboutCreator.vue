<template>
  <div class="about-creator">
    <img src="../assets/portrait.jpg" alt="Портрет его величества" id="portrait">
    <h2>Арташес Фарманян</h2>
    <p><a href="#">Автор проекта</a><br>
    <a href="https://money.yandex.ru/to/410013583812160">Поддержать денюжкой :)</a></p>
  </div>
</template>

<script>
export default {
name: "AboutCreator"
}
</script>

<style scoped>
  .about-creator {
    text-align: center;
    background-color: #0f3460;
    padding: 10px 15px;
  }

  #portrait {
    width: 175px; height: 175px;
    display: block;
    margin: 0 auto;

    box-sizing: border-box;

    border-radius: 50%;
    border: 10px #e94560 solid;
    box-shadow: #b11f38 4px 2px;
    transition: .2s ease-in-out;
  }

  #portrait:hover {
    transform: translate(-3px, -2px);
    box-shadow: #b11f38 7px 4px;
  }
</style>