export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
}

export const blogCategories = [
  'Todos',
  'Skincare',
  'Aromaterapia',
  'Bienestar',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Rutina de Skincare Nocturna: 5 Pasos para una Piel Radiante',
    slug: 'rutina-skincare-nocturna',
    excerpt:
      'Descubre cómo una rutina nocturna bien estructurada puede transformar tu piel mientras duermes. Los pasos esenciales que todo skincare lover debe conocer.',
    content: `La noche es el momento ideal para la regeneración de la piel. Mientras duermes, las células se renuevan y los productos penetran con mayor eficacia.

**Paso 1: Limpieza doble**
Comienza con un aceite limpiador para disolver maquillaje y protector solar, seguido de un limpiador al agua para eliminar impurezas. Esta técnica coreana asegura una piel perfectamente limpia.

**Paso 2: Tónico**
Aplica un tónico suave para equilibrar el pH de la piel y prepararla para absorber los siguientes productos. Nuestro Tónico de Niacinamida es ideal para minimizar poros.

**Paso 3: Sérum**
El sérum de Vitamina C o Retinol trabaja en la regeneración celular. Aplica una pequeña cantidad y deja absorber completamente.

**Paso 4: Contorno de ojos**
La piel del contorno es la más delicada. Usa tu anular para dar suaves toques con un producto específico para esta zona.

**Paso 5: Crema de noche**
Sella todo con una crema hidratante rica. Nuestra Crema Hidratante Noche con retinol suave trabaja mientras descansas.

Recuerda: la constancia es la clave. Resultados visibles aparecen entre la 4ta y 6ta semana.`,
    image:
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Skincare',
    date: '2026-05-01',
    author: 'Asuka',
    readTime: 4,
  },
  {
    id: 2,
    title: 'Aromaterapia en el Hogar: Crea Espacios de Paz y Armonía',
    slug: 'aromaterapia-en-el-hogar',
    excerpt:
      'Transforma tu hogar en un santuario de bienestar con los aromas correctos. Aprende a usar difusores, velas y aceites esenciales para cada ambiente.',
    content: `El hogar es nuestro refugio, y los aromas tienen el poder de transformar completamente la atmósfera de cada espacio.

**El dormitorio: lavanda y ylang ylang**
Para un descanso reparador, difunde aceite de lavanda 30 minutos antes de dormir. El ylang ylang complementa con su aroma floral que reduce la ansiedad. Nuestro Aceite Esencial de Lavanda es el punto de partida perfecto.

**La sala: cítricos y palo santo**
Naranja, limón y bergamota crean un ambiente fresco y acogedor. Para momentos de meditación, el palo santo purifica el espacio energéticamente. Prueba nuestro Spray Ambiental de Cítricos para una solución rápida.

**El baño: eucalipto y menta**
Convierte tu baño en un spa. Un par de gotas de eucalipto en el agua caliente abre las vías respiratorias, mientras la menta refresca y revitaliza.

**Difusor vs. Vela**
El difusor ultrasónico es ideal para espacios grandes y uso continuo. Las velas de soja crean una atmósfera íntima con su luz tenue. Ambos son complementarios.

**Tip Asuka:** Mezcla 3 gotas de lavanda + 2 de ylang ylang en tu difusor de bambú para la mezcla de relajación perfecta.`,
    image:
      'https://images.pexels.com/photos/6262402/pexels-photo-6262402.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Aromaterapia',
    date: '2026-04-20',
    author: 'Asuka',
    readTime: 5,
  },
  {
    id: 3,
    title: 'Aceites Esenciales: Guía Completa para Principiantes',
    slug: 'guia-aceites-esenciales',
    excerpt:
      'Todo lo que necesitas saber sobre aceites esenciales: tipos, usos, precauciones y cómo elegir los mejores para tu bienestar diario.',
    content: `Los aceites esenciales son concentrados de plantas con propiedades terapéuticas. Entender sus usos te abre un mundo de bienestar.

**¿Qué son los aceites esenciales?**
Son extractos volátiles obtenidos por destilación de flores, hojas, raíces y cortezas. Cada aceite contiene cientos de compuestos activos que interactúan con nuestro cuerpo.

**Aceites imprescindibles:**

- **Lavanda:** El más versátil. Relajante, cicatrizante y analgésico. Ideal para el insomnio y el estrés.
- **Árbol de té:** Poderoso antiséptico natural. Perfecto para pieles con acné y heridas menores.
- **Menta:** Estimulante y refrescante. Alivia dolores de cabeza y mejora la concentración.
- **Eucalipto:** Respiratorio por excelencia. Descongestiona y purifica el aire.
- **Incienso:** Conecta con la meditación. Regenera la piel y calma la mente.

**Formas de uso:**

1. **Difusión:** 3-5 gotas en el difusor. La forma más segura y efectiva.
2. **Inhalación:** 1-2 gotas en un pañuelo o en las palmas.
3. **Tópico:** Siempre diluido en aceite portador (almendras, coco). Proporción: 1 gota por 5ml de portador.
4. **Baño:** 5-8 gotas en una cucharada de sal o aceite antes de verter en la tina.

**Precauciones:**
- Nunca aplicar puro sobre la piel
- No ingerir sin supervisión profesional
- Consulta si estás embarazada o tienes condiciones médicas
- Mantén fuera del alcance de niños

**Cómo elegir calidad:**
Busca aceites 100% puros, sin aditivos ni fragancias sintéticas. En Asuka, cada aceite es puro y viene con información de origen.`,
    image:
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bienestar',
    date: '2026-04-10',
    author: 'Asuka',
    readTime: 6,
  },
];
