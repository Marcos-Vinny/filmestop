# Catálogo de Filmes — Perguntas e Respostas da Aula

## 1. Pesquisa de bibliotecas

**1. Quais bibliotecas o grupo escolheu para cada uma dessas três necessidades?**
Navegação: `@react-navigation/native` com `@react-navigation/native-stack`. Consumo de API: `axios`. Ícones: `@expo/vector-icons`.

**2. Por que escolheram cada uma delas, em vez de outras opções encontradas na pesquisa?**
O React Navigation é a biblioteca de navegação padrão do ecossistema React Native/Expo, com documentação oficial extensa e integração nativa com o Expo. O Axios foi escolhido em vez do `fetch` nativo por oferecer sintaxe mais simples, interceptadores de requisição/resposta, tratamento de erros mais direto e configuração centralizada de baseURL e parâmetros. O `@expo/vector-icons` foi escolhido por já vir embutido no Expo, sem necessidade de configuração nativa adicional, e por reunir vários pacotes de ícones (Ionicons, FontAwesome, MaterialIcons etc.) em um só lugar.

**3. Alguma dessas bibliotecas precisa ser instalada com `npx expo install` em vez de `npm install`? Por quê?**
Sim, as bibliotecas de navegação (`@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`, `react-native-safe-area-context`) devem ser instaladas com `npx expo install`, pois esse comando garante que sejam baixadas versões compatíveis com a versão do SDK do Expo usada no projeto, evitando conflitos de dependência nativa. O Axios pode ser instalado normalmente com `npm install` por ser uma biblioteca puramente JavaScript, sem código nativo.

**4. Essas bibliotecas são bem mantidas e documentadas? Como o grupo verificou isso?**
Sim. O grupo verificou isso observando: frequência de commits e releases recentes no GitHub, número de estrelas e downloads semanais no npm, existência de documentação oficial completa (reactnavigation.org, axios-http.com, docs do Expo) e ausência de issues críticas em aberto há muito tempo sem resposta.

**5. Existe alguma limitação ou ponto de atenção já identificado sobre alguma delas?**
O React Navigation exige a instalação de dependências nativas adicionais (`react-native-screens`, `react-native-safe-area-context`), o que pode gerar conflitos de versão se não forem instaladas via `expo install`. O Axios adiciona um pequeno overhead de bundle comparado ao `fetch` nativo, mas o ganho em produtividade compensa para o escopo do projeto.

## 2. Arquitetura do projeto

**6. Quais telas o app vai ter e o que cada uma exibe?**
- **HomeScreen**: lista de filmes populares, exibindo pôster e título de cada um em formato de grade.
- **DetailsScreen**: informações completas do filme selecionado — pôster, título, sinopse, nota média e data de lançamento.

**7. Como os dados vão fluir entre a tela de listagem e a tela de detalhes?**
A HomeScreen busca a lista de filmes na API e renderiza os cards. Ao tocar em um filme, apenas o `id` do filme é enviado como parâmetro de navegação (`navigation.navigate('Details', { id })`) para a DetailsScreen, que usa esse `id` para fazer uma nova requisição à API e obter os dados completos daquele filme.

**8. Por que separar o código em `screens/`, `components/` e `services/` em vez de deixar tudo em um único arquivo?**
Essa separação facilita a manutenção e a leitura do código, permite que membros do grupo trabalhem em partes diferentes do projeto sem conflitos constantes, favorece o reaproveitamento de componentes e isola responsabilidades: telas cuidam da apresentação, componentes cuidam de pedaços de UI reutilizáveis e services cuidam da comunicação externa (API).

**9. Quais componentes reutilizáveis o grupo já consegue identificar que vai precisar?**
`MovieCard` (card com pôster e título usado na listagem), `Loading` (indicador de carregamento usado em ambas as telas) e, futuramente, um componente de `Rating` (exibição de nota em estrelas) e um `Header`/`SearchBar` caso seja adicionada busca.

**10. Onde ficará centralizada a lógica de comunicação com a API? Por que isso é uma boa prática?**
Em `services/api.js`. Centralizar essa lógica evita duplicação de código de requisição em várias telas, facilita a troca de provedor de dados ou de endpoint no futuro (bastando alterar um único arquivo) e simplifica testes e tratamento de erros de forma consistente em todo o app.

## 3. Setup do projeto

**11. O projeto rodou sem erros após a instalação das bibliotecas? Se não, o que precisou ser ajustado?**
Sim, o projeto rodou sem erros após seguir a recomendação de instalar as dependências nativas de navegação com `npx expo install` em vez de `npm install`, garantindo compatibilidade com o SDK do Expo utilizado.

**12. Alguma biblioteca gerou conflito de versão com o SDK do Expo? Como o grupo resolveu (ou pretende resolver)?**
Não houve conflito, pois todas as dependências com código nativo foram instaladas com `npx expo install`, que já resolve automaticamente a versão compatível com o SDK do projeto. Caso surja algum conflito futuro, a estratégia é rodar `npx expo install --check` para identificar e corrigir versões incompatíveis.

## 4. README.md

**13. Por que documentar as decisões do projeto (bibliotecas, arquitetura) desde o início é importante para o grupo?**
Documentar desde o início evita retrabalho e discussões repetidas sobre decisões já tomadas, mantém todos os integrantes alinhados sobre o que foi definido e por quê, e serve como registro histórico caso alguma decisão precise ser revista mais adiante no projeto.

**14. Se outra pessoa entrasse no projeto agora, o README atual seria suficiente para ela entender o que foi decidido? Por quê?**
Sim, o README atual seria suficiente para uma primeira compreensão, pois lista as bibliotecas escolhidas com seus motivos de uso, mostra a estrutura de pastas, explica o papel de cada tela e o fluxo de dados entre elas, e traz o comando para rodar o projeto localmente.

## 5. Primeiro commit

**15. O que esse primeiro commit representa dentro do desenvolvimento do projeto?**
Representa o marco inicial do versionamento do projeto: a base estrutural (pastas, README e configuração inicial) a partir da qual todo o desenvolvimento seguinte será construído e rastreado.

**16. Por que é importante começar o versionamento desde já, e não só quando o app estiver "pronto"?**
Porque o versionamento desde o início permite acompanhar a evolução do projeto passo a passo, facilita reverter mudanças problemáticas, possibilita trabalho colaborativo simultâneo entre os integrantes do grupo por meio de branches, e evita a perda de trabalho em caso de falhas.

**17. Quais arquivos ou pastas vocês decidiram (ou vão decidir) manter fora do controle de versão, e por quê?**
`node_modules/` (gerado automaticamente pela instalação das dependências e pode ser recriado com `npm install`), `.expo/` (arquivos de cache/configuração local do Expo), `dist/` e `web-build/` (saídas de build), arquivos `.log` e `.env` (contêm dados de ambiente e chaves sensíveis, como a chave da API, que não devem ser expostas no repositório) e `.DS_Store` (arquivo de sistema do macOS). Esses itens já estão listados no `.gitignore` do projeto.
