<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {};
</script>

<style>
form {
  width: 60vw;
  height: auto;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}
</style>
