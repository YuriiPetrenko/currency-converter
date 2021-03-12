import Converter from '../modules/converter.js'
import {getRate} from '../service/service.js'
import fetchMock from 'jest-fetch-mock'
fetchMock.enableMocks();

describe('class methods', ()=>{
    const conv = new Converter()
    test('methods countBaseRate and countRate should return number', () => {
        expect(conv.countBaseRate()).toEqual(expect.any(Number))
        expect(conv.countRate()).toEqual(expect.any(Number))
    })

    test('methods should be defined', ()=>{
        expect(conv.countBaseRate).toBeDefined()
        expect(conv.countRate).toBeDefined()
        expect(conv.rateCalculator).toBeDefined()
    });
})


describe('get data from API', () => {
    
    test('function getRate should return object from API', ()=>{
        expect(getRate()).toEqual(expect.any(Object))
    });

    test("function getRate shouldn't return Array", ()=>{
        expect(getRate()).not.toBeInstanceOf(Array)
    });
    
    test("function getRate shouldn't return null", ()=>{
        expect(getRate()).not.toEqual(null)
    });

    test('should get GBP from API', async ()=>{
        expect(fetch).toHaveBeenCalledWith(
            'http://api.nbp.pl/api/exchangerates/rates/a/gbp'
        )
    });

    test('functions should be defined', ()=>{
        expect(getRate).toBeDefined()
    });
})