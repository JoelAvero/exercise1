import React, {useState, useEffect, SetStateAction} from 'react'
import "./styles.scss"

interface IFields {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

interface IFieldsValidator {
    name: null | boolean;
    lastName: null | boolean;
    email: null | boolean;
    password: null | boolean;
}

const FormRegister = () => {

    const [fields, setFields] = useState<IFields>({
        name: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [isValidField, setIsValidField] = useState<IFieldsValidator>({
        name: null,
        lastName: null,
        email: null,
        password: null
    })

    const [invalidFlag, setInvalidFlag] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const isInvalid = Object.values(isValidField).includes(false) || Object.values(isValidField).includes(null) //improve this
        
        if(isInvalid){
            setInvalidFlag(true);
        } else {
            alert("Thanks for register!")   
        }
    }


    const handleInputChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFields({
            ...fields,
            [name]: value
        })
        setIsValidField({
            ...isValidField,
            [name]: handleValidator(name, value)
        })
    }


    const handleValidator = (name: string, value: any) => {

        const isAValidEmail = (email: string) => {
            return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
        }

        if(name === "email") {
            return isAValidEmail(value);
        } else {
            return value ? true : false;
        }
    }

    useEffect(() => {
        console.log(Object.values(isValidField));
        
        
    }, [isValidField])

    return (
        <>
          <form onSubmit={handleSubmit}>
                    <div className="input-container">

                        <input 
                            type="text" 
                            className={`register-input ${invalidFlag && (isValidField.name === false || isValidField.name === null) ? "error" : ""}`}
                            name="name" 
                            placeholder="First Name"
                            onChange={handleInputChange}

                        />
                        { invalidFlag && !isValidField.name &&
                            <>
                                <div><span className="error-icon"></span></div>
                                <p className="error-text">First Name cannot be empty</p>
                            </>
                        }
                    </div>
                    <div className="input-container">

                        <input 
                            type="text" 
                            className={`register-input ${invalidFlag && (isValidField.lastName === false || isValidField.lastName === null) ? "error" : ""}`}
                            name="lastName" 
                            placeholder="Last Name"
                            onChange={handleInputChange}

                        />
                        { invalidFlag && !isValidField.lastName && 
                            <>
                                <div><span className="error-icon"></span></div>
                                <p className="error-text">Last Name cannot be empty</p>
                            </>
                        }
                    </div>
                    <div className="input-container">

                        <input 
                            type="text" 
                            className={`register-input ${invalidFlag && (isValidField.email === false || isValidField.email === null) ? "error" : ""}`}
                            name="email" 
                            placeholder="Email Address"
                            onChange={handleInputChange}

                        />
                        { invalidFlag && !isValidField.email &&
                            <>
                                <div><span className="error-icon"></span></div>
                                <p className="error-text">Looks like this is not an email</p>
                            </>
                        }
                    </div>
                    <div className="input-container">

                        <input 
                            type="password" 
                            className={`register-input ${invalidFlag && (isValidField.password === false || isValidField.password === null) ? "error" : ""}`}
                            name="password" 
                            placeholder="Password"
                            onChange={handleInputChange}

                        />
                        { invalidFlag && !isValidField.password &&
                            <>
                                <div><span className="error-icon"></span></div>
                                <p className="error-text">Password cannot be empty</p>
                            </>
                        }
                    </div>
                    <button type="submit" className="submit-button">CLAIM YOUR FREE TRIAL</button>
                    <span className="terms-and-services">By clicking the button, you are agreeing to our
                    <strong> Terms and Services</strong></span>
                </form>
        </>
    )
}

export default FormRegister
