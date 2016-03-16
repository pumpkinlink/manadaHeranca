function Animal(barulho){
    this.barulho = barulho
    this.fazerBarulho = function(){
        console.log(this.barulho)
    }
}
function Cachorro(){
    Animal.call(this)
    this.barulho = 'Au'
}
function Gato(){
    Animal.call(this)
    this.barulho = 'Miau'
}
function Manada(){
    this.animais = []
    this.adicionar = function(animal){
        this.animais.push(animal)
    }
}
function ManadaVirgula(){
    Manada.call(this)
    this.barulhos = function(){
        var arrayBarulhos = this.animais.map(function(a) {return a.barulho})
        return arrayBarulhos.join(', ')
    }
}
function ManadaSustenido(){
    Manada.call(this)
    this.barulhos = function(){
        var arrayBarulhos = this.animais.map(function(a) {return [a.barulho, a.barulho].join('# ')})
        return arrayBarulhos.join('# ')
    }
}

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());
