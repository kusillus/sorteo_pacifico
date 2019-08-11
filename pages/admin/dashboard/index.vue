<template>
  <div>
      <div class="contenido contendido_administrador">
        <!-- titulo -->
        <div class="container">
            <div class="titulo custom-title-dashboard">
                <h1>Administrador Usuarios del sorteo</h1>
                <span @click="quitDashboard()">Salir</span>
            </div>
            <div class="buscador">
                <div class="texto">
                    <label for="buscador"><i class="fas fa-search"></i></label>
                    <input name="buscador" type="text" placeholder="Nombre o DNI">
                </div>
                <div class="boton">
                    <input type="submit" value="Buscar">
                </div>
            </div>
            <div class="lista_usuarios">
                <ul>
                    <li class="titulos"><p class="usuario">Nombres de Usuarios</p> <p class="dni">DNI Usuarios</p></li>


                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>
                    
                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>
                    

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>

                    <li><p class="usuario">Nombre Usuario</p> <p class="dni">71558906</p> <button>Inhabilitar</button></li>
    
                </ul>
                <div class="botones">
                    <div class="vaciar_lista">
                        <!-- Button trigger modal -->
                        <button type="button" class="boton_sorteo" data-toggle="modal" data-target="#exampleModalCenter">
                                Vaciar Lista
                        </button>
    
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalCenterTitle">¿Deseas borrar todos los usuarios?</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Si borras esta lista se perderán todos los usuarios registrados.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="boton_cerrar" data-dismiss="modal">Cancelar</button>
                                        <button type="button" class="boton">Borrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        Copyright © Derechos reservados <strong>Pacífico Seguros.</strong>Desarrollado por <strong><a href="https://creatosdesign.com">CREATOS DESIGN</a></strong> 
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeCookie: null,
        }
    },
    middleware: 'loginAuth',
    methods: {
        quitDashboard() {
            let vm = this
            // Salimos del sistema y borramos las cookie
            vm.$cookies.removeAll()
            vm.$router.push({path: '/admin/'})
        }
    }
}
</script>

<style lang="scss">
.custom-title-dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    span{
        border: solid 1px #FFF;
        padding: 5px 9px;
        border-radius: 4px;
        cursor: pointer;
    }
}

</style>