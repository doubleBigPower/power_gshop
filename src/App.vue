<template>
    <div id="app">
        <router-view/>
        <FooterGuide v-show="$route.meta.showfooter"/>
    </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide"
export default {
    components:{
        FooterGuide
    }
}
</script>
<style lang="stylus"  rel="stylesheet/stylus">
     #app 
            color red
            width 100%
            height 100%
            background #f5f5f5
</style>
