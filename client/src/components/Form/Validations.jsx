const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

export default function Validate(input) {
	let errors = {};

    if (!input.name) {
		errors.name = 'El campo Nombre debe rellenarse obligatoriamente';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (input.name.length > 50) {
		errors.name = 'El Nombre es demasiado largo, Max 50 caracteres.';
	} else if (input.name.length < 2) {
		errors.name = 'El Nombre es demasiado corto, Min 2 caracteres.';
    } else if (!input.mail) {
		errors.lastName = 'El campo mail debe rellenarse obligatoriamente';
    } else if (!regexMail.test(input.mail)){
        errors.lastName = 'El mail contiene algún caracter invalido';
	} else if (!input.lastName) {
		errors.lastName = 'El campo Apellido debe rellenarse obligatoriamente';
	} else if (!regexName.test(input.lastName)) {
		errors.lastName = 'El Apellido contiene algún caracter invalido';
	} else if (input.lastName.length > 50) {
		errors.lastName = 'El Apellido es demasiado largo, Max 50 caracteres.';
	} else if (input.lastName.length < 2) {
		errors.lastName = 'El Apellido es demasiado corto, Min 2 caracteres.';
    }

	return errors;
}
