app.component('footer-practica', {
  template: `
    <div class="bg-dark py-3 mt-2 text-white">
      <h3>{{ texto }}</h3>
    </div>
  `,

  data() {
    return {
      texto: "Nuevo Footer con variable"
    };
  },
});