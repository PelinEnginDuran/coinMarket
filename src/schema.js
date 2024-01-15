//yup ta ki tüm fonksiyonlar
import * as yup from "yup"

const regex =
'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$'


//validation schema

export const schema = yup.object().shape({
    email:yup
    .string()
    .email("Mail formatında giriniz.")
    .required('Mail alanı zorunludur.'),

    age:yup
    .number()
    .min(18,"18 YAŞINDAN KÜÇÜKLER GİREMEZ.")
    .max(100)
    .integer("YAŞINIZ TAM SAYI OLMALI")
    .required(),

    password:yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("zorunlu alan"),

    confirmPassword:yup
    .string()
    .oneOf([yup.ref("password")],"Onay şifreniz doğru değil")
    .required("zorunlu alan")

})