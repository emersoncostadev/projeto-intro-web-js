const cursos = [
  {
    curso: "HTML e CSS",
    descriçao: "",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "Java Script",
    descriçao: "",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descriçao: "",
    duracao: "6 meses",
    valor: 2000,
  },
];
const turmas = [
  {
    turma: "Hiptia",
    curso: "Java Script",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numeroDeAlunos: 150,
    periodo: "Noturno",
    concluido: false,
  },
  {
    turma: "Sibyla",
    curso: "Java Script",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroDeAlunos: 200,
    periodo: "Integral",
    concluido: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroDeAlunos: 180,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroDeAlunos: 80,
    periodo: "Integral",
    concluido: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroDeAlunos: 100,
    periodo: "Integral",
    concluido: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "Integral",
    concluido: false,
  },
];
const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "Java Script",
    valor: "900 reais",
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000 reais",
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500 reais",
    nParcelas: 0,
    desconto: true,
    parcelas: 0,
  },
];

const buscarCurso = (nomeCurso) => {
  for (cadaCurso of cursos) {
    if (cadaCurso.curso === nomeCurso) {
      return cadaCurso;
    }
  }
};
const buscarTurma = (nomeTurma) => {
  for (cadaTurma of turmas) {
    if (cadaTurma.curso === nomeTurma) {
      return cadaTurma;
    }
  }
};
const buscarEstudante = (nomeEstudante) => {
  for (cadaEstudante of estudante) {
    if (cadaEstudante.estudante === nomeEstudante) {
      return cadaEstudante;
    }
  }
};
//duvida
//pq valorPorParcela não recebe os valores definidos no if else quando add no objeto novo aluno ?
const matricular = (nome, curso, turma, numParcelas) => {
  let valorCurso = buscarCurso(curso);
  let valorTotal = 0;
  let valorPorParcela = 0;
  let desconto = false;
  //console.log(resultadoCurso)

  if (numParcelas > 0 && numParcelas <= 2) {
    desconto = true;
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorPorParcela = valorTotal / numParcelas;
    console.log(valorTotal);
  } else {
    valorTotal = valorCurso.valor;
    valorPorParcela = valorTotal / numParcelas;
    console.log(valorTotal);
  }
  const novoAluno = {
    estudante: nome,
    turma: turma,
    curso: curso,
    valor: valorCurso.valor,
    nParcelas: numParcelas,
    desconto: desconto,
    valorParcelas: valorPorParcela,
  };
  estudantes.push(novoAluno);
  console.log(estudantes);
  //console.log(novoAluno)
  console.log(
    `Aluno Matriculado \n Nome: ${nome} \n Curso:${curso} \n Turma: ${turma}`
  );
};

/* const carrinhoCursos = [500, 600, 800];
var parcelarCurso = (numeroParcelas, carrinhoCursos) => {
  descontoQtdCursos = 0;
  descontoPgm = 0;
  valorParcela = 0;
  valorTotal = 0;
  precoFinal = 0;
  if (carrinhoCursos.length === 3 && numeroParcelas <= 2) {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    descontoQtdCursos = valorTotal * 0.15;
    descontoPgm = valorTotal * 0.2;
    precoFinal = valorTotal - (descontoQtdCursos + descontoPgm);
    valorParcela = precoFinal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nDescontos aplicados:\n* Na compra de 3 cursos: 15% de desconto\n* Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto\nValor com os descontos:\nR$${precoFinal} Em ${numeroParcelas}x de R$${valorParcela}`;
  } else if (carrinhoCursos.length === 2 && numeroParcelas <= 2) {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    descontoQtdCursos = valorTotal * 0.1;
    descontoPgm = valorTotal * 0.2;
    precoFinal = valorTotal - (descontoQtdCursos + descontoPgm);
    valorParcela = precoFinal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nDescontos aplicados:\n* Na compra de 2 cursos: 10% de desconto\n* Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto\nValor com os descontos:\nR$${precoFinal} Em ${numeroParcelas}x de R$${valorParcela}`;
  } else if (carrinhoCursos.length === 1 && numeroParcelas <= 2) {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    descontoPgm = valorTotal * 0.2;
    precoFinal = valorTotal - descontoPgm;
    valorParcela = precoFinal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nDescontos aplicados:\n* Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto\nValor com desconto:\nR$${precoFinal} Em ${numeroParcelas}x de R$${valorParcela}`;
  } else if (carrinhoCursos.length === 3 && numeroParcelas > 2) {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    descontoQtdCursos = valorTotal * 0.15;
    precoFinal = valorTotal - descontoQtdCursos;
    valorParcela = precoFinal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nDescontos aplicados:\n* Na compra de 3 cursos: 15% de desconto\nValor com desconto:\nR$${precoFinal} Em ${numeroParcelas}x de R$${valorParcela}`;
  } else if (carrinhoCursos.length === 2 && numeroParcelas > 2) {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    descontoQtdCursos = valorTotal * 0.1;
    precoFinal = valorTotal - descontoQtdCursos;
    valorParcela = precoFinal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nDescontos aplicados:\n* Na compra de 2 cursos: 10% de desconto\nValor com desconto:\nR$${precoFinal} Em ${numeroParcelas}x de R$${valorParcela}`;
  } else {
    valorTotal = carrinhoCursos.reduce((total, item) => total + item, 0);
    valorParcela = valorTotal / numeroParcelas;
    return `O valor total é R$${valorTotal}\nSem descontos aplicados:\nR$${valorTotal} Em ${numeroParcelas}x de R$${valorParcela}`;
  }
};

console.log(parcelarCurso(2, carrinhoCursos));
console.log("valor total", valorTotal);
console.log("desconto qtd de cursos", descontoQtdCursos);
console.log("desconto pagamento", descontoPgm); */

/* ter uma função só para calcular os descontos, essa função receberia a 
quatidade cursos e a forma de pagamentos */

/* const calculoDescotoQtdCursos = (qtdCursos) => {
  if (qtdCursos >= 3) {
    return 0.15;
  }
  if (qtdCursos === 2) {
    return 0.1;
  }
  return 0;
};
const descontoFormaPgto = (formaPgto) => {
  if (formaPgto === "2x" || formaPgto === "avista") {
    return 0.2;
  }
  return 0;
};
const calcDiscont = (qtdCursos, formaPgm) => {
  return calculoDescotoQtdCursos(qtdCursos) + descontoFormaPgto(formaPgm);
};

const totalBruto = (carrinho) => {
  return carrinho.reduce((prev, curr) => prev + curr);
};
//a função calcLiquido ela ja faz todos os calculos dinamicamente de acordo com
//os parametros, e as funções acima ja estao com suas responsabilidades separadas

const calcLiquido = (carrinho, formaPgto) => {
  const qtdCursos = carrinho.length;
  const resultadoTotalBruto = totalBruto(carrinho);
  const resultadoPorcentagemDesconto = calcDiscont(qtdCursos, formaPgto);
  const resultadoCalculoDesconto =
    resultadoTotalBruto * resultadoPorcentagemDesconto;

  return resultadoTotalBruto - resultadoCalculoDesconto;
}; */

const carrinhoCursos = [500, 900, 100];
/* const pagamento = "avista";
console.log(calcLiquido(carrinhoCursos, pagamento)) */ const calcularDescQtdCursos =
  (qtdCursos) => {
    if (qtdCursos >= 3) {
      return 0.15;
    }
    if (qtdCursos === 2) {
      return 0.1;
    }
    return 0;
  };

const calcularDescPgmt = (formaPgmt) => {
  if (formaPgmt === "2x" || formaPgmt === "avista") {
    return 0.2;
  }
  return 0;
};

const calculoDescontoTotal = (qtdCursos, formaPgmt) => {
  return calcularDescQtdCursos(qtdCursos) + calcularDescPgmt(formaPgmt);
};

const totalBruto = (carrinho) => {
  return carrinho.reduce((total, valor) => total + valor);
};
//console.log(totalBruto1(carrinhoCursos))

const calculoLiquido = (carrinho, formaPgmt) => {
  const qtdCursos = carrinho.length;
  const resultadoTotalBruto = totalBruto(carrinho);
  const resultadoPorcentagemDesconto = calculoDescontoTotal(
    qtdCursos,
    formaPgmt
  );
  const resultadoCalculoDesconto =
    resultadoTotalBruto * resultadoPorcentagemDesconto;
  const valorComDesconto = resultadoTotalBruto - resultadoCalculoDesconto;
  const valorParcela = (formaPgmt)=>{
    if(formaPgmt === "2x"){
      return valorComDesconto / 2
    }if(formaPgmt === "3x"){
      return valorComDesconto / 3
    }if(formaPgmt === "avista"){
      return valorComDesconto
    }
  }

  return {
    qtdCursos,
    resultadoTotalBruto,
    resultadoPorcentagemDesconto,
    resultadoCalculoDesconto,
    valorComDesconto,
    valorParcela:valorParcela(formaPgmt)
  };
};
const imprimir = (carrinho, formaPgmt) => {
  const {
    qtdCursos,
    resultadoTotalBruto,
    resultadoPorcentagemDesconto,
    resultadoCalculoDesconto,
    valorComDesconto,
    valorParcela
  } = calculoLiquido(carrinho, formaPgmt);
  console.log(
    `O valor do pagamento é de R$${valorComDesconto} com ${resultadoPorcentagemDesconto} de desconto, parcelado em ${formaPgmt} de R$${valorParcela}`
  );
};
const pagamento = "2x";
imprimir(carrinhoCursos, pagamento);

