import * as yup from "yup";

export default yup.object({
    name: yup.string().required(),
    quantity: yup.number().positive().min(1).required(),
    price: yup.number().positive().required()
});
