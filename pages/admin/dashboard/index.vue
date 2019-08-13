<template>
      <div class="contenido contendido_administrador">
        <!-- titulo -->
        <div class="container">
            <div class="titulo custom-title-dashboard">
                <h1>Administrador Usuarios del sorteo</h1>
                <span class="btn btn-outline-primary" @click="quitDashboard()">Salir</span>
            </div>
            <div class="buscador">
                <div class="texto">
                    <label for="buscador"><i class="fas fa-search"></i></label>
                    <input name="buscador" type="text" placeholder="Nombre o DNI" v-model="search_bar">
                </div>
                <div class="boton">
                    <input @click="searchUser()" type="submit" value="Buscar">
                </div>
            </div>
            <div class="lista_usuarios">
                <ul>
                    <li class="titulos">
                        <p class="usuario">Nombres de Usuarios</p>
                        <p class="dni">DNI Usuarios</p>
                    </li>
                    <li v-for="(item, i) in listUsers" :key="i">
                        <p class="usuario"> {{item.user}}</p>
                        <p class="dni"> {{item.dni}}</p>
                        <button @click="disableUser(item)">{{item.status ? 'Inhabilitar' : 'Habilitar'}}</button>
                    </li>
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
</template>

<script>
export default {
    layout:'admin',
    middleware: 'loginAuth',
    data() {
        return {
            activeCookie: null,
            search_bar: '',
            listUsers: [
                { user: 'Alexander', dni: '47228997', status: true },
                { user: 'Diana', dni: '47228993', status: true },
                { user: 'Mario', dni: '47228992', status: true },
                { user: 'Jinmy', dni: '47228994', status: true }
            ]
        }
    },
    
    methods: {
        quitDashboard() {
            let vm = this
            // Salimos del sistema y borramos las cookie
            vm.$cookies.removeAll()
            vm.$router.push({path: '/admin/'})
        },
        disableUser(item) {
            // axios here

        },
        searchUser() {
            let vm = this
            console.log(vm.search_bar)

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
        color: #FFF;
    }
}
.wrapper-navbar-custom{
    justify-content: end;
    background: radial-gradient(ellipse at center, #0472a8 0%, #002e52 104%);
    color: #FFF;
    a{
        padding: 5px 10px;
        color: #FFF;
    }
}
.lista_usuarios ul{
    min-height: auto;
    .titulos {
        .usuario{
            width: 45%;
        }
        .dni{
            width: 55%;
        }
    }

}
.contendido_administrador{
    justify-content: start;
}

</style>