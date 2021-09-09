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
                  <v-row>
                     <v-col cols="12" sm="6">
                        <v-text-field
                           label="Name"
                           v-model="data.name"
                           :rules="[required_rule, name_rule]"
                           @keydown.enter="saveData"/>
                     </v-col>
                     <v-col cols="12" sm="6">
                        <v-text-field
                           label="Email"
                           v-model="data.email"
                           :rules="[required_rule, email_rule]"
                           required
                           @keydown.enter="saveData"/>
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
               @click="closeDialog">Close</v-btn>
            <v-btn
               color="blue darken-1"
               text
               :disabled="!formValid"
               @click="saveData">Save</v-btn>
         </v-card-actions>
      </v-card>
   </v-dialog>
</template>
<script>
   export default {
     name: 'editDialog',
     props: {
       data: { type: Object, required: true },
       dialog: { type: Boolean },
       editing: { type: Boolean, default: false },
     },

     data: () => ({
       required_rule: value => (!!value && value.trim() !== "") || 'Required',
       name_rule: value => !!String(value).match(/[^\p{L}\p{N}]+/ug) || 'Name must include space',
       email_rule: value => !!String(value).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || 'Email must be in correct form!',
       formValid: false,
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
