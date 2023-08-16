import { useReducer } from "react"
import { User } from "../types"
interface FormState {
  inputValues: User
}

const INITIAL_STATE = {
  name: "",
  months: 0,
  avatar: "",
  description: "",
}
type FormReducerAction =
  | {
      type: "change_value"
      payload: {
        inputName: string
        inputValue: string
      }
    }
  | {
      type: "clear"
    }

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue,
      }
    case "clear":
      return INITIAL_STATE
  }
}

const useNewForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewForm