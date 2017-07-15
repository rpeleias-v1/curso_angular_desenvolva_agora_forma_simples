import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Vinho } from '../models/vinho';

export function fakeBackend(backend: MockBackend, options: BaseRequestOptions) {
    
    backend.connections.subscribe((connection: MockConnection) => {

        let usuarioFake = {
            id: 1,
            login: 'rodrigo',
            senha: 'rodrigo',
            nome: 'Rodrigo Peleias API',
            email: 'rpeleias@hotmail.com'
        }
        
        let vinhos = JSON.parse(localStorage.getItem('vinhos')) || 
                                localStorage.setItem('vinhos', JSON.stringify([]));

        setTimeout(() => {

            if(connection.request.url.endsWith('/login') && connection.request.method === RequestMethod.Post) {
                let params = JSON.parse(connection.request.getBody());

                if(params.login === usuarioFake.login && params.senha === usuarioFake.senha) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { token:'fake-jwt-token', usuario: usuarioFake}})
                    ))
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({status: 401})
                    ))
                }
            }
            if(connection.request.url.endsWith('/vinhos') && connection.request.method === RequestMethod.Get 
            && connection.request.headers.get('authorization') === 'Bearer fake-jwt-token') {
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 200, body: vinhos})
                ));
            }

            if(connection.request.url.match(/\/vinhos\/\d+$/) && connection.request.method === RequestMethod.Get
            && connection.request.headers.get('authorization') === 'Bearer fake-jwt-token') {
                let vinhoParts = connection.request.url.split('/');
                let id = parseInt(vinhoParts[vinhoParts.length - 1]);
                let vinhosEncontrados = vinhos.filter((vinho:Vinho) => {
                    return vinho.id === id;
                });
                let vinho = vinhosEncontrados.length > 0 ? vinhosEncontrados[0] : null;
                connection.mockRespond(new Response(
                    new ResponseOptions({status: 200, body: vinho})
                ));
            }

            if(connection.request.url.endsWith('/vinhos') && connection.request.method === RequestMethod.Post
            && connection.request.headers.get('authorization') === 'Bearer fake-jwt-token') {
                let novoVinho = JSON.parse(connection.request.getBody());
                let vinhoDuplicado = vinhos.filter((vinho:Vinho) => {
                    return vinho.nome === novoVinho.nome;
                }).length;

                if(vinhoDuplicado) {
                    return connection.mockError(new Error('Atenção! O vinho informado já está cadastrado no sistema'));
                }
                novoVinho.id = vinhos.length + 1;
                vinhos.push(novoVinho);
                localStorage.setItem('vinhos', JSON.stringify(vinhos));

                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 201})
                ));
            }

            if(connection.request.url.match(/\/vinhos\/\d+$/) && connection.request.method === RequestMethod.Put
            && connection.request.headers.get('authorization') === 'Bearer fake-jwt-token') {
                let vinhoAtualizado = JSON.parse(connection.request.getBody());
                let vinhoCadastrado = vinhos.filter((vinho:Vinho) => {
                    return vinho.id === vinhoAtualizado.id;
                })[0];

                if(!vinhoCadastrado) {
                    return connection.mockError(new Error('Atenção! O vinho informado não está cadastrado no sistema'));
                }                              
                vinhos = vinhos.filter((vinhoAtual:Vinho) => {
                    return vinhoAtual.id !== vinhoAtualizado.id
                })
                vinhos.push(vinhoAtualizado);
                localStorage.setItem('vinhos', JSON.stringify(vinhos));

                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 201})
                ));
            }

            if(connection.request.url.match(/\/vinhos\/\d+$/) && connection.request.method === RequestMethod.Delete
            && connection.request.headers.get('authorization') === 'Bearer fake-jwt-token'){
                let vinhoParts = connection.request.url.split('/');
                let idVinho = parseInt(vinhoParts[vinhoParts.length - 1]);
                for(let i = 0; i < vinhos.length; i++) {
                    let vinho = vinhos[i];
                    if(vinho.id === idVinho) {
                        vinhos.splice(i, 1);
                        localStorage.setItem('vinhos', JSON.stringify(vinhos));
                        break;
                    }
                }
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200 })
                ));
            }
        })          
    }, 500)
    return new Http(backend, options);

}