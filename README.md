# ABRIGO DE ANIMAIS # desafio-co-de1-2025

## Resolução do desafio usando Javascript.


## O DESAFIO

Olá! Você foi contratado para ajudar na organização de um abrigo de animais.
Sua missão será encontrar pessoas aptas a levar os animais para casa.

### REGRAS PARA REUNIR PESSOA COM ANIMAIS

1. O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada
2. Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada
3. Gatos não dividem seus brinquedos
4. Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (tadinho)
5. Uma pessoa não pode levar mais de três animais para casa
6. Loco não se importa com a ordem dos seus brinquedos desde que tenha outro animal como companhia

### ANIMAIS

|      |        |                   |
| ---- | ------ | ----------------- |
| Rex  | cão    | RATO, BOLA        |
| Mimi | gato   | BOLA, LASER       |
| Fofo | gato   | BOLA, RATO, LASER |
| Zero | gato   | RATO, BOLA        |
| Bola | cão    | CAIXA, NOVELO     |
| Bebe | cão    | LASER, RATO, BOLA |
| Loco | jabuti | SKATE, RATO       |

### ENTRADAS E SAÍDAS

1. O programa deve receber três parâmetros de texto: os brinquedos da primeira pessoa, os da segunda pessoa e a ordem em que os animais deve ser considerados
2. Cada um desses parâmetros deve conter os itens separados por vírgula
3. O programa deve retornar uma estrutura contendo a lista em ordem alfabética dos animais e com quem ficaram ou a mensagem de erro, se houver
4. O formato de saída deve ser "nome animal - pessoa número" ou "nome animal - abrigo"
5. Caso animal seja inválido ou duplicado, apresentar erro "Animal inválido"
6. Caso brinquedo seja inválido ou duplicado, apresentar erro "Brinquedo inválido"

### O CÓDIGO

O arquivo principal está localizado dentro da pasta `src` e se chama `abrigo-animais.js`. A lógica foi desenvolvida e alguns métodos foram criados, porém o resultado deve poder ser obtido através do método `encontraPessoas`.

> **ALERTA**:
> É importante que essa estrutura básica não seja alterada, pois as etapas automáticas da validação dependem disso.

### INSTALANDO E RODANDO NA SUA MÁQUINA

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:

```bash
npm install
```

### TESTANDO A SOLUÇÃO

Junto com a estrutura básica e alguns cenários de testes no arquivo `abrigo-animais.test.js` para auxiliar na validação da solução. Para testar sua solução com os cenários existentes ou novos, rode o seguinte comando:

```bash
npm test
```

#### CÓDIGO

A solução deve ser entregue em **javascript** e a **estrutura de pastas e arquivos** deve seguir o indicado na seção `O CÓDIGO`.

O **export** da classe deve ser mantido da seguinte maneira para compatibilidade com o arquivo de testes:

```js
export { AbrigoAnimais as AbrigoAnimais };
```