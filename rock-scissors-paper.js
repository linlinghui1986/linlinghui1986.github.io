var compare=function(choice1,choice2){
if(choice1===choice2){return("和林凌辉打成平手");}
else{
	if(choice1==="石头"&choice2==="剪子"){ console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你赢了！");}
    else{
		if(choice1==="石头"&choice2==="布"){console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你输了！");}
		else{
			if(choice1==="剪子"&choice2==="石头"){console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你输了！");}
			else{
				if(choice1==="剪子"&choice2==="布"){console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你赢了！");}
 				else{
					if(choice1==="布"&choice2==="石头"){console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你赢了！");}
					else{
						if(choice1==="布"&choice2==="剪子"){console.log("你出"+useChoice+"，林凌辉出"+computerChoice+"，你输了！");}
						else{console.log("游戏结束");}
}}}}}}}
    
compare(userChoice,computerChoice)
