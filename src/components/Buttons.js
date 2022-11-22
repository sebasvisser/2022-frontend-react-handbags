function Buttons({buttonDisabled, buttonText}){

    return(
        <button
            disabled={buttonDisabled}
            onClick={() => console.log(`${buttonText}`)}
        >
            {buttonText}
        </button>
    );

}
export default Buttons;