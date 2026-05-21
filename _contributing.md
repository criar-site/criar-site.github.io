## Regras de uso do repositório

* Rode localmente e verifique o site como um todo antes de fazer um PR!
* Rode localmente e verifique o site como um todo antes de revisar um PR!
* Para executar localmente o site, você precisa ter o Docker instalado e executando.
* Consulte as instruções em `_run_locally/Docker.md` para executar o site e visualizar localmente

## Instruções para desenvolvimento

* O site é baseado num template do Bootstrap 4. Antes de tentar ajustar algo através de CSS puro, verificar se consegue fazer pelo Bootstrap.
  * Verifique na referência ( https://getbootstrap.com/docs/4.3/getting-started/introduction/ ) se existe alguma classe que pode lhe ajudar com a reorganização visual da página.
* Se for adicionar algum CSS ou JS, utilizar os arquivos `css/custom.css` e `js/custom.js`.
  * Não alterar nenhum outro arquivo .css ou .js, como o `css/style.css` e `js/bootstrap.js`. Eles são parte do template e as modificações podem causar efeitos adversos. Se precisar alterar alguma definição deles, adicione o código .js ou .css nos arquivos de custom (comentando o que cada um faz).
* Todas as imagens ficam na pasta `images/`.
  * Fotos dos integrantes do projeto ficam em `images/pessoas/`.
  * Fotos dos eventos ficam em `images/gallery/`.
  * Iconografias ficam em `images/iconography/`.
  * Para adicionar ícones simples, a sugestão é sempre usar o material-icons do Google. Isso torna o repo mais limpo e facilita a manutenção.
* Sempre que fizer sentido, modularize as páginas.
  * Você pode adicionar uma página externa através da tag `{% include <page_file> %}` do Jekyll. Exemplo: `{% include header.html %}` é utilizado em todas as páginas para adicionar o header de navegação.
  * As páginas embutidas precisam estar obrigatoriamente em `_includes`
  * A página de publicações depende dos includes, `_includes/pub_buttons.html`, `_includes/pub_dermato.html`, `_includes/pub_relatorios.html`, `_includes/pub_roboticaIA.html` e `_includes/pub_visao.html`.
* O Jekyll não tem uma forma built-in de gerar páginas dinamicamente, mas é possível contornar isso parcialmente utilizando scripts de automação para gerar as páginas estáticas sempre que o site é executado localmente
  * O código `_includes_generate_copyright.rb` gera uma nova versão do rodapé de direitos autorais toda vez que o site é executado localmente, salvando em `_includes/copyright.html`. Caso ocorra uma modificação no arquivo, verifique se o ano mudou. Se for esse o caso, realize o commit de `_includes/copyright.html`.
  * O código `_includes_generate_gallery.rb` gera uma nova versão da galeria de fotos toda vez que o site é executado localmente, salvando em `_includes/gallery.html`, baseado nas informações contidas em `_includes/gallery.json`. Caso ocorra uma modificação no arquivo .json, execute o site localmente para atualizar o html e realize o commit de ambos para o repositório.
    * As imagens a serem adicionadas em `_includes/gallery.json` precisam estar em `images/gallery/`, em formato .jpg, proporção 4:3 e resolução máxima de 4000x3000
