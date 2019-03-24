module.exports = function check(str, bracketsConfig) {
  // your solution
  
  
  const config = [];
	for (i=0;i<bracketsConfig.length;++i){
		config[i]=bracketsConfig[i][0]+bracketsConfig[i][1];
	};

	if (str.length&2==1) {
		 return false;
	};
	
	let n=0;
	while (true){
		if(n>=bracketsConfig.length){
			return false;
			break;
		}
		n=0;
		for (i=0;i<config.length;++i){
			var foundPos=str.indexOf(config[i]);
			if (foundPos == -1){
				++n;
				continue;
			};
			str=str.substring(0,foundPos)+str.substring(foundPos+2);
		}
		if (str=='') {
			return true;
			break;
		}
	}
  }

