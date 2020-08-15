Vue.component('hijo',{
    template: /*html*/
    `
   <div class="py-5 bg-success text-white">
   <h4>componente hijo: {{numero}}</h4> 
   <h4>Nombre: {{nombre}}</h4>
   </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre: 'jesus'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    },
})