<template>
  <div class="wrapper_principal_layout">
        <nav class="navbar navbar-expand-lg wrapper-navbar-custom">
            <nuxt-link to="/admin/dashboard">Inicio</nuxt-link>
            <nuxt-link to="/admin/sorteo">Sorteo</nuxt-link>
        </nav>
        <div>
            <nuxt/>
        </div>
        <footer class="footer">
            Copyright © Derechos reservados <strong>Pacífico Seguros.</strong>Desarrollado por <strong><a href="https://creatosdesign.com">CREATOS DESIGN</a></strong> 
        </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.wrapper_principal_layout{
    min-height: 100vh;
    display: grid;
    grid-template-rows: 0fr 1fr 0fr;
}

</style>