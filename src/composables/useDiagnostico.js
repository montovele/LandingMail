import { reactive, ref } from "vue";

import diagnosticoService from "../services/diagnosticoService";

export function useDiagnostico(){

    const loading=ref(false);

    async function guardar(payload){

        loading.value=true;

        try{

            console.log("[useDiagnostico] Payload");

            console.log(payload);

            const result=
                await diagnosticoService.guardar(payload);

            console.log("[useDiagnostico] Response");

            console.log(result);

            return result;

        }

        finally{

            loading.value=false;

        }

    }

    return{

        loading,

        guardar

    };

}