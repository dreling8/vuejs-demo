<template>
  <div >
    <h1>我是View1</h1>
    <a> 我是View1 </a>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'view1',

  mounted: function() {
    axios.post('/jhb/getslides')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}


</script>

<style>
</style>
