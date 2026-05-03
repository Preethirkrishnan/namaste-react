const Input = ({label, text, onChange}) => {
    return(
        <>
            <div className="p-2 mb-2 grid grid-rows-2">
                <label>{label}</label>
                <input value={text} onChange={onChange} placeholder={label} className="border border-gray-300" />
            </div>
        </>
    )
}

export default Input;