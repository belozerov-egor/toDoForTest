import { FC } from "react";


type PropsType = {
    name: string
    callback?: ()=> void
}

export const Button: FC<PropsType> = ({name, callback}) => {
  return(
      <>
          <button onClick={callback}>{name}</button>
      </>
  )
};
