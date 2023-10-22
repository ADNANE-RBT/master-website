<script setup>
import { RouterLink } from 'vue-router'
</script>

<template lang="">
    <!-- <div class="w-full bg-red-200 flex flex-nowrap 
                md:justify-between md:px-5  ">
        <div>
           <img src="@/assets/logo.png" alt="" class="h-20 w-64"> 
        </div>        
        <nav class=" grid grid-cols-6 gap-14 pt-10 pr-20">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">About</RouterLink>

        </nav>
    </div> -->
  
<nav class=" bg-transparent flex md:absolute w-full z-10 ">
    <div class=" relative w-full bg-transparent ">
       <div class="max-w-screen-2xl  flex flex-wrap items-center bg-white bg-opacity-80 justify-between mx-auto px-4  shadow-md ">
 
        <img src="@/assets/logo.png" class="h-8 ml-2 my-2" alt="Logo" />
  
    <!-- mobile screen button -->
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <!-- Desktop screen list -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex h-full flex-col px-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li >
           <RouterLink to="/"      class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 font-poppins text-base font-semibold leading-7 md:leading-6 tracking-widest text-main  ">Home</RouterLink>
        </li>
        <li>
           <RouterLink to="/about" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-main font-poppins text-base font-semibold leading-7 md:leading-6 tracking-widest  ">Program</RouterLink>
        </li>
        <li>
           <RouterLink to="/about" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-main font-poppins text-base font-semibold leading-7 md:leading-6 ">Learning</RouterLink>
        </li>
        <li>
           <RouterLink to="/about" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-main font-poppins text-base font-semibold leading-7 md:leading-6 ">Class</RouterLink>
        </li>
        <li>
           <RouterLink to="/about" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-main font-poppins text-base font-semibold leading-7 md:leading-6 ">Contact</RouterLink>
        </li>
      </ul>
    </div>
       </div> 
    </div>
  
</nav> 

</template>

<style scoped>
    
</style>