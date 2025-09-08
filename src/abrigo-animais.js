class AbrigoAnimais {
  constructor(){
    this.animais = {
      'Rex': {tipo: 'cão', brinquedos: ['RATO', 'BOLA']},
      'Mimi': {tipo: 'gato', brinquedos: ['BOLA', 'LASER']},
      'Fofo': {tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER']},
      'Zero': {tipo: 'gato', brinquedos: ['RATO', 'BOLA']},
      'Bola': {tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO']},
      'Bebe': {tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA']},
      'Loco': {tipo: 'jabuti', brinquedos: ['SKATE', 'RATO']}
    };

    this.brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];
  }

  encontraPessoas(brinquedos1Str, brinquedos2Str, animaisStr){
    const animaisList = animaisStr.split(',');
    const brinquedos1 = brinquedos1Str.split(',');
    const brinquedos2 = brinquedos2Str.split(',');

    const animaisVistos = new Set();
    for(const animal of animaisList){
      if(!this.animais[animal] || animaisVistos.has(animal)){
        return {lista: null, erro: 'Animal inválido'};
      }

      animaisVistos.add(animal);
    }

    if(this.temBrinquedoInvalido(brinquedos1) || this.temBrinquedoInvalido(brinquedos2)){
      return {lista: null, erro: 'Brinquedo inválido'};
    }

    const resultado = [];
    const adotadosP1 = [];
    const adotadosP2 = [];

    for(const animal of animaisList){
      const info = this.animais[animal];
      const podeP1 = this.pessoaPodeAdotar(animal, info, brinquedos1, adotadosP1);
      const podeP2 = this.pessoaPodeAdotar(animal, info, brinquedos2, adotadosP2);

      if(podeP1 && podeP2){
        resultado.push(`${animal} - abrigo`);
      } else if(podeP1){
        resultado.push(`${animal} - pessoa 1`);
        adotadosP1.push(animal);
      } else if(podeP2){
        resultado.push(`${animal} - pessoa 2`);
        adotadosP2.push(animal);
      } else{
        resultado.push(`${animal} - abrigo`);
      }
    }

    resultado.sort();
    return {lista: resultado, erro: null};
  }


  temBrinquedoInvalido(brinquedos){
    const vistos = new Set();
    for(const brinquedo of brinquedos){
      if(!this.brinquedosValidos.includes(brinquedo) || vistos.has(brinquedo)){
        return true;
      }
      vistos.add(brinquedo);
    }
    return false;
  }

  pessoaPodeAdotar(animal, info, brinquedosPessoa, adotados){
    if(adotados.length >= 3) return false;

    if(animal === 'Loco'){
      const temSkate = brinquedosPessoa.includes('SKATE');
      const temRato = brinquedosPessoa.includes('RATO');

      return temSkate && temRato && adotados.length > 0;
    }
    return this.sequenciaNaOrdem(info.brinquedos, brinquedosPessoa);

  }

  sequenciaNaOrdem(necessarios, disponiveis){
    let index = 0;
    for(const brinquedo of disponiveis){
      if(index < necessarios.length && brinquedo === necessarios[index]){
        index++;
      }
    }

    return index === necessarios.length;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
