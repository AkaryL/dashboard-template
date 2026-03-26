import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import MetricsBar from "../components/MetricsBar";
import ChartCard from "../components/ChartCard";
import {
  kpis,
  aprobacionHistorico,
  percepcionRadar,
  sentimientoTendencia,
  segmentacionPolitica,
  municipiosClave,
  temasVirales,
  transparenciaObras,
} from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
      {/* A) KPIs */}
      <section className="py-4 sm:py-6">
        <MetricsBar items={kpis} />
      </section>

      {/* B) Aprobacion + Percepcion */}
      <section className="mb-8 sm:mb-14">
        <SectionTitle title="Panorama General" subtitle="Resumen ejecutivo del estado de Jalisco" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <ChartCard title="Indice de Aprobacion" subtitle="Ultimos 7 meses" className="md:col-span-2">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={aprobacionHistorico}>
                <defs>
                  <linearGradient id="gradAprobacion" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e63946" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#e63946" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="mes" stroke="#888" fontSize={11} />
                <YAxis stroke="#888" fontSize={11} domain={[30, 70]} />
                <Tooltip {...TT} />
                <Area type="monotone" dataKey="aprobacion" stroke="#e63946" fill="url(#gradAprobacion)" strokeWidth={2} name="Aprobacion %" />
                <Area type="monotone" dataKey="desaprobacion" stroke="#888" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Desaprobacion %" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Percepcion por Tema" subtitle="Satisfaccion ciudadana">
            <ResponsiveContainer width="100%" height={240}>
              <RadarChart data={percepcionRadar} outerRadius="70%">
                <PolarGrid stroke="#e0e0e0" />
                <PolarAngleAxis dataKey="tema" stroke="#888" fontSize={10} />
                <PolarRadiusAxis stroke="#e0e0e0" domain={[0, 100]} fontSize={9} />
                <Radar name="Percepcion" dataKey="A" stroke="#e63946" fill="#e63946" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* C) Sentimiento + Segmentacion */}
      <section className="mb-8 sm:mb-14">
        <SectionTitle title="Inteligencia Digital" subtitle="Sentimiento en redes sociales y segmentacion politica" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <ChartCard title="Sentimiento en Redes Sociales" subtitle="Ultima semana" className="md:col-span-2">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={sentimientoTendencia}>
                <defs>
                  <linearGradient id="gradPos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradNeg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e63946" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#e63946" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="fecha" stroke="#888" fontSize={11} />
                <YAxis stroke="#888" fontSize={11} />
                <Tooltip {...TT} />
                <Area type="monotone" dataKey="positivo" stroke="#16a34a" fill="url(#gradPos)" strokeWidth={2} name="Positivo %" />
                <Area type="monotone" dataKey="neutro" stroke="#888" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Neutro %" />
                <Area type="monotone" dataKey="negativo" stroke="#e63946" fill="url(#gradNeg)" strokeWidth={2} name="Negativo %" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Segmentacion Politica" subtitle="Clasificacion de actores">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={segmentacionPolitica} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={3} dataKey="value">
                  {segmentacionPolitica.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...TT} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
              {segmentacionPolitica.map((s) => (
                <span key={s.name} className="flex items-center gap-1.5 text-[10px] text-gray-medium">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name} ({s.value}%)
                </span>
              ))}
            </div>
          </ChartCard>
        </div>
      </section>

      {/* D) Municipios clave */}
      <section className="mb-8 sm:mb-14">
        <SectionTitle title="Municipios Clave" subtitle="Monitoreo de 15 municipios prioritarios" link="/territorial" />
        <div className="border border-gray-border rounded-sm overflow-hidden mt-4 sm:mt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm font-sans min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-border bg-gray-light">
                  <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Municipio</th>
                  <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Poblacion</th>
                  <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Aprobacion</th>
                  <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Alertas</th>
                  <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Marginacion</th>
                </tr>
              </thead>
              <tbody>
                {municipiosClave.slice(0, 8).map((m) => (
                  <tr key={m.municipio} className="border-b border-gray-border hover:bg-gray-light/50 transition-colors">
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-dark font-medium">{m.municipio}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-gray-medium">{m.poblacion}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right">
                      <span className={`font-semibold ${m.aprobacion >= 60 ? "text-green-600" : m.aprobacion >= 50 ? "text-amber-500" : "text-red-500"}`}>
                        {m.aprobacion}%
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      {m.alertas > 0 ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-xs font-bold">
                          {m.alertas}
                        </span>
                      ) : (
                        <span className="text-green-600 text-[10px] sm:text-xs font-medium">OK</span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-sm font-medium ${
                        m.marginacion === "Muy bajo" ? "bg-green-100 text-green-700" :
                        m.marginacion === "Bajo" ? "bg-blue-100 text-blue-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {m.marginacion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* E) Temas virales */}
      <section className="mb-8 sm:mb-14">
        <SectionTitle title="Tendencias Digitales" subtitle="Temas virales en redes sociales" link="/sentimiento-digital" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {temasVirales.map((t) => (
            <div key={t.tema} className="border border-gray-border rounded-sm p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2 gap-2">
                <span className="text-primary font-serif font-bold text-sm sm:text-base">{t.tema}</span>
                <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-sm font-semibold uppercase shrink-0 ${
                  t.sentimiento === "positivo" ? "bg-green-100 text-green-700" :
                  t.sentimiento === "negativo" ? "bg-red-100 text-red-700" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  {t.sentimiento}
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-dark font-serif">{t.menciones.toLocaleString()}</p>
              <p className="text-[10px] sm:text-[11px] text-gray-medium">menciones</p>
              <p className="text-[10px] sm:text-xs text-green-600 font-medium mt-1">{t.cambio} en 7 dias</p>
            </div>
          ))}
        </div>
      </section>

      {/* F) Transparencia */}
      <section className="mb-8 sm:mb-14">
        <SectionTitle title="Transparencia en Obras Publicas" subtitle="Avance de proyectos estrategicos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {transparenciaObras.map((obra) => (
            <div key={obra.obra} className="border border-gray-border rounded-sm p-4 sm:p-5 hover:shadow-md transition-shadow">
              <h4 className="text-xs sm:text-sm font-serif font-bold text-dark mb-1">{obra.obra}</h4>
              <p className="text-[10px] sm:text-xs text-gray-medium mb-3">{obra.presupuesto}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${obra.avance}%`,
                    backgroundColor: obra.avance >= 80 ? "#16a34a" : obra.avance >= 40 ? "#e63946" : "#f59e0b",
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-gray-medium">{obra.avance}% completado</span>
                <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-sm font-semibold ${
                  obra.estado === "Por concluir" ? "bg-green-100 text-green-700" :
                  obra.estado === "En curso" ? "bg-red-50 text-primary" :
                  "bg-amber-100 text-amber-700"
                }`}>
                  {obra.estado}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
