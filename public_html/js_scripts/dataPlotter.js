function plotData(x_label,y_data,id_name,title_name,min_Value,max_Value){
	var ctx = document.getElementById(id_name).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: x_label,
			datasets: [{
				label: title_name,
				data: y_data,
				backgroundColor:'#2196f3',
				borderColor:'#2196f3',
				color:'#2196f3',
				borderWidth: 3
			}]
		},
		options: {
			scales: {
				y: {
					min: min_Value,
					max: max_Value
				}
			}
		}
	});
	
}