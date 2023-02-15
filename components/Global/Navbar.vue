<template>
    <nav class="navbar navbar-expand-md nav-menu">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../../assets/logos/turn.png" alt="turn" class="logo-header"/>
            </a>

            <button class="navbar-toggler nav-menu__toggler" :data-active="toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  @click="toggler = !toggler">
                <span span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse nav-menu__collapse d-flex align-items-center justify-content-strech " id="navbarNav" :data-active="toggler">
                <ul class="navbar-nav d-flex justify-content-around flex-grow-1">
                    <li class="nav-item nav-menu__brand-mobile">
                        <a class="" href="#">
                            <img src="../../assets/logos/turn.png" alt="turn" class="logo-header"/>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="./">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Services">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Metodologías</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Español</a>
                    </li>
                </ul>
            </div>

            <button class="btn btn-nav" type="button">
                Contacto
            </button>
        </div>
    </nav>
</template>
<script lang="ts" setup>

let toggler = ref(false);




</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.nav-menu{
    position: relative;
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
.btn-nav{
    @include button;
    height: inherit;

}
    
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
            background: #020202;
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
            
            &[data-active=true]{
              position: fixed;
              z-index: 5;
              animation: shows forwards .4s linear normal;
             
            }
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