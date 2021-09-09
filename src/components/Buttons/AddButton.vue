<template>
    <v-btn depressed text outlined color="success" @click="onClick">{{ label || "Add"}}</v-btn>
</template>

<script>
    export default {
        name: 'AddButton',

        props: {
          label: { type: String },
        },

        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>

</style>
