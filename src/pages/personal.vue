<script lang="ts">
    export default {
        beforeCreate(){
            console.log(this.a);
        },
        create(){
            console.log(this);
        },
        data(){
            return {
                a:1
            }
        }
    }
</script>
<template>
    <h1>home</h1>
</template>
