<template>
  <div class="container flex-center-c ">
    <div class="logo-box flex-center-r">
    <div class="logo  ">
    <img  src="../assets/dog.png" width="100" height="100">
    </div>
    <p class="logo-font">ToDo App</p>
  
    </div>
    <form class="form-box">
      <span class="completed">Completed : {{cptCnt}}</span>
      <input type="text" placeholder="Enter to ToDo" class="input-todo" v-model="inputTodo">
      <button  type="submit" class="btn todo" @click="addTodo">Add</button>
    </form>

    <ul class="todo-items">
      
      <li class="todo-item flex-center-r" v-for="(todo,index) in list" v-bind:key="index">
      
        <p class="todo-title" >{{todo.title}}</p>
        <div class="btn-box">
        <button   class="btn cpt" @click="completeTodo(index)">Complete</button>
        <button  type="button" class="btn del" @click="deleteTodo(index)">Delete</button> 
        </div>
      </li>
    </ul>

    <div class="popup" v-if="popupOpen">
      <div v-if="type == 'input'" class="box"> 
         <p class="popup-font">{{msg}}</p>
           <button class="btn todo" @click="close">Ok</button> 
      </div>
      <div v-else>
          <div  v-if="type == 'del'" class="box">
          <p class="popup-font">
              삭제하시겠습니까?

          </p>
          <button class="close" @click="close">x</button>
          <button @click="del" class="btn todo">Delete</button>
          </div>
          <div v-else class="box">
          <p class="popup-font"> 
              완료시 삭제됩니다.
            
          </p>
            <button class="close" @click="close">x</button>
          <button @click="cpt" class="btn todo">Delete</button>
          </div>
      </div>   
    </div>
    <p class="footer-text">Total : {{total}}<p/>
    <p class="footer-text">It is a ToDo List using KaKao API </p>
  </div>
</template>

<script>


export default {

  name: 'todo',
 
    data(){
      return {
        id:0,
        title:'',
        type: "",
        popupOpen:false,
        idx:"",
        cptCnt:0,
        inputTodo:"",
        msg:"",
        total:4,
      list:[
        {id: 1,title:"123"},
        
        {id: 1,title:"123"},
        {id: 1,title:"123"},
        {id: 1,title:"123"},
        // {id: 2,title:"123",completed:0},
        // {id: 3,title:"123",completed:0}
      ]


    }
    },
     methods:{
      addTodo(e){
        e.preventDefault();
        
        if(this.inputTodo.length <= 34 &&this.inputTodo.length >0){
          const result ={ id:this.id++, title: this.inputTodo};
          
          this.list.push(result);
          this.total++;
        }else if(this.inputTodo.length ==0){
          this.popupOpen = true;
          this.type= "input";
          this.msg = "글을 입력해주세요";
        }
        else{
          this.popupOpen = true;
          this.type="input";
          this.msg = "글이 34자 이상 넘어가면 안됌";
        }
      

   
      },
      deleteTodo(index){
        this.type="del";
        this.popupOpen = true;
        this.idx = index;
      },
      completeTodo(index){
        this.type="cpt";
        this.popupOpen= true;
        this.idx = index;
        // this.list.splice(index,1);
      },
      del(){

        this.list.splice(this.idx,1);
        this.total--;
        this.popupOpen =false;
      },
      cpt(){
        this.list.splice(this.idx,1);
         this.total--;
        this.cptCnt++;
        this.popupOpen =false;
      },
      close(){
        this.popupOpen = false;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
*.fcous{
  outline: none;
}
ul,li{
  list-style: none;
}

.container{

  width: 544px;
  height: 671px;
  background-color: rgb(153, 171, 228);
}
.flex-center-c{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.flex-center-r{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.completed{
  color: #fff;
  font-weight: bold;
}
.logo{
  position: relative;
  margin-top: 20px;
  margin-bottom: 3px;  
  width: 140px;
  height: 140px;
  background-color: #fff;
  border-radius: 50%;
}
.logo > img{
  position: absolute;
  top: 15%;
  left: 15%;
}
.logo-font{
  margin-top: 25px;
  margin-left: 40px;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: bold;
  color: #fff;
}
.form-box{
  margin: 15px 0px;
}
.input-todo{
  width: 240px;
  border-radius: 5px;
  border: 1px solid rgb(250, 247, 247);
  height: 24px;
  margin-left: 10px;
  margin-right: 5px;
}
.todo-items{

  background-color: rgb(81, 94, 170);
  border-radius: 5px;
  max-height: 350px;

  display: flex;
  
  flex-direction: column;
  overflow: auto;
}
.todo-items::-webkit-scrollbar{
  width: 10px;
  background-color: #fff;
}
.todo-items::-webkit-scrollbar-track{
  background-color: rgb(81, 94, 170);
}
.todo-items::-webkit-scrollbar-thumb{
  background-color: rgb(191, 201, 248);
  border-radius: 10px;
}
.todo-item{
    
  width: 400px;
  max-width: 400px;
  height: 60px;
  border-radius: 3px;
  margin: 16px;
  box-shadow: 5px 5px rgb(171, 171, 247);
  background-color: rgb(255, 255, 255);
}
.todo-title{
  font-size: 18px;
  margin-left: 3px;
  width: 560px;
}
.btn{
  width: 70px;
  height: 26px;
  margin-left: 4px;
  border:none;
  color:#fff;
  font-weight: bold;
  border-radius: 6px;
}
.btn:hover{
  border:solid rgba(255, 255, 255, 0.815);
}
.todo{
  background-color: rgb(116, 125, 240);
  font-size: 15px;
  
}

.del{
  background-color: rgb(228, 128, 128);
  margin-top: 3px;

}
.del:hover{
  border: solid rgb(250, 76, 76);

}
.cpt{
  background-color: rgb(97, 211, 135);
}
.cpt:hover{
  border:solid rgb(27, 151, 68);
 
}
.btn-box{
  width: 78px;
  text-align: center;
  margin-right: 10px;
}

.popup{

  width: 250px;
  height: 100px;
  position: absolute;
  top:37%;
  border: 1px solid rgb(138, 113, 252);
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
}
.popup > div{
  height: 100%;
}
.popup-font{
  color: rgb(120, 104, 209);
  font-weight: bold;
}
.box{ 
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box > .todo{
  margin-top: 15px;
}
.close{
  width: 30px;
  padding-bottom: 4px;
  line-height: 20px;
  font-size: 20px;
  border-radius: 2px;
  color: #fff;
  border: solid rgb(138, 113, 252);
  background-color: rgb(138, 113, 252);
  position: absolute;
  right: 0;
  top: 0;
}
.close:hover{
  color: rgb(7, 7, 7);
}

.footer-text{
  margin-top: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
