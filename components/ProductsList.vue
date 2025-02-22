<script setup>
const cart = useCartStore();
const productStore = useProductStore();
// Define props
const props = defineProps({
  filteredProducts: {
    type: Array,
    required: true,
  },
});

const auth = useAuthStore();

const wishStore = useWishlistStore();

const toggleWishlist = (product) => {
  if (wishStore.isInWishlist(product.id)) {
    wishStore.getProductToRemove(product.id);
  } else {
    wishStore.addToWishlist(product);
  }
};
</script>

<template>
  <div class="main relative ">
    <!-- for searching compoonent -->
    <button
      v-if="productStore.toggleFilteredProducts()"
      @click="filteredProducts.length = 0"
      class="fixed sm:top-56 sm:top-[73px] right-[-23px] sm:right-0 fixed bg-red-500 hover:text-red-500 px-5 border hover:bg-white text-white rotate-90 sm:rotate-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="4"
        stroke="currentColor"
        class="h-8 w-10 cursor-pointer duration-150"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <!-- /_-_-_-_-----_----_______---- -->

    <div class="card flex flex-wrap  justify-center gap-4 py-3 Scrollbar min-h-screen max-h-auto">
      <div
        class="w-auto"
        v-for="(product, index) in filteredProducts"
        :key="index"
      >
        <div
          class="h-[18rem] rounded-lg bg-white px-2 duration-125 shadow-sm shadow-black hover:shadow-md hover:bg-neutral-200 duration-150"
        >
          <nuxt-link :to="`/products/${product.id}`" @click="filteredProducts.length = 0">
            <img
              class="rounded-lg h-4/6 object-center cursor-pointer mx-auto"
              :src="apiBase + product.image"
              alt="product"
            />
          </nuxt-link>
          <div class="middle flex items-center justify-between">
            <nuxt-link :to="`/product/${product.id}`" @click="filteredProducts.length = 0" class="">
              <p class="my-2 font-bold text-gray-700 text-center truncate">
                {{ truncatedHeadingText(product.name) }}
              </p>
            </nuxt-link>

            <!-- v-if="!auth.isAdmin" -->
            <button @click="toggleWishlist(product)" class="w-6">
              <IconsBookmarkDash
                v-if="wishStore.isInWishlist(product.id)"
                class="w-full"
              />
              <IconsBookmark v-else class="w-full" />
            </button>
          </div>

          <div class="bottom flex justify-between items-center">
            <p class="text-lg font-mono font-extrabold text-red-400">
              ${{ product.stock == 0 ? "00.00" : product.price }}
            </p>
            <nuxt-link
              v-if="cart.isInCart(product.id)"
              @click="filteredProducts.length = 0"
              to="/cart"
            >
              <button
                class="add-cart py-1 px-2 text-sm font-semibold bg-gray-400 hover:bg-gray-500 text-white border border-black rounded"
              >
                <span>Go to Cart</span>
              </button>
            </nuxt-link>

            <button
              v-else-if="product.stock == 0"
              class="add-cart py-1 px-2 text-sm font-semibold duration-150border border-black rounded bg-red-400 text-white italic cursor-not-allowed"
            >
              Out of stock
            </button>

            <button
              v-else
              @click="cart.addItem(product)"
              class="add-cart py-1 px-2 text-sm font-semibold duration-150 text-white border border-black rounded bg-blue-500 hover:bg-[#640e8b]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .card {
  display: flex;
 justify-content: flex-start;
} */
</style>
