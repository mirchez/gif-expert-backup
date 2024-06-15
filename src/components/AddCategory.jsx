import { useState } from "react";


export const AddCategory = ({onNewCategory, categories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = ({target}) =>{
        const newValue = target.value;
        setInputValue(newValue);
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        onNewCategory(inputValue,categories)

        setInputValue('')

    }

return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Search a Gif"
                onChange = {handleOnChange}
                value={inputValue}/>


        </form>
    )
}

