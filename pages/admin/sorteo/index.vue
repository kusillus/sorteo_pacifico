<template>
<div>
    <div class="contenido">
			<!-- titulo -->
        <div class="container contenedor_titulo">
            <div class="row">
                <div class="col-12 text-center contenedor_img">
                    <img :src="require('@/assets/img/2019.svg')">
                    <p>Ingresa tus datos en este formulario y particiaparás en nuestro sorteo del 2019.<br><strong>!Te deseamos suerte!</strong></p>
                </div>
            </div>
        </div>
        <!-- formulario -->
        <div class="container">
            <div class="formulario">
                <form action="">
                    <div class="texto">
                        <label for="nombre"><i class="fas fa-user"></i></label>
                        <input type="text" name="nombre" v-model="payload.full_name" placeholder="Nombre Completo">
                    </div>

                    <div class="texto">
                        <label for="dni"><i class="fas fa-id-card"></i></label>
                        <input type="number" name="dni" v-model="payload.dni_number" placeholder="DNI">
                    </div>

                    <div class="boton">
                        <input type="submit" @click.prevent="send_data(payload)" value="¡Participar!">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="contenido fondo_azul">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h2>Buscar Ganadores</h2>
                    <p>Al presionar el botón veremos los ganadores primeros ganadores del sorteo.</p>
                </div>
                <!-- Button trigger modal -->
                <button type="button" @click="getWinner(0)" class="boton_sorteo" data-toggle="modal" data-target="#exampleModalCenter">
                    ¡Comenzar Sorteo!
                </button>

                <!-- Modal -->
                <div class="modal fade" :class="show_modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Nuestros Ganadores</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img :src="require('@/assets/img/2019.svg')">
                                <div class="nombre_ganador">
                                    <h2>¡Felicitaciones!</h2>
                                    <p>{{ winner_info.full_name }}</p>
                                    <p>{{ winner_info.dni_number }}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="boton_cerrar" data-dismiss="modal" @click="closeModal()">Cerrar</button>
                                <button type="button" class="boton" @click="getWinner(winner_info.position+1)">Siguiente ganador</button>
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

// import Swal from 'sweetalert2';
import { mxs_data, mxs_methods } from '@/plugins/mixins/index.js'

export default {
    layout:'admin',
    middleware: 'loginAuth',
    mixins: [mxs_data, mxs_methods],
}
</script>

<style lang="scss" scoped>
</style>