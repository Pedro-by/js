var trCliente = document.querySelector(".cliente");


var clientes = document.querySelectorAll(".cliente");

for(var i=0; i<5;i++){

    var trCliente = clientes[i];

    var tdPeso = trCliente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = trCliente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);


    var tdImc= trCliente.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2);
}