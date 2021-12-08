<template>
  <based-navbar />
  <div class="min-w-screen min-h-screen flex items-center justify-center">
    <div
      class="rounded-3xl w-full sm:my-24 sm:ml-16 md:my-26 md:ml-24 lg:ml-28 lg:my-32"
      style="max-width: 1000 px"
    >
      <div class="md:flex w-full xl:flex w-full sm:flex w-full lg:flex w-full">
        <div v-if="!isLoadingImages" class="center">
          <img
            :src="`http://23.101.19.18:3000/Images/Get/${allProduct.productId}.jpg`"
            class="lg:max-w-full md:max-w-full sm:max-w-sm sm:mt-7 height-small"
          />
        </div>
        <div class="w-full py-6 px-4 lg:px-16 sm:px-7 md:px-12 paddingtext">
          <div v-if="!isLoadingProducts" class="text-start mb-10 space-y-6">
            <h1
              class="font-bold uppercase text-4xl text-gray-900 Barlow sm:text-3xl md:text-4xl text1"
            >
              {{ allProduct.productName }}
            </h1>
            <h1
              class="text-2xl uppercase text-gray-900 Barlow sm:text-xl md:text-2xl text3"
            >
              {{ allProduct.brandId.brandName }}
            </h1>
            <h1
              class="text-xl text-gray-400 Barlow sm:text-lg md:text-xl text4"
            >
              {{ allProduct.productDescription }}
            </h1>

            <div>
              <h1
                class="text-2xl uppercase text-gray-900 Barlow mb-4 sm:text-xl md:text-2xl text3"
              >
                Color
              </h1>
              <div class="space-x-4">
                <color-block
                  width="w-8"
                  height="h-8"
                  v-for="color in allProduct.productColors"
                  :key="color.colorId"
                  :codeColor="color.codeColor"
                  class="border border-black"
                />
              </div>
            </div>

            <h1
              class="font-bold uppercase text-3xl text-gray-900 Barlow-Medium sm:text-2xl md:text-3xl text2"
            >
              {{ allProduct.productPrice }} THB
            </h1>

            <div>
              <h1
                class="text-2xl font-bold uppercase text-gray-900 Barlow sm:text-xl md:text-2xl text3"
              >
                Release Date
              </h1>
              <h1 class="text-xl uppercase text-gray-400 Barlow text4">
               {{ allProduct.date }}
              </h1>
            </div>
            <div class="flex justify-start">
              <div class="pt-4">
                <button
                  @click="emitProduct(allProduct.productId)"
                  class="uppercase rounded-md border-black border-2 text-black px-4 py-3 transition duration-300 ease-in-out hover:bg-black hover:text-white mr-6 Barlow-Medium"
                >
                  Edit
                </button>
              </div>
              <div class="pt-4">
                <button
                  @click="deleteProduct"
                  type="submit"
                  class="uppercase rounded-md border-red-500 border-2 bg-red-500 text-white px-4 py-3 transition duration-300 ease-in-out hover:border-black hover:border-2 hover:bg-white hover:text-black mr-6 Barlow-Medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ColorBlock from "../components/ColorBlock.vue";
export default {
  components: { ColorBlock },
  data() {
    return {
      readyToConfirm: false,
      allColors: [],
      allBrands: [],
      allProduct: null,
      isLoadingBrands: true,
      isLoadingColors: true,
      isLoadingProducts: true,
      isLoadingImages: true,
      newProduct: {
        productId: null,
        productName: "",
        productType: "",
        productDescription: "",
        productPrice: null,
        productGender: "",
        date: "",
        brandId: {
          brandId: null,
          brandName: "",
        },
        productColors: [],
      },
      urlProduct: `http://23.101.19.18/api/Products/Edit/${this.id}`,
      urlDelete: `http://23.101.19.18/api/Products/Delete/${this.id}`,
    };
  },
  name: "Modal",
  props: ["id"],
  async created() {
    this.allProduct = await this.fetchProduct();
    this.allColors = await this.fetchColors();
    this.allBrands = await this.fetchBrands();
    this.isLoadingProducts = false;
    this.isLoadingColors = false;
    this.isLoadingBrands = false;
    this.isLoadingImages = false;
  },
  methods: {
    deleteProduct() {
       if(confirm("Do you want to delete this photo?") === false){
        return;
      }
      axios.delete(this.urlDelete).then((res) => {
        console.log(res);
        this.$router.push("/product");
      });
    },
    emitProduct(product) {
      this.$router.push({ name: "Edit", params: { id: product } });
    },
    async fetchProduct() {
      const res = await fetch(
        `http://23.101.19.18/api/Products/GetProducts/${this.id}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
    async fetchColors() {
      const res = await fetch("http://23.101.19.18/api/Colors/GetColors");
      const data = await res.json();
      console.log(data);
      return data;
    },
    async fetchBrands() {
      const res = await fetch("http://23.101.19.18/api/Brands/GetBrands");
      const data = await res.json();
      return data;
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
.Barlow-Medium {
  font-family: Barlow-Medium;
}
@font-face {
  font-family: "Barlow-Medium";
  src: url("../fonts/Barlow-Medium.ttf");
}
/*small*/
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .height-small {
    max-width: 100%;
    height: auto;
    padding: 60px 80px 0px 70px;
  }
  .paddingtext {
    padding-left: 50px;
    padding-right: 50px;
  }

  .text1 {
    font-size: 24px;
    align-items: left;
  }
  .text2 {
    font-size: 20px;
    align-items: left;
  }
  .text3 {
    font-size: 16px;
    align-items: left;
  }
  .text4 {
    font-size: 14px;
    align-items: left;
  }
} 

@media only screen and (min-device-width: 481px) and (max-device-width: 639px) {
  .height-small {
    max-width: 100%;
    height: auto;
    padding: 60px 120px 0px 110px;
  }

  .paddingtext {
    padding-left: 70px;
    padding-right: 70px;
  }
  .text1 {
    font-size: 30px;
    align-items: left;
  }

  .text2 {
    font-size: 26px;
    align-items: left;
  }
  .text3 {
    font-size: 22px;
    align-items: left;
  }
  .text4 {
    font-size: 18px;
    align-items: left;
  }
}

@media only screen and (min-device-width: 230px) and (max-device-width: 319px) {
  .height-small {
    max-width: 100%;
    height: auto;
    padding: 60px 24px 0px 24px;
  }

  .paddingtext {
    padding-left: 24px;
    padding-right: 24px;
  }
  .text1 {
    font-size: 20px;
    align-items: left;
  }
  .text2 {
    font-size: 18px;
    align-items: left;
  }
  .text3 {
    font-size: 16px;
    align-items: left;
  }
  .text4 {
    font-size: 14px;
    align-items: left;
  }
} 

@media only screen and (min-device-width: 50px) and (max-device-width: 229px) {
  .height-small {
    max-width: 100%;
    height: auto;
    padding: 60px 14px 0px 20px;
  }

  .paddingtext {
    padding-left: 20px;
    padding-right: 20px;
  }
  .text1 {
    font-size: 16px;
    align-items: left;
  }
  .text2 {
    font-size: 14px;
    align-items: left;
  }
  .text3 {
    font-size: 12px;
    align-items: left;
  }
  .text4 {
    font-size: 10px;
    align-items: left;
  }
}


</style>
