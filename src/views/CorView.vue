<template>
    <div>
        <h1>Cores</h1>
            <div>
                <label for="nome">Nome</label>
                    <InputText id="nome" type="text" v-model="nome" />
                <label for="rgb">RGB</label>
                    <InputText id="rgb" type="text" v-model="rgb" />    
            <Button label="Novo" icon="pi pi-plus" class="p-button-raised p-button-rounded" iconPos="right"  @click="adicionar"/>
            </div>
    <DataTable :value="cores" sortField="id" :sortOrder="-1">
        <Column field="id" header="Id" :sortable="true" />
        <Column field="nome" header="Nome"  :sortable="true" />
        <Column field="rgb" header="RGB"  :sortable="true" />
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
            cores:[],
            nome: null
        }
       },
       mounted(){
        let self = this;
        axios
        .get('https://carros-app-example.herokuapp.com/cor')
        .then(resp => self.cores = resp.data) 
       },
       methods:{
        editar(cor){
            this.$router.push(`/cor-form/${cor.id}`)
        },
        deletar(cor){
            axios.delete(`https://carros-app-example.herokuapp.com/cor/${cor.id}`);
        },
        adicionar(){
            let corPost= {
                nome: this.nome,
                rgb: this.rgb,
                ativo:true

            }
            axios.post(`https://carros-app-example.herokuapp.com/cor`, corPost)
            this.nome = ""
            this.rgb = ""
            this.reload()
        },
        reload(){
            let self = this;
            setTimeout(function() {
                axios.get('https://carros-app-example.herokuapp.com/cor', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(resp => {
                    self.cores = resp.data;
                })  
            }, 500)
        }
       }

    }
</script>