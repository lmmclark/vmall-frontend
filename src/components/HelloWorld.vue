<template>
    <div class="hello">
        <ul>
            <li>
                <span></span><span></span><span></span><span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #ccc;
    margin: 10px;
  }
}

</style>
