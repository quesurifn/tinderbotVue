<template>

<div class='wrapper'>
<Girls></Girls>
  <div class='dash'>
    <router-link to='/dash'><span><i class="fa fa-tachometer" aria-hidden="true"></i></span></router-link>
  </div>
</div>
</template>

<script>
import Girls from 'components/GirlsComponent'

export default {
  components: {
    Girls
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