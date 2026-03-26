import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import ChartCard from "../components/ChartCard";
import JaliscoHeatMap from "../components/JaliscoHeatMap";
import { municipiosClave, marginacionMunicipal } from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

const aprobacionData = municipiosClave.map((m) => ({
  municipio: m.municipio.length > 12 ? m.municipio.slice(0, 12) + "." : m.municipio,
  aprobacion: m.aprobacion,
}));

function TerritorialPage() {
  const promedioAprobacion = (municipiosClave.reduce((acc, m) => acc + m.aprobacion, 0) / municipiosClave.length).toFixed(1);
  const totalAlertas = municipiosClave.reduce((acc, m) => acc + m.alertas, 0);
  const peorMunicipio = municipiosClave.reduce((a, b) => a.aprobacion < b.aprobacion ? a : b);

  return (
    <div>
      {/* Contenido con max-width */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <SectionTitle title="Inteligencia Territorial" subtitle="Monitoreo de 125 municipios - 15 municipios prioritarios" />

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-10">
          <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
            <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">Municipios</p>
            <p className="text-xl sm:text-2xl font-bold text-dark font-serif">125</p>
          </div>
          <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
            <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">Aprob. Promedio</p>
            <p className="text-xl sm:text-2xl font-bold text-dark font-serif">{promedioAprobacion}%</p>
          </div>
          <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
            <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">Alertas Activas</p>
            <p className="text-xl sm:text-2xl font-bold text-red-500 font-serif">{totalAlertas}</p>
          </div>
          <div className="bg-gray-light border border-gray-border rounded-sm p-3 sm:p-4">
            <p className="text-[9px] sm:text-[10px] text-gray-medium uppercase tracking-wider font-semibold mb-1 sm:mb-2">Menor Aprob.</p>
            <p className="text-sm sm:text-lg font-bold text-dark font-serif">{peorMunicipio.municipio}</p>
            <p className="text-[10px] sm:text-xs text-red-500">{peorMunicipio.aprobacion}%</p>
          </div>
        </div>

        {/* Grafica + Marginacion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <ChartCard title="Aprobacion por Municipio" subtitle="Ranking de los 15 municipios prioritarios" className="md:col-span-2">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={aprobacionData} layout="vertical">
                <XAxis type="number" stroke="#888" fontSize={11} domain={[0, 100]} />
                <YAxis dataKey="municipio" type="category" stroke="#888" fontSize={9} width={85} />
                <Tooltip {...TT} />
                <Bar dataKey="aprobacion" name="Aprobacion %" radius={[0, 4, 4, 0]}>
                  {aprobacionData.map((entry, i) => (
                    <Cell key={i} fill={entry.aprobacion >= 60 ? "#16a34a" : entry.aprobacion >= 50 ? "#f59e0b" : "#e63946"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Marginacion Municipal" subtitle="Distribucion de 125 municipios">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={marginacionMunicipal} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="municipios" paddingAngle={3}>
                  {marginacionMunicipal.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip {...TT} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-3">
              {marginacionMunicipal.map((m) => (
                <div key={m.nivel} className="flex items-center justify-between text-[10px] sm:text-[11px]">
                  <span className="flex items-center gap-1.5 text-gray-medium">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                    {m.nivel}
                  </span>
                  <span className="text-dark font-medium">{m.municipios} mun.</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Tabla */}
        <div className="border border-gray-border rounded-sm overflow-hidden">
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-border bg-gray-light">
            <h3 className="text-xs sm:text-sm font-serif font-bold text-dark">Detalle de Municipios Prioritarios</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm font-sans min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-border bg-gray-light">
                  <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Municipio</th>
                  <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Poblacion</th>
                  <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Aprobacion</th>
                  <th className="text-right px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Sentimiento</th>
                  <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Alertas</th>
                  <th className="text-center px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-medium">Marginacion</th>
                </tr>
              </thead>
              <tbody>
                {municipiosClave.map((m) => (
                  <tr key={m.municipio} className="border-b border-gray-border hover:bg-gray-light/50 transition-colors">
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-dark font-medium">{m.municipio}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-gray-medium">{m.poblacion}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right">
                      <span className={`font-semibold ${m.aprobacion >= 60 ? "text-green-600" : m.aprobacion >= 50 ? "text-amber-500" : "text-red-500"}`}>
                        {m.aprobacion}%
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="h-1.5 rounded-full bg-primary" style={{ width: `${m.sentimiento * 100}%` }} />
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-medium">{(m.sentimiento * 100).toFixed(0)}%</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      {m.alertas > 0 ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-xs font-bold">{m.alertas}</span>
                      ) : (
                        <span className="text-green-600 text-[10px] sm:text-xs font-medium">OK</span>
                      )}
                    </td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-sm font-medium ${
                        m.marginacion === "Muy bajo" ? "bg-green-100 text-green-700" :
                        m.marginacion === "Bajo" ? "bg-blue-100 text-blue-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>{m.marginacion}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mapa de calor - ancho completo */}
      <div className="mt-6 sm:mt-10 border-t border-gray-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-2">
          <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-dark">
            Mapa de Calor
          </h2>
          <p className="text-[10px] sm:text-xs text-gray-medium mt-1">Intensidad de actividad ciudadana por zona geografica de Jalisco</p>
        </div>
        <div className="mt-4">
          <JaliscoHeatMap municipiosData={municipiosClave} />
        </div>
      </div>
    </div>
  );
}

export default TerritorialPage;
