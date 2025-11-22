const form = document.getElementById('form');
const descInput = document.getElementById('desc');
const valorInput = document.getElementById('valor');
const tipoInput = document.getElementById('tipo');
const lista = document.getElementById('lista');
const saldoE1 = document.getElementById('saldo');

//let transacoes = [] //vai guardar nossos objetos

let transacoes = JSON.parse (localStorage.getItem("transacoes")) || [];

document.addEventListener("DOMContentLoaded",() => {
   
    transacoes.forEach(t => adicionarNaLista(t));
    atualizarSaldo ();
        
    });

    form.addEventListener ("submit",(e) => {
        e.preventDefault()

    const desc = descInput.ariaValueMax.trim ();
    const valor = Number(valorInput.value)
    const tipo = tipoInput.value;

    if (desc === "" || isNaN ("valor") || valor <= 0) return;

    const transacao = {
        id : Data.Now (),
        desc,
        valor,
        tipo  
    };

    transacoes.push (transacoes),
    salvarLocal ();
    adicionarNaLista (transacoes);
    atualizarSaldo()
    
    descInput = "";
    valorInput = "";
    tipoInput = "entrada";
});

