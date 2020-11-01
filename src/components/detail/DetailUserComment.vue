<template>
    <section>
      <div class="userName">{{propsdata.user.name}}</div>
      <hr>
      <div class="contents">{{propsdata.contents}}</div>
      <span class="createdAt">{{propsdata.created_at}}</span>
    </section>
</template>

<script>
export default {
  props:['propsdata']
}
</script>

<style scoped>
section {
  max-width: 1140px;
  height: auto;
  padding: 30px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
}
hr {
  border: 1px solid  #e1e4e7;
  box-shadow: none;
}

/* Info */
.userName {
  font-family: SpoqaHanSans;
  font-size: 16px;
  color: #7e848a;
}
.createdAt {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
}
.contents {
  max-width: 1020px;
  margin-bottom: 10px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #495057;
}

/* Media Query */
@media screen and (max-width: 768px){
section {
  max-width: 768px;
}
}

</style>
