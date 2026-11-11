# CNH Quest

Simulador de estudo para a prova teórica de primeira habilitação. Este projeto é um protótipo simples, feito com HTML, CSS e JavaScript puro.

## 1. Estrutura do projeto

Mantenha os arquivos principais na mesma pasta:

```text
cnh-quest/
├── index.html       # Estrutura da tela: títulos, botões, cartões e áreas do jogo
├── styles.css       # Aparência: cores, tamanhos, espaçamentos e adaptação para celular
├── app.js           # Funcionamento: sorteio, cronômetro, respostas, nota e diagnóstico
├── questions.js     # Conteúdo: áreas e banco de perguntas
├── README.md        # Este guia
└── .gitignore       # Arquivos temporários que não devem ir para o GitHub
```

**Por que está tudo na mesma pasta?** Por enquanto, o projeto é pequeno. Essa organização evita criar pastas e conceitos antes de serem necessários. Quando o código crescer, podemos separar em `src/`, `data/` e `assets/`.

## 2. O que cada arquivo faz

### `index.html` — o que aparece na tela

Contém as três telas do jogo:

1. Início: apresenta as regras e o botão para começar.
2. Simulado: mostra a pergunta, as alternativas, o cronômetro e a navegação.
3. Resultado: mostra a nota, o diagnóstico por área e a revisão das respostas.

O HTML define os elementos. Ele não decide qual pergunta será sorteada nem calcula a nota.

### `styles.css` — como o jogo aparece

Controla cores, fontes, tamanhos, cartões, botões e adaptação para telas menores. Alterar esse arquivo muda o visual sem precisar mexer nas regras do simulado.

### `questions.js` — de onde vêm as perguntas

É o arquivo que você mais vai editar quando quiser aumentar o banco. Ele contém:

- `AREAS`: nomes das quatro áreas usadas no diagnóstico.
- `QUESTIONS`: lista de perguntas, alternativas, gabarito e comentário.

Exemplo de uma questão:

```js
{
  id: "Q049",
  area: "sinalizacao",
  topic: "Placas de regulamentação",
  prompt: "Qual é a finalidade desta sinalização?",
  options: [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D"
  ],
  answer: 2,
  explanation: "Comentário explicando por que a alternativa C é correta."
}
```

Atenção: `answer: 2` significa a terceira alternativa, porque o JavaScript começa a contar posições a partir do zero: `0` é A, `1` é B, `2` é C e `3` é D.

Os valores possíveis para `area` são:

- `sinalizacao`
- `infracoes`
- `direcao`
- `socorros`

Cada `id` deve ser único. Toda pergunta deve ter exatamente quatro alternativas e uma resposta correta.

### `app.js` — as regras do jogo

É o arquivo que faz o simulado funcionar. As principais etapas são:

1. **Montar a prova:** escolhe 30 perguntas do banco, distribuídas entre as quatro áreas.
2. **Embaralhar:** muda a ordem das perguntas e das alternativas.
3. **Aplicar respostas:** guarda a alternativa escolhida pelo jogador.
4. **Controlar o tempo:** inicia em 60 minutos e encerra quando chega a zero.
5. **Corrigir:** compara as respostas do jogador com o gabarito.
6. **Diagnosticar:** calcula o percentual de acertos em cada área e destaca o melhor resultado e a prioridade de estudo.
7. **Revisar:** apresenta a resposta marcada, o gabarito e o comentário.

## 3. Regras atualmente configuradas

- 30 perguntas por simulado.
- 4 alternativas por pergunta.
- 1 alternativa correta.
- 60 minutos no cronômetro.
- 20 acertos como nota mínima do simulado.
- Banco inicial com 48 perguntas autorais: 12 em cada área.
- A quantidade sorteada por área fica em 7 ou 8, totalizando 30.

A distribuição de perguntas por área é uma escolha didática deste protótipo. Ela não deve ser interpretada como uma distribuição oficial da prova.

O diagnóstico reflete apenas as perguntas sorteadas naquela tentativa. Com poucas perguntas por assunto, ele é uma indicação de estudo, não uma avaliação definitiva do conhecimento.

## 4. Como abrir no computador

1. Extraia o projeto para uma pasta.
2. Abra essa pasta no VS Code ou no Antigravity.
3. Abra o terminal integrado do editor.
4. Execute:

```bash
python -m http.server 5500
```

5. Abra no navegador: <http://localhost:5500>

Também pode usar a extensão Live Server no VS Code e clicar em **Go Live**. Como o projeto usa módulos JavaScript, abrir por um servidor local é a forma mais confiável.

## 5. Como adicionar perguntas

1. Abra `questions.js`.
2. Localize a lista `QUESTIONS`.
3. Copie uma questão existente.
4. Troque o `id`, a área, o assunto, o enunciado, as quatro alternativas, o índice do gabarito e o comentário.
5. Salve e atualize o navegador.

Antes de adicionar muitas perguntas, confira se o gabarito está certo e se o comentário explica a regra. Prefira perguntas claras, com apenas uma alternativa inequivocamente correta.

## 6. Como enviar para o GitHub

### Primeiro envio

1. Crie uma conta no GitHub, caso ainda não tenha.
2. No site do GitHub, crie um repositório novo chamado `cnh-quest`.
3. Para facilitar, crie o repositório vazio: não marque as opções para adicionar README, `.gitignore` ou licença, pois esses arquivos já estão no projeto.
4. Abra o terminal do VS Code dentro da pasta do projeto.
5. Execute os comandos abaixo, substituindo `SEU-USUARIO` pelo seu nome de usuário do GitHub:

```bash
git init
git add .
git commit -m "Primeira versão do CNH Quest"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cnh-quest.git
git push -u origin main
```

Se o Git pedir identificação, configure seu nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "SEU-EMAIL"
```

Use um e-mail associado à sua conta GitHub ou o endereço privado fornecido pelo GitHub.

### Enviar alterações futuras

Depois de editar arquivos e testar o projeto, execute:

```bash
git add .
git commit -m "Descreva o que foi alterado"
git push
```

Em termos simples:

- `git add .`: prepara as alterações.
- `git commit`: registra uma versão do projeto no computador.
- `git push`: envia essa versão para o GitHub.

## 7. Publicar o jogo com GitHub Pages

Depois de enviar o projeto ao GitHub:

1. Abra o repositório no GitHub.
2. Entre em **Settings**.
3. Abra **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Clique em **Save**.

O GitHub Pages publicará o `index.html` que está na raiz do repositório. O endereço do site aparecerá na própria seção Pages. A publicação pode levar alguns minutos.

Atenção: um site no GitHub Pages é público na internet. Não coloque senhas, tokens, documentos pessoais ou dados privados no repositório.

## 8. O que ainda não faz parte desta versão

- Login e cadastro de usuários.
- Salvamento de histórico entre visitas.
- Ranking, moedas, níveis ou bonificações.
- Painel administrativo para cadastrar perguntas.
- Integração com banco de questões oficial.

A ideia é validar primeiro o funcionamento do simulado e a qualidade do diagnóstico. Depois podemos adicionar recursos sem complicar a base.

## 9. Fontes e observação sobre o conteúdo

As questões incluídas são autorais e servem para treinamento. Não são cópias garantidas do Banco Nacional de Questões e não devem ser apresentadas como questões oficiais.

Antes de usar o sistema como material definitivo, confira sempre a legislação e os materiais didáticos oficiais vigentes.
