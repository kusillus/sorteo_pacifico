<template>
  	<div class="">
		<div class="contenido">
			<!-- titulo -->
			<div class="container contenedor_titulo">
				<div class="row">
					<div class="col-12 text-center contenedor_img">
						<img :src="require('@/assets/img/2019.svg')">
						<p>Ingresa tus datos en este formulario y participarás en nuestro sorteo del 2019.<br><strong>!Te deseamos suerte!</strong></p>
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
		<!--  -->

		<footer class="footer">
			Copyright © Derechos reservados <strong>Pacífico Seguros.</strong>Desarrollado por <strong><a href="https://creatosdesign.com">CREATOS DESIGN</a></strong> 
		</footer>
  	</div>
</template>

<script>
// import Swal from 'sweetalert2';
import { mxs_data, mxs_methods } from '@/plugins/mixins/index.js'

export default {
	mixins: [mxs_data, mxs_methods],
	components: {
	}
}
</script>

<style>
.boton_sorteo_disabled {
	text-align: center;
	padding: 10px 20px;
	border-radius: 10px;
	border: none;
	background: #fff;
	font-size: 22px;
	font-family: "FocoBold_0";
	color: #002e52;
	text-decoration: none;
	transition: all .5s;
	opacity: 0.4;
}
.contenido{
	height: calc(100vh - 64px);
}

</style>
