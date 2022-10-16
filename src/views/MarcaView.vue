<template>
<div>
    <h1>Marcas</h1>
    <div>
        <label for="nome">Nome</label>
        <InputText id="nome" type="text" v-model="nome" />
        <Button label="Novo" icon="pi pi-plus" class="p-button-raised p-button-rounded" iconPos="right"  @click="adicionar"/>
    </div>
    <DataTable :value="marcas" sortField="id" :sortOrder="-1">
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
import { ResolveLoader } from 'webpack-chain';
    export default{
       data: function() {
        return {
            marcas:[],
            nome: null
        }
       },
       mounted(){
        let self = this;
        axios.get('https://carros-app-example.herokuapp.com/marca', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resp => {
            self.marcas = resp.data;
        }) 
       },
       methods:{
        editar(marca){
            this.$router.push(`/marca-form/${marca.id}`)
        },
        deletar(marca){
            axios.delete(`https://carros-app-example.herokuapp.com/marca/${marca.id}`);
            this.reload()
        },
        adicionar(){
            let marcaPost= {
                nome: this.nome
            }
            axios.post(`https://carros-app-example.herokuapp.com/marca`, marcaPost)
            this.nome = ""
            this.reload()
        },
        reload(){
            let self = this;
            setTimeout(function() {
                axios.get('https://carros-app-example.herokuapp.com/marca', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(resp => {
                    self.marcas = resp.data;
                })  
            }, 500)
        }
       }
    }
</script>

