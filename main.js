const app = Vue.createApp({
  data() {
    return{
      titulo: 'Proyecto Operaciones y Componentes VueJs',
      cantidad: 500,
      enlace: "https://www.ugto.mx",
      estado: true,
      servicios: ['transferencias', 'pagos', 'giros'],
    };
  },
  methods:{
    agregarSaldo() {
      this.cantidad = this.cantidad + 50;
    },
  },
});