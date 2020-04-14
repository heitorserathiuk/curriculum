
Vue.component('Programacao', {
  created(){
    this.programacao.sort()
  },
  data () {
    return {
      programacao: [ 'C#','SQL','Java Script', 'Visual Basic', 'Java', 'Angular', 'JQuery', 'HTML', 'CSS', 'XPath', 'Python', 'ASP.NET', 'C','C++', 'Android', 'Sass', 'TypeScript' ]
    }
  },
  template: `
<div>
    <h3>Programação</h3>
    <div class="skills" v-for="p in programacao">
      <label>{{p}}</label>
    </div>
</div>
`
}) 
Vue.component('Ferramentas', {
  created(){
    this.ferramentas.sort()
  },
  data () {
    return {
      ferramentas: ['Selenium', 'Microsoft SQL Server Integration Services(SSIS)','Pacote Office', 'Microsoft SQL Server', 'Google Sheets', 'Microsoft SQL Server Analysis Services(SSAS)', 'Android Studio', 'Astah Community', 'Qlik Sense','Fiddler','Postman', 'GitHub', 'MySQL', 'Google Data Studio']
    }
  },
  template: `
<div>
    <h3>Ferramentas</h3>
    <div class="skills" v-for="f in ferramentas">
      <label>{{f}}</label>
    </div>
</div>
`
}) 
Vue.component('Marketing', {
  created(){
    this.marketing.sort()
  },
  data () {
    return {
      marketing: ['Google Analytics', 'Adobe Illustrator','Adobe Photoshop', 'Adobe XD', 'Axure RP','Google Ads', 'SEM Rush', 'Google Search Console', 'Ads Manager', 'Google Ads Editor', 'B2W Ads', 'Yahoo Ads', 'Screaming Frog', 'RD Station', 'Power Editor', 'Google Merchant Center', 'Bing Ads', 'Google Tag Manager', 'Hitwise', 'Bornlogic Ads' ]
    }
  },
  template: `
<div>
    <h3>Ferramentas Marketing</h3>
    <div class="skills" v-for="m in marketing">
      <label>{{m}}</label>
    </div>
</div>
`
}) 

Vue.component('Livros', {
  data () {
    return {
      livros: [
        {
          titulo: 'Habilitação tipo B e carro próprio',
          data: '2009-2023'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade de Pesquisa',
          data: '2019-2020'
        },
        {
          titulo: 'Participação do Digital Mission São Paulo',
          data: '2018'
        },
		{
          titulo: 'Certificado Google Analytics Individual Qualification',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Shopping',
          data: '2017-2018'
        },
        {
          titulo: 'Participação do 19° Encontro Locaweb',
          data: '2017'
        },
        {
          titulo: 'Participação do Meeting Digitalks',
          data: '2017'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade Gráfica',
          data: '2013-2014'
        },
        {
          titulo: 'Kumon',
          data: '2004'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Livros</h3>
       <ul class="tools" v-for="l in livros">
          <li>
            <strong v-html="l.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="l.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Certificacoes', {
  data () {
    return {
      certificacoes: [
		{
          titulo: 'Certificado Google Ads - Publicidade de Pesquisa',
          data: '2019-2020'
        },
		{
          titulo: 'Certificado Google Analytics Individual Qualification',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Shopping',
          data: '2017-2018'
        },
		{
          titulo: 'Certificado Google Ads - Publicidade Gráfica',
          data: '2013-2014'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Certificações</h3>
       <ul class="tools" v-for="c in certificacoes">
          <li>
            <strong v-html="c.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="c.data"></small>
          </li>
       </ul>
</div>
`
})


Vue.component('Eventos', {
  data () {
    return {
      eventos: [
        {
          titulo: 'Participação do Digital Mission São Paulo',
          data: '2018'
        },
        {
          titulo: 'Participação do 19° Encontro Locaweb',
          data: '2017'
        },
        {
          titulo: 'Participação do Meeting Digitalks',
          data: '2017'
        },
	    {
          titulo: 'Robotec Fair 2009',
          data: '2009'
        },			
      ]
    }
  },
  template: `
<div>
      <h3>Eventos</h3>
       <ul class="tools" v-for="e in eventos">
          <li>
            <strong v-html="e.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="e.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Outros', {
  data () {
    return {
      outros: [
        {
          titulo: 'Habilitação tipo B e carro próprio',
          data: '2009-2023'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Outros</h3>
       <ul class="tools" v-for="o in outros">
          <li>
            <strong v-html="o.titulo"></strong> 
		  </li>
		  <li>
            <small v-html="o.data"></small>
          </li>
       </ul>
</div>
`
})

Vue.component('Educacao', {
  data () {
    return {
      universidade: [
        {
          titulo: 'Sistemas de Informação',
          universidade:'Universidade Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jan 2018 &mdash; Jun 2020',
          descricao: `Aplicativos Móveis, Sistemas de Informação, Orientação a Objetos, Infraestrutura Tecnológica, Novo Ambiente Organizacional, Gestão de Projetos de Software, Sistemas Convergentes, Sistemas Corporativos, Sistemas Embarcados, Gestão de Sistemas Operacionais, Arquitetura de Referência para os Negócios, Desenvolvimento Web, Business Analytics, Governança de TI, Cultura Startup, Tópicos Especiais em Software, Trabalho de Conclusão de Curso.`
        },
        {
          titulo:'Engenharia da Computação',
          universidade:'Universidade Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jan 2013 &mdash; Dez 2017',
          descricao: `Cálculo Diferencial e Integral, Geometria Anlítica e Algebra Linear, Química, Técnicas de Programação, Desenho Técnico, Lógica de Matemática, Eletricidade, Sistemas Digitais, Técnicas Avançadas de Programação, Sinais e Sistemas, Projetos de Engenharia, Banco de Dados, Arquitetura de Computadores, Processamento Digital de Sinais, Linguagens Formais e Copiladores, Cálculo Numérico, Pesquisa Operacional, Engenharia de Software, Comunicação e Expressão, Fundamentos de Admnistração.`
        },
      ]
    }
  },
  template: `
<div>
      <h3>Formação Acadêmica</h3>
      <article class="item" v-for="u in universidade">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="u.titulo"></h4>
              <h5 v-html="u.universidade"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="u.timeline"></small>
              <address v-html="u.local"></address>
            </div>
          </div>
          <p>
            {{u.descricao}}
          </p>
        </article>
</div>
`
});
Vue.component('Experiencia', {
  data () {
    return {
      empregos: [
        {
          titulo: 'Desenvolvedor Web Full-Stack Junior C# e Angular',
          empresa:'Editora Positivo',
          local: 'Curitiba, PR',
          timeline: 'Jul 2019 &mdash; Out 2019',
          descricao: `Desenvolvimento e correção de erros tanto do back end quanto do front end. Criação de scripts SQL para compreensão do sistema e para correções;
Back End utilizando SQL Server e WebAPI C#/.NET (Core e 4.7.2)
Front End utilizando AngularJS, HTML, CSS
Utilização do Fiddler e do Postman para depuração do sistema;
Controle de versão usando GitHub e SourceTree. Criação de branches para codificação, releases de novas versões do projeto, pull requests, publicação de projetos, e equalizações de códigos;
Utilização do DevOps/TFS (CMMI e Agile) para gerenciamento de atividades e projetos;
Metodologia Scrum ágil adaptada à realidade da empresa.`
        },
        {
          titulo:'Estágio como Analista de SEO',
          empresa:'FH Consultoria',
          local: 'Curitiba, PR',
          timeline: 'Mar 2018 &mdash; Set 2018',
          descricao: `Acompanhamento das páginas do ecommerce da Hering, análise de informações como: URL, Breadcrumbs, Canonical Tag, Heading Tags, Meta Tags, Status Http, Sitelinks e outras informações; Utilização do plugin SEO Tools para Excel, das ferramentas SEM Rush e Screaming Frog; Criação de Titles e Metadescriptions relevantes para cada página; Alterações via planilhas e consultas flexible search ao BD; Alterações em ferramenta CMS da SAP; Criação de mais de 20 tarefas de correções e melhorias para o Ecommerce; Alterações do Sitemap e do Robots.txt; Estudo da implementação dos Rich snippets, e estudos de SEO; Criação de relatórios utilizando o Google Data Studio, e dados cruzados entre o Google Analytics e dados das vendas do Ecommerce; Estudos e treinamentos da ferramenta Hybris Marketing Cloud, Hybris Commerce Cloud e Java Web; Testes utilizando Selenium pelo navegador e via código C# ao Ecommerce da Etna, Estudos de Web Scraping utilizando C#.`
        },
        {
          titulo:'Analista de Mídia Online',
          empresa:'Agência Green Digital',
          local: 'Curitiba, PR',
          timeline: 'Abr 2017 &mdash; Ago 2017',
          descricao: `Estudos de diversos clientes, seus respectivos produtos e concorrentes dos mais variados ramos de atuação; Confecção de Planos de Mídia; Geração e controle de APs e PIs; Escolha de palavras chaves; Escrita de anúncios; Análise de Shopping Basket aplicado a combinação de palavras utilizando SQL; Compra de Mídia Programática como Publya, Fitmedia, Criteo; Solicitação do Mídia Kit e compra de espaços em portais; Tags de Remarketing; Criação e acompanhamento de anúncios no Linkedin, Bing, Yahoo, Google, Facebook, Instagram e outros; Relatórios de controle diário para acompanhamento de mídia e relatórios de resultados; Reuniões com Facebook e outros veículos.`
        },
        {
          titulo:'Estágio como Desenvolvedor de Business Intelligence',
          empresa:'Agência Chleba',
          local: 'Curitiba, PR',
          timeline: 'Ago 2016 &mdash; Abr 2017',
          descricao: `Trabalho com a Plataforma de E-commerce Analytics da empresa chamado Add Intelligence com clientes como Electrolux, LFG, China in Box, entre outros; Criação e manutenção de cubos de dados utilizando as ferramentas SSAS e SSIS; Extração de dados via XML de fontes externas usando C# e VB; Automatização de relatórios utilizando Excel e cubos de dados; Manutenção de banco de dados SQL Server de diversos clientes; Validação e extração de dados de ferramentas de anúncios; Atividades de Programação C#, VB e ASP.NET; Manutenção de Relatórios do Tableau; Coleta de dados da API do Google Adwords e API do Bing.`
        },
        {
          titulo:'Estágio como Desenvolvedor Web C#/ Testes',
          empresa:'Bornlogic',
          local: 'Curitiba, PR',
          timeline: 'Fev 2015 &mdash; Out 2015',
          descricao: `Trabalho com a Plataforma de Facebook Marketing da empresa chamado Bornlogic Ads; Participação de Treinamento de Facebook Marketing; Manutenção de Aplicação Web ASP.NET e gráficos Highcharts; Criação de Vitrine utilizando ASP.NET e tagueamento utilizando Google Analytics e GTM; Metodologia Scrum; Testes e Investigação de Erros; Leitura de métricas/KPI’s; Realização de Treinamento para equipe com foco em Google Analytics.`
        },        
        {
          titulo:'Estágio com Desenvolvedor Web Java',
          empresa:'Global Village Telecom - GVT',
          local: 'Curitiba, PR',
          timeline: 'Abr 2014 &mdash; Dez 2014',
          descricao: `Participação de Treinamentos de Telecom; Manutenção de Aplicação Web de Gestão de Projetos da área; Atividades de Programação de Banco de Dados PL/SQL e Linguagens Java Web; Automatizações de relatórios utilizando Excel e VBA; Participação de Treinamentos Plano de Desenvolvimento Individual, Gestão do Tempo e da Rotina.`
        },{
          titulo:'Estágio como Analista de Business Intelligence',
          empresa:'i-Cherry',
          local: 'Curitiba, PR',
          timeline: 'Jul 2013 &mdash; Abr 2014',
          descricao: `Participação de Treinamentos  e estudo da área de Marketing Digital; Testes e Investigação de Erros; Validação de Dados; Confecção de Apresentações Gerenciais para cliente Live TIM; Automatizações de relatórios utilizando Excel e VBA; Coleta de dados utilizando API do Google Analytics; Leitura de KPI’s no Google Analytics e Adwords; Análise de dados Mobile; Análise de Plano de Mídia.`
        },
        {
          titulo:'Estágio como Desenvolvedor de Software Java',
          empresa:'CINQ Technologies',
          local: 'Curitiba, PR',
          timeline: 'Mai 2012 &mdash; Abr 2013',
          descricao: 'Outsourcing TI para empresa SITA que tem foco na Indústria da Aviação; Manutenção de Software em Java; Leitura de Documentação em Inglês para Compreensão das Regras de Negócio e Funcionalidades do Software; Testes e Investigação de Erros; Confecção de Checklists; Atividades de Programação utiizando linguagem Java, Java Script, e Objective-C; Desenvolvimento de aplicativos em um projeto para GVT; Desenvolvimento de aplicações mobile para iOS e Android.'
        },
      ]
    }
  },
  template: `
<div>
      <h3>Experiência</h3>
      <article class="item" v-for="e in empregos">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="e.titulo"></h4>
              <h5 v-html="e.empresa"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="e.timeline"></small>
              <address v-html="e.local"></address>
            </div>
          </div>
          <p>
            {{e.descricao}}
          </p>
        </article>
</div>
`
});
Vue.component('Cursos', {
  data () {
    return {
      cursos: [
        {
          title: 'Curso de Search Engine Optimization',
          company:'Aldeia Coworking',
          location: 'Curitiba, PR',
          timeline: '2016',
          description: ``
        },
      ]
    }
  },
  template: `
<div>
      <h3>Cursos</h3>
      <article class="item" v-for="c in cursos">
          <div class="flex">
            <div class="align-left">
              <h4 v-html="c.title"></h4>
              <h5 v-html="c.company"></h5>
            </div>

            <div class="align-right"> 
              <small v-html="c.timeline"></small>
              <address v-html="c.location"></address>
            </div>
          </div>
          <p>
            {{c.description}}
          </p>
        </article>
</div>
`
});

/*var example = new Vue({
   el: '#curriculum',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})*/

new Vue({
  el: '#curriculum',
  methods: {
 download() {
  const doc = new jsPDF();
  const contentHtml = this.$refs.content.innerHTML;
  doc.fromHTML(contentHtml, 15, 15, {
    width: 170
  });
  doc.save("sample.pdf");
 },

 downloadWithCSS() {
   /*const doc = new jsPDF();
   /** WITH CSS */
   
   /*var canvas = document.body;
   var img = canvas.toDataURL("image/png");	
   doc.addImage(img,'JPEG',-89,-70);
   doc.save("sample.pdf");
   var canvasElement = document.createElement('canvas');
   html2canvas(document.body, {
		taintTest: true,
	  	onrendered: function(canvas) {
			canvasElement.src = canvas.toDataURL();
			const img = canvas.toDataURL("image/jpeg", 1);
			doc.addImage(img,'JPEG',-89,-70);
			doc.save("sample.pdf");
	  	}			
	});*/
	
	/*var canvasElement = document.getElementById("#curriculum");
    var MIME_TYPE = "image/png";
    var imgURL = canvasElement.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);*/
	
	 /*var printContents = document.getElementById("curriculum").innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;*/
	 
	var w = window.open("https://heitorserathiuk.github.io/curriculum/","_self");
    window.focus();
	window.print();
 },

}
})