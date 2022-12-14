/*
    const middlewareFunction = store => next => action => {
        
    }

    function middlewareFunction(store) {
        return function wrapDispatch(next) {
            return function dispatch(action) {
                
            }
        }

    }

*/


const logger = store => next => action => {
    console.log('Dispatching action', action);
    console.log('State before', store.getState());
    let result = next(action);
    console.log('State after', store.getState());
    return result;
}

export default logger;