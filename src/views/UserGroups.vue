<template>
   <div class="main">
      <dataTable
      :data="userData"
      @dataUpdated="updateData"
      @deleteItem="deleteItem"
      @toggleDialog="prepareDialog"
      />
      <CreateDialog
         :data="dialogData"
         :dialog="showDialog"
         @closeDialog="toggleDialog"
         @saveData="saveGroup"
         />
   </div>
</template>
<script>
   import { mapGetters, mapActions } from 'vuex';
   import DataTable from '@/components/groups/DataTable';
   import CreateDialog from '@/components/groups/CreateDialog';

   export default {
     name: 'UserGroups',

     components: {
       DataTable,
       CreateDialog,
     },

     data: () => ({
         showDialog: false,
         dialogData: {},
       }),

     mounted() {
       this.fetchGroups();
     },

     computed: {
       ...mapGetters(['getGroups', 'getGroupSchema']),
       userData() {
         return  this.getGroups || [];
       },
     },

     methods: {
       ...mapActions(['fetchGroups', 'deleteGroup', 'addNewGroup']),
       updateData(item) {
         this.updateUser(item);
       },

       deleteItem(id) {
         this.deleteGroup(id);
       },

       prepareDialog() {
         this.editing = false;
         this.dialogData = Object.assign({}, this.getGroupSchema);
         this.toggleDialog();
       },

       toggleDialog() {
         this.showDialog = !this.showDialog;
       },

       saveGroup() {
         this.addNewGroup(this.dialogData);
         this.toggleDialog();
       },
     },
   }
</script>
<style scoped>
   .main {
   padding: 20px;
   }
</style>
