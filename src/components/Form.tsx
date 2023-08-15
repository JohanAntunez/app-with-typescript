import { useState } from "react"
import { Sub } from '../types'

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
    }

    const hanldeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={hanldeChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick" />
                <input onChange={hanldeChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonth" />
                <input onChange={hanldeChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <textarea onChange={hanldeChange} value={inputValues.description} name="description" placeholder="description" />
                <button>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form