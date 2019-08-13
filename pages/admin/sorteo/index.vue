<template>
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
</template>

<script>
export default {
    layout:'admin',
    middleware: 'loginAuth',
    data() {
        return {
            show_modal: null,
			winner_info: {
				full_name: '',
				dni_number: '',
				position: 0
			}
        }
    },
    methods: {
        getWinner(position) {
			let vm = this
			console.log('position', position)
			console.log('position > 1', position > 1)
			setTimeout(x => {
				vm.winner_info.full_name = position > 1 ? 'Mario Camones' : 'Alexander Guevara'
				vm.winner_info.dni_number = position > 1 ? 47228997 : 67552443
				vm.winner_info.position = position
				vm.show_modal = 'show'
			}, 1000)
        },
        closeModal() {
			let vm = this
			vm.resetPayload()
        },
        getWinner(position) {
			let vm = this
			console.log('position', position)
			console.log('position > 1', position > 1)
			setTimeout(x => {
				vm.winner_info.full_name = position > 1 ? 'Mario Camones' : 'Alexander Guevara'
				vm.winner_info.dni_number = position > 1 ? 47228997 : 67552443
				vm.winner_info.position = position
				vm.show_modal = 'show'
			}, 1000)
        },
        resetPayload() {
			let vm = this

			vm.winner_info.full_name = ''
			vm.winner_info.dni_number = ''
			vm.winner_info.position = 0
		},
        // send_data(value) {
		// 	let vm = this

		// 	if(!vm.eval_payload(value)) {
		// 		Swal.fire({
		// 			type: 'warning',
		// 			title: 'Oops...',
		// 			html: 'Llena correctamente la información para continuar.',
		// 		})
		// 	} else {
		// 		vm.resetPayload()
		// 		Swal.fire({
		// 			type: 'success',
		// 			title: 'Listo!',
		// 			html: 'Ahora estas participando, mucha suerte!',
		// 		})

		// 		// Swal.fire({
		// 		// 	type: 'error',
		// 		// 	title: 'Oops...',
		// 		// 	html: 'Ocurrio un problema con tu registro, intenta nuevamente.',
		// 		// })
		// 	}
		// },
    }
}
</script>

<style lang="scss" scoped>
</style>