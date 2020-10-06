<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/guides/asm/">Гайды по ассемблеру</router-link>
        <ul>
          <li><router-link to="/guides/asm/prerequisites">Предварительная подготовка</router-link></li>
          <li><router-link to="/guides/asm/lab1">Разбор первой лабораторной</router-link></li>
          <li><router-link to="/guides/asm/lab2">Разбор второй лабораторной</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/contacts/">Контактная информация</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
.navigation {
  padding: 10px 15px;
}

ul {
  list-style: none;
}

ul ul {
  padding: 0;
}

ul ul li:before {
  content: '-> ';
  font-family: "JetBrains Mono", monospace;
}

.router-link-exact-active:after {
  font-family: "JetBrains Mono", monospace;
  font-size: .8em;
  content: ' <|';
  color: white;
}
</style>