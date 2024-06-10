const validateRegister = (input) => {
    let errors = {};

    if (!input.name.trim()){
        errors.name = 'Name required';
    }

    if (!input.email.trim()){
        errors.email = 'Email required';
    }else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'El correo electrónico no es válido';
    }

    if (!input.birthdate) {
        errors.birthdate = 'Birthdate required';
    }

    if (!input.nDni) {
        errors.nDni = 'Dni required';
    } else if (isNaN(input.nDni)){
        errors.nDni = 'El Dni debe ser un valor númerico';
    } else if (input.nDni.length !== 8){
        errors.nDni = 'El Dni debe contener 8 dígitos'
    }

    if (!input.username.trim()){
        errors.username = 'Username required';
    }

    if (!input.password.trim()){
        errors.password = 'Password required';
    }

    return errors;
}

export default validateRegister;