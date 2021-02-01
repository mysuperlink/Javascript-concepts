Bracket Validator

	function parenthesesBalancer(arg){
		var parentheses = "[](){}",
		stack=[], bracePosition;

		for(let i =0; i < arg.length; i++){
			bracePosition = parentheses.indexOf(arg[i]);

			if(bracePosition != '-1'){
				if(bracePosition % 2 == 0){
					stack.push(bracePosition + 1)
				}else{
					if(stack.length == 0 || stack.pop() !== bracePosition){
						return false;
					}
				}
			}
		}
		return stack.length === 0;

	}

/// Doll Problem 
var parts1 = 'ears,nose,mouth,feet';
var parts2 = 'ears,nose';

var parts=[

  "barbe_feet",
  "alex_nose",
  "barbe_ears",
  "waf_mouth",
  "barbe_mouth",
  "barbe_nose",
  "alex_ears",
  "mad_feet",
];
function copy(str){
  let splitStr = str.split(",");
  let newObj={};
  for (let k=0; k<splitStr.length;k++) {
    newObj[splitStr[k]] = true;
  }
  return newObj;
}

function checkDollConfig(parts, checkParts) {
  let dollObj={};
  let obj = copy(checkParts);

  let dolls=[];
  for(let k =0; k<parts.length; k++) {
    let dollName = parts[k].split("_");

    for(let j=1; j<dollName.length;j++) {
      
     
       if(dollObj.hasOwnProperty(dollName[0])) {
        dollObj[dollName[0]][dollName[j]]=true;
      } else if(obj.hasOwnProperty(dollName[j])) {
        dollObj[dollName[0]] = {
          [dollName[j]]: true
        }
      }
      
      
    }
      
  }
  for(let key in dollObj){
    if(Object.keys(dollObj[key]).length === Object.keys(obj).length){
      dolls.push(key)
    }
  }

  console.log( dolls); // ['barbee]
}
checkDollConfig(parts,parts1);