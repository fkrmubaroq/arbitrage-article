"use client"
import React, { createContext, useReducer } from "react";

type ArticleProviderStateContextType = {
  isBookmarked: boolean;
  reactionType: string | null;
};

const initArticleContext: ArticleProviderStateContextType = {
  isBookmarked: false,
  reactionType: null,
};

export const ArticleProviderStateContext = createContext<
  ArticleProviderStateContextType | undefined
>(undefined);

type ArticleProviderDispatchType =
  | {
      type: "SET_IS_BOOKMARKED";
      payload: boolean;
    }
  | {
      type: "SET_REACTION_TYPE";
      payload: string | null;
    };
export const ArticleProviderDispatchContext = createContext<
  React.Dispatch<ArticleProviderDispatchType> | undefined
>(undefined);

type ArticleProviderHandleContextType = {
  handleBookmark: (isBookmarked: boolean) => void;
  handleReaction: (type: string | null) => void;
  handleShare: (share: string) => void;
};
export const ArticleProviderHandleContext = createContext<
  ArticleProviderHandleContextType | undefined
>(undefined);

function reducerFn(
  state: ArticleProviderStateContextType,
  action: ArticleProviderDispatchType
): ArticleProviderStateContextType {
  switch (action.type) {
    case "SET_IS_BOOKMARKED":
      return {
        ...state,
        isBookmarked: action.payload,
      };
    case "SET_REACTION_TYPE":
      return {
        ...state,
        reactionType: action.payload,
      };
    default:
      return state;
  }
}

export const ArticleProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducerFn, initArticleContext);

  return (
    <ArticleProviderStateContext.Provider value={state}>
      <ArticleProviderDispatchContext.Provider value={dispatch}>
        {children}
      </ArticleProviderDispatchContext.Provider>
    </ArticleProviderStateContext.Provider>
  );
};

export const useArticleStateContext = () => {
  const context = React.useContext(ArticleProviderStateContext);
  if (context === undefined) {
    throw new Error(
      "useArticleStateContext must be used within a ArticleProviderContext"
    );
  }
  return context;
};

export const useArticleDispatchContext = () => {
  const context = React.useContext(ArticleProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useArticleDispatchContext must be used within a ArticleProviderContext"
    );
  }
  return context;
};

export const useArticleHandleContext = () => {
  const context = React.useContext(ArticleProviderHandleContext);
  if (context === undefined) {
    throw new Error(
      "useArticleHandleContext must be used within a ArticleProviderContext"
    );
  }
  return context;
};
