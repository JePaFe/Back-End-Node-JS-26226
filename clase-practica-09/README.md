# Clase práctica 09

| Necesidad  | Endpoint                    | Resultado   |
| ---------- | --------------------------- | ----------- |
| portada    | `GET /`                     | object JSON |
| cartelera  | `GET /api/courses`          | array JSON  |
| destacados | `GET /api/courses/featured` | array JSON  |
| agenda     | `GET /api/schedule`         | array JSON  |

## Paso a paso para optimizar la función de filtrado de cursos destacados

```javascript
// Versión 0: original (con if/else y comparación explícita)
const featuredCourses = courses.filter((curso) => {
  if (curso.featured == true) {
    return true;
  } else {
    return false;
  }
});
```

1. Quitar la comparación `== true` y el `else`: `featured` ya es booleano y el `return` corta la función.

```javascript
const featuredCourses = courses.filter((curso) => {
  if (curso.featured) {
    return true;
  }
  return false;
});
```

2. Devolver directamente la propiedad booleana, ya que `filter` solo necesita `true` o `false`:

```javascript
const featuredCourses = courses.filter((curso) => curso.featured);
```

> En `index.js` queda una sola ruta `/api/courses/featured` con la versión final. Las versiones anteriores se muestran aquí para ver la evolución; definir la misma ruta varias veces en Express no tiene sentido, porque solo responde la primera.
