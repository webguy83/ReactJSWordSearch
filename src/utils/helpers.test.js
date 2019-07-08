import { getLetterMatchCount } from './helpers';

describe('get letter match count', () => {
    const secretWord = 'unclebob'
    it('when there are no matching letters return the correct count', () => {
        const letterMatchCount = getLetterMatchCount("jak", secretWord);
        expect(letterMatchCount).toBe(0);
    })
    it('returns the correct count when there are 4 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bunc', secretWord);
        expect(letterMatchCount).toBe(4);
    })
    it('return the count when there are duplicated letters', () => {
        const letterMatchCount = getLetterMatchCount("bobbbbbbbbbb", secretWord);
        expect(letterMatchCount).toBe(2);
    })
})