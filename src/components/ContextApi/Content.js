import React, { useContext } from "react";
import Counter from "../Counter";
import HoverCounterForRenderProps from "../RenderProps/HoverCounterForRenderProps";
import CounterContext from "./CounterContext";


export default function Content({ theme }) {
    const context = useContext(CounterContext)
    console.log(context);
  return (
    <div>
      <p>This is content</p>
      {/* <Counter
        render={(count, handleClick) => (
          <CounterContext.Consumer>
            {({theme})=><HoverCounterForRenderProps
              count={count}
              handleClick={handleClick}
              theme={theme}
            />}
          </CounterContext.Consumer>
        )}
      /> */}

      <Counter render={(count, handleClick)=> (
        <HoverCounterForRenderProps 
            count={count} 
            handleClick={handleClick}
            theme={context.theme}
            changeTheme={context.changeTheme}
            />
      )} />
    </div>
  );
}
