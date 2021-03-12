import Converter from './modules/converter.js'
import {getRate} from './service/service.js'

window.addEventListener('DOMContentLoaded', function() {


         const conv = new Converter('.inputs','#send', '#receive', '#mid');
         getRate()
                  .then(data => {
                           console.log(data);
                           const {code,rates: [{mid}]} = data;
                           conv.rateCalculator(code, mid);
                           //add mid to footer
                           conv.footerPLN.textContent = `${mid} PLN`
                  })
                  .catch(err => console.log(err))

});
