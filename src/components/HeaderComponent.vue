<script lang="ts">
import Cart from "./icons/icon-cart.vue";
import MenuIcon from "./icons/icon-menu.vue";
import Close from "./icons/icon-close.vue";
import Bin from "./icons/icon-delete.vue";

export default {
  components: {
    Cart,
    MenuIcon,
    Close,
    Bin,
  },
  data() {
    return {
      navLinks: ["Collections", "Men", "Women", "About", "Contact"],
      isActive: true,
      menuDisplay: false,
      cart: false,
    };
  },
  methods: {
    changeActive() {
      this.isActive = false;
      this.menuDisplay = true;
    },
    closeMenu() {
      this.isActive = true;
      this.menuDisplay = false;
    },
    toggleCart() {
      this.cart = !this.cart;
    },
  },
};
</script>
<template>
  <div class="main-container">
    <div id="overlay" v-bind:class="{ overlayActive: isActive }"></div>
    <div
      class="menu"
      v-bind:class="{ menuDisplay: menuDisplay }"
      v-bind:style="{
        width: menuDisplay ? '300px' : '0px',
      }"
    >
      <div class="innerMenu" v-bind:class="{ hidden: !menuDisplay }">
        <div class="menu-button" @click="closeMenu">
          <Close />
        </div>

        <nav class="nav-col">
          <a href="" v-bind:key="links" v-for="links in navLinks">{{
            links
          }}</a>
        </nav>
      </div>
    </div>
    <div class="left-section">
      <div class="menu-button" v-on:click="changeActive()">
        <MenuIcon />
      </div>
      <h1 class="title">sneakers</h1>
      <nav class="nav">
        <a href="" v-bind:key="links" v-for="links in navLinks">{{ links }}</a>
      </nav>
    </div>
    <div class="right-section">
      <template>
        <div class="cart">
          <button class="cart-icon" @click="toggleCart">
            <Cart />
          </button>
          <div class="cart-modal" :style="{ display: cart ? 'block' : 'none' }">
            <p class="cart-p">Cart</p>
            <hr />
            <div class="cart-details">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="../assets/images/image-product-1-thumbnail.jpg"
                        alt=""
                        srcset=""
                        class="cart-img"
                      />
                    </td>
                    <td>
                      <div>
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125.00 x 3 <strong>$375.00</strong></p>
                      </div>
                    </td>
                    <td>
                      <Bin />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
      <img
        :style="{ width: '40px' }"
        src="../assets//images//image-avatar.png"
      />
    </div>
  </div>
</template>

<style scoped>
hr {
  opacity: 0.1;
}
.main-container {
  display: flex;
  min-width: 400px;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
}
.left-section {
  display: flex;
  align-items: baseline;
  gap: 30px;
}
.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}
.title {
  font-weight: 700;
  line-height: 26px;
  color: black;
}
.nav {
  display: flex;
  gap: 30px;
}
.nav-col {
  display: flex;
  margin-top: 40px;
  gap: 20px;
  flex-direction: column;
}
.nav-col a {
  font-size: 18px;
  font-weight: 700;
  color: black;
}
.menu-button {
  display: none;
}
.menu {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 3;
  height: 180vh;
  background-color: rgb(213, 212, 212);
  transition: width 1s;
}
.innerMenu {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.hidden {
  display: none;
}
/* .menuDisplay:enabled {
  width: 300px;
} */
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
.overlayActive {
  display: none;
}
.cart {
  position: relative;
}
.cart-icon {
  border: none;
  background-color: inherit;
  cursor: pointer;
}
.cart-modal {
  position: absolute;
  width: 320px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  transform: translate(-200px, 10px);
  border-radius: 10px;
  z-index: 1;
  box-shadow: 5px 10px 18px #888888;
  display: none;
}
.cart-p {
  font-weight: 600;
  color: black;
  padding: 15px 0px 0px 15px;
  margin-bottom: 10px;
}
.cart-img {
  width: 45px;
  border-radius: 6px;
}
.cart-details {
  padding: 20px;
}
td:not(:last-child) {
  padding-right: 10px;
}
strong {
  color: black;
  font-weight: 700;

}
@media (max-width: 700px) {
  .nav {
    display: none;
  }
  .menu-button {
    display: flex;
    cursor: pointer;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
  .menu-button:hover {
    background-color: rgb(224, 221, 221);
  }
}
</style>
