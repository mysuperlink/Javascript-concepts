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