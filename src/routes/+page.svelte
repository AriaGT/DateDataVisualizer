<script lang="ts">
  import {
    getDayOfWeek,
    getIsLeapYear,
    getMonthData,
    getMonthDays,
    getMonthName,
    isToday
  } from '@/utils'

  let day: number | null
  let month: number | null
  let year: number | null
  let dayOfWeek: string | null
  let monthDays = 31
  let monthName: string | null
  let monthData: { month: string; zodiac_sign: string } | null
  let isLeapYear: boolean | null
  let shouldShowData = false

  $: {
    if (month && day && year) {
      monthDays = getMonthDays(month)
      monthName = getMonthName(month)
      monthData = getMonthData(day, month) || null
      isLeapYear = getIsLeapYear(year)
      dayOfWeek = getDayOfWeek(day, month, year)
      if (day > monthDays) day = monthDays
      if (year < 1582) shouldShowData = false
    }
  }

  const onSubmit = (e: Event) => {
    shouldShowData = true
  }
</script>

<div class="content">
  <section class="section__container">
    <header>
      <h2>{ shouldShowData
        ? "Los datos de esta fecha ya están listos"
        : "Por favor, ingrese una fecha"
      } 🤗:</h2>
    </header>
    <form on:submit={onSubmit}>
      <label>
        Día:
        <input type="number" bind:value={day} min="1" max={monthDays} />
      </label>
      <label for="month">
        Mes:
        <input type="number" bind:value={month} min="1" max="12" />
      </label>
      <label for="year">
        Año:
        <input type="number" bind:value={year} min="1582" />
      </label>
      <button disabled={!day || !month || !year} type="submit">Mostrar datos 🧐</button>
    </form>
  </section>
  <section class="section__container">
    {#if day && month && year && shouldShowData}
      <header>
        <h2>{ isToday(day, month, year) ? "Aquí están los datos de hoy" : "Aquí están los datos de la fecha que ingresó" } 📅:</h2>
      </header>
      <div class="data__container">
        <div>
          <h3>Nombre de la fecha ☀️:</h3>
          <p>{dayOfWeek}, {day} de {monthName} {year < 2000 ? "de" : "del"} {year}</p>
        </div>
        <div>
          <h3>¿Es año bisiesto? 🤔:</h3>
          <p>{isLeapYear ? "Sí" : "No"}</p>
        </div>
        <div>
          <h3>Si naciste esta fecha, tu signo es 🌠:</h3>
          <p>{monthData?.zodiac_sign}</p>
        </div>
      </div>
    {:else}
      <h2>Esperando datos...</h2>
    {/if}
  </section>
</div>

<style>
  .content {
    display: flex;
    gap: 5rem;
    width: 100%;
    max-width: calc(500px * 2 + 5rem);
  }
  @media (max-width: 768px) {
    .content {
      padding: 0 2rem;
      flex-direction: column;
      gap: 2rem;
    }
  }
  .section__container {
    width: 100%;
    max-width: 500px;
  }
  .data__container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.25rem;
    margin-bottom: 2rem;
    height: 4rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: .6rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  p {
    color: #333;
  }
  button {
    margin: 0 auto;
    background-color: var(--main);
    padding: .6rem 2rem;
    border-radius: .4rem;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--main-dark);
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
