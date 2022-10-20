<template>
    <div class="col-12 my-8">
        <h3>{{title}}</h3>
        <hr>
        <div class="row">
            <div v-for="feature in features" :key="feature.name" class="col-lg-6 d-flex p-3 px-10 border-bottom">
                <div class="col-6 fw-bolder">
                    {{feature.name}}
                </div>
                <div class="col-6 text-end">
                    {{feature.value}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ListFeatures',
    props:{
        title: String,
        features: Array
    },
    setup() {
            return {}
    }
}
</script>

<style>

</style>