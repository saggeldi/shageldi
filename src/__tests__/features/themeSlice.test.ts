import themeReducer, { toggleTheme, ThemeType } from '../../../src/features/themeSlice';
import { RootState } from '../../../src/features/store';

describe('theme slice', () => {
  // Test initial state
  it('should return the initial state', () => {
    const initialState = { value: 'light' };
    const nextState = themeReducer(undefined, { type: '@@INIT' });
    
    expect(nextState).toEqual(initialState);
  });
  
  // Test reducer
  describe('reducer', () => {
    it('should handle toggling theme from light to dark', () => {
      const initialState: ThemeType = { value: 'light' };
      const action = toggleTheme({ value: 'dark' });
      const nextState = themeReducer(initialState, action);
      
      expect(nextState.value).toBe('dark');
    });
    
    it('should handle toggling theme from dark to light', () => {
      const initialState: ThemeType = { value: 'dark' };
      const action = toggleTheme({ value: 'light' });
      const nextState = themeReducer(initialState, action);
      
      expect(nextState.value).toBe('light');
    });
  });
  
  // Test actions
  describe('actions', () => {
    it('should create an action to toggle theme', () => {
      const expectedAction = {
        type: 'theme/toggleTheme',
        payload: { value: 'dark' }
      };
      
      expect(toggleTheme({ value: 'dark' })).toEqual(expectedAction);
    });
  });
  
  // Test selectors
  describe('selectors', () => {
    it('should select the theme value from the state', () => {
      const state = {
        theme: { value: 'dark' }
      } as RootState;
      
      // This is a simple selector test, in a real app you might have dedicated selectors
      expect(state.theme.value).toBe('dark');
    });
  });
});