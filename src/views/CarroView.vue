<template>
    <div>
    <h1>Carros</h1>
    <div>
        <label for="nome">Nome</label>
            <InputText id="nome" type="text" v-model="nome" />
        <label for="anoFabricacao">Ano Fabricação</label>
            <InputText id="anoFabricacao" type="text" v-model="anoFabricacao" />  
        <label for="anoModelo">Ano Modelo</label>
            <InputText id="anoModelo" type="text" v-model="anoModelo" />  
        <label for="preco">Preço</label>
            <InputText id="preco" type="text" v-model="preco" />
        <label for="cor">Cor</label>
            <Dropdown :options="cores" optionLabel="nome" v-model="cor"/>
        <label for="marca">Marca</label>
            <Dropdown :options="marcas" optionLabel="nome" v-model="marca"/>
        <Button label="Novo" icon="pi pi-plus" class="p-button-raised p-button-rounded" iconPos="right"  @click="adicionar"/>
    </div>

    <DataTable :value="carros" sortField="id" :sortOrder="-1">
        <Column field="id" header="Id" :sortable="true" />
        <Column field="nome" header="Nome"  :sortable="true" />
        <Column field="anoFabricacao" header="Ano Fabricacao"  :sortable="true" />
        <Column field="anoModelo" header="Ano Modelo"  :sortable="true" />
        <Column field="preco" header="Preço"  :sortable="true" />
        <Column field="marca.nome" header="Marca"  :sortable="true" />
        <Column field="cor.nome" header="Cor"  :sortable="true" />
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
            carros:[],
            cores: [],
            marcas: []
        }
       },
       mounted(){
        let self = this;
        axios
        .get('https://carros-app-example.herokuapp.com/carro')
        .then(resp => self.carros = resp.data); 
        axios
        .get('https://carros-app-example.herokuapp.com/cor')
        .then(resp => self.cores = resp.data) 
        axios
        .get('https://carros-app-example.herokuapp.com/marca')
        .then(resp => self.marcas = resp.data) 
       },
       methods:{
        editar(carro){
            this.$router.push(`/carro-form/${carro.id}`)
        },
        deletar(carro){
            axios.delete(`https://carros-app-example.herokuapp.com/carro/${carro.id}`);
        },
        adicionar(){
            let carroPost= {
                nome: this.nome,
                anoFabricacao: this.anoFabricacao,
                anoModelo: this.anoModelo,
                preco: this.preco,
                cor: this.cor,
                marca: this.marca,
                ativo:true

            }
            axios.post(`https://carros-app-example.herokuapp.com/carro`, carroPost)
            this.nome = ""
            this.anoFabricacao = ""
            this.anoModelo = ""
            this.preco = ""
            this.reload()
        },

        reload(){
            let self = this;
            setTimeout(function() {
                axios.get('https://carros-app-example.herokuapp.com/carro', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(resp => {
                    self.carros = resp.data;
                })  
            }, 500)
        }
       }
    }
</script>