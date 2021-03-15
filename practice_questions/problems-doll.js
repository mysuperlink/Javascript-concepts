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

  // Train Problem Number of platform
  let numPlatorms = function(arr,dep,n){
    let platforms = 1;
    let result = 1;
    arr.sort((a,b)=>a-b);            //sort all arrivals
    dep.sort((a,b)=>a-b);            //sort all departures
    let i=1;
    let j=0;
    while(i<n && j<n){
      // if arrival <= departure then increase number of platform required 
      if(arr[i]<=dep[j]){
        platforms++;
        i++;
      }else if(dep[j]<arr[i]){  // else decrease the number of platforms required
        platforms--;
        j++;
      }
      result = Math.max(platforms,result);
    }

    return result;
  }

  let arr = [900, 940, 950, 1100, 1500, 1800];
  let dept = [910, 1200, 1120, 1130, 1900, 2000];

  console.log(numPlatorms(arr,dept,6));
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


// Build VS Folder structure TREE



const data = [
  {
    type: "file",
    name: "abc.js",
    children: []
  },
  {
    type: "folder",
    name: "Folder 1",
    children: [
      {
        type: "file",
        name: "folder-1-file-1.js"
      },
      {
        type: "file",
        name: "folder-1-file-2.js"
      }
    ]
  },
  {
    type: "file",
    name: "abcd.js",
    children: []
  },
  {
    type: "folder",
    name: "abcde",
    children: [
      {
        type: "file",
        name: "folder-3-file-1.js"
      },
      {
        type: "file",
        name: "folder-3-file-2.js"
      },
      {
        type: "folder",
        name: "folder-3-file-3",
        children: [
          {
            type: "file",
            name: "folder-3-file-21.js"
          }
        ]
      }
    ]
  }
];
const App = () => {
  
  const renderFileAndFolders = (data, mainHtml = []) => {

    for (let k = 0; k < data.length; k++) {
      if (data[k].type === "folder" && data[k] && data[k].children) {
        const f = renderFileAndFolders(data[k].children);

        mainHtml.push(
          <div>
            <div>
              {" "}
              <b>Folder</b>
              {data[k].name}
              <div>{f}</div>
            </div>
          </div>
        );
        
      } else if (data[k].type === "file") {
        mainHtml.push(<div>{data[k].name}</div>);
      }
      
    }
    return mainHtml;
  };
  return <div className="App">{renderFileAndFolders(data)}</div>;
};
export default App;
