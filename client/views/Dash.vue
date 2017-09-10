<template>
    <div class='wrapper'>
        <Dash></Dash>
    </div>
</template>

<script>
import Dash from 'components/DashComponent'

export default {
  components: {
    Dash
  }
}
</script>

<style>
  .dash {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  .dash a {
    color: #363636;
  }
  


</style>