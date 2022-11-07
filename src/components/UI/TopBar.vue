<template>
  <div id="topBar">
    <a
      href="https://www.robinbachus.com"
      target="_blank"
      title="Parent Website"
      id="logo-link"
    >
      <img src="../icons/IconLogo.png" alt="logo" id="logo" class="logo" />
    </a>
    <a href="https://github.com/RobinBachus/CSharper" id="github-link"
      >This project on Github!</a
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "TopBar",
};
</script>

<style>
#topBar {
  display: grid;
  grid-template-areas: "logo . link";
  grid-template-columns: fit-content(300px) 1fr fit-content(300px);
  justify-items: end;
  align-items: center;
  align-content: center;
  overflow: hidden;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #3f9af5;
  margin-top: 0;
}

.logo {
  grid-area: logo;
  margin-top: 4px;
  height: 51px;
  width: auto;
}

#logo-link {
  padding-right: 3px;
}

#logo-link:hover {
  background-color: #101010;
  transition: background-color, color 0.4s;
}

#github-link {
  padding: 1rem;
  cursor: pointer;
}
</style>
