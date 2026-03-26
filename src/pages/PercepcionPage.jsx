import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, PieChart, Pie, Cell,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import ChartCard from "../components/ChartCard";
import {
  percepcionTemas, percepcionRadar, aprobacionHistorico,
  liderazgoPercepcion, participacionCiudadana,
} from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

const participacionData = [
  { name: "Participacion", value: participacionCiudadana.participacion, color: "#e63946" },
  { name: "Abstencion", value: participacionCiudadana.abstencion, color: "#e0e0e0" },
];

function PercepcionPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SectionTitle title="Percepcion y Aprobacion" subtitle="Percepcion ciudadana, aprobacion, liderazgo y participacion" />

      {/* Radar + Barras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <ChartCard title="Percepcion por Tema" subtitle="Indice de satisfaccion ciudadana (0-100)">
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={percepcionRadar} outerRadius="70%">
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="tema" stroke="#888" fontSize={10} />
              <PolarRadiusAxis stroke="#e0e0e0" domain={[0, 100]} fontSize={9} />
              <Radar name="Percepcion" dataKey="A" stroke="#e63946" fill="#e63946" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Detalle de Percepcion" subtitle="Seguridad, salud, educacion, transporte, economia, medio ambiente">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={percepcionTemas} layout="vertical">
              <XAxis type="number" stroke="#888" fontSize={11} domain={[0, 100]} />
              <YAxis dataKey="tema" type="category" stroke="#888" fontSize={10} width={75} />
              <Tooltip {...TT} />
              <Bar dataKey="valor" name="Indice" radius={[0, 4, 4, 0]}>
                {percepcionTemas.map((entry, i) => (
                  <Cell key={i} fill={entry.valor >= 60 ? "#16a34a" : entry.valor >= 45 ? "#f59e0b" : "#e63946"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Historico */}
      <ChartCard title="Historico de Aprobacion / Desaprobacion" subtitle="Tendencia de los ultimos 7 meses" className="mb-6 sm:mb-10">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={aprobacionHistorico}>
            <defs>
              <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e63946" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#e63946" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" stroke="#888" fontSize={11} />
            <YAxis stroke="#888" fontSize={11} domain={[30, 70]} />
            <Tooltip {...TT} />
            <Area type="monotone" dataKey="aprobacion" stroke="#e63946" fill="url(#gA)" strokeWidth={2} name="Aprobacion %" />
            <Area type="monotone" dataKey="desaprobacion" stroke="#888" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Desaprobacion %" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Liderazgo + Participacion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ChartCard title="Percepcion de Liderazgo" subtitle="Credibilidad, empatia, eficacia, transparencia, comunicacion">
          <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
            {liderazgoPercepcion.map((l) => (
              <div key={l.dimension}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] sm:text-xs text-gray-medium">{l.dimension}</span>
                  <span className={`text-[10px] sm:text-xs font-semibold ${l.valor >= 60 ? "text-green-600" : l.valor >= 50 ? "text-amber-500" : "text-red-500"}`}>
                    {l.valor}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                  <div
                    className="h-2 sm:h-2.5 rounded-full transition-all"
                    style={{
                      width: `${l.valor}%`,
                      backgroundColor: l.valor >= 60 ? "#16a34a" : l.valor >= 50 ? "#f59e0b" : "#e63946",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Participacion Ciudadana" subtitle="Tasa de participacion vs abstencion">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-3 sm:mt-4">
            <ResponsiveContainer width="100%" height={180} className="sm:!w-1/2">
              <PieChart>
                <Pie data={participacionData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" startAngle={90} endAngle={-270}>
                  {participacionData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex sm:flex-col gap-6 sm:gap-4 sm:flex-1">
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary font-serif">{participacionCiudadana.participacion}%</p>
                <p className="text-[10px] sm:text-xs text-gray-medium">Participacion</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-gray-medium font-serif">{participacionCiudadana.abstencion}%</p>
                <p className="text-[10px] sm:text-xs text-gray-medium">Abstencion</p>
              </div>
              <div className="hidden sm:block pt-2 border-t border-gray-border">
                <p className="text-xs text-green-600 font-medium">{participacionCiudadana.tendencia}</p>
              </div>
            </div>
          </div>
          <div className="sm:hidden mt-3 pt-2 border-t border-gray-border text-center">
            <p className="text-[10px] text-green-600 font-medium">{participacionCiudadana.tendencia}</p>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

export default PercepcionPage;
