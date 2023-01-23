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
            font-size: 50px;
        }
    </style>
