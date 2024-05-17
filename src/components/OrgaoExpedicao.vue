<template>
  <div>
    <div class="m5">
      <span class="title-input-blue">Órgão de Expedição</span>
      <select
        v-model="orgao_expedicao"
        name="orgao_expedicao"
        class="select-resp"
      >
        <option>ABNC – Academia Brasileira de Neurocirurgia</option>
        <option>AGU – Advocacia-Geral da União</option>
        <option>ANAC – Agência Nacional de Aviação Civil</option>
        <option>CAER – Clube de Aeronáutica</option>
        <option>CAU – Conselho de Arquitetura e Urbanismo</option>
        <option>CBM – Corpo de Bombeiro Militar</option>
        <option>CFA – Conselho Federal Administração</option>
        <option>CFB – Conselho Federal de Biblioteconomia</option>
        <option>CFBIO – Conselho Federal de Biologia</option>
        <option>CFBM – Conselho Federal de Biomedicina</option>
        <option>CFC – Conselho Federal de Contabilidade</option>
        <option>CFESS – Conselho Federal de Serviço Social</option>
        <option>CFF – Conselho Regional de Farmácia</option>
        <option>CFFA – Conselho Federal de Fonoaudiologia</option>
        <option>CFM – Conselho Federal de Medicina</option>
        <option>CFMV – Conselho Federal de Medicina Veterinária</option>
        <option>CFN – Conselho Federal de Nutrição</option>
        <option>CFO – Conselho Federal de Odontologia</option>
        <option>CFP – Conselho Federal de Psicologia</option>
        <option>CFQ – Conselho Regional de Química</option>
        <option>CFT – Conselho Federal dos Técnicos Industriais</option>
        <option>CFTA – Conselho Federal dos Técnicos Agrícolas</option>
        <option>CGPI – Coordenação Geral de Privilégios e Imunidades</option>
        <option>
          CGPMAF – Coordenadoria Geral de Polícia Marítima, Aeronáutica e de
          Fronteiras
        </option>
        <option>CIPC – Centro de Inteligência da Polícia Civil</option>
        <option>CNIG – Conselho Nacional de Imigração</option>
        <option>CNT – Confederação Nacional do Transporte</option>
        <option>
          CNTV – Confederação Nacional de Vigilantes & Prestadores de Serviços
        </option>
        <option>COFECI – Conselho Federal de Corretores de Imóveis</option>
        <option>COFECON – Conselho Federal de Economia</option>
        <option>COFEM – Conselho Federal de Museologia</option>
        <option>COFEN – Conselho Federal de Enfermagem</option>
        <option>
          COFFITO – Conselho Regional de Fisioterapia e Terapia Ocupacional
        </option>
        <option>COMAER – Comando da Aeronáutica</option>
        <option>CONFE – Conselho Federal de Estatística</option>
        <option>CONFEA – Conselho Federal de Engenharia e Agronomia</option>
        <option>CONFEF – Conselho Federal de Educação Física</option>
        <option>
          CONFERE – Conselho Federal dos Representantes Comerciais
        </option>
        <option>CONRE – Conselho Regional de Estatística</option>
        <option>
          CONRERP – Conselho Federal de Profissionais de Relações Públicas
        </option>
        <option>CORE – Conselho Regional dos Representantes Comerciais</option>
        <option>CORECON – Conselho Regional de Economia</option>
        <option>COREM – Conselho Regional de Museologia</option>
        <option>COREN – Conselho Regional de Enfermagem</option>
        <option>CRA – Conselho Regional de Administração</option>
        <option>CRAS – Centro de Referência de Assistência Social</option>
        <option>CRB – Conselho Regional de Biblioteconomia</option>
        <option>CRBIO – Conselho Regional de Biologia</option>
        <option>CRBM – Conselho Regional de Biomedicina</option>
        <option>CRC – Conselho Regional de Contabilidade</option>
        <option>CREA – Conselho Regional de Engenharia e Agronomia</option>
        <option>CRECI – Conselho Regional de Corretores de Imóveis</option>
        <option>CREF – Conselho Regional de Educação Física</option>
        <option>
          CREFITO – Conselho Regional de Fisioterapia e Terapia Ocupacional
        </option>
        <option>CRESS – Conselho Regional de Serviço Social</option>
        <option>CRF – Conselho Regional de Farmácia</option>
        <option>CRFA – Conselho Regional de Fonoaudiologia</option>
        <option>CRM – Conselho Regional de Medicina</option>
        <option>CRMV – Conselho Regional de Medicina Veterinária</option>
        <option>CRN – Conselho Regional de Nutrição</option>
        <option>CRO – Conselho Regional de Odontologia</option>
        <option>CRP – Conselho Regional de Psicologia</option>
        <option>
          CRPRE – Conselho Regional de Profissionais de Relações Públicas
        </option>
        <option>CRQ – Conselho Regional de Química</option>
        <option>CRT – Conselho Regional dos Técnicos Industriais</option>
        <option>CRTA – Conselho Regional de Técnicos de Administração</option>
        <option>CTPS – Carteira de Trabalho e Previdência Social</option>
        <option>
          CV – Cartório Civil DELEMIG – Delegacia de Polícia de Imigração
        </option>
        <option>DETRAN – Departamento Estadual de Trânsito</option>
        <option>
          DGPC – Diretoria Geral da Polícia Civil DIC – Diretoria de
          Identificação Civil
        </option>
        <option>DICC – Diretoria de Identificação Civil e Criminal</option>
        <option>DIREX – Diretoria Executiva</option>
        <option>DPF – Departamento de Polícia Federal</option>
        <option>
          DPMAF – Divisão de Polícia Marítima, Aérea e de Fronteiras
        </option>
        <option>DPT – Departamento de Polícia Técnica Geral</option>
        <option>DPTC – Departamento de Polícia Técnico Científica</option>
        <option>DREX – Delegacia Regional Executiva</option>
        <option>DRT – Delegacia Regional do Trabalho</option>
        <option>EB – Exército Brasileiro</option>
        <option>FAB – Força Aérea Brasileira</option>
        <option>FENAJ – Federação Nacional dos Jornalistas</option>
        <option>FGTS – Fundo de Garantia do Tempo de Serviço</option>
        <option>FIPE – Fundação Instituto de Pesquisas Econômicas</option>
        <option>FLS – Fundação Lyndolpho Silva</option>
        <option>FUNAI – Fundação Nacional do Índio</option>
        <option>
          GEJSP – Gerência de Estado de Justiça, Segurança Pública e Cidadania
        </option>
        <option>
          GEJSPC – Gerência de Estado de Justiça, Segurança Pública e Cidadania
        </option>
        <option>
          GEJUSPC – Gerência de Estado de Justiça, Segurança Pública e Cidadania
        </option>
        <option>GESP – Gerência de Estado de Segurança Pública</option>
        <option>GOVGO – Governo do Estado de Goiás I</option>
        <option>CLA – Carteira de Identidade Classista</option>
        <option>ICP – Instituto de Polícia Científica</option>
        <option>
          IDAMP – Instituto de Identificação Dr. Aroldo Mendes Paiva
        </option>
        <option>IFP – Instituto Félix Pacheco</option>
        <option>IGP – Instituto Geral de Perícias</option>
        <option>
          IIACM – Instituto de Identificação Aderson Conceição de Melo
        </option>
        <option>IICC – Instituto de Identificação Civil e Criminal</option>
        <option>
          IICCECF – Instituto de Identificação Civil e Criminal Engrácia da
          Costa Francisco
        </option>
        <option>IICM – Instituto de Identificação Carlos Menezes</option>
        <option>IIGP – Instituto de Identificação Gonçalo Pereira</option>
        <option>IIJDM – Instituto de Identificação João de Deus Martins</option>
        <option>IIPC – Instituto de Identificação da Polícia Civil</option>
        <option>IIPC – Instituto de Identificação Pedro Mello</option>
        <option>
          IIRGD – Instituto de Identificação Ricardo Gumbleton Daunt
        </option>
        <option>
          IIRHM – Instituto de Identificação Raimundo Hermínio de Melo
        </option>
        <option>IITB – Instituto de Identificação Tavares Buril</option>
        <option>IML – Instituto Médico-Legal</option>
        <option>INI – Instituto Nacional de Identificação</option>
        <option>IPF – Instituto Pereira Faustino</option>
        <option>ITCP – Instituto Técnico-Científico de Perícia</option>
        <option>ITEP – Instituto Técnico-Científico de Perícia</option>
        <option>MAER – Ministério da Aeronáutica</option>
        <option>MB – Marinha do Brasil</option>
        <option>MD – Ministério da Defesa</option>
        <option>MDS – Ministério da Cidadania</option>
        <option>MEC – Ministério da Educação e Cultura</option>
        <option>MEX – Ministério do Exército</option>
        <option>MINDEF – Ministério da Defesa</option>
        <option>MJ – Ministério da Justiça</option>
        <option>MM – Ministério da Marinha</option>
        <option>MMA – Ministério da Marinha</option>
        <option>MPAS – Ministério da Previdência e Assistência Social</option>
        <option>MPE – Ministério Público Estadual</option>
        <option>MPF – Ministério Público Federal</option>
        <option>MPT – Ministério Público do Trabalho</option>
        <option>MRE – Ministério das Relações Exteriores</option>
        <option>MT – Ministério do Trabalho</option>
        <option>MTE – Ministério da Economia</option>
        <option>MTPS – Ministério do Trabalho e Previdência Social</option>
        <option>NUMIG – Núcleo de Polícia de Imigração</option>
        <option>OAB – Ordem dos Advogados do Brasil</option>
        <option>OMB – Ordens dos Músicos do Brasil</option>
        <option>PC – Polícia Civil</option>
        <option>PF – Polícia Federal</option>
        <option>PGFN – Procuradoria Geral da Fazenda Nacional</option>
        <option>PM – Polícia Militar</option>
        <option>POLITEC – Perícia Oficial e Identificação Técnica</option>
        <option>PRF – Polícia Rodoviária Federal</option>
        <option>PTC – Polícia Tecnico-Científica</option>
        <option>SCC – Secretaria de Estado da Casa Civil</option>
        <option>
          SCJDS – Secretaria Coordenadora de Justiça e Defesa Social
        </option>
        <option>SDS – Secretaria de Defesa Social</option>
        <option>SECC – Secretaria de Estado da Casa Civil</option>
        <option>
          SECCDE – Secretaria de Estado da Casa Civil e Desenvolvimento
          Econômico
        </option>
        <option>SEDS – Secretaria de Estado da Defesa Social</option>
        <option>
          SEGUP – Secretaria de Estado da Segurança Pública e da Defesa Social
        </option>
        <option>
          SEJSP – Secretaria de Estado de Justiça e Segurança Pública
        </option>
        <option>SEJUC – Secretaria de Estado da Justica</option>
        <option>
          SEJUSP – Secretaria de Estado de Justiça e Segurança Pública
        </option>
        <option>SEPC – Secretaria de Estado da Polícia Civil</option>
        <option>SES – Secretaria de Estado da Segurança</option>
        <option>SESC – Secretaria de Estado da Segurança e Cidadania</option>
        <option>
          SESDC – Secretaria de Estado da Segurança, Defesa e Cidadania
        </option>
        <option>
          SESDEC – Secretaria de Estado da Segurança, Defesa e Cidadania
        </option>
        <option>SESEG – Secretaria Estadual de Segurança</option>
        <option>SESP – Secretaria de Estado da Segurança Pública</option>
        <option>
          SESPAP – Secretaria de Estado da Segurança Pública e Administração
          Penitenciária
        </option>
        <option>
          SESPDC – Secretaria de Estado de Segurança Publica e Defesa do Cidadão
        </option>
        <option>
          SESPDS – Secretaria de Estado de Segurança Pública e Defesa Social
        </option>
        <option>SGPC – Superintendência Geral de Polícia Civil</option>
        <option>SGPJ – Superintendência Geral de Polícia Judiciária</option>
        <option>SIM – Serviço de Identificação da Marinha</option>
        <option>SJ – Secretaria da Justiça</option>
        <option>SJCDH – Secretaria da Justiça e dos Direitos Humanos</option>
        <option>
          SJDS – Secretaria Coordenadora de Justiça e Defesa Social
        </option>
        <option>SJS – Secretaria da Justiça e Segurança</option>
        <option>SJTC – Secretaria da Justiça do Trabalho e Cidadania</option>
        <option>SJTS – Secretaria da Justiça do Trabalho e Segurança</option>
        <option>
          SNJ – Secretaria Nacional de Justiça / Departamento de Estrangeiros
        </option>
        <option>
          SPMAF – Serviço de Polícia Marítima, Aérea e de Fronteiras
        </option>
        <option>SPTC – Secretaria de Polícia Técnico-Científica</option>
        <option>
          SRDPF – Superintendência Regional do Departamento de Polícia Federal
        </option>
        <option>SRF – Receita Federal</option>
        <option>SRTE – Superintendência Regional do Trabalho</option>
        <option>SSDC – Secretaria da Segurança, Defesa e Cidadania</option>
        <option>SSDS – Secretaria da Segurança e da Defesa Social</option>
        <option>SSI – Secretaria de Segurança e Informações</option>
        <option>SSP – Secretaria de Segurança Pública</option>
        <option>
          SSPCGP – Secretaria de Segurança Pública e Coordenadoria Geral de
          Perícias
        </option>
        <option>
          SSPDC – Secretaria de Segurança Pública e Defesa do Cidadão
        </option>
        <option>SSPDS – Secretaria de Segurança Pública e Defesa Social</option>
        <option>SSPPC – Secretaria de Segurança Pública Polícia Civil</option>
        <option>SUSEP – Superintendência de Seguros Privados</option>
        <option>SUSEPE – Superintendência dos Serviços Penitenciários</option>
        <option>TJ – Tribunal de Justiça</option>
        <option>
          TJAEM – Tribunal Arbitral e Mediação dos Estados Brasileiros
        </option>
        <option>TRE – Tribunal Regional Eleitoral</option>
        <option>TRF – Tribunal Regional Federal</option>
        <option>TSE – Tribunal Superior Eleitoral</option>
        <option>XXX – Orgão Estrangeiro</option>
        <option>ZZZ – Outro</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrgaoExpedicao",
  data() {
    return {
      orgao_expedicao: "SSP – Secretaria de Segurança Pública",
    };
  },
};
</script>

