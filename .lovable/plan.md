# Landing page de geração de leads — FLAR Consulting

## Objetivo
Substituir a página inicial atual por uma landing page curta, mobile first, com foco exclusivo no agendamento da sessão gratuita de 1 hora. Manter as demais páginas institucionais existentes e criar a confirmação em `/obrigado`.

## Implementação
- Criar uma apresentação exclusiva para a landing page, sem o menu, rodapé e contato flutuante do site institucional.
- Montar as 9 seções na ordem e com os textos exatos fornecidos, incluindo vídeo sob demanda, números, riscos, oferta, processo, autoridade, público, perguntas frequentes e formulário final.
- Criar um único formulário reutilizável nos dois pontos, com máscara brasileira de WhatsApp, validação ao sair e ao enviar, bloqueio de e-mails pessoais, honeypot, tempo de carregamento, captura de UTMs e mensagens de erro acessíveis.
- Enviar os dados por `POST /php/submit.php`, tratar sucesso, erros 422 e falhas gerais, além dos eventos solicitados no `dataLayer`.
- Criar a barra fixa móvel que aparece somente quando nenhum formulário está visível e rola até o formulário principal.
- Garantir abertura sempre no topo, mesmo com âncora, e animações sutis com preferência de movimento reduzido respeitada.
- Criar a página `/obrigado` com a orientação de preparação para a conversa e retorno à página inicial.
- Aplicar o visual escuro técnico solicitado, usando tokens sem alterar a aparência das demais páginas.
- Configurar os metadados próprios das duas páginas e manter `lang="pt-BR"`.

## Validação
- Conferir a página em desktop e celular, incluindo ordem das seções, legibilidade, barra móvel e ausência de sobreposições.
- Testar máscara e erros dos três campos, bloqueio de e-mail pessoal, captura de parâmetros e tratamento de falha do envio.
- Confirmar navegação e conteúdo da página `/obrigado`.

## Observação técnica
O endereço do vídeo ficará em `VSL_EMBED_URL`, no topo do componente da landing page. Enquanto estiver vazio, será exibido o estado “Vídeo em breve”. O destino `/php/submit.php` será integrado exatamente como solicitado; até esse serviço ser disponibilizado no ambiente publicado, o formulário apresentará a mensagem de indisponibilidade prevista.
