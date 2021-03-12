const url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp';
const getRate = async () =>{
         const res = await fetch(url);
         if (!res.ok){
             throw new Error(`Could not fetch: ${url}, status: ${res.status}`)
         }
         return await res.json();
}

export {getRate}