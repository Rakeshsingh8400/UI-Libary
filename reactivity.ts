export function createReactivity(initialState: any, template: any) {
    let state = initialState;
    let listeners: Function[] = [];
  
    const updateState = (newState: any) => {
      state = { ...state, ...newState };
      listeners.forEach((listener) => listener(state));
    };
  
    const mount = () => {
      console.log('Component mounted');
    };
  
    const subscribe = (listener: Function) => {
      listeners.push(listener);
    };
  
    const render = () => {
      const container = document.getElementById('app');
      container.innerHTML = '';
      container.appendChild(template(state));
    };
  
    return {
      updateState,
      mount,
      subscribe,
      render,
    };
  }
  