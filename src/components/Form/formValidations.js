const validate = values => {
    const errors = {}
    // const required = value => (value ? undefined : "Required");

    // Event Name
    if (!values.eventName) {
        errors.eventName = 'Required'
    }

    // Event Website

    if (!values.submissionUrl) {
        errors.submissionUrl = "Required"
    } else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i.test(values.submissionUrl)) {
        errors.submissionUrl = 'Invalid Website'
    }
    
    // Date Picker 1

    // Event Location

    if (!values.city) {
        errors.city= "Required";
    }

    // Date Picker 2

    // Submission website

    if (!values.submissionUrl) {
        errors.submissionUrl = "Required"
    } else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i.test(values.submissionUrl)) {
        errors.submissionUrl = 'Invalid Website'
    }

    // Contact Name

    if (!values.contactName) {
      errors.contactName = "Required";
    }

    // Contact Email
    if (!values.contactEmail) {
        errors.contactEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address'
    }

    return errors
}

export default validate