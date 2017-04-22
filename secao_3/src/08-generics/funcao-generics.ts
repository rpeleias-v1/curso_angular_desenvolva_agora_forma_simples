function olaGenerics<T>(args: T): T {
    return args;
}

console.log(olaGenerics<string>("Olá Rodrigo"));
console.log(olaGenerics("Olá Rodrigo"));
console.log(olaGenerics(28));