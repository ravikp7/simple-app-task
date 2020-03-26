const fieldsInfo = {
        firstName: {
            text: 'First Name',
            regex: /[A-Za-z]+/,
        },
        lastName: {
            text: 'Last Name',
            regex: /[A-Za-z]+/,
        },
        email: {
            text: 'Email',
            regex: /^[\w.]+@\w+\.\w+$/,
        },
        phone: {
            text: 'Phone number',
            regex: /^[^0-1]([0-9]){9}$/,
        },
        password: {
          text: 'Password',
          regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        }
    };

export const validateFormFields = (formFields) => {
    const invalidFields = [];
    for (const [field, value] of Object.entries(formFields)) {
        const { regex } = fieldsInfo[field];
        if (!regex.test(value)) {
            invalidFields.push(fieldsInfo[field].text);
        }
    }
    if (invalidFields.length > 0) {
        let passwordInfo = '';
        if (invalidFields.includes('Password')) {
          passwordInfo = 'Password should be at least 8 digits, 1 uppercase, 1 number and 1 special character.'
        }
        return `Please check ${invalidFields.join(', ')} ${invalidFields.length === 1 ? 'field' : 'fields'}. ${passwordInfo}`
    }
    return '';
}