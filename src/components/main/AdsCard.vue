<template>
    <section>
      <div class="sponsor">sponsored</div>
      <div class="contentsContainer">
        <div class="imgContainer">
          <img src="https://cdn.comento.kr/assignment/test2.jpg" alt="">
        </div>
        <article>
          <div class="title">{{this.propsdata[0].title}}</div>
          <div class="contents">{{this.propsdata[0].contents}}</div>
        </article>
      </div>
    </section>
</template>

<script>
export default {
  props:['propsdata'],
  methods: {
  },
}
</script>

<style scoped>
/* Main Section */
section {
  max-width: 865px;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
}
article {
  max-width: 100%;
}
img {
  width: 100%;
  height: 100%;
  border: solid 1px #e1e4e7;
}
.sponsor {
  margin-bottom: 10px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
}
.imgContainer {
  min-width: 320px;
  margin-right: 20px;
  height: 179px;
}
.contentsContainer {
  display: flex;
}

/* Title & Contents */
.title {
  max-width: 100%;
  margin-bottom: 10px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  color: #282c30;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  word-wrap:break-word; 
  line-height: 1.2em;
}

.contents {
  max-width: 100%;
  font-family: SpoqaHanSans;
  font-size: 14px;
  color: #495057;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical; 
  word-wrap:break-word; 
  line-height: 1.2em;
}

/* Media Query */
@media screen and (max-width: 768px){
section {
  max-width: 768px;
}
}

</style>
