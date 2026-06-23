* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --verde-escuro: #1b4d3e;
    --verde-agro: #2e7d32;
    --verde-claro: #e8f5e9;
    --detalhe-verde: #c2f0c2;
    --cinza-fundo: #f4f7f5;
    --branco: #ffffff;
    --texto-escuro: #333333;
    --texto-claro: #666666;
}

body {
    background-color: var(--cinza-fundo);
    color: var(--texto-escuro);
    line-height: 1.6;
    padding-top: 70px;
}

header {
    background-color: var(--verde-escuro);
    color: var(--branco);
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

header .logo {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

header nav a {
    color: var(--branco);
    text-decoration: none;
    margin-left: 25px;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s ease;
}

header nav a:hover {
    color: var(--detalhe-verde);
}

.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), 
                url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--branco);
    padding: 0 20px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 3.2rem;
    margin-bottom: 15px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    font-weight: 700;
}

.hero p {
    font-size: 1.3rem;
    max-width: 700px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    font-weight: 300;
}

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
}

section {
    background: var(--branco);
    padding: 40px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
    color: var(--verde-escuro);
    font-size: 2rem;
    margin-bottom: 25px;
    border-bottom: 4px solid var(--detalhe-verde);
    padding-bottom: 8px;
    display: inline-block;
}

p {
    font-size: 1.1rem;
    color: var(--texto-claro);
    margin-bottom: 15px;
}

.grid-pilares {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 25px;
}

.card {
    background: #fafafa;
    border-top: 5px solid var(--verde-escuro);
    padding: 30px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.card h3 {
    color: var(--verde-agro);
    font-size: 1.4rem;
    margin-bottom: 12px;
}

.numero-agro {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--verde-escuro);
    display: block;
    margin-bottom: 5px;
}

.form-grupo {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: 25px;
}

.campo {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 150px;
}

.campo label {
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--texto-escuro);
}

.campo input, .campo select {
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

.campo input:focus, .campo select:focus {
    border-color: var(--verde-agro);
}

.btn-agro {
    background-color: var(--verde-escuro);
    color: var(--branco);
    border: none;
    padding: 14px 28px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.btn-agro:hover {
    background-color: var(--verde-agro);
}

.resultado-box {
    margin-top: 25px;
    padding: 20px;
    background-color: var(--verde-claro);
    border-left: 6px solid var(--verde-agro);
    border-radius: 4px;
    animation: fadeIn 0.5s ease;
}

footer {
    background-color: var(--verde-escuro);
    color: var(--branco);
    text-align: center;
    padding: 25px;
    font-size: 0.95rem;
    margin-top: 40px;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    body { padding-top: 120px; }
    header { flex-direction: column; padding: 15px; }
    header nav { margin-top: 15px; }
    header nav a { margin: 0 10px; font-size: 0.9rem; }
    .hero h1 { font-size: 2.2rem; }
    .hero p { font-size: 1.1rem; }
    section { padding: 20px; }
