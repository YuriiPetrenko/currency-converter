export default class Converter{
    constructor(inputsSelector, sendInputSelector, receiveInputSelector, footerPLNSelector){
        this.inputs = document.querySelectorAll(inputsSelector);
        this.sendInput = document.querySelector(sendInputSelector);
        this.receiveInput = document.querySelector(receiveInputSelector);
        this.footerPLN = document.querySelector(footerPLNSelector);
    }
    
    countRate(value, mid){
        return +((value * mid).toFixed(2))
    }
    
    countBaseRate(value, mid){
        return +((value / mid).toFixed(2))
    }
    
    rateCalculator(code, mid){
        console.log(`${code} : ${mid}`)
        this.inputs.forEach(input => {
            input.addEventListener('input', (e)=>{
                const target = e.target;
                const value = parseFloat(target.value);
                switch(target.name){
                case 'send':
                    this.receiveInput.value = this.countRate(value, mid)
                    break;
                case 'receive':
                    this.sendInput.value = this.countBaseRate(value, mid)
                    break;
                }
            })
        })
    }
    
}