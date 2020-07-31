<template name="tab_bar">
  <div id="tab_bar">  
  <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'tab_bar',

}
</script>

<style>
 @import "../../assets/css/base.css";

#tab_bar{
  display: flex;
  background-color: rgb(186, 222, 243);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -5px 1px  rgb(186, 222, 243);
}



</style>