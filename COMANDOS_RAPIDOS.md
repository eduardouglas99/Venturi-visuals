# ⚡ Comandos Rápidos - Migração Next.js + GitHub

## 🎯 Passo a Passo Simplificado

### **1️⃣ Preparar o Projeto Localmente**

```bash
# Criar pasta do projeto Next.js
mkdir venturi-visuals-nextjs
cd venturi-visuals-nextjs

# Copiar arquivos do /nextjs-export/ para esta pasta
# Copiar toda a pasta /components/ para cá
# Copiar toda a pasta /pages/ para cá
# Copiar /styles/globals.css para app/globals.css

# Instalar dependências
npm install
```

---

### **2️⃣ Converter Componentes com React Router**

Procure e substitua em TODOS os componentes:

**NavigationDock.tsx, Footer.tsx, etc:**

```tsx
// ❌ REMOVER
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// ✅ ADICIONAR
"use client"; // No topo do arquivo

import Link from "next/link";
import { usePathname } from "next/navigation";

// ❌ TROCAR
const location = useLocation();
const isActive = location.pathname === "/portfolio";

// ✅ POR
const pathname = usePathname();
const isActive = pathname === "/portfolio";

// ❌ TROCAR
<Link to="/portfolio">

// ✅ POR
<Link href="/portfolio">
```

---

### **3️⃣ Adicionar "use client" nos Componentes Interativos**

Adicione `"use client"` no **topo** destes arquivos:

- ✅ `components/CustomCursor.tsx`
- ✅ `components/NavigationDock.tsx`
- ✅ `components/HeroCinematic.tsx`
- ✅ `components/BentoPortfolio.tsx`
- ✅ `components/HorizontalShowcase.tsx`
- ✅ Qualquer componente com `useState`, `useEffect`, `onClick`, etc

**Exemplo:**
```tsx
"use client";

import { useState } from "react";
// resto do código...
```

---

### **4️⃣ Testar Localmente**

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:3000

# ✅ Testar todas as páginas:
# - http://localhost:3000/
# - http://localhost:3000/portfolio
# - http://localhost:3000/sobre
# - http://localhost:3000/servicos
# - http://localhost:3000/contato
```

---

### **5️⃣ Preparar para GitHub**

```bash
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: Venturi Visuals Next.js"
```

---

### **6️⃣ Criar Repositório no GitHub**

**Opção A - Via Web:**
1. Acesse [github.com](https://github.com)
2. Clique em **"New Repository"**
3. Nome: `venturi-visuals`
4. Público ou Privado
5. **NÃO** marque "Add README"
6. Criar repositório

**Opção B - Via CLI (se tiver GitHub CLI):**
```bash
gh repo create venturi-visuals --public --source=. --remote=origin
```

---

### **7️⃣ Push para GitHub**

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/venturi-visuals.git

# Push inicial
git branch -M main
git push -u origin main
```

---

### **8️⃣ Deploy na Vercel (GRÁTIS)**

**Método 1 - Via Web:**
1. Acesse [vercel.com](https://vercel.com)
2. Login com GitHub
3. **"New Project"**
4. **"Import Git Repository"**
5. Selecione `venturi-visuals`
6. Configuração:
   - Framework Preset: **Next.js** (auto-detectado)
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
7. **Deploy!** 🚀

**Método 2 - Via CLI:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

**Seu site estará online em:**
`https://venturi-visuals.vercel.app`

---

### **9️⃣ Deploy na Netlify (Alternativa)**

1. Acesse [netlify.com](https://netlify.com)
2. **"Add new site"** → **"Import an existing project"**
3. Conecte com GitHub
4. Selecione `venturi-visuals`
5. Build settings:
   - Build command: `next build`
   - Publish directory: `.next`
6. **Deploy!**

---

## 🔄 Atualizações Futuras

### Fazer mudanças e atualizar:

```bash
# Fazer alterações no código...

# Adicionar mudanças
git add .

# Commit
git commit -m "Descrição das mudanças"

# Push
git push origin main

# ✨ Vercel/Netlify fazem deploy automático!
```

---

## 🎨 Domínio Personalizado

### **Na Vercel:**
1. Project Settings → Domains
2. Add Domain: `venturivisuals.com`
3. Copiar DNS records
4. Adicionar no seu registrador de domínio

### **DNS no Registrador:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Analytics (Opcional)

### **Vercel Analytics (Grátis):**
```bash
npm install @vercel/analytics
```

**app/layout.tsx:**
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🆘 Troubleshooting

### Erro: "Module not found"
```bash
npm install
# ou
rm -rf node_modules package-lock.json
npm install
```

### Erro: "window is not defined"
→ Adicione `"use client"` no componente

### Erro: "useRouter/usePathname/useSearchParams"
→ Importe de `next/navigation`, não de `next/router`

### Build falha na Vercel
→ Verifique logs
→ Teste `npm run build` localmente

---

## ✅ Checklist Final

Antes do deploy, verifique:

- [ ] `npm run dev` funciona sem erros
- [ ] Todas as páginas carregam (/, /portfolio, /sobre, /servicos, /contato)
- [ ] Navegação entre páginas funciona
- [ ] Custom cursor funciona
- [ ] Animações funcionam
- [ ] Nenhum erro no console do navegador
- [ ] `npm run build` executa com sucesso
- [ ] `.gitignore` está configurado
- [ ] README.md está atualizado
- [ ] Commit inicial feito
- [ ] Push para GitHub realizado
- [ ] Deploy na Vercel/Netlify funcionando

---

## 🎯 URLs Importantes

- **Repositório:** `https://github.com/SEU-USUARIO/venturi-visuals`
- **Deploy:** `https://venturi-visuals.vercel.app`
- **Domínio:** `https://venturivisuals.com` (quando configurado)

---

**🎬 Boa sorte com o deploy! 🚀**
