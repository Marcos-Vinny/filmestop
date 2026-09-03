# Catálogo de Filmes

Aplicativo mobile desenvolvido em React Native (Expo) que exibe uma lista de filmes com pôster e título, permitindo tocar em um item para ver seus detalhes completos.

## Integrantes do grupo

- Nome 1
- Nome 2
- Nome 3

## Bibliotecas utilizadas

| Necessidade         | Biblioteca                                   | Instalação                                                              |
|----------------------|-----------------------------------------------|---------------------------------------------------------------------------|
| Navegação entre telas | `@react-navigation/native` + `@react-navigation/native-stack` | `npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context` |
| Consumo de API        | `axios`                                        | `npm install axios`                                                        |
| Ícones                 | `@expo/vector-icons`                          | já incluso no Expo (`npx expo install @expo/vector-icons` se necessário) |

## Arquitetura do projeto

```
catalogo-filmes/
├── assets/          # imagens, fontes e ícones estáticos
├── components/       # componentes reutilizáveis (MovieCard, Loading)
├── screens/           # telas do app (HomeScreen, DetailsScreen)
├── services/          # lógica de comunicação com a API (api.js)
├── App.js             # ponto de entrada e configuração de navegação
└── app.json
```

### Telas

- **HomeScreen**: lista os filmes populares (pôster + título), buscando os dados via `services/api.js`.
- **DetailsScreen**: recebe o `id` do filme selecionado por parâmetro de rota e busca os detalhes completos (sinopse, nota, data de lançamento) na API.

### Fluxo de dados

`HomeScreen` busca a lista de filmes na API e passa o `id` do filme tocado como parâmetro de navegação para `DetailsScreen`, que faz uma nova chamada à API para obter as informações completas daquele filme.

## Como rodar o projeto

```
npm install
npx expo start
```
