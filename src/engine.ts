import { Line } from "./parser";
import { operators, engineOperators } from "./mathOperators";

export const engine = (stack: Line): number => {
  while(stack.length > 1) {
    for (const operator of operators) { 
      for (let key=0; key<stack.length; key+=2) {
        const item = stack[key + 1];        
        const right = stack[key + 2];
        const left = stack[key];
        
        if (!item) {
          continue;
        }
        if (isNaN(Number(left)) || isNaN(Number(right))) {
          continue
        }
        if (operator === item && engineOperators.hasOwnProperty(operator)) {
          stack[key] = engineOperators[operator](Number(left), Number(right));
          stack.splice((key+1), 2);
        }
      }
    }
  }
  
  return (stack[0] as number);
}