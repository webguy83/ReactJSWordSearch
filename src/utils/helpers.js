export const getLetterMatchCount = (guessedWord, secretWord) => {
    const guessLetters = new Set(guessedWord.split(""));
    const secretLetters = new Set(secretWord.split(""));
    return [...secretLetters].filter(letter => guessLetters.has(letter)).length;
}