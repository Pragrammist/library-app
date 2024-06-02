"use client"

import FormBuilder from "../library/form/form-bulder/form-builder";

export default function Page(){

    return <FormBuilder
        title="Ваш отзыв"
        inputs={[
            {
                label: "Ваша почта",
                placeholder: "",
                type: "email"
            },
            {
                label: "Ваше имя",
                placeholder: "",
            },
            {
                label: "Ваш отзыв",
                placeholder: "",
            },
        ]}
    />
}