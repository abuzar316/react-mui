export const emailValidation = (email) => {
    const emailValidation = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]+.[a-z0-9]{2,}$/;
    const emailValcheck = emailValidation.test(email);
    return emailValcheck;
}

export const passwordValidation = (password) => {
    // eslint-disable-next-line 
    const passwordValidate = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$\/\!#%*^?&])[a-zA-Z0-9\d@$\/\!#^%*?&]{8,}/;
    const passwordvalcheck = passwordValidate.test(password);
    return passwordvalcheck;
}

export const mobileValidation = (mobile) => {
    const mobileValidation = /^[0-9]{10,12}$/;
    const mobilevalcheck = mobileValidation.test(mobile)
    return mobilevalcheck;
}


const validation = (values) => {
    const errors = {};
    if (values.name === '' || values.name === null) {
        errors.name = "name is required";
    }
    if (values.email === '' || values.email === null) {
        errors.email = "email is required";
    }
    if (values.password === '' || values.password === null) {
        errors.password = "password is required";
    }
    if (!emailValidation(values.email)) {
        errors.email = 'Please Enter Valid Email';
    }
    if (!passwordValidation(values.password)) {
        errors.password = 'Please Enter Sronge Password';
    }
    if (values.username === '' || values.username == null) {
        errors.username = 'username is required'
    }

    return errors;
}

export default validation

