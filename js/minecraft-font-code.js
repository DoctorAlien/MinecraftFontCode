function minecraftFontCode(input){
	var output="";
	if(input.substr(0,1)!='§'){
		input='§f'+input;
	}
	input=input.replace('\n','<br/>',input);
	var fontCode=new Array();
	fontCode=input.split('§');
	for(var i in fontCode){
		if(fontCode[i].length==1){
			output+='<span class="mccolor_';
			output+=fontCode[i].substr(0,1);
			output+='">';
			output+=fontCode[i].substr(1);
		}else{
			output+='<span class="mccolor_';
			output+=fontCode[i].substr(0,1);
			output+='">';
			output+=fontCode[i].substr(1);
			output+='</span>';
		}
	}
	return output;
}