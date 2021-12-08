<template>
<div class="w3-top ">
  <header class="lg:p-6 py-4 px-4 bg-white bg-opacity-80 flex flex-wrap items-center lg:py-0 fixed w-full">
    <div class="flex-1 flex justify-between items-center">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" 
        height="30px" viewBox="0 0 24 24" width="30px" fill="#374151"><path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
      </router-link>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><router-link to="/about" class="lg:p-6 py-4 px-4 block border-b-2 border-transparent hover:border-red-500">About</router-link></li>
        <li><router-link to="/product" class="lg:p-6 py-4 px-4 block border-b-2 border-transparent hover:border-red-500">Product</router-link></li>
      </ul>
    </nav>
  </div>
  </header>
</div>


</template>

 <style>
      #menu-toggle:checked + #menu {
        display: block;
      }
  </style>