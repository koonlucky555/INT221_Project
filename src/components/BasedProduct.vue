<template>
  <body
    class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
  >
    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full top-0 px-6">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <p
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl Barlow pt-16"
            >
              Store
            </p>
            <a href="/addProduct" class="pt-16"
              ><button
                class="border-2 px-4 py-2 text-xl lg:text-xl xl:text-xl font-bold focus:outline-none transition duration-100 uppercase text-black border-transparent hover:border-transparent md:mr-5 Barlow hover:text-red-500"
              >
                ADD NEW PRODUCT --&gt;
              </button></a
            >
          </div>
        </nav>

        <div
          class="w-full md:w-2/4 xl:w-1/4 p-16 flex flex-col"
          v-for="product in productData"
          :key="product.id"
          :product="product"
        >
          
            <img
              class="hover:grow hover:shadow-lg w-72 h-72 object-cover"
              :src="`http://23.101.19.18/api/Images/Get/${product.productId}.jpg`"
              @click="emitShow(product.productId)"
            />
            <div class="space-y-2">
            <p class="text-gray-900 font-bold text-xl Barlow pt-4">
              {{ product.productName }}
            </p>
            <p class="text-md Barlow font-bold">{{product.brandId.brandName}}</p>
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
    </section>
  </body>
</template>
<style>
.work-sans {
  font-family: "Work Sans", sans-serif;
}
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

@font-face {
  font-family: "Barlow";
  src: url("../fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
@font-face {
  font-family: "Barlow-Medium";
  src: url("../fonts/Barlow-Medium.ttf");
}
.Barlow-Medium {
  font-family: Barlow-Medium;
}
</style>


<script>
import axios from "axios";
import ColorBlock from "../components/ColorBlock.vue";
export default {
  components: { ColorBlock },
  data() {
    return {
      search: "",
      productData: [],
      urlProduct: "http://23.101.19.18/api/Products/GetProducts",
    };
  },
  props: ["product"],
  async created() {
    this.fetchProduct();
  },
  methods: {
    emitShow(product) {
      this.$router.push({ name: "Modal", params: { id: product } });
    },
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
  },
};
</script>
