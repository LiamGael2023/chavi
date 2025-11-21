# Chavi - Plataforma Moderna de Tienda Virtual y Pagos

Una plataforma web moderna y responsive que combina una tienda virtual con un sistema de pago de recibos de agua. Desarrollada con **HTML, CSS y JavaScript vanilla** sin dependencias externas.

## Características

### Tienda Virtual
- Catálogo de productos tecnológicos
- Sistema de búsqueda en tiempo real
- Filtrado por categorías
- Carrito de compras interactivo
- Gestión de stock y cantidades
- Diseño moderno con efectos glassmorphism
- Animaciones suaves y responsivas

### Pago de Recibos de Agua
- Consulta de recibos por número de cuenta
- Visualización detallada del consumo y monto
- Formulario de pago seguro
- Confirmación de pago exitoso
- Simulación de proceso de pago

### Diseño
- Diseño completamente responsive (móvil, tablet, desktop)
- Gradientes modernos y efectos visuales
- Navegación intuitiva con menú hamburguesa en móvil
- Animaciones y transiciones suaves
- Tema oscuro moderno
- Efectos glassmorphism y backdrop-filter
- Scrollbar personalizado

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, flexbox y grid
- **JavaScript (ES6+)** - Lógica de la aplicación sin frameworks
- **SVG** - Iconos vectoriales

## Instalación

**¡Sin instalación necesaria!** Solo necesitas un navegador web.

### Opción 1: Abrir directamente
1. Descarga o clona el repositorio:
```bash
git clone <repository-url>
cd chavi
```

2. Abre `index.html` en tu navegador favorito

### Opción 2: Servidor local (recomendado)
Para evitar problemas con CORS al cargar imágenes:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (si tienes http-server instalado)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## Estructura del Proyecto

```
chavi/
├── index.html          # Página principal HTML
├── styles.css          # Todos los estilos CSS
├── app.js              # Lógica de la aplicación
├── products.js         # Datos de productos y recibos
└── README.md           # Este archivo
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
Los colores principales se pueden modificar en las variables CSS al inicio de `styles.css`:
```css
:root {
    --primary-500: #0ea5e9;    /* Azul principal */
    --purple-500: #8b5cf6;     /* Púrpura */
    --cyan-500: #06b6d4;       /* Cyan */
    /* ... más colores */
}
```

### Productos
Agrega o modifica productos en el array `products` en `products.js`:
```javascript
{
    id: 10,
    name: 'Nuevo Producto',
    description: 'Descripción del producto',
    price: 99.99,
    image: 'url-de-la-imagen',
    category: 'Categoría',
    stock: 20
}
```

### Recibos de Agua
Agrega cuentas de prueba en el objeto `mockBills` en `products.js`

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

## Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## Características Técnicas

- **SPA (Single Page Application)**: Navegación sin recargas
- **Estado reactivo**: Actualización automática del DOM
- **Carrito persistente**: Gestión completa del carrito de compras
- **Búsqueda en tiempo real**: Filtrado instantáneo de productos
- **Animaciones CSS**: Transiciones suaves sin JavaScript pesado
- **Responsive Design**: Mobile-first approach

## Mejoras Futuras

- [ ] Persistencia del carrito en localStorage
- [ ] Integración con API real de pagos
- [ ] Sistema de usuarios y autenticación
- [ ] Historial de compras
- [ ] Más métodos de pago
- [ ] Sistema de notificaciones

---

Desarrollado con ❤️ usando HTML, CSS y JavaScript vanilla
