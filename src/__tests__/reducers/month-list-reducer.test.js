import monthListReducer from '../../reducers/month-list-reducer';

describe('monthListReducer', () => {

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }

  let action;
  const monthData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(monthListReducer({}, {type: null})).toEqual({});
  });

  test("Should successfully add new month data to mainTicketList", () => {
    const { names, location, issue, id } = monthData;
    action = {
      type: 'ADD_MONTH',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(monthListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a month', () => {
    action = {
      type: 'DELETE_MONTH',
      id: 1
    };
    expect(monthListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

});