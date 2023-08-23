export default {
	access:()=>{
		if(fetch_emp_by_level.data[0].lvl_id>2){
			navigateTo('EOS Management')
		}
		else{
			navigateTo('KPI Monitoring')
		}
	}
}