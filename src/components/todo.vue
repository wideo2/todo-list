<template>
  <div class="container flex-center-c ">
    <div class="logo-box flex-center-r">
    <div class="logo  ">
    <img  src="../assets/dog.png" width="100" height="100">
    </div>
    <p class="logo-font">ToDo App</p>
  
    </div>
    <form class="form-box">
      <input type="text" placeholder="Enter to ToDo" class="input-todo">
      <button  type="submit" class="btn todo" @click="addTodo">Add</button>
    </form>
    <ul class="todo-items">
      <li class="todo-item flex-center-r" v-for="(todo,index) in list" v-bind:key="index">
        <p class="todo-title">{{todo.title}}</p>
        <div class="btn-box">
        <button  type="button" class="btn cpt" @click="completeTodo(index)">Complete</button>
        <button  type="button" class="btn del" @click="deleteTodo(index)">Delete</button>
        
        </div>
      </li>
    </ul>
    <p class="footer-text">It is a ToDo List using KaKao API </p>
  </div>
</template>

<script>



export default {
  name: 'todo',
   
    data(){
      return {
        id:'',
        title:'',
     
      list:[
        // {id: 1,title:"123",completed:0},
        // {id: 2,title:"123",completed:0},
        // {id: 3,title:"123",completed:0}
      ]


    }
    },
     methods:{
      addTodo(e){
        e.preventDefault();
        let title = document.querySelector(".input-todo").value;
        if(title.length <= 34){
          const result ={ title: title};
          
          this.list.push(result);

        }else{
          alert("34자가 넘어갔습니다.");
        }
      

   
      },
      deleteTodo(index){
        
        this.list.splice(index,1);
      },
      completeTodo(index){
        
        this.deleteTodo(index);
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
  max-height: 390px;
 
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
  box-shadow: 4px 4px rgb(191, 201, 248);
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
.todo{
  background-color: rgb(116, 125, 240);
  font-size: 15px;
  
}
.del{
  background-color: rgb(228, 128, 128);

}
.cpt{
  background-color: rgb(97, 211, 135);
}
.btn-box{
  width: 78px;
  text-align: center;
  margin-right: 10px;
}
.footer-text{
  margin-top: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
