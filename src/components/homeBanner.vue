<script>





</script>





<template>  <main class="banner-container">
        
        <section class="banner-card">
            <div class="banner-content">
                <h1 class="banner-title">Descubra seu próximo livro</h1>
                <p class="banner-subtitle">Histórias selecionadas para transformar a sua rotina.</p>
                <a href="#" class="banner-button">Ver Livros</a>
            </div>
        </section>

    </main>
</template>



<style scoped>








body {
    
    background-color: #f8f9fa; 
    color: #212529; 
    line-height: 1.5;
}

.banner-container {
  
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
;}

.banner-card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 100%;;
    border-radius: 8px; 
    text-align: center;
    background-image: linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(/public/images/biblioteca.png
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    min-height: 65vh;
}

.banner-content {
    max-width: 520px;
    margin: 0 auto;

}


.banner-title {
    font-size: 2.25rem; 
    font-weight: 600;
    margin-bottom: 16px;
    color: #ffffff;
}

.banner-subtitle {
    font-size: 1.05rem;
    font-weight: 300;
    color: #a1a1a1; 
    margin-bottom: 36px;
}

.banner-button {
    display: inline-block;
    background-color: #1a1a1a; 
    color: #ffffff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 14px 32px;
    border-radius: 4px; 
}


.banner-button:hover {
    background-color: #333333;
}















</style>