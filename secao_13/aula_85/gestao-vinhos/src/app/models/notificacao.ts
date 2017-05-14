export class Notificacao {

    _mensagem: string;
    _tipo: string;

    get mensagem() {
        return this._mensagem;
    }

    set mensagem(mensagem: string) {
        this._mensagem = mensagem;
    }

    get tipo() {
        return this._mensagem;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
}
