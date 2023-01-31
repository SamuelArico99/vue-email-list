const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Lista di E-mail',
      emails: []
    }
  },

  methods: {
    
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp)=>{
            console.log('Nuova e-mail: ' , resp.data.response);
            this.emails.push(resp.data.response);
        });
        
    }
  }
}).mount('#app');