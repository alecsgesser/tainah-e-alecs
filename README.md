# 💍 Wedding Site — Tainah & Alecsander

Website de casamento elegante construído com **React + MUI (Material UI)**, pronto para deploy no **GitHub Pages**.

---

## 🗂️ Estrutura de Pastas

```
wedding-site/
├── public/
│   ├── FOTOS/           ← 📸 Coloque TODAS as fotos aqui
│   │   ├── hero.jpg         (foto principal do casal - 1920x1080)
│   │   ├── story1.jpg       (primeiro encontro)
│   │   ├── story2.jpg       (primeiro "eu te amo")
│   │   ├── story3.jpg       (pedido de casamento)
│   │   ├── story4.jpg       (o grande dia)
│   │   ├── gallery1.jpg     (galeria - destaque, 16:9)
│   │   ├── gallery2.jpg     (galeria)
│   │   ├── gallery3.jpg     (galeria)
│   │   ├── gallery4.jpg     (galeria)
│   │   ├── gallery5.jpg     (galeria)
│   │   ├── gallery6.jpg     (galeria - destaque, 16:9)
│   │   ├── gallery7.jpg     (galeria)
│   │   ├── gallery8.jpg     (galeria)
│   │   ├── venue.jpg        (local do evento)
│   │   ├── rsvp-bg.jpg      (fundo da seção RSVP)
│   │   ├── bm1.jpg          (dama de honra 1)
│   │   ├── bm2.jpg          (dama de honra 2)
│   │   ├── bm3.jpg          (dama de honra 3)
│   │   ├── bm4.jpg          (dama de honra 4)
│   │   ├── gm1.jpg          (padrinho 1)
│   │   ├── gm2.jpg          (padrinho 2)
│   │   ├── gm3.jpg          (padrinho 3)
│   │   └── gm4.jpg          (padrinho 4)
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── Countdown.js
│   │   ├── OurStory.js
│   │   ├── Gallery.js
│   │   ├── EventDetails.js
│   │   ├── BridesGroomsParty.js
│   │   ├── RSVP.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🚀 Como Usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar localmente
```bash
npm start
```

### 3. Personalizar o conteúdo
Edite os arquivos em `src/sections/` para:
- Alterar nomes, datas e locais
- Atualizar textos de história
- Modificar padrinhos e damas

### 4. Adicionar suas fotos
Coloque todas as fotos na pasta `public/FOTOS/` com os nomes corretos (listados acima).

---

## 📦 Deploy no GitHub Pages

### Passo 1 — Configure o `package.json`
Abra o `package.json` e altere a linha `homepage`:
```json
"homepage": "https://SEU-USUARIO.github.io/NOME-DO-REPO"
```

### Passo 2 — Crie o repositório no GitHub
```bash
git init
git add .
git commit -m "🎉 Wedding site inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

### Passo 3 — Deploy
```bash
npm run deploy
```

Isso vai:
1. Fazer o build do projeto
2. Publicar automaticamente no GitHub Pages

### Passo 4 — Acesse seu site
Após ~2 minutos: `https://SEU-USUARIO.github.io/NOME-DO-REPO`

---

## 🎨 Personalização Rápida

### Paleta de cores (em `src/App.js`)
```js
primary: { main: '#c9a96e' }  // Dourado
secondary: { main: '#8b6f5e' } // Marrom
```

### Data do casamento (em `src/sections/Countdown.js`)
```js
const TARGET = new Date('2025-06-14T16:00:00');
```

---

## 📸 Dicas para as fotos
- **hero.jpg**: foto horizontal do casal, mínimo 1920×1080px
- **Fotos da galeria**: proporção 4:3 para fotos individuais, 16:9 para gallery1 e gallery6
- **Fotos de pessoas**: quadradas ou retrato, rosto centralizado (serão recortadas em círculo)
- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`

