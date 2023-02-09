import { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SyntheticEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="input" onSubmit={(e) => { handleAdd(e); inputRef.current?.blur() }}>
            <input ref={inputRef} type='text' placeholder="Enter a task" className="input-box" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="input-submit">Go</button>
        </form>
    )
}

export default InputField
