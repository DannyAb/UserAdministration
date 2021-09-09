<template>
   <v-app>
      <v-app-bar
         app
         color="primary"
         dark
         >
         <router-link :to="{ name: 'Home' }">
            <h1 style="color:white">
               GO HOME
            </h1>
         </router-link>
      </v-app-bar>
      <v-main>
         <router-view/>
      </v-main>
   </v-app>
</template>
<script>
   export default {
     name: 'App',
   };
</script>
