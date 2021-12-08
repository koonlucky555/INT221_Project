<template>
     <div
      class="w-full h-screen bg-center bg-no-repeat bg-cover bg-home"
     
    >
      <div
        class="w-full h-screen flex justify-center items-center "
      >
        <div class="mx-4 text-center text-black">
          <h1 class="font-bold text-6xl mb-4 Poppins tracking-wide">New Product + </h1>
          <span class="text-6xl text-red-500 Poppins tracking-wide">Collection</span>
   
          <div class="pt-8">
            <a
            href="/product"
            class="rounded-md font-bold text-3xl text-black px-4 py-3 transition duration-300 ease-in-out 
            hover:text-red-500 hover:bg-opacity-60  mr-6 Dosis tracking-wide"
          >
            Shop now
          </a>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
@font-face {
  font-family: "Dosis";
  src: url("../fonts/Dosis-VariableFont_wght.ttf");
}

@font-face {
  font-family: Poppins;
  src: url("../fonts/Poppins-Regular.ttf");
}
.Dosis {
  font-family: Dosis;
}
.Poppins {
  font-family: Poppins;
}
.bg-home {
  background-image: url("../assets/1.png");
}

</style>