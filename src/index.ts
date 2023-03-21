import {createInterface} from 'readline';

import { parse } from "./parser";
import { engine } from "./engine";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    readline.question("> ", (request: string) => {
      const stack = parse(request);

      if (stack === null) {
        throw new TypeError("Unexpected string");
      }

      const result = engine(stack);

      if (result) {
        console.log(`Result: ${result}`);
      }

      resolve(null);
    });
  });

async function app() {
  while (true) {
    await question();
  }
}

app();
