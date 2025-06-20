import GeraCPF from './modules/geraCpf'
import './assets/css/style.css'

(function(){
    const divResult = document.querySelector('.resultado')
    const gerar = new GeraCPF()
    divResult.innerHTML = gerar.newCPf()
})()