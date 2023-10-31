

let progressBar=document.getElementById("bar");
let loadingBar=document.getElementById("loading");
let barWidth=0;

let download=()=>{
	barWidth++;
	progressBar.style.width=`${barWidth}%`;
	setTimeout(()=>{
		loadingBar.innerHTML=(barWidth===100)? `${barWidth}% completed`:`${barWidth}% progress`
	},1000)
}
download()

	setTimeout(()=>{
		let interId=setInterval(()=>{
			if(barWidth===100){
				clearInterval(interId)
			} 
			else{
				download()
			}
		},100)
	},2000)