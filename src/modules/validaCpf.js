export default class Cpf {
    constructor(cpfLimpo) {
        this.cpfLimpo = cpfLimpo.replace(/\D+/g, '')
    }
    static validar() { //main
        if (!this.cpfLimpo) return false
        if (this.cpfLimpo.length != 11) return false
        if(this.sequencia()) return false   
        if (typeof this.cpfLimpo != 'string') return false
        
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)

        const digito1 = this.digito(cpfSemDigito)
        const digito2 = this.digito(cpfSemDigito.concat(digito1))

        const cpfFinal = cpfSemDigito.concat(digito1, digito2)
     
        return cpfFinal === this.cpfLimpo
    }

    sequencia(){
        const cpfSequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return cpfSequencia == this.cpfLimpo 
        
    }
    
    static digito(cpf){
        //logica
        const logica = [...cpf].map((e, x) => e * ((cpf.length + 1) - x)).reduce((acum, val) => acum += val)
        const digito =  11 - (logica % 11)
        //retorna
        return digito > 9 ? 0 : digito
    }

}

