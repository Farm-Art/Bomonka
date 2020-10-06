<template>
  <div>
    <h1>Доступные гайды по языку Ассемблера:</h1>
    <ul>
      <li><router-link to="Prerequisites">Предварительная настройка</router-link></li>
      <li><router-link to="/guides/asm/lab1">Разбор первой лабораторной работы</router-link></li>
      <li><router-link to="/guides/asm/lab2">Разбор второй лабораторной работы</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ASMGuides.vue"
}
</script>

<style scoped>

</style>