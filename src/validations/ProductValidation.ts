import * as yup from "yup";

export const addProductValidation = yup.object({
    name: yup.string().required(),
    quantity: yup.number().positive().min(1).required(),
    price: yup.number().positive().required()
});

export const updateProductValidation = yup.object({
    name: yup.string().required(),
    quantity: yup.number().positive().min(1).required(),
    price: yup.number().positive().required()
});
