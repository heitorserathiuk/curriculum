
Vue.component('Programacao', {
  created(){
    this.programacao.sort()
  },
  data () {
    return {
      programacao: [ 'C#','SQL','Java Script', 'Visual Basic', 'Java', 'Angular', 'Jquery', 'HTML', 'CSS', 'XPath', 'Python' ]
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
      ferramentas: ['Selenium', 'Microsoft SQL Server Integration Services','Pacote Office', 'Microsoft SQL Server', 'Google Sheets', 'Microsoft Server Analysis Services', 'Android Studio', 'Astah Community', 'Qlik Sense','Fiddler','Postman', 'GitHub', 'SourceTree']
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
      marketing: ['Google Analytics', 'Adobe Illustrator','Adobe Photoshop', 'Google Ads', 'SEM Rush', 'Google Search Console', 'Ads Manager', 'Google Editor', 'B2W Ads', 'Yahoo Ads', 'Google Data Studio', 'Screaming Frog', 'RD Station', 'Power Editor', 'Google Merchant', 'Bing Ads', 'Google Tag Manager' ]
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
       <ul class="books" v-for="l in livros">
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

Vue.component('Outros', {
  data () {
    return {
      outros: [
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
      <h3>Outros</h3>
       <ul class="awards" v-for="o in outros">
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
          timeline: 'Janeiro 2018 &mdash; Junho 2020',
          descricao: `Aplicativos Móveis, Sistemas de Informação, Orientação a Objetos, Infraestrutura Tecnológica, Novo Ambiente Organizacional, Gestão de Projetos, Sistemas Convergentes, Sistemas Corporativos, Sistemas Embarcados, Sistemas Operacionais, Arquitetura de Referência para os Negócios, Desenvolvimento Web, Business Analytics, Governança de TI, Cultura Startup, Tópicos Especiais em Software, Trabalho de Conclusão de Curso.`
        },
        {
          titulo:'Engenharia da Computação',
          universidade:'Universidade Positivo',
          local: 'Curitiba, PR',
          timeline: 'Janeiro 2013 &mdash; Dezembro 2017',
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
          titulo: 'Desenvolvedor de Sistemas I',
          empresa:'Editora Positivo',
          local: 'Curitiba, PR',
          timeline: 'Julho 2019 &mdash; Outubro 2019',
          descricao: `Desenvolvimento e correção de erros tanto do back end quanto do front end. Criação de scripts SQL para compreensão do sistema e para correções;
Back End utilizando SQL Server e WebAPI C#/.NET (Core e 4.7.2)
Front End utilizando AngularJS, HTML, CSS
Utilização do Fiddler e do Postman para depuração do sistema;
Controle de versão usando GitHub e SourceTree. Criação de branches para codificação, releases de novas versões do projeto, pull requests, publicação de projetos, e equalizações de códigos;
Utilização do DevOps/TFS (CMMI e Agile) para gerenciamento de atividades e projetos;
Metodologia Scrum ágil adaptada à realidade da empresa.`
        },
        {
          titulo:'Estagiário de SEO',
          empresa:'FH Consultoria',
          local: 'Curitiba, PR',
          timeline: 'Março 2018 &mdash; Setembro 2018',
          descricao: `Acompanhamento das páginas do novo ecommerce da Hering, análise de informações como: URL, Breadcrumbs, Canonical Tag, Heading Tags, Meta Tags, Status Http, Sitelinks e outras informações; Utilização do plugin SEO Tools para Excel e das ferramentas SEM Rush e Screaming Frog ; Criação de Titles e Metadescriptions relevantes para cada página; Alterações via planilhas e consultas flexible search ao BD; Alterações em ferramenta CMS da SAP; Criação de tarefas de correções e melhorias para o Ecommerce ; Alterações do Sitemap e do Robots.txt; Estudo da implementação dos Rich snippets , e estudos de SEO; Criação de relatórios utilizando o Google Data Studio, e dados cruzados entre o Google Analytics e dados das vendas do Ecommerce ; Estudos e treinamentos da ferramenta Hybris Marketing Cloud, Hybris Commerce Cloud e Java Web; Testes utilizando Selenium pelo navegador e via código C# ao novo Ecommerce da Etna, Estudos de Web Scraping utilizando C#.`
        },
        {
          titulo:'Analista de Mídia Online',
          empresa:'Agência Green Digital',
          local: 'Curitiba, PR',
          timeline: 'Abril 2017 &mdash; Dezembro 2017',
          descricao: `Estudos de diversos clientes, seus respectivos produtos e concorrentes dos mais variados ramos de atuação; Confecção de Planos de Mídia; Geração e controle de APs e PIs; Escolha de palavras chaves; Escrita de anúncios; Análise de Shopping Basket aplicado a combinação de palavras utilizando SQL; Compra de Mídia Programática como Publya, Fitmedia, Criteo; Solicitação do Mídia Kit e compra de espaços em portais; Tags de Remarketing; Criação e acompanhamento de anúncios no Linkedin, Bing, Yahoo, Google, Facebook, Instagram e outros; Relatórios de controle diário para acompanhamento de mídia e relatórios de resultados; Reuniões com Facebook e outros veículos.`
        },
        {
          titulo:'Estagiário de Suporte de Business Intelligence',
          empresa:'Agência Chleba',
          local: 'Curitiba, PR',
          timeline: 'Agosto 2016 &mdash; Abril 2017',
          descricao: `Trabalho com o servidor de anúncios da empresa chamado Add Intelligence com clientes como Electrolux, LFG, China in Box, entre outros; Manutenção de cubos de dados utilizando a ferramenta SSAS; Extração de dados via xml de fontes externas usando C# e VB; Automatização de relatórios utilizando Excel e cubos de dados; Manutenção de banco de dados SQL Server de diversos clientes; Validação e extração de dados de ferramentas de anúncios; Atividades de Programação C#, VB e ASP.NET; Manutenção de Relatórios do Tableau; Coleta de dados da API do Google Adwords e API do Bing.`
        },
        {
          titulo:'Estagiário de Desenvolvimento Web/Testes',
          empresa:'Bornlogic',
          local: 'Curitiba, PR',
          timeline: 'Fevereiro 2015 &mdash; Outubro 2015',
          descricao: `Participação de Treinamento de Facebook Marketing; Manutenção de Aplicação Web ASP.NET e gráficos Highcharts ; Criação de Vitrine utilizando ASP.NET e tagueamento utilizando Google Analytics e GTM; Metodologia Scrum; Testes e Investigação de Erros; Leitura de métricas/ KPI’s ; Realização de Treinamento para equipe com foco em Google Analytics.`
        },        
        {
          titulo:'Estagiário de Desenvolvimento Web',
          empresa:'Global Village Telecom - GVT',
          local: 'Curitiba, PR',
          timeline: 'January 2013 &mdash; May 2013',
          descricao: `Participação de Treinamentos de Telecom; Manutenção de Aplicação Web de Gestão de Projetos da área; Atividades de Programação de Banco de Dados PL/SQL e Linguagens Java Web; Automatizações de relatórios utilizando Excel e VBA; Participação de Treinamentos Plano de Desenvolvimento Individual, Gestão do Tempo e da Rotina.`
        },{
          titulo:'Estagiário de Digital Analytics',
          empresa:'i-Cherry',
          local: 'Curitiba, PR',
          timeline: 'Julho 2013 &mdash; Abril 2014',
          descricao: `Estudo da área; Testes e Investigação de Erros; Validação de Dados; Confecção de Apresentações Gerenciais para cliente Live TIM; Automatizações de relatórios utilizando Excel e VBA; Coleta de dados utilizando API do Google Analytics ; Leitura de KPI’s no Google Analytics e Adwords; Análise de dados Mobile; Análise de Plano de Mídia; Participação de Treinamentos na área de Marketing Digital.`
        },
        {
          titulo:'Estagiário em Desenvolvimento de Software',
          empresa:'CINQ Technologies',
          local: 'Curitiba, PR',
          timeline: 'Maio 2012 &mdash; Abril 2013',
          descricao: 'Outsourcing TI para empresa SITA; Manutenção de Software; Leitura de Documentação em Inglês para Compreensão das Regras de Negócio e Funcionalidades do Software; Testes e Investigação de Erros; Confecção de Checklists; Desenvolvimento de aplicação mobile para iOS; Desenvolvimento de aplicação mobile para Android; Atividades de Programação utiizando linguagem Java e Java Script.'
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
          title: 'Staff Engineer, Fullstack',
          company:'Knotel',
          location: 'Curitiba, PR',
          timeline: 'July 2018 &mdash; Present',
          description: `Revolutionizing the GraphQL implementations that not only push the technology forward through use in the CRE and Arch industry, but as all engineering as a whole. Lead development of several applications, systems architecture, patterns, as well as our design system. Stack is React, Node, Apollo, AWS, Github Actions, running on Kubernetes.`
        },
        {
          title:'Javascript Engineer / Consultant',
          company:'SmartNode, LLC',
          location: 'Curitiba, PR',
          timeline: 'January 2015 &mdash; Present',
          description: `Full-stack Javascript application development and project management. 
            Typical stack consists of Node APIs on Angular / React / Vue Frontends.`
        },
        {
          title:'Lead Frontend Engineer',
          company:'Capsule8, Inc',
          location: 'Curitiba, PR',
          timeline: 'June 2017 &mdash; December 2017',
          description: `Architected Capsule8’s Security dashboard console. Helped hire developers and built both the UI and UX teams within this smart and stealthy startup. Led Junior level developers as well as oversaw contract partnerships.`
        },
        {
          title:'Senior UI Engineer / Consultant',
          company:'Cake &amp; Arrow <small>(formerly Alexander Interactive)</small>',
          location: 'Curitiba, PR',
          timeline: 'October 2013 &mdash; January 2015',
          description: `Developed proprietary software for a Fortune 50 client utilizing AngularJS with a team under the agile methodology. Similiarly sharing knowledge throughout the company crossing between the development and design teams.`
        },
        {
          title:'UX / UI Development Consultant',
          company:'Legs Media, Milk Studios, Layerframe',
          location: 'Curitiba, PR',
          timeline: 'May 2013 &mdash; December 2013',
          description: `Lead development and oversaw teams on several high-end digital/web projects including those with Nickelodeon, Spotify, Budweiser, Theory and more.`
        },        
        {
          title:'Mobile Developer: Custom Builds',
          company:'Celtra',
          location: 'Curitiba, PR',
          timeline: 'January 2013 &mdash; May 2013',
          description: `Created custom mobile advertising campaigns on a prototypical inheritance design pattern built from Celtra’s Ad Creator product and MongoDB/MySQL.
Clients include McDonalds, Burberry, Jeep, SuperCell, and several more.`
        },{
          title:'Creative Technologist',
          company:'Medialets',
          location: 'Curitiba, PR',
          timeline: 'October 2010 &mdash; October 2012',
          description: `Lead Developer in the Rich Media Mobile Advertising space. Direct communication of best practices with creative, technical, and agency partners. Award Winning Innovation in the mobile space utilizing HTML5 elements, CSS animations, touch events, and js frameworks.`
        },
        {
          title:'Interactive Developer',
          company:'Warschawski',
          location: 'Curitiba, PR',
          timeline: 'August 2009 &mdash; October 2010',
          description: 'Created interactive solutions for clients in need of online branding. A custom content management system was created in order to give customers control of their content without need to be onboarded into a complex system. Logo creation, wireframing, and branding solutions were also part of this creative role.'
        },
        {
          title:'Front-End Developer',
          company:'Inside Lacrosse',
          location: 'Curitiba, PR',
          timeline: 'December 2008 &mdash; August 2009',
          description: 'Redeveloped InsideLacrosse.com onto the Drupal6 Platform while creating smaller applications for custom polls, magazine revenue'
        },
        {
          title:'Web Applications Developer',
          company:'no|inc',
          location: 'Curitiba, PR',
          timeline: 'August 2008 &mdash; December 2008',
        },
        {
          title:'Web Applications Developer',
          company:'CSD Architects',
          location: 'Curitiba, PR',
          timeline: 'June 2007 &mdash; August 2008',
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


 
    
/*Vue.component('Education', {
  data(){
    return {
      university:{
        name: 'Universidade Positivo',
        date: 'August 2002 &ndash; May 2007',
        location: 'Curitiba, PR'
      },
      degrees:[
        {
          type: 'Sistemas de Informação',
          major: 'Computer Science',
          minor: 'Mathematics'
        },
        {
          type: 'Engenharia da Computação',
          major: 'Art',
          concentration: 'Graphic Design'
        },
      ]
    }
  },
  template: `
    <div>
        <h3>Education</h3>
        <strong v-html="university.name"></strong><br>
        <small v-html="university.date"></small><br>
        <address v-html="university.location"></address><br>
        <div class="degree" v-for="degree in degrees">
          <i>{{degree.type}}</i><br>
          <label>Major:</label> {{degree.major}} <br>
          <label v-if="degree.minor">Minor:</label> {{degree.minor}}
          <label v-if="degree.concentration">Concentration:</label> {{degree.concentration}}
          <br>
        </div>
    </div>
`
})*/

/*var example = new Vue({
   el: '#resume',
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
  el: '#resume',
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
	
	/*var canvasElement = document.getElementById("#resume");
    var MIME_TYPE = "image/png";
    var imgURL = canvasElement.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);*/
	
	 /*var printContents = document.getElementById("resume").innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;*/
	 
	var w = window.open("http://www.sigmaaldrich.com/catalog/CofADocRequest.do?symbol=209104&LotNo=MKBP0842V&brandTest=SIGMA","_self");
    window.focus();
	window.print();
 },

}
})