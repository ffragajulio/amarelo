document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('http://localhost:3000/api/casos/adm')
    const result = await response.json()

    console.log(result);
})