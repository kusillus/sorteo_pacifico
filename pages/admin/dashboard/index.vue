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
                    <input name="buscador" type="text" placeholder="Nombre" v-model="search_bar">
                </div>
                <div class="boton">
                    <input @click="searchUser(search_bar)" type="submit" value="Buscar">
                </div>
            </div>
            <div class="lista_usuarios">
                <ul>
                    <li class="titulos">
                        <p class="usuario">Nombres de Usuarios</p>
                        <p class="dni text-center">DNI Usuarios</p>
                        <p class="exist text-center">Existe</p>
                        <p class="acctions text-center">Acciones</p>
                    </li>
                    <li v-for="(item, i) in listUsers" :key="i">
                        <p class="usuario"> {{item.fullName_users}}</p>
                        <p class="dni text-center"> {{item.dni_users}}</p>
                        <p class="exist text-center">{{item.exist === 1 ? 'Si': 'No'}}</p>
                        <button @click="changeUser(item)">{{item.status ? 'Inhabilitar' : 'Habilitar'}}</button>
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
import axios from 'axios'
import Swal     from 'sweetalert2'
export default {
    layout:'admin',
    middleware: 'loginAuth',
    data() {
        return {
            activeCookie: null,
            search_bar: '',
            listUsers: [
                // { id_users: '', fullName_users: 'Alexander', dni_users: '47228997', status: true },
            ]
        }
    },
    mounted() {
        this.getAllUsers()
    },
    
    methods: {
        getAllUsers() {
            let vm = this
            axios({
                method: 'GET',
                url: process.env.service_url +'all_users',
            })
            .then( response => {
                let res = response.data
                vm.listUsers = res.data
            })
        },

        quitDashboard() {
            let vm = this
            // Salimos del sistema y borramos las cookie
            axios({
                    url: process.env.service_url + 'logout',
                    method: 'post'
                }).then(response => {
                    vm.$cookies.removeAll()
                    window.location.href = '/admin'
                    // vm.$router.push({path: '/login'})
                })
        },
        changeUser(item) {
            let vm = this
            axios({
                method: 'PUT',
                url: process.env.service_url +'change_status',
                data: {
                    dni: item.dni_users,
                    status: item.status ? 0: 1 ,
                }
            })
            .then( response => {
                let res = response.data
                item.status = !item.status
                Swal.fire({
					type: 'success',
					title: 'Listo!',
					html: res.message
				})
            })

        },
        searchUser(search_bar) {
            let vm = this
            if(search_bar.length  === 0) {
                vm.getAllUsers()
                // Swal.fire({
                //     type: 'warning',
                //     title: 'Ops!',
                //     html: 'Debes ingresar un nombre para poder realizar la busqueda.'
                // })
            } else {
                axios({
                    method: 'get',
                    url: process.env.service_url +'search/' + vm.search_bar,
                })
                .then( response => {
                    let res = response.data
                    vm.listUsers = res.data
                })
            }

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
            width: 30%;
        }
        .exist,.acctions{
            width: 15%;
            border: 1px solid #fff;
            margin: 0;
            padding: 10px 10px;
            font-size: 15px;
        }
        .acctions{
            width: 10%;
        }
    }
    li {
        .dni{
            width: 30%;
        }
        .exist{
            width: 15%;
            border: 1px solid #fff;
            margin: 0;
            padding: 10px 10px;
            font-size: 15px;
        }
    }

}
.contendido_administrador{
    justify-content: start;
}

</style>