// services/diagnostico.service.js

import { apiFetch } from "./fetch";


export default {


guardar(data){

    console.log("================================");

    console.log("[SERVICE] POST /diagnosticos");

    console.log(data);

    console.log("================================");

    return apiFetch(

        "/diagnosticos",

        {

            method:"POST",

            body:data

        }

    );

}


};