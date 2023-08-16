import useNewForm from "../hook/useNewForm";
import { User } from "../types";

interface FormProps {
  onNewUser: (newUser: User) => void;
}

const Form = ({ onNewUser }: FormProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewUser(inputValues);
    handleClear();
  };

  const [inputValues, dispatch] = useNewForm();

  const hanldeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={hanldeChange}
          value={inputValues.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={hanldeChange}
          value={inputValues.months}
          type="number"
          name="months"
          placeholder="Months"
        />
        <input
          onChange={hanldeChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <textarea
          onChange={hanldeChange}
          value={inputValues.description}
          name="description"
          placeholder="Description"
        />
        <button onClick={handleClear} type="button">
          Clear the form!
        </button>
        <button type="submit">Save new user!</button>
      </form>
    </div>
  );
};

export default Form;
