<template>
<div>
  <Header></Header>
  <section>
    <div class="container">
      <aside>
        <button>
          <span class="loginBtn">로그인</span>
        </button>
      </aside>
      <article>
        <div class="select">
          <div class="sort">
              <button class="asc" v-bind:class="{ active: ascActive }" v-on:click="changeAscActive">
                <span style="font-size:1px;">
                  <i class="fas fa-circle fa-xs"></i>
                </span>
                오른차순
              </button>
              <button class="desc" v-bind:class="{ active: descActive }" v-on:click="changeDescActive">
                <span style="font-size:1px;">
                  <i class="fas fa-circle fa-xs"></i>
                </span>
                내림차순
              </button>
          </div>
          <div class="filter">
            <button v-on:click="activeModal">필터</button>
          </div>
        </div>
        <ProductCard v-bind:propsdata="cardItem" v-for="(cardItem, index) in this.feedListArr" :key="index"></ProductCard>
      </article>
    </div>
      
      <modal modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">필터</h3>
        <span slot="body" >
          <div v-for="(categoryItem,index) in this.feedCategoryArr" :key="index">
            <input type="checkbox" checked="true" name="category_name">
            <span>{{categoryItem.name}}</span>
          </div>
        </span>
        <span slot="footer" @click="showModal = false">
          <button class="modalBtn">저장하기</button>
        </span>
      </modal>

  </section>
</div>
</template>

<script>
import Header from '../components/common/Header'
import ProductCard from '../components/main/ProductCard'
import axios from 'axios'
import Modal from '../components/common/Modal.vue'

export default {
  data() {
    return {
      ascActive: true,
      descActive: false,
      showModal: false,
      feedListArr : [],
      feedCategoryArr : [],
      page: 1,
      option: {
        params: {
          page:1,
          ord:'asc',
          limit:10,
          category:[1,2,3]
        }},
      listApi: 'https://problem.comento.kr/api/list',
      categoryApi: 'https://problem.comento.kr/api/category'
    }
  },
  created() {
    this.getListData();
    this.getCategoryData();
  },
  updated () {
    this.scroll();
  },
  watch: {
  },
  methods: {
    getListData: function() {
      axios.get(this.listApi,this.option)
        .then(
          res => {
            this.feedListArr = [...res.data.data]
          }
        )
    },
    getCategoryData: function() {
      axios.get(this.categoryApi,this.option)
        .then(
          res => {
            this.feedCategoryArr = [...res.data.category]
          }
        )
    },
    scroll () {
      window.onscroll = () => {
        const bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if(bottomOfWindow) {
          this.option.params.page += 1
          setTimeout(()=>{
          axios.get(this.listApi,this.option)
            .then(
              res => {
                this.feedListArr = this.feedListArr.concat(res.data.data)
              }
            )
            },1000)
        }
     	}
    },
    activeModal() {
      this.showModal = true
    },
    changeAscActive() {
      this.ascActive = true
      this.descActive = false
      this.option.params.ord = 'asc'
      this.feedListArr = []
      setTimeout(()=>{
        axios.get(this.listApi,this.option)
          .then(
            res => {
              this.feedListArr = [...res.data.data]
            }
          )
      },1000)
    },
    changeDescActive() {
      this.ascActive = false
      this.descActive = true
      this.option.params.ord = 'desc'
      this.feedListArr = []
      setTimeout(()=>{
        axios.get(this.listApi,this.option)
          .then(
            res => {
              this.feedListArr = [...res.data.data]
            }
          )
      },1000)
    }
  },
  components:{
    'Header': Header,
    'ProductCard': ProductCard,
    Modal: Modal
  }
}
</script>

<style scoped>
/* container */
.container {
  display: flex;
  max-width: 1200px;
  margin: 50px auto 0 auto;
}
button {
  cursor: pointer;
}
a:link{
  text-decoration: none;

}

/* aside */

aside {
  margin-right: 40px;
}
aside button {
  width: 235px;
  height: 53px;
  border-radius: 5px;
  background-color: #00c854;
  color: white;
}
.loginBtn {
  font-family: SpoqaHanSans;
  font-size: 20px;
  color: #ffffff;
}

/* article */

article {
  max-width: 100%;
}
.select {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-bottom: 14px;
}
.asc {
  margin-right: 15px;
}
.asc, 
.desc {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
  background-color: white;
}


.asc.active, .desc.active {
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #495057;
}
.asc.active span, .desc.active span{
   color:#00c854
}


.filter button {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  font-family: SpoqaHanSans;
  font-size: 13px;
  color: #adb5bd;
}

/* Modal */
.modalBtn {
  width: 99px;
  height: 40px;
  border-radius: 3px;
  background-color: #00c854;
  font-family: SpoqaHanSans;
  font-size: 16px;
  color: #ffffff;
}

/* Media Query */
@media screen and (max-width: 768px){
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  aside {
    display: none;
  }
  article {
    max-width: 100%;
  }
}

</style>
