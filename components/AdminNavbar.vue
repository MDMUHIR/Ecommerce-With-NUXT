<script setup>
const auth = useAuthStore();
const route = useRoute();
</script>

<template>
  <div
    class="nab w-full border-b shadow-emerald-800/20 shadow-md bg-gradient-to-r from-emerald-500 to-emerald-900 fixed top-0 left-0 right-0 text-white flex flex-col sm:flex-row justify-between items-center lg:py-2"
  >
    <div
      class="nav-home flex justify-center items-center h-full w-56 p-2 oreder-1"
    >
      <nuxt-link to="/admin">
        <button
          :class="
            route.path === '/admin'
              ? 'shadow-inner bg-gradient-to-r from-red-500/50 to-black/50 '
              : ''
          "
          class="nav-item font-light text-2xl rounded-full px-3 duration-300 shadow-black hover:text-black"
        >
          Admin Panel
        </button>
      </nuxt-link>
    </div>
    <!-- -------------------------------------------
        nav Admin items
        --------------------------------------------->
    <div
      class="nav-center flex justify-center items-center py-2 h-full w-full p-2"
    >
      <div class="nav-customer-items flex justify-center items-center gap-4">
        <nuxt-link to="/admin/products">
          <button
            :class="
              route.path === '/admin/products'
                ? 'scale-110 font-bold shadow-inner bg-gradient-to-r from-red-500/50 to-black/50'
                : ''
            "
            class="nav-item font-semibold border rounded p-2 hover:scale-110 duration-300 shadow-black"
          >
            Products
          </button>
        </nuxt-link>
        <nuxt-link to="/admin/categories">
          <button
            :class="
              route.path === '/admin/categories'
                ? 'scale-110 font-bold shadow-inner bg-gradient-to-r from-red-500/50 to-black/50'
                : ''
            "
            class="nav-item font-semibold border rounded p-2 hover:scale-110 duration-300 shadow-black"
          >
            Categories
          </button>
        </nuxt-link>

        <nuxt-link to="/admin/coupons">
          <button
            :class="
              route.path === '/admin/coupons'
                ? 'scale-110 font-bold shadow-inner bg-gradient-to-r from-red-500/50 to-black/50'
                : ''
            "
            class="nav-item font-semibold border rounded p-2 hover:scale-110 duration-300 shadow-black"
          >
            Coupons
          </button>
        </nuxt-link>
        <nuxt-link to="/admin/orders">
          <button
            :class="
              route.path === '/admin/orders'
                ? 'scale-110 font-bold shadow-inner bg-gradient-to-r from-red-500/50 to-black/50'
                : ''
            "
            class="nav-item font-semibold border rounded p-2 hover:scale-110 duration-300 shadow-black"
          >
            Orders
          </button>
        </nuxt-link>
        <nuxt-link to="/admin/users">
          <button
            :class="
              route.path === '/admin/users'
                ? 'scale-110 font-bold shadow-inner bg-gradient-to-r from-red-500/50 to-black/50'
                : ''
            "
            class="nav-item font-semibold border rounded p-2 hover:scale-110 duration-300 shadow-black"
          >
            Users
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="nav-end flex items-center pe-2">
      <button v-if="auth.isAuthenticated" @click="togDropdMenu()">
        <IconsUserIcon class="scale-125" />
      </button>

      <dropdown v-if="showDdMenu" class="absolute right-0 top-[75px]" />
    </div>
  </div>
</template>

<style scoped></style>
