<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/calculations">Calculations</RouterLink>
    <RouterLink to="/boolean-operations"> Boolean operations</RouterLink>
    <RouterLink to="/random-generator"> Random generator</RouterLink>
    <RouterLink to="/converter"> Converter </RouterLink>
  </nav>
</template>

<script lang="ts">
export default {
  name: "SideBar",
};
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.3rem 1rem;
}

nav a:not(.router-link-active) {
  color: var(--color-text);
}

@media (max-width: 1024px) {
  nav a:first-of-type {
    border-left: 0;
  }
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1rem;
    width: 13rem;

    position: relative;
    z-index: 1;

    margin-top: 0rem;
    margin-left: -1rem;
    padding: 2rem 0;

    border-left: 1px solid var(--color-border);
    box-shadow: -30px 0 15px -30px inset black;
    background-color: var(--color-background);
  }

  nav a.router-link-exact-active {
    border-left: 1px solid var(--color-text);
    margin-left: -1px;
  }
}
</style>
