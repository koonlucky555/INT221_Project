<template>
  <based-navbar />
  <div class="mt-16 p-8">
    <div
      class="mt-10 md:mt-4 xl:mt-4 mb-8 md:mb-10 xl:mb-14 md:px-4 flex justify-between uppercase"
    >
      <h2 class="text-2xl md:text-3xl Barlow font-bold text-center">
        Add New Product
      </h2>
    </div>
    <form @submit.prevent="submitCheckValidate">
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Product Name
          </div>
          <div
            class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
          >
            <input
              @blur="validatingName"
              v-model="newProduct.productName"
              placeholder="Product Name"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidName" class="text-red-500 text-sm">
            Product Name can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Brand
          </div>
          <select
            @blur="validatingBrandName"
            v-model="newProduct.brandId"
            class="bg-white my-2 p-1 flex border w-full border-gray-200 rounded svelte-1l8159u"
          >
            <option disabled value="">Select Your Product Brand</option>
            <option
              v-for="option in allBrands"
              :value="option"
              :key="option"
              :selected="option === brandId"
            >
              {{ option.brandName }}
            </option>
          </select>
          <p v-if="invalidBrandName" class="text-red-500 text-sm">
            Description can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Price
          </div>
          <div
            class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
          >
            <input
              type="number"
              min="0"
              @blur="validatingPrice"
              v-model="newProduct.productPrice"
              placeholder="Price"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidPrice" class="text-red-500 text-sm">
            Product Price can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Product Type
          </div>
          <select
            @blur="validatingType"
            v-model="newProduct.productType"
            class="bg-white my-2 p-1 w-full flex border border-gray-200 rounded svelte-1l8159u"
          >
            <option disabled value="">Select Your Product Type</option>
            <option>T-Shirt</option>
            <option>Shirt</option>
            <option>Sweatshirt</option>
          </select>
          <p v-if="invalidType" class="text-red-500 text-sm">
            Product Type can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Gender
          </div>
          <select
            @blur="validatingGender"
            v-model="newProduct.productGender"
            class="bg-white my-2 p-1 w-full flex border border-gray-200 rounded svelte-1l8159u"
          >
            <option disabled value="">Select Your Product Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <p v-if="invalidGender" class="text-red-500 text-sm">
            Product Gender can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Release Date
          </div>
          <div
            class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
          >
            <input
              @blur="validatingDate"
              v-model="newProduct.date"
              type="date"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidDate" class="text-red-500 text-sm">
            Release Date can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Color
          </div>
          <div v-for="color in allColors" :key="color.colorId">
            <input
              type="checkbox"
              id="color"
              :value="color"
              v-model="newProduct.productColors"
            />
            <label for="color">{{ color.colorId }}</label>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Description
          </div>
          <div
            class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
          >
            <textarea
              @blur="validatingDescription"
              v-model="newProduct.productDescription"
              placeholder="Product Description"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidDescription" class="text-red-500 text-sm">
            Product Description can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Image
          </div>
          <input
            type="file"
            id="file"
            v-on:change="handleFileUpload"
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
          <div class="pt-8">
            <button
              class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
              type="submit"
            >
              save
            </button>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs Barlow-Medium tracking-wider leading-8 uppercase"
          >
            Preview Image
          </div>
          <div class="bg-white my-2 p-1 flex svelte-1l8159u">
            <img :src="preImages" class="h-60 w-60" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
@font-face {
  font-family: Poppins;
  src: url("../fonts/Poppins-Regular.ttf");
}
.Poppins {
  font-family: Poppins;
}
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
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      preImages: null,
      file: "",
      error: "",
      urlAdd: "http://23.101.19.18/api/Products/Create",
      urlImages: "http://23.101.19.18/api/Images/upload/",
      urlProduct: "http://23.101.19.18/api/Products/GetProducts",
      allColors: [],
      allBrands: [],
      allImages: [],
      isLoadingBrands: true,
      isLoadingColors: true,
      newProduct: {
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
      invalidName: false,
      invalidType: false,
      invalidDescription: false,
      invalidPrice: false,
      invalidGender: false,
      invalidDate: false,
      invalidBrandName: false,
    };
  },
  async created() {
    this.allColors = await this.fetchColors();
    this.allBrands = await this.fetchBrands();
    this.allProducts = await this.fetchProducts();
    this.preImages = require("../assets/plus.png");
  },
  methods: {
    handleFileUpload(e) {
      var file = e.target.files[0];
      if (file.type.includes("image")) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preImages = e.target.result;
        };
        reader.readAsDataURL(file);
        this.file = file;
      } else {
        alert("This file is not an image file.");
      }
    },
    submitFile() {
      let formData = new FormData();
      formData.append("File", this.file);
      let newId = this.allProducts[this.allProducts.length - 1].productId;
      axios
        .post(`http://23.101.19.18/api/Images/upload/` + (newId + 1), formData)
        .then(function () {
          window.location.href = "/product";
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    validatingName() {
      this.invalidName = this.newProduct.productName === "" ? true : false;
    },
    validatingType() {
      this.invalidType = this.newProduct.productType === "" ? true : false;
    },
    validatingDescription() {
      this.invalidDescription =
        this.newProduct.productDescription === "" ? true : false;
    },
    validatingPrice() {
      this.invalidPrice = this.newProduct.productPrice === null ? true : false;
    },
    validatingGender() {
      this.invalidGender = this.newProduct.productGender === "" ? true : false;
    },
    validatingDate() {
      this.invalidDate = this.newProduct.date === "" ? true : false;
    },
    validatingBrandName() {
      this.invalidBrandName =
        this.newProduct.brandId.brandName === "" ? true : false;
    },
    submitCheckValidate() {
      this.invalidName = this.newProduct.productName === "" ? true : false;
      this.invalidType = this.newProduct.productType === "" ? true : false;
      this.invalidDescription = this.newProduct.productDescription === "" ? true : false;
      this.invalidPrice = this.newProduct.productPrice === null ? true : false;
      this.invalidGender = this.newProduct.productGender === "" ? true : false;
      this.invalidDate = this.newProduct.date === "" ? true : false;
      this.invalidBrandName  = this.newProduct.brandId.brandName === "" ? true : false;
      if (
        this.invalidName ||
        this.invalidType ||
        this.invalidDescription ||
        this.invalidPrice ||
        this.invalidGender ||
        this.invalidDate ||
        this.invalidBrandName 
      ) {
        console.log("Error");
      } else {
        this.addProduct();
      }
    },
    addProduct() {
      axios
        .post(this.urlAdd, this.newProduct)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then(() => {
          this.submitFile();
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.newProduct);
    },

    async fetchColors() {
      const res = await fetch("http://23.101.19.18/api/Colors/GetColors");
      const data = await res.json();
      console.log(data);
      this.isLoadingColors = false;
      return data;
    },
    async fetchBrands() {
      const res = await fetch("http://23.101.19.18/api/Brands/GetBrands");
      const data = await res.json();
      this.isLoadingBrands = false;
      return data;
    },

    async fetchProducts() {
      const res = await fetch(`http://23.101.19.18/api/Products/GetProducts`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  },
};
</script>