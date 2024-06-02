"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";

export default function Page(){

    return <FormBuilder
        title="Доставка документов"
        inputs={[
            {
                label: "Ваше имя",
                placeholder: ""
            },
            {
                label: "Время доставки",
                placeholder: "",
                type: "date"
            },
            {
                label: "Номер телефона для связи",
                placeholder: ""
            },
            {
                label: "Ваш адресс",
                placeholder: "",
                type: ""
            },
        ]}
    />
}