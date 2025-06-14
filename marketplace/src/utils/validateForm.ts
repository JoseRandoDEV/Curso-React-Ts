import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El username es requerido"),
    password: yup.string().trim().required("El password es requerido").min(4, "El minimo debe ser de cuatro caracters").max(20, "El maximo debe ser de veinte caracters")
})