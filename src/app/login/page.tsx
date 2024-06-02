"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";


export default function Page(){
    return <FormBuilder
        title="Авторизация"
        inputs={[
            {
                label: "Почта",
                placeholder: "",
                type: "email"
            },
            {
                label: "Пароль",
                placeholder: "",
                type: "password"
            },
        ]}
    />
}