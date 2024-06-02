"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";

export default function Page(){

    return <FormBuilder
        title="Ваш вопрос!"
        inputs={[
            {
                label: "Почта, чтобы вам ответить",
                placeholder: "",
                type: "email"
            },
            {
                label: "Ваше имя",
                placeholder: ""
            },
            {
                label: "Вопрос",
                placeholder: ""
            }
        ]}
    />
}