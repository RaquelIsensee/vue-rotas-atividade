<template>
<div>
    <h1>Edição de marcas</h1>
    <p>{{paramId}}</p>  
    <label for="nome">Nome:</label>
    <input type="text" id="nome" v-model="nome" size="30" required autofocus><br/>
    <input type="button" value="Editar" :click="editar()"/>
</div>
</template>

<script>

import { useRoute } from 'vue-router';

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
            //como atualizar o array?
        }
    }
}
</script>