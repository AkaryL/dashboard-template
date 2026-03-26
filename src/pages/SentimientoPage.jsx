import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import ChartCard from "../components/ChartCard";
import {
  sentimientoTendencia, sentimientoGeneral, mencionesPlataforma,
  temasVirales, interesesConsumo,
} from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

function SentimientoPage() {
  const totalMenciones = mencionesPlataforma.reduce((acc, m) => acc + m.menciones, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SectionTitle title="Sentimiento Digital" subtitle="Menciones en redes sociales, analisis de sentimiento y tendencias virales" />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-10">
        <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
          <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">Menciones (24h)</p>
          <p className="text-xl sm:text-2xl font-bold text-dark font-serif">{totalMenciones.toLocaleString()}</p>
        </div>
        {sentimientoGeneral.map((s) => (
          <div key={s.name} className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
            <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">{s.name}</p>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: s.color }}>{s.value}%</p>
          </div>
        ))}
      </div>

      {/* Tendencia + Donut */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <ChartCard title="Tendencia de Sentimiento" subtitle="Ultimos 7 dias" className="md:col-span-2">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={sentimientoTendencia}>
              <defs>
                <linearGradient id="sPos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sNeg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e63946" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#e63946" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="fecha" stroke="#888" fontSize={11} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip {...TT} />
              <Area type="monotone" dataKey="positivo" stroke="#16a34a" fill="url(#sPos)" strokeWidth={2} name="Positivo %" />
              <Area type="monotone" dataKey="neutro" stroke="#888" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Neutro %" />
              <Area type="monotone" dataKey="negativo" stroke="#e63946" fill="url(#sNeg)" strokeWidth={2} name="Negativo %" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Sentimiento General">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={sentimientoGeneral} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" paddingAngle={3}>
                {sentimientoGeneral.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip {...TT} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2 mt-3">
            {sentimientoGeneral.map((s) => (
              <div key={s.name} className="flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="flex items-center gap-1.5 text-gray-medium">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </span>
                <span className="font-semibold text-dark">{s.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Menciones por plataforma */}
      <div className="border border-gray-border rounded-sm overflow-hidden mb-6 sm:mb-10">
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-border bg-gray-light">
          <h3 className="text-xs sm:text-sm font-serif font-bold text-dark">Menciones por Plataforma</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm font-sans min-w-[480px]">
            <thead>
              <tr className="border-b border-gray-border bg-gray-light">
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Plataforma</th>
                <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Menciones</th>
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Volumen</th>
                <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Sentimiento</th>
              </tr>
            </thead>
            <tbody>
              {mencionesPlataforma.map((m) => (
                <tr key={m.plataforma} className="border-b border-gray-border hover:bg-gray-light/50 transition-colors">
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-dark font-medium">{m.plataforma}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-gray-medium">{m.menciones.toLocaleString()}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3">
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 max-w-[150px] sm:max-w-[200px]">
                      <div className="h-1.5 sm:h-2 rounded-full bg-primary" style={{ width: `${(m.menciones / 35000) * 100}%` }} />
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right">
                    <span className={`font-semibold ${m.sentimiento >= 0.6 ? "text-green-600" : m.sentimiento >= 0.5 ? "text-amber-500" : "text-red-500"}`}>
                      {(m.sentimiento * 100).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Temas virales + Intereses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ChartCard title="Temas Virales" subtitle="Tendencias digitales en redes sociales">
          <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-3">
            {temasVirales.map((t) => (
              <div key={t.tema} className="flex items-center justify-between py-2 border-b border-gray-border gap-3">
                <div className="min-w-0">
                  <span className="text-primary font-serif font-bold text-xs sm:text-sm">{t.tema}</span>
                  <p className="text-[10px] sm:text-[11px] text-gray-medium">{t.menciones.toLocaleString()} menciones</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-sm font-semibold uppercase ${
                    t.sentimiento === "positivo" ? "bg-green-100 text-green-700" :
                    t.sentimiento === "negativo" ? "bg-red-100 text-red-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>{t.sentimiento}</span>
                  <p className="text-[10px] sm:text-xs text-green-600 font-medium mt-1">{t.cambio}</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Intereses de Consumo Digital" subtitle="Preferencias de contenido en redes sociales">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={interesesConsumo} layout="vertical">
              <XAxis type="number" stroke="#888" fontSize={11} />
              <YAxis dataKey="interes" type="category" stroke="#888" fontSize={9} width={85} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#e63946" name="%" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default SentimientoPage;
