
<template>
    <div class="box">
        <p v-if="type =='del'">
            정말삭제하시겠습니까?
        </p>
        <p v-else-if="type=='ctp'">
            완료하시겠습니까?(완료시 삭제)
        </p>
    </div>
</template>

<script>



export default {
  name: 'popup',
   props:['type'],
    data(){
      return {



    }
    },
     methods:{
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

</style>
