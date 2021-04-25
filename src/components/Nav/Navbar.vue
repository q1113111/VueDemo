<template>
   <transition name="nav">
      <nav v-show="slide" class="nav">
         <div class="logo">
            <router-link :to="{ name: 'Home' }"
               ><img class="logo__img" src="../../assets/img/logo.png" alt=""
            /></router-link>
         </div>
         <ul class="nav__list">
            <li class="nav__item" :class="item.toggle ? 'slide' : ''" v-for="(item, index) of navList" :key="index">
               <div class="nav__body" v-if="item.list">
                  <a
                     href="javascript:;"
                     @click="toggleHandler(index)"
                     :class="item.toggle ? 'is-active' : ''"
                     class="nav__link"
                     ><i :class="item.icon + ' nav__icon'"></i>{{ item.title }}</a
                  >
                  <navDropDwon :navList="item.list" :toggle="item.toggle" />
               </div>
               <router-link v-else :to="item.router" class="nav__link"
                  ><i :class="item.icon + ' nav__icon'"></i>{{ item.title }}</router-link
               >
            </li>
         </ul>
      </nav>
   </transition>
</template>
<script>
import navDropDwon from '@/components/Nav/navDropDown'
export default {
  data () {
    return {
      navList: [
        {
          title: '部落格',
          icon: 'far fa-newspaper',
          toggle: false,
          list: [
            {
              txt: 'Blog-full width',
              link: '/'
            }
          ]
        },
        {
          title: '作品欣賞',
          icon: 'fas fa-camera-retro',
          toggle: false,
          list: [
            {
              txt: 'Demo',
              link: '/'
            }
          ]
        },
        {
          title: '關於我們',
          icon: 'far fa-address-card',
          toggle: false,
          list: [
            {
              txt: 'About US',
              link: '/'
            },
            {
              txt: 'FAQ',
              link: '/'
            },
            {
              txt: 'CONTACT',
              link: '/'
            }
          ]
        },
        {
          title: '購物專區',
          icon: 'fas fa-cart-arrow-down',
          toggle: false,
          router: {
            name: 'Shop'
          }
        },
        {
          title: '會員登入',
          icon: 'fas fa-user-circle',
          toggle: false,
          router: '/'
        }
      ]
    }
  },
  props: {
    slide: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    toggleHandler (eq) {
      this.navList.forEach((item) => {
        item.toggle = false
      })
      this.navList[eq].toggle = true
    }
  },
  components: {
    navDropDwon
  }
}
</script>
<style lang="scss">
.nav {
   position: fixed;
   overflow: hidden;
   z-index: 100;
   height: 100%;
   max-width: 300px;
   width: 100%;
   background-color: darken($gray-900, 8%);
   &__item {
      border-bottom: 1px solid $gray-800;
      position: relative;
      overflow: hidden;
      max-height: 91px;
      transition: 0.65s;
      &.slide {
         max-height: 200px;
         &::before {
            width: 100%;
         }
      }
      &::before {
         content: "";
         @include absoluteBg(0, 1px, $top: "auto");
         bottom: 0;
         background-color: $primary;
         transition: 0.5s;
      }
      &:hover::before {
         width: 100%;
      }
   }
   &__link {
      color: $white;
      display: block;
      width: 300px;
      padding: $spacer * 2 $spacer * 1.25;
      font-size: 1.1rem;
      &:hover > {
         .nav__icon {
            transform: scale(1.3);
            margin-right: $spacer;
         }
      }
      &.is-active {
         color: darken($primary, 8%);
         .nav__icon {
            transform: scale(1.3);
            margin-right: $spacer;
         }
      }
   }
   &__icon {
      transform: scale(0);
      color: darken($primary, 8%);
      transition: 0.3s;
   }
}
.logo {
   border-bottom: 1px solid $gray-800;
   width: 300px;
}
.nav-enter,
.nav-leave-to {
   max-width: 0;
}
.nav-enter-active,
.nav-leave-active {
   transition:  .5s;
}
.nav-leave,
.nav-enter-to {
   max-width: 300px;
}
</style>
