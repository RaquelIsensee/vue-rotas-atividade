<template>
  <div>
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script>
export default {
	data() {
		return {
			items: [
        {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
        {label: 'Sobre', icon: 'pi pi-fw pi-info-circle', to: '/about'},
        {label: 'Marca', icon: 'pi pi-fw pi-flag', to: '/marca'},
        {label: 'Carro', icon: 'pi pi-fw pi-car', to: '/carro'},
        {label: 'Cor', icon: 'pi pi-fw pi-palette', to: '/cor'},
      ]
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
