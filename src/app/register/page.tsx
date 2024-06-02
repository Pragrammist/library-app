"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";

export default function Page(){

    return <FormBuilder
        title="Регистрация"
        inputs={[
            {
                label: "Почта",
                placeholder: "",
                type: "email"
            },
            {
                label: "Номер телефона",
                placeholder: "",
                type: "tel"
            },
            {
                label: "Пароль",
                placeholder: "",
                type: "password"
            },
            {
                label: "Повтор пароля",
                placeholder: "",
                type: "password"
            }
        ]}
    />
}