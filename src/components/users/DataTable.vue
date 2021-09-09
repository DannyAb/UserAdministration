<template>
   <v-card>
      <v-card-title>
         Users:
         <v-spacer />
         <v-text-field
            v-model="filter"
            label="Search"
            ></v-text-field>
         <v-spacer />
         <v-btn color="default" class="ma-md-4" outlined depressed @click="gotToGroups()">User groups</v-btn>
         <AddButton label="Add User" @click="toggleDialog()" />
      </v-card-title>
      <v-data-table
         :headers="headers"
         :items="data"
         :items-per-page="5"
         class="elevation-1"
         :search="filter"
         >
         <template v-slot:item.usergroups="{item}">
            <v-select
               v-model="item.usergroups"
               :items="userGroups"
               label="No groups"
               single-line
               clearable
               multiple
               chips
               @change="groupsUpdated(item)">
               <template v-slot:selection="{ attrs, item, select }">
                  <v-chip
                     v-bind="attrs"
                     :color="item.color"
                     :text-color="item.color ? 'white' : 'black'"
                     @click="select">
                     <strong>{{ item.text }}</strong>
                  </v-chip>
               </template>
            </v-select>
         </template>
         <template v-slot:item.actions="{item}">
            <AddButton @click="toggleDialog(item.id)" label="Edit"/>
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
       userGroups: { type: Array },
     },
     components: {
       DeleteButton,
       AddButton,
     },
     data: () => ({
             filter: '',
             headers: [
               { text: 'User Name', value: 'name' },
               { text: 'Email', value: 'email' },
               { text: 'Usergroups', value: 'usergroups', sortable: false, width:'50%' },
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

      toggleDialog (id) {
        this.$emit('toggleDialog', id);
      },

      gotToGroups () {
        this.$router.push({name: "UserGroups"});
      },
     },
   }
</script>
