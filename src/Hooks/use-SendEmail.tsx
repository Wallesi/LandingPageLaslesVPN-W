//Yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BDD_URL } from "../App";


const schema = yup.object({
    firstName: yup.string().required("First Name is required").max(20, "Max of 20 characters"),
    lastName: yup.string().required("Last Name is required").max(10, "Max of 10 characters"),
    email: yup.string().required("Email is required").max(30, "Max of 30 characters"),
    phone: yup.string().required("Cell phone is required").max(15, "Max of 15 characters"),
    message: yup.string().required("Message is required").max(200, "Max of 200 characters"),
}).required();

type FormData = yup.InferType<typeof schema>;

//Aplicar a la pagina del TP y el dark theme tmb
const useSendMessage = () =>{
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = (data: FormData) => {
        fetch(`${BDD_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Formulario enviado', response.json());
                } else {
                    console.error('Error al enviar');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return {
        onSubmit,
        errors,
        register,
        handleSubmit,
      };
}

export default useSendMessage;