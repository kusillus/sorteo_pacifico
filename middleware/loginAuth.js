export default function({ app, redirect, store}) {
	console.log(app.$cookies.get('user-token'))
	if(!app.$cookies.get('user-token')) {
		redirect('/admin')
	}
}
// 	const cookieRes = app.$cookies.get('user-token')
// 	console.log('cookieRes',cookieRes === undefined)
// 	if(cookieRes === undefined) {
// 		return redirect('/admin/')
// 	} else {
// 		return redirect('/admin/dashboard')
// 	}
//   }

// export default function({ store, route, redirect }) {
    // console.log('localStorage', window.localStorage)
    // if(!store.state.token){
    // 	// si no tiene token se redirecciona al login
    //     redirect('/login')

    // } else {
    // 	let profile = store.state.user.profile.toLowerCase()
    // 	let allowed_views = []

    // 	if(route.path !== '/') {
    // 		let result
    // 		switch(profile) {
    // 			case 'admin':
	// 	    		allowed_views = ['/solicitudes','/usuarios/','/trader/','/configuracion/','/devoluciones','/config_web/','/boleteo','/pagos', '/capital']
	// 	    		result = applyRulesOnList(allowed_views, route.path)
	// 	    		break
	//     		case 'operator':
	// 	    		allowed_views = ['/solicitudes','/devoluciones','/boleteo','/pagos']
	// 	    		result = applyRulesOnList(allowed_views, route.path)
	// 	    		break
	// 	    	case 'trader':
	// 	    		allowed_views = ['/trader/']
	// 	    		result = applyRulesOnList(allowed_views, route.path)
	// 	    		break
	//     	}

	//     	if(!result) { 
	// 			redirect('/')
	//     	}
    // 	}
    // }
// }

// export function applyRulesOnList(allowed_views, route) {
// 	return allowed_views.find( x => {
// 		return route.match(x)
// 	} )
// }