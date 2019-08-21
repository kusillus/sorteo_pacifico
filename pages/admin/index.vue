<template>
    <div class="contenido contendido_administrador login_panel">
        <div class="wrapper_login">
            <img :src="require('@/assets/img/2019.svg')">
            <div class="formulario">
                <form action="" v-if="login_panel">
                    <div class="texto">
                        <label for="username"><i class="fas fa-user"></i></label>
                        <input type="text" name="username" v-model="payload.email" placeholder="DNI">
                    </div>
                    <div class="texto">
                        <label for="dni"><i class="fas fa-lock"></i></label>
                        <input type="password" name="dni" v-model="payload.password" placeholder="Contraseña">
                    </div>

                    <div class="boton align-btn">
                        <input type="submit" @click.prevent="login_user(payload)" value="Ingresar">
                        <span class="btn-secodary-action" @click="login_panel=!login_panel">
                            ¿Olvide mi contraseña?
                        </span>
                    </div>
                </form>
                <form action="" v-else>
                    <div class="texto">
                        <label for="email"><i class="fas fa-envelope"></i></label>
                        <input type="number" name="email" v-model="payload.email" placeholder="Usuario">
                    </div>
                    <div class="boton align-btn">
                        <input type="submit" @click.prevent="login_user(payload)" value="Recuperar">
                        <span class="btn-secodary-action" @click="login_panel=!login_panel">
                            Regresar
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios    from 'axios'
import Swal     from 'sweetalert2';

export default {
    data() {
        return {
            login_panel: true,
            payload: {
                email:'',
                password: ''
            }
        }
    },
    middleware: 'redirectLogin',
    methods: {
        login_user(payload) {
            let vm = this
            if(vm.eval_payload(payload)) {
                // TODO: Servicio para el login
                axios({
                    url: process.env.service_url + 'auth',
                    // url: 'users_create',
                    method: 'post',
                    data: {
                        dni: payload.email,
                        password: payload.password
                    }
                }).then(response => {
                    let res = response.data
                    if(res.status) {
                        // Swal.fire({
                        //     type: 'success',
                        //     title: 'Listo!',
                        //     html: res.message,
                        // })
                        let token = 'Alexander-token'
                        // TODO: Seteamos el token que nos responde el servicio.
                        vm.$cookies.set('user-token', token, {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7
                        })
                        vm.$store.commit('SET_USER',token)
                        // TODO: Redireccionamos al dashboard
                        window.location.href = '/admin/dashboard'
                        // vm.$router.push('/admin/dashboard')

                        vm.resetPayload()
                    } else {
                        Swal.fire({
                            type: 'error',
                            title: 'Ops!',
                            html: res.message,
                        })
                    }

                })
            } else {
                Swal.fire({
					type: 'error',
					title: 'Oops...',
					html: 'Ingresa correctamente usuario y contraseña.',
				})
            }
        },

        eval_payload(value) {
            let valid = false
			return value.email.length !== 0 && value.password.length !== 0
		},

        resetPayload() {
			let vm = this
			vm.payload.email = ''
			vm.payload.password = ''
		},
    }

}
</script>

<style lang="scss">
.login_panel{
    min-height: 100vh;
}
.wrapper_login{
    padding: 10px;
    border-radius: 4px;
    border: solid 1px #FFF;
    max-width: 500px;
    margin: 0 auto;
    min-width: 400px;
    img{
        padding: 10px 25px;
        width: 100%;
        display: block;
    }
    .align-btn{
        text-align: center;
    }
    .btn-secodary-action{
        display: block;
        text-align: center;
        padding: 0 10px;
        margin: 10px 0;
        color: #fff;
        cursor: pointer;
        &:hover{
            color:#EAEAEA;
        }
    }
}
</style>