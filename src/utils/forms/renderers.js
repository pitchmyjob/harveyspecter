import React from 'react'

export const renderAuthInput = (field) => {
    return (
        <div data-plugin="formMaterial" className={'form-group form-material floating' + (field.meta.touched && field.meta.error ? ' has-error' : '')}>

            <input {...field.input} type={field.type} className="form-control" />
            <label className="floating-label">{field.placeholder}</label>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}

export const renderAuthCheckbox = (field) => {
    return (
        <div data-plugin="formMaterial" className={'form-group form-material clearfix' + (field.meta.touched && field.meta.error ? ' has-error' : '')}>
            <div className="checkbox-custom checkbox-inline checkbox-primary pull-left">
                <input {...field.input} type="checkbox" />
                <label htmlFor={field.name}></label>
            </div>
            <p className="margin-left-35">{field.label}</p>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}

export const renderInput = (field) => {
    return (
        <div className={'form-group form-material' + (field.meta.touched && field.meta.error ? ' has-error' : '')} data-plugin="formMaterial">
            <label className="form-control-label" htmlFor={field.name}>{field.label}</label>
            <input {...field.input} type={field.type} className="form-control" />
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}

export const renderSelect = (field) => {
    return (
        <div className={"form-group form-material" + (field.meta.touched && field.meta.error ? ' has-danger' : '')} data-plugin="formMaterial">
            <label className="form-control-label" htmlFor={field.name}>{field.label}</label>
            <select {...field.input} className="form-control">
                {field.placeholder && <option value="">{field.placeholder}</option>}
                {field.options.map((option) => {
                    return <option value={option.id} key={option.id}>{option.name}</option>
                })}
            </select>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}

export const renderTextarea = (field) => {
    return (
        <div className={'form-group form-material' + (field.meta.touched && field.meta.error ? ' has-error' : '')} data-plugin="formMaterial">
            <label className="form-control-label" htmlFor={field.name}>{field.label}</label>
            <textarea {...field.input} className="form-control auto-size"></textarea>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}
