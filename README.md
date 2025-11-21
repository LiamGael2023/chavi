# Chavi - Plataforma Moderna de Tienda Virtual y Pagos

Una plataforma web moderna y responsive que combina una tienda virtual con un sistema de pago de recibos de agua.

## Características

### Tienda Virtual
- Catálogo de productos tecnológicos
- Sistema de búsqueda y filtrado por categorías
- Carrito de compras interactivo
- Diseño moderno con efectos glassmorphism
- Animaciones suaves y responsivas

### Pago de Recibos de Agua
- Consulta de recibos por número de cuenta
- Visualización detallada del consumo y monto
- Formulario de pago seguro
- Confirmación de pago exitoso

### Diseño
- Diseño completamente responsive (móvil, tablet, desktop)
- Gradientes modernos y efectos visuales
- Navegación intuitiva
- Animaciones y transiciones suaves
- Tema oscuro moderno

## Tecnologías Utilizadas

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos

## Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd chavi
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
chavi/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.tsx    # Barra de navegación
│   │   ├── ProductCard.tsx # Tarjeta de producto
│   │   └── Cart.tsx      # Carrito de compras
│   ├── pages/            # Páginas principales
│   │   ├── Home.tsx      # Página de inicio
│   │   ├── Shop.tsx      # Tienda virtual
│   │   └── WaterBills.tsx # Pago de recibos
│   ├── data/             # Datos mock
│   │   └── products.ts   # Catálogo de productos
│   ├── types/            # Definiciones TypeScript
│   │   └── index.ts      # Tipos e interfaces
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Uso de la Plataforma

### Tienda Virtual
1. Navega a la sección "Tienda"
2. Usa la barra de búsqueda o filtra por categorías
3. Haz clic en "Agregar" para añadir productos al carrito
4. Abre el carrito haciendo clic en el icono del carrito
5. Ajusta cantidades o elimina productos según necesites

### Pago de Recibos
1. Navega a "Recibos de Agua"
2. Ingresa tu número de cuenta (prueba con: 123456 o 789012)
3. Haz clic en "Buscar"
4. Revisa los detalles del recibo
5. Haz clic en "Proceder al Pago"
6. Completa el formulario de pago
7. Confirma el pago

## Características Responsive

La plataforma está optimizada para todos los dispositivos:

- **Móviles** (< 640px): Navegación vertical, menú hamburguesa
- **Tablets** (640px - 1024px): Grid de 2 columnas para productos
- **Desktop** (> 1024px): Grid de 3 columnas, navegación completa

## Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- Primary: Azul (#0ea5e9)
- Secondary: Púrpura/Violeta
- Accent: Cyan

### Productos
Agrega o modifica productos en `src/data/products.ts`

## Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando React + Vite + TypeScript + Tailwind CSS
