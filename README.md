# TODOList-PWA

TODO List é uma Aplicação Web Progressiva onde os usuários podem adicionar tarefas a serem cumpridas, e ao finaliza las as mesmas podem ser removidas.

![N|Solid](images\android.jpeg)
![N|Solid](images\ios.jpeg)

## Manifesto

Para a instalação da aplicação nas plataformas mobile Android e iOS acesse os respectivos links.

```python
Android: <https://drive.google.com/open?id=19oh4e3I8dmXvxMiiXLWSRXvTvtkHRHPj>
iOS: <https://drive.google.com/open?id=1tASOLe5Trq_yvGmFjj-UJbNgKbyHVx7Q>
```

## Documentação

- Páginas: Foram criadas 2 telas com o conjunto das linguagens html, css e js. Ambas telas possuem uma toolbar que possui um icone de menu lateral que serve para que o usuário possa navegar entre as duas telas. No menu lateral também existe um link de redirecionamento para este repositório.
- Armazenamento local: A aplicação armazenamento localmente no cache do aparelho as tarefas que são criadas pelo usuário e a medida que são finalizados, são removidas da aplicação, estado esse que também é armazenado.
- Service Worker: Foi criado com as declarações das classe html, css e js alem do evento para instalação da aplicação e armazenamento dos dados em cache.
- Funcionamento offline: As duas páginas da aplicação são perfeitamente carregadas quando o dispositivo esta offline, e as funcionalidades do TODO List também podem ser utilizadas, ja que as tarefas quando adicionados ou excluidas ficam com seu armazenadas em cache possibilitando assim o uso da aplicação em um dispositivo sem acesso a internet. 
