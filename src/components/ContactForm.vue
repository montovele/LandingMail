<template>

<div class="diagnostic-wizard">


<!-- =================================================
HEADER
================================================= -->

<header class="wizard-header">


<div class="wizard-brand">


<div class="wizard-icon">

<i class="icon-sitemap"></i>

</div>


<div>

<h1>
Diagnóstico de Transformación Digital
</h1>


<p>

Cuéntanos sobre tu empresa y descubramos
cómo podemos optimizar tus procesos mediante tecnología.

</p>

</div>


</div>



<!-- PROGRESS -->


<div class="wizard-progress">


<div class="progress-track">

<div
class="progress-value"
:style="{width:progress+'%'}"
></div>


</div>


<span>
Paso {{currentStep}} de {{totalSteps}}
</span>


</div>


</header>





<form
@submit.prevent="guardarDiagnostico"
>



<transition
name="carousel-slide"
mode="out-in"
>



<div
:key="currentStep"
class="wizard-card"
>





<!-- =================================================
PASO 1 CONTACTO
================================================= -->

<section v-if="currentStep===1">


<div class="section-title">

<i class="icon-user"></i>

<h2>
Datos de contacto
</h2>


</div>



<div class="row g-4">


<div class="col-md-6">


<label>
Empresa *
</label>


<input
class="form-control"
v-model.trim="form.empresa"
placeholder="Nombre de la empresa"
/>


</div>




<div class="col-md-6">


<label>
Nombre del responsable *
</label>


<input
class="form-control"
v-model.trim="form.contacto"
placeholder="Director / Gerente"
/>


</div>





<div class="col-md-6">


<label>
Correo empresarial *
</label>


<input
type="email"
class="form-control"
v-model.trim="form.correo"
placeholder="contacto@empresa.com"
/>


</div>





<div class="col-md-6">


<label>
Teléfono
</label>


<input
class="form-control"
v-model.trim="form.telefono"
placeholder="+52"
/>


</div>



</div>


</section>








<!-- =================================================
PASO 2 PERFIL EMPRESA
================================================= -->


<section v-if="currentStep===2">


<div class="section-title">


<i class="icon-building"></i>


<h2>
Perfil empresarial
</h2>


</div>




<div class="row g-4">


<div class="col-md-6">


<label>
Industria
</label>


<input
class="form-control"
v-model="form.giro"
placeholder="Manufactura, retail, servicios..."
/>


</div>




<div class="col-md-6">


<label>
Tamaño empresa
</label>


<select
class="form-select"
v-model="form.tipo_empresa"
>


<option value="">
Seleccione
</option>


<option value="pyme">
PYME
</option>


<option value="mediana">
Empresa mediana
</option>


<option value="corporativo">
Corporativo
</option>


</select>


</div>




<div class="col-md-4">

<label>
Número empleados
</label>

<input
type="number"
class="form-control"
v-model.number="form.empleados"
/>

</div>




<div class="col-md-4">

<label>
Sucursales
</label>

<input
type="number"
class="form-control"
v-model.number="form.sucursales"
/>


</div>




<div class="col-md-4">

<label>
Años operando
</label>

<input
type="number"
class="form-control"
v-model.number="form.antiguedad"
/>


</div>


</div>


</section>









<!-- =================================================
PASO 3 RETOS
================================================= -->


<section v-if="currentStep===3">


<div class="section-title">

<i class="icon-bullseye"></i>

<h2>
Principales retos actuales
</h2>

</div>




<p class="helper">

Selecciona los problemas donde tu empresa necesita mejorar.

</p>



<div class="solution-grid">


<label
v-for="item in retosDisponibles"
:key="item.value"
class="option-card"
>


<input
type="checkbox"
:value="item.value"
v-model="form.retos"
/>



<div>

<i :class="item.icon"></i>

<span>
{{item.label}}
</span>


</div>


</label>



</div>


</section>









<!-- =================================================
PASO 4 MADUREZ DIGITAL
================================================= -->


<section v-if="currentStep===4">


<div class="section-title">


<i class="icon-microchip"></i>


<h2>
Tecnología actual
</h2>


</div>



<select
class="form-select mb-4"
v-model="form.madurez"
>


<option value="">
Nivel tecnológico actual
</option>


<option value="basico">
Procesos manuales
</option>


<option value="intermedio">
Algunos sistemas digitales
</option>


<option value="avanzado">
Sistemas integrados
</option>


</select>





<textarea

class="form-control"

rows="5"

v-model="form.tecnologia_actual"

placeholder="Describe tus sistemas actuales ERP, CRM, ecommerce, software..."

></textarea>


</section>









<!-- =================================================
PASO 5 SOLUCION
================================================= -->


<section v-if="currentStep===5">


<div class="section-title">


<i class="icon-lightbulb-o"></i>


<h2>
¿Qué solución buscas?
</h2>


</div>



<div class="solution-grid">


<label
v-for="item in solucionesDisponibles"
:key="item.value"
class="option-card"
>


<input
type="checkbox"
:value="item.value"
v-model="form.soluciones"
/>


<span>

{{item.label}}

</span>


</label>


</div>


</section>









<!-- =================================================
PASO 6 PROYECTO
================================================= -->


<section v-if="currentStep===6">


<div class="section-title">

<i class="icon-money"></i>


<h2>
Proyecto e inversión
</h2>


</div>




<select
class="form-select mb-4"
v-model="form.presupuesto"
>


<option value="">
Rango estimado inversión
</option>


<option value="10k">
$10,000 - $25,000 MXN
</option>


<option value="50k">
$25,000 - $50,000 MXN
</option>


<option value="100k">
Más de $100,000 MXN
</option>


</select>




<input
type="date"
class="form-control"
v-model="form.fecha_inicio"
/>


</section>










<!-- =================================================
PASO FINAL
================================================= -->


<section v-if="currentStep===7">


<div class="section-title">

<i class="icon-check-circle"></i>

<h2>
Confirmación
</h2>


</div>



<textarea

class="form-control"

rows="5"

placeholder="Comentarios adicionales"

v-model="form.observaciones"

></textarea>




<div class="privacy-box">


<input
type="checkbox"
v-model="form.privacy"
/>


Acepto el aviso de privacidad.



</div>



</section>





</div>


</transition>








<!-- NAVIGATION -->


<div class="wizard-actions">


<button

type="button"

class="btn btn-light"

@click="previousStep"

v-if="currentStep>1"

>

Anterior

</button>





<button

type="button"

class="btn btn-primary"

@click="nextStep"

v-if="currentStep<totalSteps"

>

Continuar

</button>




<button

v-else

type="submit"

class="btn btn-success"

>

Enviar diagnóstico

</button>



</div>




</form>


</div>


</template>
<script setup>

import {
    computed,
    reactive,
    ref,
    watch
} from "vue";

import { useDiagnostico } from "../composables/useDiagnostico";


const {

    guardar,

    loading

} = useDiagnostico();



/*
==========================================================
 WIZARD / CAROUSEL
==========================================================
*/


const currentStep = ref(1);


/*
Cantidad de pantallas del formulario

1 Contacto
2 Empresa
3 Objetivos
4 Tecnología
5 Infraestructura
6 Presupuesto
7 Confirmación
*/

const totalSteps = 7;



const progress = computed(()=>{

    return Math.round(
        (currentStep.value / totalSteps) * 100
    );

});




function nextStep(){

    if(currentStep.value < totalSteps){

        currentStep.value++;

    }

}



function previousStep(){

    if(currentStep.value > 1){

        currentStep.value--;

    }

}




function goToStep(step){

    currentStep.value = step;

}




/*
==========================================================
 FORMULARIO
==========================================================
*/
const form = reactive({

    empresa:"",

    contacto:"",

    correo:"",

    telefono:"",


    ciudad:"",

    estado:"",

    giro:"",

    tipo_empresa:"",

    empleados:null,

    sucursales:1,

    antiguedad:null,


    retos:[],


    objetivo:"",


    soluciones:[],


    erp:"",

    crm:"",

    website:"",

    ecommerce:"",


    presupuesto:"",

    fecha_inicio:"",


    observaciones:"",


    privacy:false

});


/*
==========================================================
 ERRORES
==========================================================
*/


const errors = reactive({

    empresa:"",

    contacto:"",

    correo:"",

    objetivo:"",

    privacy:""

});




/*
==========================================================
 SOLUCIONES
==========================================================
*/


const solucionesDisponibles=[

{
value:"ERP",
label:"Sistema ERP"
},

{
value:"CRM",
label:"CRM"
},

{
value:"Facturacion",
label:"Facturación Electrónica"
},

{
value:"POS",
label:"Punto de Venta"
},

{
value:"Inventarios",
label:"Control de Inventarios"
},

{
value:"Ecommerce",
label:"Comercio Electrónico"
},

{
value:"Marketplace",
label:"Marketplace"
},

{
value:"AppMovil",
label:"Aplicación Móvil"
},

{
value:"BI",
label:"Business Intelligence"
},

{
value:"Automatizacion",
label:"Automatización"
},

{
value:"IA",
label:"Inteligencia Artificial"
},

{
value:"Cloud",
label:"Servicios Cloud"
}

];




/*
==========================================================
 VALIDACIONES
==========================================================
*/


function limpiarErrores(){

    Object.keys(errors).forEach(key=>{

        errors[key]="";

    });

}




function validarPaso(){


    limpiarErrores();


    let valido=true;



    /*
    Paso 1
    */

    if(currentStep.value===1){


        if(!form.empresa){

            errors.empresa=
            "Ingrese la empresa";

            valido=false;

        }



        if(!form.contacto){

            errors.contacto=
            "Ingrese el contacto";

            valido=false;

        }



        if(!form.correo){

            errors.correo=
            "Ingrese el correo";

            valido=false;

        }

        else{

            const email =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if(!email.test(form.correo)){


                errors.correo=
                "Correo inválido";


                valido=false;

            }

        }


    }



    /*
    Paso objetivos
    */


    if(currentStep.value===3){


        if(!form.objetivo){


            errors.objetivo=
            "Describe el objetivo";


            valido=false;

        }

    }




    /*
    Paso final
    */


    if(currentStep.value===7){


        if(!form.privacy){


            errors.privacy=
            "Debe aceptar el aviso de privacidad";


            valido=false;

        }

    }



    return valido;

}




function siguiente(){

    if(validarPaso()){

        nextStep();

    }

}




/*
==========================================================
 LIMPIAR FORMULARIO
==========================================================
*/


function limpiarFormulario(){


    Object.assign(form,{


        empresa:"",

        contacto:"",

        correo:"",

        telefono:"",

        ciudad:"",

        estado:"",

        giro:"",

        tipo_empresa:"",

        empleados:null,

        sucursales:1,

        antiguedad:null,

        objetivo:"",

        soluciones:[],

        erp:"",

        crm:"",

        website:"",

        ecommerce:"",

        presupuesto:"",

        fecha_inicio:"",

        observaciones:"",

        privacy:false


    });


    currentStep.value=1;


    limpiarErrores();


}




/*
==========================================================
 ENVIO FINAL
==========================================================
*/


async function guardarDiagnostico(){


    if(!validarPaso()){

        return;

    }



    try{


        await guardar({

            ...form

        });



        alert(
            "Solicitud enviada correctamente."
        );



        limpiarFormulario();



    }

    catch(error){


        console.error(
            "[Diagnostico]",
            error
        );


        alert(
            "No fue posible enviar el formulario."
        );


    }


}




/*
==========================================================
 WATCHERS
==========================================================
*/


watch(

()=>form.correo,

()=>{

    if(errors.correo){

        errors.correo="";

    }

}

);



watch(

()=>form.empresa,

()=>{

    if(errors.empresa){

        errors.empresa="";

    }

}

);



watch(

()=>form.contacto,

()=>{

    if(errors.contacto){

        errors.contacto="";

    }

}

);



watch(

()=>form.objetivo,

()=>{

    if(errors.objetivo){

        errors.objetivo="";

    }

}

);

/*
==========================================================
 RETOS EMPRESARIALES
==========================================================
*/


const retosDisponibles = [

{
    value:"procesos_manuales",
    label:"Procesos manuales y falta de automatización"
},

{
    value:"informacion_desordenada",
    label:"Información dispersa entre sistemas"
},

{
    value:"baja_productividad",
    label:"Baja productividad operativa"
},

{
    value:"falta_control",
    label:"Falta de control administrativo"
},

{
    value:"ventas",
    label:"Mejorar ventas y seguimiento comercial"
},

{
    value:"inventarios",
    label:"Control de inventarios"
},

{
    value:"integraciones",
    label:"Integración entre plataformas actuales"
},

{
    value:"transformacion",
    label:"Transformación digital empresarial"
},

{
    value:"datos",
    label:"Análisis de datos y reportes"
},

{
    value:"inteligencia_artificial",
    label:"Implementación de inteligencia artificial"
}

];

</script>
<style scoped>
/* =====================================================
   DIAGNOSTICO EMPRESARIAL
   FORM CAROUSEL STYLE
===================================================== */


.contact-form-card {

    width:100%;
    max-width:1100px;

    margin:40px auto;

    background:
    linear-gradient(
        145deg,
        rgba(255,255,255,.98),
        rgba(248,250,252,.95)
    );


    border-radius:32px;


    padding:45px;


    box-shadow:

    0 30px 80px
    rgba(15,23,42,.15);


    border:
    1px solid
    rgba(148,163,184,.25);


    overflow:hidden;


    position:relative;


    animation:
    cardAppear .7s ease;

}





/* Decoración superior */


.contact-form-card::before {


    content:"";


    position:absolute;


    top:-180px;

    right:-120px;


    width:400px;

    height:400px;


    background:

    radial-gradient(
        circle,
        rgba(37,99,235,.18),
        transparent 70%
    );


    filter:blur(20px);


}





/* =====================================================
 HEADER
===================================================== */


.form-header {


    display:flex;

    align-items:center;

    gap:25px;


    margin-bottom:40px;


}



.header-icon {


    width:85px;

    height:85px;


    display:flex;

    align-items:center;

    justify-content:center;


    border-radius:24px;


    background:

    linear-gradient(
        135deg,
        #2563eb,
        #0ea5e9
    );


    color:white;


    font-size:38px;


    box-shadow:

    0 20px 40px
    rgba(37,99,235,.35);


    animation:
    floatIcon 4s infinite ease-in-out;


}




.form-header h3 {


    font-size:32px;


    font-weight:800;


    color:#0f172a;


    margin-bottom:10px;


}




.form-header p {


    color:#64748b;


    font-size:16px;


    max-width:700px;


    line-height:1.6;


}



/* =====================================================
 PROGRESS
===================================================== */


.progress-wrapper {


    margin-bottom:45px;


}



.progress {


    height:14px;


    background:#e2e8f0;


    border-radius:20px;


    overflow:hidden;


}



.progress-bar {


    height:100%;


    background:

    linear-gradient(
        90deg,
        #2563eb,
        #06b6d4
    );


    border-radius:20px;


    position:relative;


    transition:
    width .6s cubic-bezier(.4,0,.2,1);



}



.progress-bar::after {


    content:"";


    position:absolute;


    inset:0;


    background:

    linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.6),
        transparent
    );


    animation:
    progressGlow 2s infinite;


}





.progress-wrapper small {


    display:block;


    margin-top:10px;


    color:#475569;


    font-weight:600;


}





/* =====================================================
 SECTIONS
===================================================== */


.form-section {


    background:white;


    padding:35px;


    border-radius:26px;


    border:

    1px solid
    rgba(226,232,240,.9);



    margin-bottom:35px;


    box-shadow:


    0 15px 40px
    rgba(15,23,42,.06);



    animation:

    sectionEnter .5s ease;


    transition:
    transform .35s ease,
    box-shadow .35s ease;


}




.form-section:hover {


    transform:
    translateY(-4px);


    box-shadow:


    0 25px 55px
    rgba(15,23,42,.10);


}




/* =====================================================
 TITLES
===================================================== */


.section-title {


    display:flex;


    align-items:center;


    gap:12px;


    font-size:20px;


    font-weight:750;


    color:#0f172a;


    margin-bottom:30px;


}



.section-title i {


    width:42px;


    height:42px;


    display:flex;


    align-items:center;


    justify-content:center;


    border-radius:14px;


    background:

    rgba(37,99,235,.1);


    color:#2563eb;


    font-size:22px;


}



/* =====================================================
 INPUTS
===================================================== */


.form-label {


    font-weight:650;


    color:#334155;


    margin-bottom:9px;


}




.form-label span {


    color:#ef4444;


}




.form-control,
.form-select {


    height:52px;


    border-radius:16px;


    border:

    1px solid
    #cbd5e1;


    padding:

    0 18px;


    font-size:15px;


    color:#0f172a;


    background:#fff;


    transition:


    all .3s ease;


}



textarea.form-control {


    height:auto;


    padding:18px;


}





.form-control:hover,
.form-select:hover {


    border-color:#93c5fd;


}




.form-control:focus,
.form-select:focus {


    border-color:#2563eb;


    box-shadow:

    0 0 0 5px
    rgba(37,99,235,.12);


}





/* =====================================================
 CHECKBOX SOLUTIONS
===================================================== */


.form-check {


    padding:18px;


    border-radius:18px;


    background:#f8fafc;


    border:

    1px solid
    #e2e8f0;


    transition:.3s;


}




.form-check:hover {


    background:#eff6ff;


    border-color:#93c5fd;


    transform:
    translateX(5px);


}



.form-check-input {


    width:22px;

    height:22px;


    cursor:pointer;


}



.form-check-label {


    margin-left:8px;


    font-weight:600;


    cursor:pointer;


}





.alert {


    border-radius:22px!important;


    padding:25px;


}




/* =====================================================
 BUTTONS
===================================================== */


.form-actions {


    display:flex;


    justify-content:flex-end;


    gap:20px;


}



.btn {


    height:52px;


    padding:

    0 28px;


    border-radius:16px;


    font-weight:700;


    transition:.3s;


}




.btn-primary {


    background:

    linear-gradient(
        135deg,
        #2563eb,
        #06b6d4
    );


    border:none;


    box-shadow:

    0 15px 30px
    rgba(37,99,235,.35);


}



.btn-primary:hover {


    transform:

    translateY(-3px);


    box-shadow:

    0 20px 40px
    rgba(37,99,235,.45);


}





.btn-outline-secondary {


    border-radius:16px;


}



/* =====================================================
 CAROUSEL ANIMATION
===================================================== */


.carousel-enter-active,
.carousel-leave-active {


    transition:
    all .45s ease;


}



.carousel-enter-from {


    opacity:0;


    transform:

    translateX(80px);


}



.carousel-leave-to {


    opacity:0;


    transform:

    translateX(-80px);


}





/* =====================================================
 ANIMATIONS
===================================================== */


@keyframes cardAppear {


    from {

        opacity:0;

        transform:
        translateY(40px);

    }


    to {

        opacity:1;

        transform:
        translateY(0);

    }


}





@keyframes sectionEnter {


    from {


        opacity:0;


        transform:
        translateY(25px);


    }



    to {


        opacity:1;


        transform:
        translateY(0);


    }


}





@keyframes floatIcon {


    0%,100%{

        transform:
        translateY(0);

    }


    50%{

        transform:
        translateY(-8px);

    }


}





@keyframes progressGlow {


    from {

        transform:
        translateX(-100%);

    }


    to {

        transform:
        translateX(100%);

    }


}





/* =====================================================
 RESPONSIVE
===================================================== */


@media(max-width:768px){


.contact-form-card {


    padding:25px;

    border-radius:22px;


}



.form-header {


    flex-direction:column;


    text-align:center;


}



.form-header h3 {


    font-size:26px;


}



.form-section {


    padding:25px;


}



.form-actions {


    flex-direction:column;


}



.btn {


    width:100%;


}



}
</style>