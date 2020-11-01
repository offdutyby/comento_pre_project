<template>
    <section @click="goDetail">
      <div class="categoryInfo">
        <span class="categoryName">
          {{this.propsdata.category_id === 1 ? 'apple' : this.propsdata.category_id === 2 ? 'banana': 'coconut'}}
        </span>
        <span class="contentsId">
          {{this.propsdata.id}}
        </span>
      </div>
      <hr>
      <div class="userInfo">
        <span class="userId">{{this.propsdata.user_id}}</span>
        <span class="verticalBar">|</span>
        <span class="createdAt">{{this.propsdata.created_at}}</span>
      </div>
      <div class="title">{{this.propsdata.title}}</div>
      <div class="contents">{{this.propsdata.contents}}</div>
    </section>
</template>

<script>
export default {
  props:['propsdata','propsFunc'],
  methods: {
    goDetail() {
      this.$router.push({ name:'detail', params: {id:this.propsdata.id}})
    }
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

/* Category Info */
.categoryInfo {
  display: flex;
  justify-content: space-between;
}
.categoryName {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #7e848a;
}
.contentsId {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
}
hr {
  border: 1px solid  #e1e4e7;
  box-shadow: none;
}

/* User Info */
.userInfo {
  margin-bottom: 10px;
}
.userId {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #00c854;
}
.verticalBar{
  color: #e1e4e7;
  margin: 0 5px;
}
.createdAt {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #495057;
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
  white-space: nowrap;
}
.contents {
  max-width: 100%;
  font-family: SpoqaHanSans;
  font-size: 14px;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
