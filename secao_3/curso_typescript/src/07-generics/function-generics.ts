function olaGenerics<T>(args: T): T {
    return args;
}

console.log(olaGenerics("Rodrigo Peleias"));
console.log(olaGenerics<string>("Rodrigo Peleias"));
console.log(olaGenerics<number>(123));