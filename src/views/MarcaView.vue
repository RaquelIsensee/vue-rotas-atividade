<template>
<div>
    <h1>Marcas</h1>
    <DataTable :value="marcas" sortField="id" :sortOrder="1">
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
            marcas:[]
        }
       },
       mounted(){
        let self = this;
        axios.get('https://carros-app-example.herokuapp.com/marca').then(resp => {
            self.marcas = resp.data;
        }) 
       },
       methods:{
        editar(marca){
            this.$router.push(`/marca-form/${marca.id}`)
        }
       }
    }
</script>

