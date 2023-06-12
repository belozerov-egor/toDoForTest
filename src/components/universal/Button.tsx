import { FC } from "react";


type PropsType = {
    name?: string
    callback?: ()=> void
    disabled? : boolean
    children?: React.ReactNode

}
// Универсальная кнопка
export const Button: FC<PropsType> = ({name, callback, disabled, children}) => {
  return(
      <>
          <button disabled={disabled} onClick={callback}>
            {name}
            {children}
            </button>
      </>
  )
};
