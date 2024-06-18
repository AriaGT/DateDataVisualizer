<script>
  import '../app.css'
</script>

<div class="page">
  <header>
    <h1>Date Data Visualizer 📅</h1>
  </header>
  <main>
    <slot />
  </main>
</div>

<style lang="less">
  .page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  header {
    width: 100%;
    background-color: var(--main);
    height: 4rem;
    align-content: center;
    text-align: center;
    h1 {
      color: #333;
      font-weight: 600;
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  main {
    flex: 1;
    display: grid;
    place-items: center;
  }
</style>