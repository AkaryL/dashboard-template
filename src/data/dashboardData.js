// ============================================================================
// PULSO CIUDADANO - Datos de ejemplo para el dashboard
// Gobierno de Jalisco 2026
// ============================================================================

// --- KPIs Principales ---
export const kpis = [
  { label: "Municipios Monitoreados", value: "125", change: "+3", trend: "up" },
  { label: "Indice de Aprobacion", value: "62.4%", change: "+2.1%", trend: "up" },
  { label: "Alertas Activas", value: "7", change: "-2", trend: "down" },
  { label: "Menciones Digitales (24h)", value: "84.2K", change: "+12%", trend: "up" },
];

// --- Datos Demograficos (IDs 50-61) ---
export const edadDistribucion = [
  { rango: "18-24", hombres: 14.2, mujeres: 13.8 },
  { rango: "25-34", hombres: 18.5, mujeres: 19.1 },
  { rango: "35-44", hombres: 16.8, mujeres: 17.2 },
  { rango: "45-54", hombres: 13.4, mujeres: 14.1 },
  { rango: "55-64", hombres: 9.8, mujeres: 10.5 },
  { rango: "65+", hombres: 7.2, mujeres: 8.4 },
];

export const generoDistribucion = [
  { name: "Mujeres", value: 52.1, color: "#8b5cf6" },
  { name: "Hombres", value: 47.9, color: "#00d4ff" },
];

export const nivelEducativo = [
  { nivel: "Sin estudios", porcentaje: 4.2 },
  { nivel: "Primaria", porcentaje: 12.8 },
  { nivel: "Secundaria", porcentaje: 23.1 },
  { nivel: "Preparatoria", porcentaje: 28.4 },
  { nivel: "Universidad", porcentaje: 24.7 },
  { nivel: "Posgrado", porcentaje: 6.8 },
];

export const nivelIngresos = [
  { rango: "< $5,000", porcentaje: 18.3 },
  { rango: "$5K - $10K", porcentaje: 28.7 },
  { rango: "$10K - $20K", porcentaje: 26.4 },
  { rango: "$20K - $40K", porcentaje: 16.2 },
  { rango: "$40K - $80K", porcentaje: 7.1 },
  { rango: "> $80K", porcentaje: 3.3 },
];

export const estadoCivil = [
  { name: "Soltero/a", value: 31.2, color: "#00d4ff" },
  { name: "Casado/a", value: 38.5, color: "#10b981" },
  { name: "Union libre", value: 16.8, color: "#8b5cf6" },
  { name: "Divorciado/a", value: 8.3, color: "#f59e0b" },
  { name: "Viudo/a", value: 5.2, color: "#ef4444" },
];

export const zonaResidencial = [
  { name: "Urbana", value: 72.4, color: "#00d4ff" },
  { name: "Rural", value: 27.6, color: "#10b981" },
];

export const profesionTop = [
  { profesion: "Comercio", porcentaje: 18.2 },
  { profesion: "Servicios", porcentaje: 15.7 },
  { profesion: "Manufactura", porcentaje: 12.4 },
  { profesion: "Educacion", porcentaje: 9.8 },
  { profesion: "Construccion", porcentaje: 8.6 },
  { profesion: "Salud", porcentaje: 7.3 },
  { profesion: "Tecnologia", porcentaje: 6.1 },
  { profesion: "Agropecuario", porcentaje: 5.9 },
  { profesion: "Gobierno", porcentaje: 4.8 },
  { profesion: "Otros", porcentaje: 11.2 },
];

export const empleo = [
  { name: "Empleado formal", value: 42.3, color: "#10b981" },
  { name: "Informal", value: 28.1, color: "#f59e0b" },
  { name: "Desempleado", value: 5.8, color: "#ef4444" },
  { name: "Independiente", value: 14.2, color: "#00d4ff" },
  { name: "Estudiante", value: 9.6, color: "#8b5cf6" },
];

// --- Datos Territoriales (IDs 58-61) ---
export const municipiosClave = [
  { municipio: "Guadalajara", poblacion: "1,385,629", aprobacion: 58.2, alertas: 2, sentimiento: 0.62, marginacion: "Muy bajo" },
  { municipio: "Zapopan", poblacion: "1,476,491", aprobacion: 65.1, alertas: 1, sentimiento: 0.71, marginacion: "Muy bajo" },
  { municipio: "Tlaquepaque", poblacion: "687,127", aprobacion: 54.8, alertas: 1, sentimiento: 0.55, marginacion: "Bajo" },
  { municipio: "Tonala", poblacion: "569,913", aprobacion: 48.3, alertas: 2, sentimiento: 0.48, marginacion: "Bajo" },
  { municipio: "Tlajomulco", poblacion: "727,750", aprobacion: 61.4, alertas: 0, sentimiento: 0.64, marginacion: "Muy bajo" },
  { municipio: "Puerto Vallarta", poblacion: "291,839", aprobacion: 71.2, alertas: 0, sentimiento: 0.78, marginacion: "Muy bajo" },
  { municipio: "Lagos de Moreno", poblacion: "170,520", aprobacion: 55.6, alertas: 1, sentimiento: 0.52, marginacion: "Bajo" },
  { municipio: "Tepatitlan", poblacion: "141,322", aprobacion: 63.8, alertas: 0, sentimiento: 0.66, marginacion: "Bajo" },
  { municipio: "Ocotlan", poblacion: "97,625", aprobacion: 49.1, alertas: 1, sentimiento: 0.45, marginacion: "Medio" },
  { municipio: "Autlan", poblacion: "57,559", aprobacion: 52.7, alertas: 0, sentimiento: 0.54, marginacion: "Medio" },
  { municipio: "Ameca", poblacion: "60,211", aprobacion: 58.9, alertas: 0, sentimiento: 0.59, marginacion: "Medio" },
  { municipio: "Cihuatlan", poblacion: "44,557", aprobacion: 66.3, alertas: 0, sentimiento: 0.68, marginacion: "Bajo" },
  { municipio: "El Salto", poblacion: "213,418", aprobacion: 43.2, alertas: 2, sentimiento: 0.38, marginacion: "Bajo" },
  { municipio: "Ixtlahuacan de los M.", poblacion: "53,045", aprobacion: 47.5, alertas: 1, sentimiento: 0.42, marginacion: "Medio" },
  { municipio: "Zapotlan el Grande", poblacion: "105,423", aprobacion: 60.1, alertas: 0, sentimiento: 0.61, marginacion: "Bajo" },
];

// --- Percepcion Gubernamental (IDs 100-103) ---
export const percepcionTemas = [
  { tema: "Seguridad", valor: 42, max: 100 },
  { tema: "Salud", valor: 58, max: 100 },
  { tema: "Educacion", valor: 65, max: 100 },
  { tema: "Transporte", valor: 38, max: 100 },
  { tema: "Economia", valor: 45, max: 100 },
  { tema: "Medio Ambiente", valor: 52, max: 100 },
];

export const percepcionRadar = [
  { tema: "Seguridad", A: 42, fullMark: 100 },
  { tema: "Salud", A: 58, fullMark: 100 },
  { tema: "Educacion", A: 65, fullMark: 100 },
  { tema: "Transporte", A: 38, fullMark: 100 },
  { tema: "Economia", A: 45, fullMark: 100 },
  { tema: "M. Ambiente", A: 52, fullMark: 100 },
];

export const aprobacionHistorico = [
  { mes: "Sep", aprobacion: 56.2, desaprobacion: 43.8 },
  { mes: "Oct", aprobacion: 57.8, desaprobacion: 42.2 },
  { mes: "Nov", aprobacion: 55.1, desaprobacion: 44.9 },
  { mes: "Dic", aprobacion: 59.3, desaprobacion: 40.7 },
  { mes: "Ene", aprobacion: 61.0, desaprobacion: 39.0 },
  { mes: "Feb", aprobacion: 60.5, desaprobacion: 39.5 },
  { mes: "Mar", aprobacion: 62.4, desaprobacion: 37.6 },
];

export const liderazgoPercepcion = [
  { dimension: "Credibilidad", valor: 58 },
  { dimension: "Empatia", valor: 64 },
  { dimension: "Eficacia", valor: 52 },
  { dimension: "Transparencia", valor: 47 },
  { dimension: "Comunicacion", valor: 61 },
];

export const participacionCiudadana = {
  participacion: 44.6,
  abstencion: 55.4,
  tendencia: "+3.2% vs periodo anterior",
};

// --- Sentimiento Digital (IDs 62-63, 105-108) ---
export const sentimientoTendencia = [
  { fecha: "Lun", positivo: 42, neutro: 35, negativo: 23 },
  { fecha: "Mar", positivo: 38, neutro: 34, negativo: 28 },
  { fecha: "Mie", positivo: 45, neutro: 32, negativo: 23 },
  { fecha: "Jue", positivo: 41, neutro: 36, negativo: 23 },
  { fecha: "Vie", positivo: 48, neutro: 30, negativo: 22 },
  { fecha: "Sab", positivo: 52, neutro: 28, negativo: 20 },
  { fecha: "Dom", positivo: 46, neutro: 33, negativo: 21 },
];

export const sentimientoGeneral = [
  { name: "Positivo", value: 44.6, color: "#10b981" },
  { name: "Neutro", value: 32.8, color: "#94a3b8" },
  { name: "Negativo", value: 22.6, color: "#ef4444" },
];

export const mencionesPlataforma = [
  { plataforma: "Facebook", menciones: 34200, sentimiento: 0.58 },
  { plataforma: "X (Twitter)", menciones: 28400, sentimiento: 0.42 },
  { plataforma: "Instagram", menciones: 12800, sentimiento: 0.71 },
  { plataforma: "TikTok", menciones: 8900, sentimiento: 0.65 },
  { plataforma: "YouTube", menciones: 3200, sentimiento: 0.54 },
];

export const temasVirales = [
  { tema: "#ObrasPúblicas", menciones: 12400, sentimiento: "positivo", cambio: "+340%" },
  { tema: "#SeguridadJalisco", menciones: 9800, sentimiento: "negativo", cambio: "+128%" },
  { tema: "#TransporteGDL", menciones: 7200, sentimiento: "negativo", cambio: "+85%" },
  { tema: "#SaludParaTodos", menciones: 6100, sentimiento: "positivo", cambio: "+62%" },
  { tema: "#EducacionJalisco", menciones: 4500, sentimiento: "positivo", cambio: "+45%" },
  { tema: "#MedioAmbiente", menciones: 3800, sentimiento: "neutro", cambio: "+31%" },
];

export const interesesConsumo = [
  { interes: "Noticias locales", porcentaje: 68.2 },
  { interes: "Deportes", porcentaje: 54.1 },
  { interes: "Entretenimiento", porcentaje: 49.8 },
  { interes: "Politica", porcentaje: 38.4 },
  { interes: "Tecnologia", porcentaje: 32.7 },
  { interes: "Salud", porcentaje: 29.3 },
  { interes: "Educacion", porcentaje: 24.6 },
  { interes: "Medio ambiente", porcentaje: 18.9 },
];

// --- Actores y Dinamicas (IDs 64-71, 104) ---
export const segmentacionPolitica = [
  { name: "Aliados naturales", value: 35, color: "#10b981" },
  { name: "Neutrales movilizables", value: 28, color: "#00d4ff" },
  { name: "Criticos moderados", value: 22, color: "#f59e0b" },
  { name: "Oposicion activa", value: 15, color: "#ef4444" },
];

export const nivelInfluencia = [
  { nivel: "Alto", personas: 2340, porcentaje: 3.2 },
  { nivel: "Medio-Alto", personas: 8920, porcentaje: 12.1 },
  { nivel: "Medio", personas: 24500, porcentaje: 33.4 },
  { nivel: "Medio-Bajo", personas: 22100, porcentaje: 30.1 },
  { nivel: "Bajo", personas: 15580, porcentaje: 21.2 },
];

export const marginacionMunicipal = [
  { nivel: "Muy bajo", municipios: 18, color: "#10b981" },
  { nivel: "Bajo", municipios: 32, color: "#00d4ff" },
  { nivel: "Medio", municipios: 38, color: "#f59e0b" },
  { nivel: "Alto", municipios: 27, color: "#ef4444" },
  { nivel: "Muy alto", municipios: 10, color: "#dc2626" },
];

export const seguridadSocial = [
  { name: "Con seguridad social", value: 58.4, color: "#10b981" },
  { name: "Sin seguridad social", value: 41.6, color: "#ef4444" },
];

export const conflictosLegales = [
  { tipo: "Conflictos laborales", cantidad: 1240 },
  { tipo: "Conflictos agrarios", cantidad: 380 },
  { tipo: "Conflictos civiles", cantidad: 2100 },
  { tipo: "Conflictos penales", cantidad: 890 },
];

export const movimientosSociales = [
  { fecha: "15 Ene", tipo: "Protesta", ubicacion: "Guadalajara", descripcion: "Marcha por seguridad publica", participantes: 2400, riesgo: "medio" },
  { fecha: "28 Ene", tipo: "Manifestacion", ubicacion: "Zapopan", descripcion: "Cierre de vialidad por obras", participantes: 800, riesgo: "bajo" },
  { fecha: "12 Feb", tipo: "Protesta", ubicacion: "Tonala", descripcion: "Demanda de servicios basicos", participantes: 1200, riesgo: "alto" },
  { fecha: "03 Mar", tipo: "Movilizacion", ubicacion: "Tlaquepaque", descripcion: "Protesta por tarifas de transporte", participantes: 3100, riesgo: "alto" },
  { fecha: "18 Mar", tipo: "Manifestacion", ubicacion: "El Salto", descripcion: "Reclamo ambiental Rio Santiago", participantes: 1800, riesgo: "medio" },
  { fecha: "25 Mar", tipo: "Reunion", ubicacion: "Lagos de Moreno", descripcion: "Dialogo con productores agricolas", participantes: 450, riesgo: "bajo" },
];

export const gruposAlteracion = [
  { grupo: "Organizaciones sindicales", nivel: "Medio", miembros: "~12,000" },
  { grupo: "Colectivos ambientalistas", nivel: "Bajo", miembros: "~3,500" },
  { grupo: "Grupos de autodefensa", nivel: "Alto", miembros: "~800" },
  { grupo: "Organizaciones estudiantiles", nivel: "Bajo", miembros: "~5,200" },
  { grupo: "Colectivos de victimas", nivel: "Medio", miembros: "~2,100" },
];

export const predisposicionSalud = [
  { enfermedad: "Diabetes", porcentaje: 14.2 },
  { enfermedad: "Hipertension", porcentaje: 18.6 },
  { enfermedad: "Obesidad", porcentaje: 32.4 },
  { enfermedad: "Enf. respiratorias", porcentaje: 8.7 },
  { enfermedad: "Enf. mentales", porcentaje: 6.3 },
];

export const deudas = [
  { name: "Sin deuda", value: 38.2, color: "#10b981" },
  { name: "Deuda baja", value: 28.4, color: "#00d4ff" },
  { name: "Deuda media", value: 21.1, color: "#f59e0b" },
  { name: "Deuda alta", value: 12.3, color: "#ef4444" },
];

// --- Transparencia (ID 108) ---
export const transparenciaObras = [
  { obra: "Linea 4 del Tren Ligero", presupuesto: "$18,500 MDP", avance: 34, estado: "En curso" },
  { obra: "Hospital Regional Zapopan", presupuesto: "$2,800 MDP", avance: 72, estado: "En curso" },
  { obra: "Periferico Sur ampliacion", presupuesto: "$4,200 MDP", avance: 91, estado: "Por concluir" },
  { obra: "Centro Cultural Tlaquepaque", presupuesto: "$680 MDP", avance: 15, estado: "Inicio" },
  { obra: "Planta tratamiento El Salto", presupuesto: "$1,950 MDP", avance: 58, estado: "En curso" },
  { obra: "Red agua potable Sierra", presupuesto: "$890 MDP", avance: 45, estado: "En curso" },
];
