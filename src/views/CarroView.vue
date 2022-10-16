<template>
    <div>
    <h1>Carros</h1>
    <Button label="Novo" icon="pi pi-plus" class="p-button-raised p-button-rounded" iconPos="right"  @click="adicionar"/>

    <DataTable :value="carros" sortField="id" :sortOrder="-1">
        <Column field="id" header="Id" :sortable="true" />
        <Column field="nome" header="Nome"  :sortable="true" />
        <Column>
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-raised p-button-rounded" @click="editar(slotProps.data)"/>
                <Button icon="pi pi-trash" class="p-button-raised p-button-rounded" @click="deletar(slotProps.data)"/>
            </template>
        </Column>
    </DataTable>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
       data: function() {
        return {
            carros:[]
        }
       },
       mounted(){
        let self = this;
        axios
        .get('https://carros-app-example.herokuapp.com/carro')
        .then(resp => self.carros = resp.data) 
       },
       methods:{
        editar(carro){
            this.$router.push(`/carro-form/${carro.id}`)
        },
        deletar(carro){
            axios.delete(`https://carros-app-example.herokuapp.com/carro/${carro.id}`);
        },
        adicionar(){

        }
       }
    }
</script>