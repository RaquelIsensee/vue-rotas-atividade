<template>
    <div>
    <h1>Carros</h1>
    <DataTable :value="carros" sortField="id" :sortOrder="1">
        <Column field="id" header="Id" :sortable="true" />
        <Column field="nome" header="Nome"  :sortable="true" />
        <Column>
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-raised p-button-rounded" @click="editar(slotProps.data)"/>
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
       }
    }
</script>