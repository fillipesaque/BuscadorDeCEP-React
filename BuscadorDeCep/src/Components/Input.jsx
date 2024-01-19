function Input (props) {
    
const {type , placeholder , value , onChange} = props

    return(
        <div>
            <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
             />
        </div>
    )
}

export default  Input