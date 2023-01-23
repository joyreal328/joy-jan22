<script>
    export let title
    export let date

</script>
    
    <article>
      <h1 class="title">Hi, {title}</h1>
    
      <p>Published: {date}</p>
    
      <slot />
    </article>



<style>
    .title {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>