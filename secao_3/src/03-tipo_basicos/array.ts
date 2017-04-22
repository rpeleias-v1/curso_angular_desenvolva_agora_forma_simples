let stringArray: string[] = ["Rodrigo", "Peleias", "Instrutor"];

stringArray.forEach((value: string) => {
    console.log(value);
});

let typedArray: Array<string> = ["Rodrigo", "Peleias"];
typedArray.push("Fullstack Developer");

typedArray.forEach((value: string) => {
    console.log(value);
}); 