<template>
<div>
    <div class="contenido fondo_azul">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h2>Buscar Ganadores</h2>
                    <p>Al presionar el botón veremos los ganadores primeros ganadores del sorteo.</p>
                </div>
                <!-- Button trigger modal -->
                <button type="button" @click="getWinner()" class="boton_sorteo" data-toggle="modal" data-target="#exampleModalCenter">
                    ¡Comenzar Sorteo!
                </button>

                <!-- Modal -->
                <div class="modal" :class="show_modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                <button type="button" class="boton" @click="getWinner()">Siguiente ganador</button>
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
.contenido{
    min-height: calc(100vh - 114px);
}
</style>