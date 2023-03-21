import { engineOperators } from "./mathOperators";

export type Line = (number | string)[];

const digit = (item: any): number | boolean => {
  return !isNaN(Number(item)) ? Number(item) : false;
}

const operator = (item: any): string | boolean => {
  return engineOperators.hasOwnProperty(item) ? item : false;
}

export const parse = (line: string): Line | null => {
  const stack = line.split(" ");
  
  return stack.reduce<Line>((result, item: any) => {
    let element;
    
    if (element = digit(item)) {
      result.push(element as number);
    }
    if (element = operator(item)) {
      result.push(element as string);
    }
    
    return result;
  }, []);
};
