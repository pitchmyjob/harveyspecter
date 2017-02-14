import React from 'react'

export const renderAuthInput = (field) => {
    return (
        <div className={'form-group form-material floating' + (field.meta.touched && field.meta.error ? ' has-error' : '')}>
            <input {...field.input} type={field.type} className="form-control empty" />
            <label className="floating-label">{field.placeholder}</label>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}

export const renderAuthCheckbox = (field) => {
    return (
        <div className={'form-group clearfix' + (field.meta.touched && field.meta.error ? ' has-error' : '')}>
            <div className="checkbox-custom checkbox-inline checkbox-primary pull-left">
                <input {...field.input} type="checkbox" />
                <label htmlFor={field.name}></label>
            </div>
            <p className="margin-left-35">{field.label}</p>
            {field.meta.touched && field.meta.error && <small className="help-block">{field.meta.error}</small>}
        </div>
    )
}
