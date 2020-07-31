<template name="tab_bar">
  <div id="tab_bar">  
  <slot></slot>
  </div>
</template>

<script>


export default {

}
</script>

<style scoped>

 @import "../../../assets/css/base.css";

#tab_bar{
  display: flex;
  background-color:white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -5px 1px  white ;
}



</style>