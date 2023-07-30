const adicionavel = document.querySelectorAll(".adicionavel")
const visor = document.querySelector("#visor")
const cut = document.querySelector("#cut")
const igual = document.querySelector("#igual")
const apagar = document.querySelector("#apagar")
const onoff = document.querySelector("#onoff")
const botoes = document.querySelectorAll(".botao")
const negativo = document.querySelector("#negativo")

let ligado = true

console.log(onoff)

function adicionarNoVisor(evento){
 if (ligado === true) {}
	if (visor.innerHTML==='0') {
		visor.innerHTML=""
	}
    visor.innerHTML=visor.innerHTML+evento.target.innerHTML
}

for (let i = 0; i < adicionavel.length; i++) {
	adicionavel[i].addEventListener("click", adicionarNoVisor)
}

function cut_visor(){
	visor.innerHTML = "0"
}

function calcular(){
    const saida = eval(visor.innerHTML)
    visor.innerHTML = saida
}

function apagar_digito(){
	const numero_novo = visor.innerHTML.slice(0, -1)
	if (numero_novo.length===0) {
		visor.innerHTML="0"
	}else{
		visor.innerHTML = numero_novo
	}

}

function acionamento(){ 
	if (onoff.innerHTML === "ON") {
		onoff.innerHTML = "OFF"
		ligado = false
		visor.innerHTML = ""
		onoff.classList.add("desligado")
		visor.classList.add("desligado")

		for(let i = 0; i<botoes.length; i++){
			botoes[i].classList.add("desligado")
		}
	}else{
		onoff.innerHTML = "ON"
		ligado = true;
		visor.innerHTML = "0"
		onoff.classList.remove("desligado")
		visor.classList.remove("desligado")

		for(let i = 0; i<botoes.length; i++){
			botoes[i].classList.remove("desligado")
		}
	}
}

apagar.addEventListener("click", apagar_digito)
igual.addEventListener("click", calcular)
cut.addEventListener("click", cut_visor)
onoff.addEventListener("click", acionamento)
negativo.addEventListener("click", acionamento)
negativo.addEventListener("click", transformar_negativo)

