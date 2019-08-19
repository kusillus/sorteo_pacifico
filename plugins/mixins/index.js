import Swal     from 'sweetalert2'
import axios    from 'axios'

export const mxs_data = {
    data() {
    	return {
    		show_modal: null,
			payload: {
				full_name: '',
				dni_number: ''		
			},
			winner_info: {
				full_name: '',
				dni_number: '',
				position: 0
			}
    	}
	},
}

export const mxs_methods = {
    methods: {

        send_data(value) {
            let vm = this
            if(!vm.eval_payload(value)) {
                Swal.fire({
                    type: 'warning',
                    title: 'Oops...',
                    html: 'Llena correctamente la información para continuar.',
                })
            } else {
                axios({
                    url: process.env.service_url + 'users_create',
                    // url: 'users_create',
                    method: 'post',
                    data: {
                        dni: value.dni_number,
                        full_name: value.full_name
                    }
                }).then(response => {
                    let res = response.data
                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        html: res.message,
                    })
                    vm.resetPayload()
                })
                
                
    
                // Swal.fire({
                // 	type: 'error',
                // 	title: 'Oops...',
                // 	html: 'Ocurrio un problema con tu registro, intenta nuevamente.',
                // })
            }
        },
    
        eval_payload(value) {
            let valid = false,
                is_number = Number(value.dni_number)
    
            valid = !isNaN(is_number)
            valid = value.full_name !== null && value.dni_number.length === 8
    
            return valid	
        },
    
        resetPayload() {
            let vm = this
            vm.payload.full_name = ''
            vm.payload.dni_number = ''
    
            vm.winner_info.full_name = ''
            vm.winner_info.dni_number = ''
            vm.winner_info.position = 0
        },
        
        getWinner() {
            let vm = this
            // selectWin

            axios({
                url: process.env.service_url + 'selectWin',
                method: 'get',
            }).then(response => {
                let res = response.data.data
                vm.winner_info.full_name = res.fullName_users
                vm.winner_info.dni_number = res.dni_users
            })
        },
    
        closeModal() {
            let vm = this
            vm.resetPayload()
        },
    }
}