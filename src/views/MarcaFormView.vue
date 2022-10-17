<template>
<div>
    <h1>Edição de marcas</h1>
    <p>{{paramId}}</p>  
    <label for="nome">Nome:</label>
    <InputText id="nome" type="text" v-model="nome" /><br/><br/>
    <Button label="Editar" icon="pi pi-pencil" class="p-button-raised p-button-rounded" iconPos="right"  @click="editar"/>

</div>
</template>

<script>

import { useRoute } from 'vue-router';
import axios from 'axios'

var globalParamId = null;

export default{
    setup() {
        const route = useRoute();
        globalParamId = route.params.id;
    },
    data: () => ({
        nome: '',
        paramId: globalParamId
    }),
    methods:{
        editar(marca){
            let marcaEdit= {
                nome: this.nome
            }
            axios.put(`https://carros-app-example.herokuapp.com/marca/${globalParamId}`, marcaEdit)
        },
        }
}
</script>