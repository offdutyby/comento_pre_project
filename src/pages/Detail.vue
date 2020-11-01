<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="mobileHeader">〈</div>
    <DetailCard v-bind:propsdata="detailDataObj"></DetailCard>
    <section>
      <span>답변</span>
      <span class="arrCount">{{this.detailDataObj.reply.length}}</span>
    </section>
    <DetailUserComment v-bind:propsdata="detailCardItem" v-for="(detailCardItem,index) in this.detailDataObj.reply" :key="index"></DetailUserComment>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import DetailCard from '../components/detail/DetailCard'
import DetailUserComment from '../components/detail/DetailUserComment'
import axios from 'axios'

export default {
  data() {
    return{
      detailDataObj: {},
      option: {
        params: {
          id: this.$router.history.current.params.id
        }},
    }
  },
  methods: {
    getDetailData:  function() {
      axios.get(`https://problem.comento.kr/api/view`, this.option)
        .then(
          res => {
            this.detailDataObj = {...res.data.data}
          }
        )
         .then(
          () => {
            console.log(this.detailDataObj);
          }
        )
    },
  },
  created() {
    this.getDetailData();
    console.log(this.$router.history.current.params.id);
  },
  components:{
   'Header': Header,
   'DetailCard': DetailCard,
   'DetailUserComment': DetailUserComment
  }
}
</script>

<style scoped>
/* Main Section */
section {
  max-width: 1200px;
  margin: 10px auto;
}
.mobileHeader {
  display: none;
}
.arrCount {
  font-family: SpoqaHanSans;
  color: #00c854;
}
div:last-child {
  margin-bottom: 100px;
}

/* Media Query */
@media screen and (max-width: 768px){
  div {
    padding-left: 5px;
  }
  .header {
    display: none;
  }
  .mobileHeader {
    line-height: 5;
    display: flex;
    align-content: center;    
  }
  section {
    max-width: 100%;
  }
}

</style>
