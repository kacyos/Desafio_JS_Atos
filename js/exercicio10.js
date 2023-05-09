const inputCPF = document.getElementById("cpf");
const inputCNPJ = document.getElementById("cnpj");
const radioFisica = document.getElementById("fisica");
const radioJuridica = document.getElementById("juridica");
const dateOfBirth = document.getElementById("date-of-birth");
const inputCEP = document.getElementById("cep");
const inputPhone = document.getElementById("phone");

function formatarCPF(cpfDocument) {
  cpfDocument = cpfDocument.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  cpfDocument = cpfDocument.replace(/(\d{3})(\d)/, "$1.$2"); // Insere um ponto após os primeiros 3 dígitos
  cpfDocument = cpfDocument.replace(/(\d{3})(\d)/, "$1.$2"); // Insere um ponto após os próximos 3 dígitos
  cpfDocument = cpfDocument.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere um hífen antes dos últimos 2 dígitos
  return cpfDocument;
}

function formatarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2"); // Insere ponto após os primeiros 2 dígitos
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); // Insere ponto após os próximos 3 dígitos
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2"); // Insere barra antes dos próximos 3 dígitos
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2"); // Insere hífen antes dos últimos 2 dígitos
  return cnpj;
}

function formatarCEP(cep) {
  cep = cep.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  cep = cep.replace(/(\d{5})(\d{3})$/, "$1-$2"); // Insere um hífen antes dos últimos 3 dígitos
  return cep;
}

function formatarTelefone(numero) {
  numero = numero.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

  if (numero.length === 11) {
    numero = numero.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"); // Formata o número de celular
  } else {
    numero = numero.replace(/(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3"); // Formata o número de telefone fixo
  }

  return numero;
}

inputCPF.addEventListener("keyup", (event) => {
  inputCPF.value = formatarCPF(event.target.value);
});

inputCNPJ.addEventListener("keyup", (event) => {
  inputCNPJ.value = formatarCNPJ(event.target.value);
});

radioFisica.addEventListener("change", () => {
  inputCPF.disabled = false;
  inputCNPJ.disabled = true;
  inputCNPJ.value = "";
  dateOfBirth.disabled = false;
  inputCPF.focus();
});

radioJuridica.addEventListener("change", () => {
  inputCPF.disabled = true;
  inputCNPJ.disabled = false;
  dateOfBirth.disabled = true;
  inputCPF.value = "";
  inputCNPJ.focus();
});

inputCEP.addEventListener("keyup", (event) => {
  inputCEP.value = formatarCEP(event.target.value);
});

inputPhone.addEventListener("keyup", (event) => {
  inputPhone.value = formatarTelefone(event.target.value);
});
