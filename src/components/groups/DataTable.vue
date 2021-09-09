<template>
   <v-card>
      <v-card-title>
         Groups:
         <v-spacer />
         <v-spacer />
         <v-btn color="default" class="ma-md-4" text @click="gotToUsers()">Back to users</v-btn>
         <AddButton label="Add Group" @click="toggleDialog()" />
      </v-card-title>
      <v-data-table
         :headers="headers"
         :items="data"
         :items-per-page="5"
         class="elevation-1"
         >
         <template v-slot:item.color="{item}">
            <v-chip
               close-icon="mdi-delete"
               :color="item.color"
               pill
               ></v-chip>
         </template>
         <template v-slot:item.actions="{item}">
            <DeleteButton  @click="deleteItem(item.id)" />
         </template>
      </v-data-table>
   </v-card>
</template>
<script>
   import DeleteButton from '@/components/Buttons/DeleteButton';
   import AddButton from '@/components/Buttons/AddButton';

   export default {
     name: 'DataTable',
     props: {
       data: { type: Array },
     },
     components: {
       DeleteButton,
       AddButton,
     },
     data: () => ({
             headers: [
               { text: 'Group name',value: 'name' },
               { text: 'Color', value: 'color' },
               { text: 'Actions', value: 'actions', align: 'right', sortable: false },
             ],
           }),
     computed: {

     },
     methods: {
       groupsUpdated (item) {
         this.$emit('dataUpdated', item);
      },

      deleteItem (id) {
        this.$emit('deleteItem', id);
      },

      toggleDialog () {
        this.$emit('toggleDialog');
      },

      gotToUsers () {
        this.$router.push({name: "Users"});
      },
     },
   }
</script>
