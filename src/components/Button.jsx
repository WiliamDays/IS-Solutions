function Button({children, onClick, disabled, type, className}){
    
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}
        >
            {children}
        </button>
    )
};

export default Button;