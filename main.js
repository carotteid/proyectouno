const app = Vue.createApp({
  data() {
    return {
      titulo: 'Proyecto Operaciones y Componentes VueJs',
      cantidad: 0,
      enlace: "https://www.ugto.mx",
      estado: false,
      servicios: ['transferencias', 'pagos', 'giros', 'retiros'],
      desactivar: false,
    };
  },

  methods:{
    agregarSaldo( valor ) {
      this.cantidad = this.cantidad + 50;
    },

    disminuirSaldo() {
      if( this.cantidad === 0 ) {
        this.desactivar = true;
        alert('Tu saldo actual es 0 :c');
        return;
      }
      this.cantidad = this.cantidad - 50;
    },
  },

  computed: {
    colorCantidad() {
      return this.cantidad > 500 ? 'text-success' : 'text-danger';
    },

    textoMayuscula() {
      return this.titulo.toUpperCase();
    },
  },
});