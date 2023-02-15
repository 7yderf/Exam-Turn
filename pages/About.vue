<template>
    <div class="main-section">
        <div class="section-one">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-md-8 mt-2 text-white">
                        <div class="t-middle">
                            <p class="turn-f-s-64 l-h-80">
                                Nosotros
                            </p>
                            
                            <p class="">Queremos convertirnos en una de las principales compañías de México para el desarrollo de software.</p>
                        </div>
                        
                        <div class="turn-p-t-20">
                            <button class="btn btn-br-2 btn-primary text-white turn-m-r-20 turn-p-lr-24">
                                Cotiza tu desarrollo
                            </button>
                        </div>
                    </div>
    
                    <div class="col-12 col-md-4 p-0 turn-m-t-67 d-flex align-items-center justify-content-center">
                        <!-- <div class="float-left backlight"></div> -->
                        <img src="../assets/images/logo-with-bg-light.png" alt="turn" class=""/>
                    </div>
                </div>
            </div>
        </div>


        <div class="section-seven turn-m-t-120 turn-m-b-160">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-7 text-white">
                        <div class="">
                            <h2 class="">
                                Contáctanos
                            </h2>
                            
                            <h4 class="">Estamos encantados de oir tu proyecto.</h4>
                        </div>
                        
                        <div class="p-2">
                            <GlobalContact />
                        </div>
                    </div>
    
                </div>
            </div>
        </div>

        

    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    import axios from "axios";
    import * as yup from "yup";
    
    let validation_schema = yup.object().shape({
        first_name: yup.string().required(),
        company: yup.string().required(),
        email: yup.string().email(),
        
    });

    const onSubmit = async (values: any) => {
        console.log("valid ");

        values = values as string;
        console.log(values);

        return false;

        // submitButton.value!.disabled = true;
        // submitButton.value?.setAttribute("data-kt-indicator", "on");
        
        // try {
        //     let url = "https://jsonplaceholder.typicode.com/todos/1";
            
        //     const { data } = await axios.get(url);
        //     console.log(data);

        //     data_object.value = data;

        // } catch (error) {
        //     console.log(error);
        // }
    };

    const onInvalidSubmit = async (values: any) => {
        console.log("invalid ");

        values = values as string;
        console.log(values);

        

        return false;
    };


    onMounted(async () => {
       
    });



</script>