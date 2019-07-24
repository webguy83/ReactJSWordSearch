import React from 'react';
import App, { UncontrolledApp } from './App';

import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';
import NewWordBtn from './components/NewWord/NewWord';
import EnterSecretWordBtn from './components/EnterSecretWord/EnterSecretWord';

import { storeFactory, elementAttr } from './utils/testingFunctions';
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

  it('renders an enterSecretWords button', () => {
    expect(wrapper.find(EnterSecretWordBtn).length).toBe(1);
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
  it('should have access to giveUp state', () => {
    const giveUp = true;
    const wrapper = setup({ giveUp });
    const giveUpProp = wrapper.instance().props.giveUp;
    expect(giveUpProp).toBe(giveUp);
  });
  it('should have access to clearGiveUp function on props', () => {
    const wrapper = setup();
    const clearGiveUpProp = wrapper.instance().props.clearGiveUp;
    expect(clearGiveUpProp).toBeInstanceOf(Function);
  })

  it('should have getSecretWord action creator as function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
})

describe('app visuals', () => {
  it('should show the playMode-group if playMode redux state is true', () => {
    const wrapper = setup({ playMode: true });
    const comp = elementAttr(wrapper, "test-playMode-group");
    expect(comp.prop("style").display).toBe("block");
  });
  it('should hide the playMode-group if playMode redux state is false', () => {
    const wrapper = setup({ playMode: false });
    const comp = elementAttr(wrapper, "test-playMode-group");
    expect(comp.prop("style").display).toBe("none");
  });
  it('should reveal answer if user has not given up', () => {
    const wrapper = setup({ giveUp: false });
    const comp = elementAttr(wrapper, "test-reveal-answer");
    expect(comp.length).toBe(1);
  });
  it('should hide answer if user gave up', () => {
    const wrapper = setup({ giveUp: true });
    const comp = elementAttr(wrapper, "test-reveal-answer");
    expect(comp.length).toBe(0);
  });
})

it('should run getSecretWord on mount', () => {
  const getSecretWordMock = jest.fn();

  const wrapper = shallow(<UncontrolledApp getSecretWord={getSecretWordMock} secretWord="" success={true} giveUp={false} guessedWords={[]} guessCount={[1, 2]} />);
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
})

describe('after clicking New Word button it should perform the following', () => {
  let resetSuccessMock;
  let getSecretWordMock;
  let clearGuessWordsMock;
  let clearGuessCountMock;
  let clearGiveUpMock;
  let togglePlayModeMock;

  beforeEach(() => {
    resetSuccessMock = jest.fn();
    getSecretWordMock = jest.fn();
    clearGuessWordsMock = jest.fn();
    clearGuessCountMock = jest.fn();
    clearGiveUpMock = jest.fn();
    togglePlayModeMock = jest.fn();

    const wrapper = shallow(<UncontrolledApp resetSuccess={resetSuccessMock}
      getSecretWord={getSecretWordMock}
      clearGuessWords={clearGuessWordsMock}
      clearGuessCount={clearGuessCountMock}
      clearGiveUp={clearGiveUpMock}
      togglePlayMode={togglePlayModeMock}
      giveUp={false}
      success={true}
      secretWord=""
      guessedWords={[]}
      guessCount={[1, 2]} />
    );
    wrapper.instance().newWordBtnClick();
  })

  it('run resetSuccess function on button click', () => {
    expect(resetSuccessMock.mock.calls.length).toBe(1);
  })
  it('run clearGuessWords function on button click,', () => {
    expect(clearGuessWordsMock.mock.calls.length).toBe(1);
  })
  it('runs clearGuessCount function on button click', () => {
    expect(clearGuessCountMock.mock.calls.length).toBe(1);
  })
  it('runs getSecretWord function on button click', () => {
    expect(getSecretWordMock.mock.calls.length).toBe(1);
  });
  it('run clearGiveUp function on button click', () => {
    expect(clearGiveUpMock.mock.calls.length).toBe(1);
  })
})

describe('after clicking Enter Secret Word button it should perform the following', () => {
  let resetSuccessMock;
  let getSecretWordMock;
  let clearGuessWordsMock;
  let clearGuessCountMock;
  let clearGiveUpMock;
  let togglePlayModeMock;

  let wrapper;

  beforeEach(() => {
    resetSuccessMock = jest.fn();
    getSecretWordMock = jest.fn();
    clearGuessWordsMock = jest.fn();
    clearGuessCountMock = jest.fn();
    clearGiveUpMock = jest.fn();
    togglePlayModeMock = jest.fn();


    wrapper = shallow(<UncontrolledApp resetSuccess={resetSuccessMock}
      getSecretWord={getSecretWordMock}
      clearGuessWords={clearGuessWordsMock}
      clearGuessCount={clearGuessCountMock}
      clearGiveUp={clearGiveUpMock}
      togglePlayMode={togglePlayModeMock}
      giveUp={false}
      success={true}
      secretWord=""
      guessedWords={[]}
      guessCount={[1, 2]} />);
    wrapper.instance().enterSecretWordClick();
  })

  it('run resetSuccess function on button click', () => {
    expect(resetSuccessMock.mock.calls.length).toBe(1);
  })
  it('run clearGuessWords function on button click,', () => {
    expect(clearGuessWordsMock.mock.calls.length).toBe(1);
  })
  it('runs clearGuessCount function on button click', () => {
    expect(clearGuessCountMock.mock.calls.length).toBe(1);
  })
  it('run clearGiveUp function on button click', () => {
    expect(clearGiveUpMock.mock.calls.length).toBe(1);
  })
  it('run togglePlayMode function on button click', () => {
    expect(togglePlayModeMock.mock.calls.length).toBe(1);
  })
})

