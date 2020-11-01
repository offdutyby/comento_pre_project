<template>
    <section>
      <div class="title">{{propsdata.title}}</div>
      <div class="contents">{{propsdata.contents}}</div>
      <span class="createdAt">{{propsdata.updated_at}}</span>
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
  margin: 40px auto;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #00c854;
  background-color: #ffffff;
}

/* Title & Contents */
.title {
  max-width: 1020px;
  margin-bottom: 10px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  word-wrap:break-word; 
  line-height: 1.2em; 
}

.contents {
  max-width: 1020px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  color: #495057;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  word-wrap:break-word; 
  line-height: 1.2em;
}

/* Info */
.createdAt {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
}

/* Media Query */
@media screen and (max-width: 768px){
  section {
    max-width: 100%;
    margin-top: 0;
  }
}

</style>
