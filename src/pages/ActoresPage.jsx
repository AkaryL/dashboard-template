import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import ChartCard from "../components/ChartCard";
import {
  segmentacionPolitica, nivelInfluencia, seguridadSocial,
  conflictosLegales, movimientosSociales, gruposAlteracion, deudas,
} from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

function ActoresPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SectionTitle title="Actores y Riesgo Social" subtitle="Segmentacion politica, influencia social, marginacion, conflictos y movimientos" />

      {/* Segmentacion + Influencia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <ChartCard title="Segmentacion Politica" subtitle="Clasificacion de actores por afinidad">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
            <ResponsiveContainer width="100%" height={200} className="sm:!w-1/2">
              <PieChart>
                <Pie data={segmentacionPolitica} cx="50%" cy="50%" innerRadius={45} outerRadius={75} dataKey="value" paddingAngle={3}>
                  {segmentacionPolitica.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip {...TT} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 sm:flex-1 w-full sm:w-auto">
              {segmentacionPolitica.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                  <div>
                    <p className="text-[10px] sm:text-xs text-dark font-medium leading-tight">{s.name}</p>
                    <p className="text-base sm:text-lg font-bold font-serif" style={{ color: s.color }}>{s.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>

        <ChartCard title="Nivel de Influencia Social" subtitle="Capacidad de movilizacion">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={nivelInfluencia}>
              <XAxis dataKey="nivel" stroke="#888" fontSize={10} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#1a1a1a" name="%" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Seguridad Social + Deudas + Conflictos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <ChartCard title="Seguridad Social">
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={seguridadSocial} cx="50%" cy="50%" innerRadius={35} outerRadius={58} dataKey="value" paddingAngle={5}>
                {seguridadSocial.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip {...TT} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-3 sm:gap-4 mt-2">
            {seguridadSocial.map((s) => (
              <span key={s.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} {s.value}%
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Nivel de Endeudamiento">
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={deudas} cx="50%" cy="50%" innerRadius={35} outerRadius={58} dataKey="value" paddingAngle={3}>
                {deudas.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip {...TT} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
            {deudas.map((d) => (
              <span key={d.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                {d.name} {d.value}%
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Conflictos Legales" className="sm:col-span-2 lg:col-span-1">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={conflictosLegales} layout="vertical">
              <XAxis type="number" stroke="#888" fontSize={11} />
              <YAxis dataKey="tipo" type="category" stroke="#888" fontSize={9} width={90} />
              <Tooltip {...TT} />
              <Bar dataKey="cantidad" fill="#f59e0b" name="Casos" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Movimientos sociales */}
      <div className="border border-gray-border rounded-sm overflow-hidden mb-6 sm:mb-10">
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-border bg-gray-light">
          <h3 className="text-xs sm:text-sm font-serif font-bold text-dark">Movimientos Sociales y Protestas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm font-sans min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-border bg-gray-light">
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Fecha</th>
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Tipo</th>
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Ubicacion</th>
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Descripcion</th>
                <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Participantes</th>
                <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Riesgo</th>
              </tr>
            </thead>
            <tbody>
              {movimientosSociales.map((m, i) => (
                <tr key={i} className="border-b border-gray-border hover:bg-gray-light/50 transition-colors">
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-medium text-[10px] sm:text-xs whitespace-nowrap">{m.fecha}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-dark">{m.tipo}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-primary font-medium whitespace-nowrap">{m.ubicacion}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-medium text-[10px] sm:text-xs">{m.descripcion}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-dark font-medium">{m.participantes.toLocaleString()}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                    <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-sm font-semibold uppercase ${
                      m.riesgo === "alto" ? "bg-red-100 text-red-700" :
                      m.riesgo === "medio" ? "bg-amber-100 text-amber-700" :
                      "bg-green-100 text-green-700"
                    }`}>{m.riesgo}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grupos */}
      <div className="border border-gray-border rounded-sm overflow-hidden">
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-border bg-gray-light">
          <h3 className="text-xs sm:text-sm font-serif font-bold text-dark">Grupos que Alteran el Orden</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm font-sans min-w-[400px]">
            <thead>
              <tr className="border-b border-gray-border bg-gray-light">
                <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Grupo</th>
                <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Riesgo</th>
                <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Miembros</th>
              </tr>
            </thead>
            <tbody>
              {gruposAlteracion.map((g) => (
                <tr key={g.grupo} className="border-b border-gray-border hover:bg-gray-light/50 transition-colors">
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-dark font-medium">{g.grupo}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                    <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-sm font-semibold uppercase ${
                      g.nivel === "Alto" ? "bg-red-100 text-red-700" :
                      g.nivel === "Medio" ? "bg-amber-100 text-amber-700" :
                      "bg-green-100 text-green-700"
                    }`}>{g.nivel}</span>
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-gray-medium">{g.miembros}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ActoresPage;
