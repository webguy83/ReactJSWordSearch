import React from 'react';
import App, { UncontrolledApp } from './App';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import NewWordBtn from './components/NewWord/NewWord';
import { storeFactory } from './utils/testingFunctions';


import { shallow } from 'enzyme';

const setup = (initState = {}) => {
  const store = storeFactory(initState);
  return shallow(<App store={store} />).dive().dive();
}

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  })

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders with an input component', () => {
    expect(wrapper.find(InputSearch).length).toBe(1);
  });

  it('renders a guessed words component', () => {
    expect(wrapper.find(GuessedWords).length).toBe(1);
  })

  it('renders with a New Word component', () => {
    expect(wrapper.find(NewWordBtn).length).toBe(1);
  })

})

describe('redux props', () => {
  it('has a success piece of state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('has a guessedWords piece of state', () => {
    const guessedWords = [{
      guessedWord: "goob",
      letterMatchCount: 4
    }, {
      guessedWord: "bob",
      letterMatchCount: 1
    }, {
      guessedWord: "booger",
      letterMatchCount: 6
    }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  it('has access to secretWords state', () => {
    const word = 'bunk';
    const wrapper = setup({ secretWord: word });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(word);
  });
  it('should have access to guessCount state', () => {
    const guessCount = [1, 2];
    const wrapper = setup({ guessCount });
    const guessCountProp = wrapper.instance().props.guessCount;
    expect(guessCountProp).toBe(guessCount);
  });

  it('should have getSecretWord action creator as function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})

it('should run getSecretWord on mount', () => {
  const getSecretWordMock = jest.fn();

  const wrapper = shallow(<UncontrolledApp getSecretWord={getSecretWordMock} success={true} guessedWords={[]} guessCount={[1, 2]} />);
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
})

describe('after clicking New Word button it should perform the following', () => {
  it('run resetSuccess function on button click', () => {
    const resetSuccessMock = jest.fn();
    const getSecretWordMock = jest.fn();

    const wrapper = shallow(<UncontrolledApp resetSuccess={resetSuccessMock} 
                                            getSecretWord={getSecretWordMock} 
                                            success={true} guessedWords={[]} 
                                            guessCount={[1, 2]} />);
    wrapper.instance().newWordBtnClick();

    expect(resetSuccessMock.mock.calls.length).toBe(1);
  })
})

