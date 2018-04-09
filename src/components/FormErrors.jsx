import React from 'react';

const FormErrors = ({formErrors}) => {
    return (
        <div>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <small key={i}
                           className='form-text text-muted'
                    >
                        {fieldName}{formErrors[fieldName]}
                    </small>
                )
            }else{
                return '';
            }
        })}
    </div>
    )
};

    export default FormErrors;