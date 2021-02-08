import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

function Form() {
    const [value, setValue] = useState({});
    const onSubmit = e => {
        alert("Submitted a todo");
        e.preventDefault();
    }
    const onInput = key => e => {
        setValue({ ...value, [key]: e.target.value });
    }
    const calculate = () => {
        return value['memberNo'] * value['sprintLength'] || 0;
    }
    return (
        <form className={style.form} onSubmit={onSubmit}>
            <div className={style.row}>
                <label for="memberNo">Number of team member </label>
                <input name="memberNo" type="text" defaultValue={0} value={value['memberNo']} onInput={onInput('memberNo')} />
            </div>
            <div className={style.row}>
                <label for="sprintLength">Sprint length (day) </label>
                <input name="sprintLength" type="text" defaultValue={0} value={value['sprintLength']} onInput={onInput('sprintLength')} />
            </div>
            <div>{calculate()}</div>
        </form>
    );
}

export default Form;
