"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";

export default function Page(){

    return <FormBuilder
        title="Не выходя из дома!"
        inputs={[
            {
                label: "Ваше имя",
                placeholder: ""
            },
            {
                label: "Номер телефона",
                placeholder: "",
                type: "tel"
            },
            {
                label: "Поча для связи",
                placeholder: "",
                type: "email"
            },
            {
                label: "Ваши документы",
                placeholder: "",
                type: "file"
            }
        ]}
    />
}