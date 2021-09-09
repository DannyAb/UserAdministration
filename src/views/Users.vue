<template>
   <div class="main">
      <dataTable
      :data="userData"
      :userGroups="userGroups"
      @dataUpdated="updateData"
      @deleteItem="deleteItem"
      @toggleDialog="prepareDialog"
      />
      <EditDialog
         :data="dialogData"
         :dialog="showDialog"
         :editing="editing"
         @closeDialog="toggleDialog"
         @saveData="saveUser"
         />
   </div>
</template>
<script>
   import { mapGetters, mapActions } from 'vuex';
   import DataTable from '@/components/users/DataTable';
   import EditDialog from '@/components/users/EditDialog';

   export default {
     name: 'Users',

     components: {
       DataTable,
       EditDialog,
     },

     data: () => ({
         showDialog: false,
         editing: false,
         dialogData: {},
       }),

     mounted() {
       this.fetchUsers();
       this.fetchGroups();
     },

     computed: {
       ...mapGetters(['getUsers', 'getSingleUser', 'getUserSchema', 'getGroups']),
       userData() {
         return  this.getUsers || [];
       },
       userGroups() {
         return  this.getGroups.map(group => ({ text: group.name, value: group.id, color: group.color })) || [];
       }
     },

     methods: {
       ...mapActions(['fetchUsers', 'updateUser', 'deleteUser', 'addNewUser', 'fetchGroups']),
       updateData(item) {
         this.updateUser(item);
       },

       deleteItem(id) {
         this.deleteUser(id);
       },

       prepareDialog(id) {
         if(id) {
           this.editing = true;
           this.dialogData = Object.assign({}, this.getSingleUser(id));
         } else {
           this.editing = false;
           this.dialogData = Object.assign({}, this.getUserSchema);
         }
         this.toggleDialog();
       },

       toggleDialog() {
         this.showDialog = !this.showDialog;
       },

       saveUser() {
           if(this.dialogData.id) {
             this.updateUser(this.dialogData);
           } else {
             this.addNewUser(this.dialogData);
           }
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
