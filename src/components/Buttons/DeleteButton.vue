<template>
    <v-btn depressed plain text color="error" @click="onClick"><v-icon>mdi-delete</v-icon></v-btn>
</template>

<script>
    export default {
        name: 'DeleteButton',
        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>

</style>
