<template>
  <div>
    <header>Header</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>