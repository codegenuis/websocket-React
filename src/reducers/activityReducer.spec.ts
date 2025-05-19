import { activityReducer, initialState, Action } from './activityReducer';

describe('activityReducer', () => {
  it('should add an activity to the list', () => {
    const action: Action = { type: 'ADD_ACTIVITY', payload: 'User X logged in at 12:00' };
    const result = activityReducer(initialState, action);
    expect(result.activities.length).toBe(1);
    expect(result.activities[0]).toBe(action.payload);
  });
});