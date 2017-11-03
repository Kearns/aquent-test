import {expect} from 'code';
import { filterList, sortList } from '../src/filter'

describe('filterList', () => {
    it('should return an array containing only the matching element', () => {
        let results = filterList('this', ['this','that'])
        expect(results).to.equal(['this']);
    });
});

describe('sortList', () => {
    it('should return an array in reverse alphabetical order', () => {
        let results = sortList(['b','a','d','c'])
        expect(results).to.equal(['d','c','b','a']);
    });
});


