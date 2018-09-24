<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-md-4 col-sm-12">
      <div v-if="baskets.length>0" >
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>品种</th>
              <th>价格</th>
              <th>数量</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.id">
            <tr>
              <td>{{item.name}}-{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
              <td>
                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>总价: {{total+" RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else >
        {{basketText}}
      </div>
    </div>
  </div>
</template>
<script>
//import axios from 'axios';
  export default {
    data() {
      return {
        baskets: [],
        basketText:"购物车没有任何商品",
        // getMenuItems: {
         
        // }
      }
    },
    
    computed:{
      getMenuItems(){
        //在vuex中获取数据
        //return this.$store.state.menuItems
        //方法二 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      total(){
        let totalCost=0;
        for (let index in this.baskets){
          var individualItem=this.baskets[index];
          totalCost+=individualItem.quantity*individualItem.price
        }
        return totalCost;
      }
    },
    created(){
      this.fetchData()
    },

    methods: {
      fetchData(){
        // fetch("https://wd9985185382vlksfw.wilddogio.com/menu.json")
        // .then(res=>{
        //     return res.json()
        // })
        // .then(data=>{
        //   this.getMenuItems=data
        // })

        //方法2: 需要引入axios
        //axios.get('menu.json').then(res=>this.getMenuItems=res.data);

        //方法3:main.js中配置Vue.prototype.axios=axios
        //this.axios.get('menu.json').then(res=>this.getMenuItems=res.data);
        //讲请求下来的数据存储到vuex中
        this.axios.get('menu.json').then(res=>this.$store.commit("setMenuItems",res.data));
      },
      addToBasket(item, option) {
        let basket={
          name: item.name,
          size: option.size,
          price: option.price,
          quantity: 1,
        }
        if(this.baskets.length>0){
          //过滤
         let result= this.baskets.filter((basket)=>{
              return (basket.name===item.name&&basket.price===option.price)
          })
          if(result!=null&&result.length>0){
            result[0].quantity++
          }else{
            this.baskets.push(basket)
          }
        }else{
          this.baskets.push(basket)
        }
        
      },
      decreaseQuantity(item){
        item.quantity--;
        if(item.quantity<=0){
          this.removeFromBasket(item)
        }
      },
      increaseQuantity(item){
        item.quantity++
      },
      removeFromBasket(item){
        this.baskets.splice(this.baskets.indexOf(item),1)
      }
    }
  }

</script>
