export interface GenericCRUD<T> {

    criar(objeto: T): T;

    buscarTodos(): T[];

    buscar(index: number): T;

    atualizar(index: number, objeto: T): T;

    remover(index: number);
}