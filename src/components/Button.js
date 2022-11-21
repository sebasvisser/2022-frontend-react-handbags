function Button({buttonDisabled, buttonText}){
    return(
        <button disabled={buttonDisabled}>{buttonText}</button>
    );
}
export default Button;