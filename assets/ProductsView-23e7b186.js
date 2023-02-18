import{_ as g,o,c as a,b as t,F as p,f as b,n as m,t as l}from"./index-23b742f9.js";const h="https://vue3-course-api.hexschool.io/",u="hironakavue",k={data(){return{products:[],loadingItem:""}},mounted(){this.getProducts()},methods:{getProducts(){const s=this.$loading.show();this.$http.get(`${h}v2/api/${u}/products/all`).then(n=>{this.products=n.data.products,s.hide()}).catch(n=>{alert(n.response.data.message)})},getProduct(s){this.loadingItem=s,this.$router.push(`/product/${s}`)},addToCart(s,n=1){this.loadingItem=s;const c={data:{product_id:s,qty:n}};this.$http.post(`${h}v2/api/${u}/cart`,c).then(i=>{alert(i.data.message),this.loadingItem=""}).catch(i=>{alert(i.response.data.message)})}}},v=t("h2",null,"產品列表",-1),y={class:"table align-middle"},$=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),f={style:{width:"200px"}},I={key:0,class:"h5"},x={key:1},C={class:"h6"},P={class:"h5"},w={class:"btn-group btn-group-sm"},B=["onClick","disabled"],z=["onClick","disabled"];function D(s,n,c,i,d,r){return o(),a("div",null,[v,t("table",y,[$,t("tbody",null,[(o(!0),a(p,null,b(d.products,e=>(o(),a("tr",{key:e.id},[t("td",f,[t("div",{style:m([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url( ${e.imageUrl})`}])},null,4)]),t("td",null,l(e.title),1),t("td",null,[e.price===e.origin_price?(o(),a("div",I,l(e.price)+" 元 ",1)):(o(),a("div",x,[t("del",C,"原價 "+l(e.origin_price)+" 元",1),t("div",P,"現在只要 "+l(e.price)+" 元",1)]))]),t("td",null,[t("div",w,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:_=>r.getProduct(e.id),disabled:d.loadingItem===e.id||!e.is_enabled}," 查看更多 ",8,B),t("button",{type:"button",class:"btn btn-outline-danger",onClick:_=>r.addToCart(e.id),disabled:d.loadingItem===e.id||!e.is_enabled}," 加到購物車 ",8,z)])])]))),128))])])])}const S=g(k,[["render",D]]);export{S as default};
