import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import SectionTitle from "../components/SectionTitle";
import ChartCard from "../components/ChartCard";
import {
  edadDistribucion, generoDistribucion, nivelEducativo, nivelIngresos,
  estadoCivil, zonaResidencial, profesionTop, empleo, interesesConsumo,
  predisposicionSalud,
} from "../data/dashboardData";

const TT = {
  contentStyle: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "4px" },
  labelStyle: { color: "#1a1a1a" },
  itemStyle: { color: "#1a1a1a" },
};

function DemograficoPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SectionTitle title="Perfil Demografico" subtitle="Datos ciudadanos: edad, genero, educacion, ingresos, empleo y mas" />

      {/* Edad + Genero + Zona */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <ChartCard title="Distribucion por Edad" subtitle="Piramide poblacional" className="md:col-span-2">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={edadDistribucion} layout="vertical">
              <XAxis type="number" stroke="#888" fontSize={11} />
              <YAxis dataKey="rango" type="category" stroke="#888" fontSize={11} width={45} />
              <Tooltip {...TT} />
              <Bar dataKey="hombres" fill="#e63946" name="Hombres %" radius={[0, 4, 4, 0]} />
              <Bar dataKey="mujeres" fill="#888" name="Mujeres %" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
          <ChartCard title="Genero">
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie data={generoDistribucion} cx="50%" cy="50%" innerRadius={28} outerRadius={45} dataKey="value" paddingAngle={3}>
                  {generoDistribucion.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip {...TT} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-3 mt-1">
              {generoDistribucion.map((g) => (
                <span key={g.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }} />
                  {g.name} {g.value}%
                </span>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Zona Residencial">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>
                <Pie data={zonaResidencial} cx="50%" cy="50%" innerRadius={22} outerRadius={35} dataKey="value" paddingAngle={5}>
                  {zonaResidencial.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip {...TT} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-3 mt-1">
              {zonaResidencial.map((z) => (
                <span key={z.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: z.color }} />
                  {z.name} {z.value}%
                </span>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>

      {/* Educacion + Ingresos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <ChartCard title="Nivel Educativo">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={nivelEducativo}>
              <XAxis dataKey="nivel" stroke="#888" fontSize={9} angle={-25} textAnchor="end" height={50} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#e63946" name="%" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Nivel de Ingresos" subtitle="Ingreso mensual en MXN">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={nivelIngresos}>
              <XAxis dataKey="rango" stroke="#888" fontSize={9} angle={-25} textAnchor="end" height={50} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#1a1a1a" name="%" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Estado civil + Empleo + Profesiones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <ChartCard title="Estado Civil">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={estadoCivil} cx="50%" cy="50%" innerRadius={35} outerRadius={60} dataKey="value" paddingAngle={2}>
                {estadoCivil.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip {...TT} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {estadoCivil.map((s) => (
              <span key={s.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} {s.value}%
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Situacion Laboral">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={empleo} cx="50%" cy="50%" innerRadius={35} outerRadius={60} dataKey="value" paddingAngle={2}>
                {empleo.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip {...TT} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {empleo.map((s) => (
              <span key={s.name} className="flex items-center gap-1 text-[10px] text-gray-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} {s.value}%
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Profesiones Principales" className="sm:col-span-2 lg:col-span-1">
          <div className="space-y-2 mt-2">
            {profesionTop.map((p) => (
              <div key={p.profesion} className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-[11px] text-gray-medium w-20 sm:w-24 shrink-0">{p.profesion}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div className="h-1.5 sm:h-2 bg-primary rounded-full" style={{ width: `${(p.porcentaje / 20) * 100}%` }} />
                </div>
                <span className="text-[10px] sm:text-[11px] text-dark font-medium w-8 sm:w-10 text-right">{p.porcentaje}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Intereses + Salud */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ChartCard title="Intereses de Consumo" subtitle="Preferencias en contenido digital">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={interesesConsumo} layout="vertical">
              <XAxis type="number" stroke="#888" fontSize={11} />
              <YAxis dataKey="interes" type="category" stroke="#888" fontSize={9} width={80} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#16a34a" name="%" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Predisposicion a Enfermedades" subtitle="Indicadores de salud publica">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={predisposicionSalud}>
              <XAxis dataKey="enfermedad" stroke="#888" fontSize={9} angle={-15} textAnchor="end" height={50} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip {...TT} />
              <Bar dataKey="porcentaje" fill="#e63946" name="%" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default DemograficoPage;
