const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Titolo',
        image: 'https://picsum.photos/200/300',
        end: 'Fine'
        
      }
    }
  }).mount('#app')