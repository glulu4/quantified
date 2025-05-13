import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { initialState, graphReducer, GraphState, GraphAction } from '@/reducers/graphReducer';

type GraphContextType = {
  state: GraphState;
  dispatch: React.Dispatch<GraphAction>;
};

const GraphContext = createContext<GraphContextType | undefined>(undefined);

export const useGraph = () => {
  const context = useContext(GraphContext);
  if (!context) {
    throw new Error('useGraph must be used within a GraphProvider');
  }
  return context;
};

const GraphProvider = ({ children }:{children:ReactNode}) => {
  const [state, dispatch] = useReducer(graphReducer, initialState);

  return (
    <GraphContext.Provider value={{ state, dispatch }}>
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;
