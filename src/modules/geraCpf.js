import ValidaCPF from './validaCpf'

export default class GeraCpf {
  

    rand(min = 100000000, max = 999999999){
       return String(Math.floor(Math.random() * (max - min) + min))
    }
    
    formatado(cpf){
        return(
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' + 
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    newCPf(){
        const cpfSemDigito = this.rand()

        const digito1 = ValidaCPF.digito(cpfSemDigito)
        const digito2 = ValidaCPF.digito(cpfSemDigito + digito1)
        
        const novoCpf = cpfSemDigito + digito1 + digito2
        return this.formatado(novoCpf)
    }
}
