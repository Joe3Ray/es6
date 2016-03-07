import * as math from "./lib/a";
console.log("2π = " + math.sum(math.pi, math.pi));

import {sum, pi} from "./lib/a";
console.log("2π = " + sum(pi, pi));

import ln, {math, e} from "./lib/b";
console.log("2π = " + ln(e)*2);
console.log(math);
