<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/common/Header'
import TopNav from './components/common/TopNav'
export default {
  name: 'App',
  components:{Header,TopNav}
}
</script>

<style>

</style>
