﻿document.addEventListener('DOMContentLoaded', () => {
    let cardQueEstaPasando = document.getElementById('cardQueEstaPasando');
    let Tendencia;
    const tendenciasTwitter = [
        { nombre: "F1", posts: 5000, tipo: "Deportes - Tendencia" },
        { nombre: "Max Verstappen", posts: 3000, tipo: "Deportes - Tendencia" },
        { nombre: "Fallout 4", posts: 1500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Elecciones presidenciales", posts: 2000, tipo: "Política" },
        { nombre: "Lewis Hamilton", posts: 3500, tipo: "Deportes - Tendencia" },
        { nombre: "Brexit", posts: 2500, tipo: "Política" },
        { nombre: "Call of Duty", posts: 1800, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra civil", posts: 2200, tipo: "Guerra" },
        { nombre: "Sebastian Vettel", posts: 2800, tipo: "Deportes - Tendencia" },
        { nombre: "Assassin's Creed", posts: 1700, tipo: "Videojuegos - Tendencia" },
        { nombre: "Liga de Campeones", posts: 4000, tipo: "Deportes - Tendencia" },
        { nombre: "The Witcher 3", posts: 2100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Donald Trump", posts: 2700, tipo: "Política" },
        { nombre: "Brecha salarial", posts: 1900, tipo: "Política" },
        { nombre: "Mario Kart", posts: 1600, tipo: "Videojuegos - Tendencia" },
        { nombre: "Segunda Guerra Mundial", posts: 2400, tipo: "Guerra" },
        { nombre: "Valtteri Bottas", posts: 2600, tipo: "Deportes - Tendencia" },
        { nombre: "Red Dead Redemption 2", posts: 2300, tipo: "Videojuegos - Tendencia" },
        { nombre: "Joe Biden", posts: 3200, tipo: "Política" },
        { nombre: "Cambio climático", posts: 2900, tipo: "política" },
        { nombre: "Fortnite", posts: 1400, tipo: "Videojuegos - Tendencia" },
        { nombre: "Primera Guerra Mundial", posts: 3300, tipo: "Guerra" },
        { nombre: "Mercedes AMG", posts: 1800, tipo: "Deportes - Tendencia" },
        { nombre: "Cyberpunk 2077", posts: 2200, tipo: "Videojuegos - Tendencia" },
        { nombre: "Hillary Clinton", posts: 2500, tipo: "Política" },
        { nombre: "Derechos humanos", posts: 2900, tipo: "Política" },
        { nombre: "Overwatch", posts: 1500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Vietnam War", posts: 2100, tipo: "Guerra" },
        { nombre: "McLaren", posts: 3200, tipo: "Deportes - Tendencia" },
        { nombre: "GTA V", posts: 2000, tipo: "Videojuegos - Tendencia" },
        { nombre: "Barack Obama", posts: 2800, tipo: "Política" },
        { nombre: "Migración", posts: 2400, tipo: "Política" },
        { nombre: "Minecraft", posts: 1700, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra Fría", posts: 3100, tipo: "Guerra" },
        { nombre: "Fernando Alonso", posts: 2700, tipo: "Deportes - Tendencia" },
        { nombre: "The Last of Us", posts: 1900, tipo: "Videojuegos - Tendencia" },
        { nombre: "Vladimir Putin", posts: 2600, tipo: "Política" },
        { nombre: "Libertad de expresión", posts: 2300, tipo: "Política" },
        { nombre: "League of Legends", posts: 1600, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra de Vietnam", posts: 3000, tipo: "Guerra" },
        { nombre: "Scuderia Ferrari", posts: 3000, tipo: "Deportes - Tendencia" },
        { nombre: "Zelda Breath of the Wild", posts: 1800, tipo: "Videojuegos - Tendencia" },
        { nombre: "Xi Jinping", posts: 2500, tipo: "Política" },
        { nombre: "Democracia", posts: 2800, tipo: "Política" },
        { nombre: "World of Warcraft", posts: 1400, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra del Golfo", posts: 3200, tipo: "Guerra" },
        { nombre: "NBA", posts: 3100, tipo: "Deportes - Tendencia" },
        { nombre: "GTA San Andreas", posts: 1700, tipo: "Videojuegos - Tendencia" },
        { nombre: "Emmanuel Macron", posts: 2400, tipo: "Política" },
        { nombre: "Refugiados", posts: 2600, tipo: "Política" },
        { nombre: "Pokémon", posts: 1500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra de Corea", posts: 2900, tipo: "Guerra" },
        { nombre: "Real Madrid", posts: 2900, tipo: "Deportes - Tendencia" },
        { nombre: "Counter-Strike", posts: 1600, tipo: "Videojuegos - Tendencia" },
        { nombre: "Angela Merkel", posts: 2200, tipo: "Política" },
        { nombre: "Terrorismo", posts: 2300, tipo: "Política" },
        { nombre: "Fortnite Battle Royale", posts: 2000, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra de Irak", posts: 3100, tipo: "Guerra" },
        { nombre: "Formula E", posts: 3000, tipo: "Deportes - Tendencia" },
        { nombre: "Gears of War", posts: 1800, tipo: "Videojuegos - Tendencia" },
        { nombre: "Justin Trudeau", posts: 2700, tipo: "Política" },
        { nombre: "Inmigración", posts: 2500, tipo: "Política" },
        { nombre: "Super Mario", posts: 1400, tipo: "Videojuegos - Tendencia" },
        { nombre: "Guerra de Afganistán", posts: 3200, tipo: "Guerra" },
        { nombre: "Premier League", posts: 3100, tipo: "Deportes - Tendencia" },
        { nombre: "Star Wars", posts: 2800, tipo: "Cine" },
        { nombre: "Amazon Rainforest", posts: 2300, tipo: "Medio ambiente" },
        { nombre: "NHL", posts: 3200, tipo: "Deportes - Tendencia" },
        { nombre: "SpaceX", posts: 2900, tipo: "Ciencia" },
        { nombre: "Climate Change", posts: 2700, tipo: "Política - Tendencia" },
        { nombre: "Netflix Originals", posts: 3100, tipo: "Entretenimiento" },
        { nombre: "Renewable Energy", posts: 2600, tipo: "Tecnología - Tendencia" },
        { nombre: "Hiking Trails", posts: 2400, tipo: "Estilo de vida" },
        { nombre: "Premier League", posts: 3300, tipo: "Deportes - Tendencia" },
        { nombre: "National Parks", posts: 2500, tipo: "Medio ambiente" },
        { nombre: "AI Advancements", posts: 3000, tipo: "Tecnología - Tendencia" },
        { nombre: "Concert Tours", posts: 2200, tipo: "Música - Tendencia" },
        { nombre: "Virtual Reality", posts: 2100, tipo: "Tecnología" },
        { nombre: "Olympic Games", posts: 3400, tipo: "Deportes - Tendencia" },
        { nombre: "Climate Action", posts: 2800, tipo: "Política - Tendencia" },
        { nombre: "Documentary Films", posts: 2300, tipo: "Cine - Tendencia" },
        { nombre: "Sustainable Fashion", posts: 3200, tipo: "Estilo de vida" },
        { nombre: "Formula 1 Races", posts: 2900, tipo: "Deportes - Tendencia" },
        { nombre: "Space Exploration", posts: 2700, tipo: "Ciencia - Tendencia" },
        { nombre: "Video Game Releases", posts: 3100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Cultural Festivals", posts: 2600, tipo: "Eventos - Tendencia" },
        { nombre: "Wildlife Conservation", posts: 2400, tipo: "Medio ambiente" },
        { nombre: "Tech Startups", posts: 3300, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Living", posts: 2500, tipo: "Estilo de vida" },
        { nombre: "PGA Tour", posts: 3000, tipo: "Deportes - Tendencia" },
        { nombre: "Global Health", posts: 2200, tipo: "Salud - Tendencia" },
        { nombre: "Art Exhibitions", posts: 2100, tipo: "Arte - Tendencia" },
        { nombre: "Solar Power", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Live Music Events", posts: 2800, tipo: "Música - Tendencia" },
        { nombre: "Climate Crisis", posts: 2300, tipo: "Política - Tendencia" },
        { nombre: "New Movie Releases", posts: 3200, tipo: "Cine - Tendencia" },
        { nombre: "Healthy Eating", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "Esports Tournaments", posts: 2700, tipo: "Deportes - Tendencia" },
        { nombre: "Astrophotography", posts: 3100, tipo: "Ciencia - Tendencia" },
        { nombre: "Book Recommendations", posts: 2600, tipo: "Literatura - Tendencia" },
        { nombre: "Renewable Technologies", posts: 2400, tipo: "Tecnología - Tendencia" },
        { nombre: "Outdoor Adventures", posts: 3300, tipo: "Estilo de vida" },
        { nombre: "TikTok Trends", posts: 2500, tipo: "Redes sociales - Tendencia" },
        { nombre: "Mental Health Awareness", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Independent Films", posts: 2200, tipo: "Cine - Tendencia" },
        { nombre: "Eco-Friendly Travel", posts: 2100, tipo: "Viajes - Tendencia" },
        { nombre: "AI Ethics", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Digital Art", posts: 2800, tipo: "Arte - Tendencia" },
        { nombre: "Climate Solutions", posts: 2300, tipo: "Política - Tendencia" },
        { nombre: "Gaming Communities", posts: 3200, tipo: "Videojuegos - Tendencia" },
        { nombre: "Healthy Living", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "Extreme Sports", posts: 2700, tipo: "Deportes - Tendencia" },
        { nombre: "Space Missions", posts: 3100, tipo: "Ciencia - Tendencia" },
        { nombre: "DIY Projects", posts: 2600, tipo: "Hogar - Tendencia" },
        { nombre: "Green Living", posts: 2400, tipo: "Medio ambiente" },
        { nombre: "Coding Bootcamps", posts: 3300, tipo: "Tecnología - Tendencia" },
        { nombre: "Virtual Art Exhibits", posts: 2500, tipo: "Arte - Tendencia" },
        { nombre: "Vegan Recipes", posts: 3000, tipo: "Cocina - Tendencia" },
        { nombre: "Sustainable Transportation", posts: 2200, tipo: "Medio ambiente" },
        { nombre: "Conspiracy Theories", posts: 2100, tipo: "Política - Tendencia" },
        { nombre: "Indie Music", posts: 3400, tipo: "Música - Tendencia" },
        { nombre: "Virtual Reality Gaming", posts: 3200, tipo: "Videojuegos - Tendencia" },
        { nombre: "Space Tourism", posts: 3100, tipo: "Ciencia - Tendencia" },
        { nombre: "Digital Art", posts: 3000, tipo: "Arte - Tendencia" },
        { nombre: "Sustainable Travel", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "Streaming Services", posts: 2800, tipo: "Entretenimiento" },
        { nombre: "Renewable Energy Sources", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Healthy Living Tips", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Mobile Gaming", posts: 2500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Space Exploration Missions", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Modern Architecture", posts: 2300, tipo: "Arquitectura - Tendencia" },
        { nombre: "Eco-Friendly Products", posts: 2200, tipo: "Estilo de vida" },
        { nombre: "Social Media Trends", posts: 2100, tipo: "Redes sociales - Tendencia" },
        { nombre: "AI Robotics", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Healthy Cooking Recipes", posts: 3300, tipo: "Estilo de vida" },
        { nombre: "Console Gaming", posts: 3200, tipo: "Videojuegos - Tendencia" },
        { nombre: "Space Colonization", posts: 3100, tipo: "Ciencia - Tendencia" },
        { nombre: "Street Art", posts: 3000, tipo: "Arte - Tendencia" },
        { nombre: "Adventure Travel", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "TV Show Premieres", posts: 2800, tipo: "Entretenimiento - Tendencia" },
        { nombre: "Smart Home Technology", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Organic Farming", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "PC Gaming", posts: 2500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Astronomy Discoveries", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Fashion Trends", posts: 2300, tipo: "Moda - Tendencia" },
        { nombre: "Sustainable Transportation", posts: 2200, tipo: "Estilo de vida" },
        { nombre: "Influencer Marketing", posts: 2100, tipo: "Redes sociales - Tendencia" },
        { nombre: "Medical Breakthroughs", posts: 3400, tipo: "Salud - Tendencia" },
        { nombre: "Plant-Based Diet", posts: 3300, tipo: "Estilo de vida" },
        { nombre: "Indie Game Development", posts: 3200, tipo: "Videojuegos - Tendencia" },
        { nombre: "Astrophysics", posts: 3100, tipo: "Ciencia - Tendencia" },
        { nombre: "Digital Marketing", posts: 3000, tipo: "Tecnología - Tendencia" },
        { nombre: "Healthy Lifestyle", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "Board Game Cafes", posts: 2800, tipo: "Entretenimiento" },
        { nombre: "Blockchain Technology", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Minimalist Living", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Retro Gaming", posts: 2500, tipo: "Videojuegos - Tendencia" },
        { nombre: "Space Telescopes", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Street Food", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Influential Bloggers", posts: 2200, tipo: "Redes sociales - Tendencia" },
        { nombre: "Telemedicine", posts: 2100, tipo: "Salud - Tendencia" },
        { nombre: "Sustainable Fashion Brands", posts: 3400, tipo: "Estilo de vida" },
        { nombre: "Indie Film Festivals", posts: 3300, tipo: "Cine - Tendencia" },
        { nombre: "Green Energy Solutions", posts: 3200, tipo: "Tecnología - Tendencia" },
        { nombre: "Mindfulness Practices", posts: 3100, tipo: "Estilo de vida" },
        { nombre: "Online Learning Platforms", posts: 3000, tipo: "Educación - Tendencia" },
        { nombre: "Video Game Streaming", posts: 2900, tipo: "Videojuegos - Tendencia" },
        { nombre: "Space Station Updates", posts: 2800, tipo: "Ciencia - Tendencia" },
        { nombre: "Street Photography", posts: 2700, tipo: "Fotografía - Tendencia" },
        { nombre: "Fitness Wearables", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Retro Fashion", posts: 2500, tipo: "Moda - Tendencia" },
        { nombre: "Space Agencies", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Urban Gardening", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Social Media Influencers", posts: 2200, tipo: "Redes sociales - Tendencia" },
        { nombre: "Telecommuting", posts: 2100, tipo: "Tecnología - Tendencia" },
        { nombre: "Cryptocurrency Trends", posts: 3200, tipo: "Finanzas - Tendencia" },
        { nombre: "Green Living", posts: 3100, tipo: "Estilo de vida" },
        { nombre: "Virtual Fitness Classes", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Digital Nomad Lifestyle", posts: 2900, tipo: "Estilo de vida" },
        { nombre: "Esports Leagues", posts: 2800, tipo: "Deportes electrónicos - Tendencia" },
        { nombre: "Space Technologies", posts: 2700, tipo: "Ciencia - Tendencia" },
        { nombre: "Eco-Friendly Travel", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Online Shopping Trends", posts: 2500, tipo: "Compras - Tendencia" },
        { nombre: "Space Colonization", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Sustainable Architecture", posts: 2300, tipo: "Arquitectura - Tendencia" },
        { nombre: "Remote Work Tips", posts: 2200, tipo: "Trabajo - Tendencia" },
        { nombre: "Healthy Snack Ideas", posts: 2100, tipo: "Salud - Tendencia" },
        { nombre: "Blockchain Innovations", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Minimalist Fashion", posts: 3300, tipo: "Moda - Tendencia" },
        { nombre: "DIY Home Decor", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "Virtual Reality Experiences", posts: 3100, tipo: "Tecnología - Tendencia" },
        { nombre: "Holistic Wellness", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Online Learning Trends", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Gaming Conventions", posts: 2800, tipo: "Eventos - Tendencia" },
        { nombre: "Artificial Intelligence", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Clothing Brands", posts: 2600, tipo: "Moda - Tendencia" },
        { nombre: "Home Office Design", posts: 2500, tipo: "Trabajo - Tendencia" },
        { nombre: "Space Exploration Updates", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Mindful Living", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Cryptocurrency Investments", posts: 2200, tipo: "Finanzas - Tendencia" },
        { nombre: "Eco-Friendly Products", posts: 2100, tipo: "Estilo de vida" },
        { nombre: "Tech Gadgets", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Vintage Fashion", posts: 3300, tipo: "Moda - Tendencia" },
        { nombre: "Home Renovation Tips", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "VR Gaming Accessories", posts: 3100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Mental Health Tips", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Remote Learning Strategies", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Esports Teams", posts: 2800, tipo: "Deportes electrónicos - Tendencia" },
        { nombre: "Future Space Missions", posts: 2700, tipo: "Ciencia - Tendencia" },
        { nombre: "Sustainable Travel Destinations", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Online Retail Trends", posts: 2500, tipo: "Compras - Tendencia" },
        { nombre: "Astronomy Discoveries", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Minimalist Home Decor", posts: 2300, tipo: "Hogar - Tendencia" },
        { nombre: "Remote Work Tools", posts: 2200, tipo: "Trabajo - Tendencia" },
        { nombre: "Healthy Cooking Tips", posts: 2100, tipo: "Salud - Tendencia" },
        { nombre: "Blockchain Applications", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Living Tips", posts: 3300, tipo: "Estilo de vida" },
        { nombre: "DIY Projects", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "Virtual Reality Games", posts: 3100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Holistic Health", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Online Education Platforms", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Gaming Industry Trends", posts: 2800, tipo: "Videojuegos - Tendencia" },
        { nombre: "AI Development", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Eco-Friendly Fashion", posts: 2600, tipo: "Moda - Tendencia" },
        { nombre: "Work From Home Essentials", posts: 2500, tipo: "Trabajo - Tendencia" },
        { nombre: "Space Exploration Technologies", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Mindfulness Practices", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Cryptocurrency News", posts: 2200, tipo: "Finanzas - Tendencia" },
        { nombre: "Sustainable Lifestyle", posts: 2100, tipo: "Estilo de vida" },
        { nombre: "AI in Healthcare", posts: 3200, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Fashion", posts: 3100, tipo: "Moda - Tendencia" },
        { nombre: "Home Workout Tips", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Digital Learning Platforms", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Virtual Reality Headsets", posts: 2800, tipo: "Tecnología - Tendencia" },
        { nombre: "Climate Change Solutions", posts: 2700, tipo: "Medio ambiente - Tendencia" },
        { nombre: "Healthy Eating Habits", posts: 2600, tipo: "Salud - Tendencia" },
        { nombre: "E-commerce Trends", posts: 2500, tipo: "Comercio electrónico - Tendencia" },
        { nombre: "Space Exploration Technologies", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Minimalist Lifestyle", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Remote Work Strategies", posts: 2200, tipo: "Trabajo - Tendencia" },
        { nombre: "Mental Health Awareness", posts: 2100, tipo: "Salud - Tendencia" },
        { nombre: "Blockchain Technology", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Ethical Fashion", posts: 3300, tipo: "Moda - Tendencia" },
        { nombre: "DIY Home Improvement", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "Virtual Reality Experiences", posts: 3100, tipo: "Tecnología - Tendencia" },
        { nombre: "Mental Wellness", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Online Education Trends", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Gaming Industry Insights", posts: 2800, tipo: "Videojuegos - Tendencia" },
        { nombre: "Artificial Intelligence", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Fashion Brands", posts: 2600, tipo: "Moda - Tendencia" },
        { nombre: "Home Office Design", posts: 2500, tipo: "Trabajo - Tendencia" },
        { nombre: "Space Exploration Discoveries", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Mindfulness Practices", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Cryptocurrency Investments", posts: 2200, tipo: "Finanzas - Tendencia" },
        { nombre: "Eco-Friendly Products", posts: 2100, tipo: "Estilo de vida" },
        { nombre: "Tech Gadgets", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Vintage Fashion", posts: 3300, tipo: "Moda - Tendencia" },
        { nombre: "Home Renovation Tips", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "VR Gaming Accessories", posts: 3100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Mental Health Tips", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Remote Learning Strategies", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Esports Teams", posts: 2800, tipo: "Deportes electrónicos - Tendencia" },
        { nombre: "Future Space Missions", posts: 2700, tipo: "Ciencia - Tendencia" },
        { nombre: "Sustainable Travel Destinations", posts: 2600, tipo: "Estilo de vida" },
        { nombre: "Online Retail Trends", posts: 2500, tipo: "Comercio electrónico - Tendencia" },
        { nombre: "Astronomy Discoveries", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Minimalist Home Decor", posts: 2300, tipo: "Hogar - Tendencia" },
        { nombre: "Remote Work Tools", posts: 2200, tipo: "Trabajo - Tendencia" },
        { nombre: "Healthy Cooking Tips", posts: 2100, tipo: "Salud - Tendencia" },
        { nombre: "Blockchain Applications", posts: 3400, tipo: "Tecnología - Tendencia" },
        { nombre: "Sustainable Lifestyle", posts: 3300, tipo: "Estilo de vida" },
        { nombre: "DIY Projects", posts: 3200, tipo: "Hogar - Tendencia" },
        { nombre: "Virtual Reality Games", posts: 3100, tipo: "Videojuegos - Tendencia" },
        { nombre: "Holistic Health", posts: 3000, tipo: "Salud - Tendencia" },
        { nombre: "Online Education Platforms", posts: 2900, tipo: "Educación - Tendencia" },
        { nombre: "Gaming Industry Trends", posts: 2800, tipo: "Videojuegos - Tendencia" },
        { nombre: "AI Development", posts: 2700, tipo: "Tecnología - Tendencia" },
        { nombre: "Eco-Friendly Fashion", posts: 2600, tipo: "Moda - Tendencia" },
        { nombre: "Work From Home Essentials", posts: 2500, tipo: "Trabajo - Tendencia" },
        { nombre: "Space Exploration Technologies", posts: 2400, tipo: "Ciencia - Tendencia" },
        { nombre: "Mindfulness Practices", posts: 2300, tipo: "Estilo de vida" },
        { nombre: "Cryptocurrency News", posts: 2200, tipo: "Finanzas - Tendencia" },
        { nombre: "Sustainable Lifestyle", posts: 2100, tipo: "Estilo de vida" }
    ];

    let TendenciasActuales = [];

    function ActualizarTendencias() {
        TendenciasActuales = [];
        for (i = 0; i <= 4; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 283) + 1;
            TendenciasActuales.push(tendenciasTwitter[numeroAleatorio]);
        }
        cardQueEstaPasando.innerHTML = "";
        Tendencia = '';
        try {
            TendenciasActuales.forEach((tendencia) => {
                Tendencia += `
            <div class="ContenedorTendencia">
                <div class="Tendencia">
                    <p id="TituloTipoTendencia" class="TituloTipoTendencia">${tendencia.tipo}</p>
                    <p id="DescripcionTendencia" class="DescripcionTendencia">${tendencia.nombre}</p>
                    <p id="CantidadPosts" class="CantidadPosts">${tendencia.posts} posts</p>
                </div>
            </div>
            `;
            });
        } catch (error) {
            console.log("Error:", error);
        }


        let Titulo = '<P class="titleQEP">Qué está pasando</P>';
        let Footer = '<div class="row"><button class="mostrarMasTendencias">Mostrar más</button></div>';
        cardQueEstaPasando.innerHTML += Titulo + Tendencia + Footer;       
    }

    ActualizarTendencias();
    setInterval(ActualizarTendencias, 8000)
});


