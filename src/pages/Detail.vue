<template>
  <div>
    <Header></Header>
    <DetailCard v-bind:propsdata="detailDataObj"></DetailCard>
    <section>
      <span>답변</span>
      <span class="arrCount">{{this.detailDataObj.reply.length}}</span>
    </section>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import DetailCard from '../components/detail/DetailCard'
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
    getDetailData: function() {
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
   'DetailCard': DetailCard
  }
}
</script>

<style scoped>
section {
  max-width: 1200px;
  margin: 0 auto;
}
.arrCount {
  font-family: SpoqaHanSans;
  color: #00c854;
}

</style>
