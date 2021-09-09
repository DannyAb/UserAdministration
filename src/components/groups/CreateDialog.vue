<template>
   <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      >
      <v-card>
         <v-card-title>
            <span v-if="!editing" class="text-h5">Add new</span>
            <span v-else class="text-h5">Edit</span>
         </v-card-title>
         <v-card-text>
            <v-form @submit.prevent="saveData" ref="form" v-model="formValid">
               <v-container>
                  <v-row >
                     <v-col cols="12" sm="6">
                        <v-text-field
                           label="Name"
                           v-model="data.name"
                           :rules="[required_rule]"/>
                     </v-col>
                     <v-col cols="12" sm="6">
                        <v-autocomplete
                           v-model="data.color"
                           :items="availableColors"
                           label="Color"
                           flat
                           @keydown.enter="saveData"
                           :rules="[required_rule]" >
                           <template v-slot:selection="{ attrs, item }">
                              <v-chip small :color="data.color" style="color:white;">{{ item }}</v-chip>
                           </template>
                        </v-autocomplete>
                     </v-col>
                  </v-row>
               </v-container>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
               color="blue darken-1"
               text
               @click="closeDialog"
               >
               Close
            </v-btn>
            <v-btn
               color="blue darken-1"
               text
               @click="saveData"
               >
               Save
            </v-btn>
         </v-card-actions>
      </v-card>
   </v-dialog>
</template>
<script>
   export default {
     name: 'CreateDialog',
     props: {
       data: { type: Object, required: true },
       dialog: { type: Boolean },
       editing: { type: Boolean, default: false },
     },

     data: () => ({
        availableColors: ['red', 'pink', 'purple', 'blue', 'black', 'brown', 'cyan' , 'lime' , 'green'],
        formValid: false,
        required_rule: value => (!!value && value.trim() !== "") || 'Required',
     }),

     methods: {
       closeDialog() {
         this.$emit('closeDialog');
       },
       saveData() {
         if(this.formValid) this.$emit('saveData');
       },
     },

   }
</script>
