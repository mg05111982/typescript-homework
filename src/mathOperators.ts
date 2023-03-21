export type OperatorType = (left: number, right: number) => number;

const multiply: OperatorType = (
  left: number,
  right: number
): number => left * right;

const division: OperatorType = (
  left: number,
  right: number
): number => left / right;

const addidion: OperatorType = (
  left: number,
  right: number
): number => left + right;

const subtraction: OperatorType = (
  left: number,
  right: number
): number => left - right;

export const operators = ["/", "*", "-", "+"];
export const engineOperators: { [key: string]: OperatorType } = {
  "/": division,
  "*": multiply,
  "+": addidion,
  "-": subtraction,
};