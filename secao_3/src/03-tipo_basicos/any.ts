let anyString: any = "Rodrigo";
let anyBoolean: any = false;
let anyNumber: any = 100.90;
let anyArray: any = [1, 2, true, "Teste"];

console.log(name);
console.log(anyBoolean);
console.log(anyNumber);

anyArray.forEach((value: any) => {
    console.log(value);
})