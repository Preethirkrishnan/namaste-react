const Input = ({label, text, onChange}) => {
    return(
        <>
            <div className="m-5">
                <label>{label}</label>
                <input value={text} onChange={onChange} className="ml-2 border border-gray-300" />
            </div>
        </>
    )
}

export default Input;