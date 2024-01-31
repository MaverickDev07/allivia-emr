import { AgendaCita, AgendaCitaSchema } from './appAgendacita.model'
import { ArchivoLaboratorios, ArchivoLaboratoriosSchema } from './appArchivoLaboratorios.model'
import { FichaLaboratorios, FichaLaboratoriosSchema } from './appFichaLaboratorios.model'
import { LaboratoriosPaciente, LaboratoriosPacienteSchema } from './appLaboratoriosPaciente.model'
import { FarmaciasPaciente, FarmaciasPacienteSchema } from './webFarmaciasPaciente.model'
import { Medicamento, MedicamentoSchema } from './appMedicamentos.model'
import { FichaMedicamentos, FichaMedicamentosSchema } from './appFichamedicamentos.model'
import { OrdenCompraMedicamentos, OrdenCompraMedicamentosSchema } from './appOrdenCompraMedicamentos.model'

import { Doctor, DoctorSchema } from './appDoctor.model'
import { Paciente, PacienteSchema } from './appPaciente.model'
import { FichaMedica, FichaMedicaSchema } from './appFichamedica.model'
import { FichaDiagnostico, FichaDiagnosticoSchema } from './appFichadiagnostico.model'
import { TipoCita, TipoCitaSchema } from './appTipocita.model'
import { TipoConsulta, TipoConsultaSchema } from './appTipoconsulta.model'
import { Usuario, UsuarioSchema } from './appUsuario.model'
import { DoctoresEspecialidades, DoctoresEspecialidadesSchema } from './appDoctoresespecialidades.model'
import { Especialidad, EspecialidadSchema } from './appEspecialidad.model'
import { ProgramaFase, ProgramaFaseSchema } from './appProgramafase.model'
import { DetalleEnvio, DetalleEnvioSchema } from './appDetalleEnvio.model'
import { Propiedad, PropiedadSchema } from './appPropiedad.model'
import { PacientePremium, PacientePremiumSchema } from './viewPacientepremium.model'
import { WebRol, WebRolSchema } from './webRol.model'
import { WebUsuario, WebUsuarioSchema } from './webUsuario.model'
import { Pago, PagoSchema } from './appPago.model'
import { Suscripcion, SuscripcionSchema } from './appSuscripcion.model'
import { SuscripcionPaciente, SuscripcionPacienteSchema } from './appSuscripcionPaciente.model'

import { AntecedenteAlergia, AntecedenteAlergiaSchema } from './appAntecedenteAlergia.model'
import { AntecedenteCirugia, AntecedenteCirugiaSchema } from './appAntecedenteCirugia.model'
import { AntecedenteEnfermedadBase, AntecedenteEnfermedadBaseSchema } from './appAntecedenteEnfermedadBase.model'
import { AntecedenteFamilia, AntecedenteFamiliaSchema } from './appAntecedenteFamilia.model'
import { AntecedenteMedico, AntecedenteMedicoSchema } from './appAntecedenteMedico.model'
import { AntecedenteVacuna, AntecedenteVacunaSchema } from './appAntecedenteVacuna.model'
import { Alergia, AlergiaSchema } from './appAlergia.model'
import { Cirugia, CirugiaSchema } from './appCirugia.model'
import { EnfermedadBase, EnfermedadBaseSchema } from './appEnfermedadBase.model'
import { Vacuna, VacunaSchema } from './appVacuna.model'

function setupModels(sequelize) {
  AgendaCita.init(AgendaCitaSchema, AgendaCita.config(sequelize))
  ArchivoLaboratorios.init(ArchivoLaboratoriosSchema, ArchivoLaboratorios.config(sequelize))
  FichaLaboratorios.init(FichaLaboratoriosSchema, FichaLaboratorios.config(sequelize))
  LaboratoriosPaciente.init(LaboratoriosPacienteSchema, LaboratoriosPaciente.config(sequelize))
  FarmaciasPaciente.init(FarmaciasPacienteSchema, FarmaciasPaciente.config(sequelize))
  Medicamento.init(MedicamentoSchema, Medicamento.config(sequelize))
  FichaMedicamentos.init(FichaMedicamentosSchema, FichaMedicamentos.config(sequelize))
  OrdenCompraMedicamentos.init(OrdenCompraMedicamentosSchema, OrdenCompraMedicamentos.config(sequelize))

  Doctor.init(DoctorSchema, Doctor.config(sequelize))
  Paciente.init(PacienteSchema, Paciente.config(sequelize))
  FichaDiagnostico.init(FichaDiagnosticoSchema, FichaDiagnostico.config(sequelize))
  FichaMedica.init(FichaMedicaSchema, FichaMedica.config(sequelize))
  TipoCita.init(TipoCitaSchema, TipoCita.config(sequelize))
  TipoConsulta.init(TipoConsultaSchema, TipoConsulta.config(sequelize))
  Usuario.init(UsuarioSchema, Usuario.config(sequelize))
  DoctoresEspecialidades.init(DoctoresEspecialidadesSchema, DoctoresEspecialidades.config(sequelize))
  Especialidad.init(EspecialidadSchema, Especialidad.config(sequelize))
  ProgramaFase.init(ProgramaFaseSchema, ProgramaFase.config(sequelize))
  DetalleEnvio.init(DetalleEnvioSchema, DetalleEnvio.config(sequelize))
  Propiedad.init(PropiedadSchema, Propiedad.config(sequelize))
  PacientePremium.init(PacientePremiumSchema, PacientePremium.config(sequelize))
  Pago.init(PagoSchema, Pago.config(sequelize))
  Suscripcion.init(SuscripcionSchema, Suscripcion.config(sequelize))
  SuscripcionPaciente.init(SuscripcionPacienteSchema, SuscripcionPaciente.config(sequelize))
  WebRol.init(WebRolSchema, WebRol.config(sequelize))
  WebUsuario.init(WebUsuarioSchema, WebUsuario.config(sequelize))

  AntecedenteMedico.init(AntecedenteMedicoSchema, AntecedenteMedico.config(sequelize))
  AntecedenteAlergia.init(AntecedenteAlergiaSchema, AntecedenteAlergia.config(sequelize))
  AntecedenteCirugia.init(AntecedenteCirugiaSchema, AntecedenteCirugia.config(sequelize))
  AntecedenteEnfermedadBase.init(AntecedenteEnfermedadBaseSchema, AntecedenteEnfermedadBase.config(sequelize))
  AntecedenteFamilia.init(AntecedenteFamiliaSchema, AntecedenteFamilia.config(sequelize))
  AntecedenteVacuna.init(AntecedenteVacunaSchema, AntecedenteVacuna.config(sequelize))
  Alergia.init(AlergiaSchema, Alergia.config(sequelize))
  Cirugia.init(CirugiaSchema, Cirugia.config(sequelize))
  EnfermedadBase.init(EnfermedadBaseSchema, EnfermedadBase.config(sequelize))
  Vacuna.init(VacunaSchema, Vacuna.config(sequelize))

  // Relaciones
  AgendaCita.associate(sequelize.models)
  Paciente.associate(sequelize.models)
  Doctor.associate(sequelize.models)
  FichaDiagnostico.associate(sequelize.models)
  FichaMedica.associate(sequelize.models)
  FichaMedicamentos.associate(sequelize.models)
  TipoCita.associate(sequelize.models)
  TipoConsulta.associate(sequelize.models)
  Pago.associate(sequelize.models)
  OrdenCompraMedicamentos.associate(sequelize.models)
  Usuario.associate(sequelize.models)
  DoctoresEspecialidades.associate(sequelize.models)
  Especialidad.associate(sequelize.models)
  ProgramaFase.associate(sequelize.models)
  DetalleEnvio.associate(sequelize.models)
  Propiedad.associate(sequelize.models)
  SuscripcionPaciente.associate(sequelize.models)
  WebRol.associate(sequelize.models)
  WebUsuario.associate(sequelize.models)

  AntecedenteMedico.associate(sequelize.models)
  AntecedenteAlergia.associate(sequelize.models)
  AntecedenteCirugia.associate(sequelize.models)
  AntecedenteEnfermedadBase.associate(sequelize.models)
  AntecedenteFamilia.associate(sequelize.models)
  AntecedenteVacuna.associate(sequelize.models)
  Alergia.associate(sequelize.models)
  Cirugia.associate(sequelize.models)
  EnfermedadBase.associate(sequelize.models)
  Vacuna.associate(sequelize.models)
}

module.exports = setupModels
