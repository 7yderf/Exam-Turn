<template>
    <nav class="navbar navbar-expand-md nav-menu" :class="toggler?'nav-menu__mobile-content' : ''">
        <div class="container">
            <a class="navbar-brand" href="#" :class="toggler?'nav-menu__mobile' : ''">
                <img src="/turn.svg" alt="turn" class="logo-header"/>
            </a>

            <button class="navbar-toggler nav-menu__toggler" :class="toggler?'nav-menu__mobile' : ''"
            :data-active="toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  @click="() => toggler = !toggler">
               
                <icon :name="toggler?'solar:close-circle-outline' :'pajamas:hamburger' " class="nav-menu__icon"/>
            </button>
            
            <div class="collapse navbar-collapse nav-menu__collapse d-flex align-items-center justify-content-strech " :class="toggler?'nav-menu__mobile-content' : ''" id="navbarNav" :data-active="toggler">
                <ul class="navbar-nav d-flex justify-content-around flex-grow-1" :class="toggler?'nav-menu__mobile-content--box container' : ''">
                    
                    <li class="nav-item" @click="() => changePage()">
                        <NuxtLink class="nav-link" to="/">
                            Inicio
                        </NuxtLink>
                    </li>
                    <li class="nav-item" @click="() => changePage()">
                        <NuxtLink class="nav-link" to="./Services">
                            Servicios
                        </NuxtLink>
                    </li>
                    <li class="nav-item"  @click="() => changePage()">
                        <NuxtLink class="nav-link" to="./Methodologies">
                            Metodologías
                        </NuxtLink>
                    </li>
                    <li class="nav-item"  @click="() => changePage()">
                        <NuxtLink class="nav-link" to="./About">
                            Nosotros
                        </NuxtLink>
                    </li>
                    <!-- <li class="nav-item">
                      <form>
                          <select id="locale-select" v-model="$i18n.locale">
                            <option value="en">en</option>
                            <option value="es">es</option>
                          </select>
                        </form>
                    </li> -->
                </ul>
            </div>

            <button class="btn btn-nav" type="button" :class="toggler?'nav-menu__mobile-contact' : ''">
                Contacto
            </button>
        </div>
    </nav>
</template>
<script lang="ts" setup>

const toggler = ref<any>(false);
const device = ref<boolean>(true);

const changePage = () => {
  toggler.value = false;
};

onMounted(async () => {

const { windowSize } = useMediaQuery("(min-width: 768px)");
device.value = windowSize.value;
watch(() => windowSize.value, (value) => {
  device.value = value;
});

});

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.logo-header{
    filter:invert(1);
    transition: .5s;
}

.btn-nav{
    @include button;
    height: inherit;
    animation-delay: 1s;
    transition: .5s;
}

.navbar-toggler{
padding: 0;
border: none;
&:focus{
    outline: none;
    box-shadow: none!important;
}
}
.nav-menu{
    position: sticky;
    top: 0;
    z-index: 5;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.11);
    &__mobile-content{
        padding: 16px;
        transition: .5s;
        &--box{
            gap:32px;
            align-self: flex-start;
            margin-top: 110px;
            .nav-link{
                padding: 16px 0;
            }
        }
    }

    &__brand-mobile{
        display: none;
    }
    &__collapse {
      position: relative;
      &[data-active=false] {
        display: flex;
      }
    
      &[data-active=true] {
        display: flex;
      }
    }
    &__mobile{
        
        z-index: 5;
        margin-top: 36px;
        transition: .5s;
    }
    &__toggler{
        transition: .5s;
    }
    &__mobile-contact{
        z-index: 5;
        position: fixed !important;
        bottom: 10px;
        width: 90%;
        max-width: inherit;
        right: 5% !important;
        animation-delay: .5s;
        transition: .5s;
    }
    &__icon{
        width: 24px;
        height: 24px;
        transition: .5s;
    }

    
}

.router-link-active{
    border-bottom: 1px solid var(--primary-color);
    color: black;
    font-weight: 600;
}
@media screen and (max-width: 768px) {
    .nav-menu{
        min-height: 50px;
        .navbar-collapse{
          display: none;
        }
        .btn-nav{
            position: absolute;
            right: 20%;
        }
        &__collapse{
            
            position: fixed;
            background: #ffffff;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 2;
            &[data-active=false]{
                display: flex;
                transform: translateY(-110%);
                animation: cubic-bezier(0.95, 0.05, 0.795, 0.035);
                transition: .3s;
                opacity: 0;
            }
            &[data-active=true]{
                display: flex;
                transform: translateY(0);
                animation: cubic-bezier(0.075, 0.82, 0.165, 1);
                transition: .5s;
                opacity: 1;
            }
            

        }
        &__brand-mobile{
            @include flex;
            width: 100%;
        }
        .btn-primary{
          margin-left: auto;
          margin-right: 16px;
        }
        &__toggler{
            order: 4;
            background: white;
            animation: cubic-bezier(0.075, 0.82, 0.165, 1);
            transition: .5s;
        }
    }
}
@media screen and (max-width: 635px) {
    .nav-menu{
        .btn-nav{
            right: 15%;
        }
    }
}
@keyframes shows {
  0%{
    position: fixed;
    opacity: 0;
    top: 2%;
    right: 100px;
  }
  50%{
    top: 3%;
    right: 6%;
    opacity: .5;
  }
  100%{
    position: fixed;
    opacity: 1;
    top: 5%;
    right: 5%;
  }
}
</style>