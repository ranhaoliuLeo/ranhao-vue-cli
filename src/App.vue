<template>
  <div class="container">
    <div>
        <h2>Welcom to the ranhao CLI! </h2>
        <p>now is {{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 'Wow!',
      timer: ''
    };
  },
  created() {
    const that = this
    that.timer = setInterval(() => {
      console.log(11)
      that.data = Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
}
.container h2 {
  text-align: center;
  font-size: 2.8vw;
}
.container p {
  text-align: center;
  font-size: 1vw;
  color: #aaaaaa;
}
</style>