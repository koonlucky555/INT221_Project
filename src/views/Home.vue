<template>
  <div class="home">
    <based-navbar />
    <based-home />
    <based-brand />
    <div class="container mx-auto md:px-8 px-4">
      <div
        class="mt-10 md:mt-16 xl:mt-20 mb-8 md:mb-10 xl:mb-14 md:px-8 flex justify-between uppercase"
      >
        <h2 class="text-2xl md:text-4xl Barlow font-bold text-center">
          New Collection
        </h2>
        <a
          href="/product"
          class="text-md md:text-lg lg:text-xl Barlow hover:text-red-500 hover:underline"
          >see more &gt;</a
        >
      </div>
      <div class="container mx-auto flex items-center flex-wrap  pb-12">
        <div
          class="w-full md:w-1/3 xl:w-1/4 p-16 flex flex-col"
          v-for="product in productData.slice(0, 4)"
          :key="product.id"
          :product="product"
        >
          <img
            class="hover:grow hover:shadow-lg w-72 h-72 object-cover"
            :src="`http://23.101.19.18/api/Images/Get/${product.productId}.jpg`"
            @click="emitShow(product.productId)"
          />
          <p class="text-gray-900 font-bold text-xl Barlow pt-4">
            {{ product.productName }}
          </p>
           <div class="space-x-2">
              <color-block
                width="w-6"
                height="h-6"
                v-for="color in product.productColors"
                :key="color.colorId"
                :codeColor="color.codeColor"
                class="border border-black"
              />
            </div>
          <p class="text-gray-900 text-2xl Barlow-Medium">
            {{ product.productPrice }} THB
          </p>
         
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import BasedHome from "../components/BasedHome.vue";
import BasedBrand from "../components/BasedBrand.vue";
import ColorBlock from "../components/ColorBlock.vue";
export default {
  data() {
    return {
      productData: [],
      urlProduct: "http://23.101.19.18:3000/Products/GetProducts",
           allColors: [],
    };
  },
  components: {
    BasedHome,
    BasedBrand,
    ColorBlock,
  },
  async created() {
    this.fetchProduct();
        this.allColors = await this.fetchColors();
  },
  methods: {
    fetchProduct() {
      axios
        .get(this.urlProduct)
        .then((res) => {
          this.productData = res.data;
          console.log(this.productData);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
     async fetchColors() {
      const res = await fetch("http://23.101.19.18:3000/Colors/GetColors");
      const data = await res.json();
      console.log(data);
      return data;
    },
     emitShow(product) {
      this.$router.push({ name: "Modal", params: { id: product } });
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Barlow";
  src: url("../fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

</style>