var estoque = [
  {nome: 'Resma De Papel A4', preco: 19.90, qtde: 300, fragil: false},
  {nome: 'Monitor LG 29 IPS', preco: 1699, qtde: 15, fragil: true},
  {nome: 'Ovos Brancos - 30 Unid.', preco: 18.99, qtde: 21, fragil: true},
  {nome: 'Pneu Pirelli Scorpion Aro 19', preco: 1027.34, qtde: 16, fragil: false},
  {nome: 'Apple Ipad Pro 32gb - Tela 12,9', preco: 3999, qtde: 17, fragil: true}
];

const isPrecoAlto = item => item.preco >= 1000;
const isFragil = item => item.fragil;
const somatorio = (total, qtde) => total + qtde;

const qtdeProdutosCarosEFrageis = estoque
.filter(isPrecoAlto)
.filter(isFragil)
.map(item => item.qtde)
.reduce(somatorio);
console.log(qtdeProdutosCarosEFrageis);
