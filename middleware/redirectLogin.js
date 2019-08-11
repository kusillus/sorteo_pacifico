export default function({ app, redirect}) {
	if(app.$cookies.get('user-token')) {
		redirect('/admin/dashboard')
	}
}