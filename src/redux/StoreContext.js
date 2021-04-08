import React from "react";

const TestContext = React.createContext(null);
export const Provider = (props) => {
    return <TestContext.Provider value={props.store}>
        {props.children}
    </TestContext.Provider>
}
export default TestContext;