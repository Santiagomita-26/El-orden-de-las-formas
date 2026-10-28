const terms=[
['Coherencia formal','Relación visual y estructural entre las diferentes partes de un producto, haciendo que todas mantengan un mismo lenguaje de diseño. Se refleja en formas, proporciones, materiales, colores y detalles.'],
['Módulos','Unidades o elementos básicos que pueden repetirse, combinarse o reorganizarse para construir un objeto o sistema. Permiten crear diseños ordenados y facilitar su fabricación o modificación.'],
['Submódulos','Partes más pequeñas que componen un módulo. Cada submódulo puede cumplir una función específica y, al integrarse con otros, formar una unidad mayor.'],
['Súper módulos','Estructuras formadas por la combinación y repetición de varios módulos. Permiten desarrollar sistemas más grandes y complejos a partir de elementos simples.'],
['Retículas','Estructuras organizadoras formadas por líneas, puntos o divisiones que establecen una distribución espacial. En Diseño Industrial ayudan a definir proporciones, posiciones, dimensiones y relaciones entre los elementos de un producto.'],
['Teselados','Patrones creados mediante la repetición de una o varias formas que cubren una superficie sin dejar espacios vacíos ni superponerse. Pueden aplicarse en superficies, piezas, texturas y estructuras.'],
['Grafos','Representaciones mediante puntos (nodos) y conexiones (aristas) que permiten visualizar relaciones entre diferentes elementos. En Diseño Industrial pueden utilizarse para analizar componentes, procesos, usuarios o relaciones funcionales.'],
['Mosaicos','Composiciones construidas mediante la unión de diferentes piezas o elementos que forman una imagen, patrón o superficie. En diseño pueden utilizarse para explorar formas, colores, materiales y composiciones.'],
['Estructuras naturales','Sistemas presentes en la naturaleza que poseen organización, repetición y eficiencia estructural. El diseñador industrial puede estudiarlas para encontrar principios aplicables a productos, materiales y estructuras.'],
['Redes','Sistemas de elementos conectados entre sí mediante diferentes relaciones. En Diseño Industrial permiten comprender cómo interactúan componentes, usuarios, objetos, espacios o procesos dentro de un sistema.'],
['Diagramas de Voronoi','Estructuras geométricas que dividen un espacio en regiones según la cercanía a determinados puntos. En Diseño Industrial pueden servir para generar patrones, estructuras ligeras, superficies y distribuciones espaciales.'],
['Fractalidad','Característica de una estructura que presenta patrones similares a diferentes escalas; una forma puede repetirse de manera semejante en sus partes y en el conjunto. Puede inspirar estructuras, texturas, productos y sistemas modulares.']];
const fieldData={
bienestar:{title:'Bienestar Estudiantil',cards:[['Fachada','Utiliza módulos rectangulares de distintos tamaños que se repiten y combinan, creando una composición variada pero unificada. Los elementos se agrupan por proximidad y semejanza.','Repetición · ritmo · variación · contraste · equilibrio · unidad',1],['Panel con cuadrícula','La composición utiliza una retícula cuadrada como estructura base, sobre la que se distribuyen módulos de distintos colores. Los cuadrados se agrupan por color y proximidad, generando conjuntos visuales.','Repetición · ritmo · contraste · jerarquía · asimetría · equilibrio visual',2],['Patrón de hexágonos','El hexágono es el módulo base y se repite para formar una superficie continua. Los elementos se agrupan por proximidad y color, destacando los amarillos y verdes.','Repetición · teselación · ritmo · contraste · unidad · variación',3],['Espacio interior','La modularidad se basa en la repetición de piezas verticales de madera que forman paredes y barandas. Los elementos se agrupan por proximidad y repetición, creando superficies continuas.','Repetición · ritmo · continuidad · jerarquía · unidad',4]]},
biblioteca:{title:'Biblioteca UIS',cards:[['Fachada','La fachada está formada por módulos verticales repetidos que crean una composición continua y ordenada. Los elementos se agrupan por proximidad y semejanza, formando una unidad visual.','Repetición · ritmo · proporción · continuidad · equilibrio · unidad',5],['Lámpara','La instalación utiliza lápices del mismo tamaño como módulo, agrupados por proximidad y semejanza. La variedad de colores genera contraste, mientras que la repetición crea ritmo y unidad en la composición.','Repetición · contraste · ritmo · unidad',6],['Monumento lápices','Se utilizan luminarias cilíndricas verticales repetidas, acompañadas por un gran módulo circular en el techo. Estas se agrupan por proximidad y semejanza, formando un conjunto central.','Repetición · ritmo · contraste · jerarquía · equilibrio',7]]},
fisico:{title:'Edificio Físico Mecánicas',cards:[['Fachada','Se utilizan módulos rectangulares y verticales que se repiten en diferentes partes de la fachada. Los elementos se agrupan por proximidad y semejanza, formando conjuntos visuales.','Repetición · ritmo · proporción · equilibrio · unidad',8],['Espacio exterior','Se repiten elementos rectangulares y verticales en ventanas, barandas y estructura del edificio. Los elementos se organizan por proximidad y semejanza, formando conjuntos visuales.','Repetición · continuidad · ritmo · equilibrio · unidad',9],['Espacio interior','Las mesas y sillas funcionan como módulos que se repiten en el espacio y se organizan por proximidad, formando pequeños conjuntos de mobiliario.','Repetición · ritmo · equilibrio · unidad',10]]},
pro:{title:'Bienestar Pro',cards:[['Fachada de ladrillo','La fachada utiliza módulos horizontales de ladrillo que se repiten y se superponen, formando una especie de segunda piel. Los módulos se agrupan por proximidad y semejanza, creando patrones continuos en toda la fachada.','Repetición · ritmo · contraste · profundidad · equilibrio · unidad',11]]}};
const modularArtifacts=[
['LIA Pyramid / bolso','Paneles triangulares de cuero y estructura textil interna.','Pliegues geométricos y correas ajustables con tensores.','Por reconfiguración y pliegue. Pasa de un volumen cerrado/plegado a una estructura abierta de cesta según la tensión de las tiras.'],
['Miro Teeter-board / bench','Viga de madera central, soporte curvo/pivote y soportes/asientos laterales de colores.','Encaje de piezas de madera y ejes articulados.','Por transformación funcional. Funciona como un subibaja (balancín) o se reconfigura para convertirse en una banca/mesa de actividades.'],
['Lámpara de mesa Jatz','Anillos o módulos de papel/cartón con cortes geométricos escalonados.','Apilamiento y ensamblaje concéntrico sobre una base.','Por adición/apilamiento. Permite modificar la altura y el patrón de luz añadiendo o rotando capas.'],
['Gaia / huerto urbano vertical','Módulos cilindro-curvos idénticos con apertura lateral.','Apilamiento vertical por encaje e intercalado geométrico.','Por escalabilidad vertical. Permite crecer en altura añadiendo más secciones para distintos tipos de plantas sin ocupar más área en el suelo.'],
['Pflix / sistema de jardinería','Módulos cilindro-curvos idénticos con apertura lateral.','Apilamiento vertical por encaje e intercalado geométrico.','Por escalabilidad vertical. Permite crecer en altura añadiendo más secciones para distintos tipos de plantas sin ocupar más área en el suelo.'],
['Da-Bloom / mesa multifuncional','Columna central cónica de anillos y tableros curvos.','Encaje y rotación sobre el eje central.','Por rotación. Permite orientar o desplegar los tableros para adaptarlos.'],
['Modume / muebles infantil multifuncional','Piezas curvas en U de madera laminada.','Superposición, anidación o acople perimetral.','Por anidamiento y composición libre. Pueden usarse juntas como un escritorio/banca compacto o separarse para formar caminos, flores o asientos individuales.'],
['Aisle Sofa','Asientos ciegos, esquineros y reposabrazos con túnel integrado.','Uniones modulares por bloques acolchados yuxtapuestos.','Por reconfiguración de espacio. Se adapta a configuraciones en L, sillón individual o sofá lineal de 3 plazas, integrando pasajes para animales.'],
['Trick / mueble multifuncional','Tres bloques cúbicos (dos con respaldo que funcionan como sillas y uno central que actúa como mesa/estante).','Integración de piezas en una composición compacta.','Por integración espacial (dualidad). Abierto funciona como juego de comedor/estudio; cerrado se convierte en un mueble estantería compacto.'],
['Sillón lounge','Rodillos cilíndricos acolchados y estructura lateral serpenteante.','Adición y posicionamiento de elementos.','Por adición/posición de elementos. Permite variar la cantidad y posición de los apoyos para adaptar la postura corporal del usuario.']];
const coherenceArtifacts=[
['Eames Lounge Chair','Unifica materiales, geometría y ergonomía en un sistema continuo: carcasas curvas de madera contrachapada, bases estrelladas idénticas y tapicería de cuero hacen que el sillón y el reposapiés se perciban como una sola pieza lógica y natural.'],
['Bolígrafo Lamy','Su cuerpo tiene una sutil forma de huso donde el capuchón, el barril y la punta se alinean con precisión; las uniones son casi invisibles al ojo y al tacto, manteniendo una continuidad lineal absoluta.'],
['Cámara Leica M','Su cuerpo combina una placa superior de latón de bordes redondeados con un revestimiento de cuero texturizado en el centro. Mantiene la proporción rectangular áurea original y la disposición rectilínea de sus diales analógicos.'],
['Altavoz portátil Sonos Roam','Su forma es un prisma triangular con bordes suavizados. La rejilla, los botones de goma integrados y el logotipo se fusionan en un volumen continuo que funciona visualmente en posición vertical u horizontal.'],
['Lámpara Artemide Tolomeo','Fusiona estética y función mecánica en una silueta unificada. Su sistema de brazos de aluminio y tensores de acero equilibra las fuerzas de forma visible, logrando un diseño esbelto, ligero y atemporal.'],
['Silla Panton','Un artefacto de una sola pieza inyectada donde asiento, respaldo y base en voladizo se configuran mediante una sola línea sinuosa y continua. La coherencia formal se expresa en una sola superficie.'],
['Consola de videojuegos Panic Playdate','Un cubo plano donde la manivela amarilla, la pantalla negra y los botones circulares se organizan bajo proporciones estrictas, logrando un lenguaje formal lúdico pero geométricamente riguroso.'],
['Cafetera Chemex','Utiliza una sola pieza de vidrio soplado en forma de reloj de arena, cuya cintura se unifica visualmente mediante un cuello de madera y una tira de cuero.'],
['Ventilador Air Multiplier de Dyson','Coherencia minimalista basada en la geometría del círculo y el cilindro; la base motriz y el aro difusor se integran eliminando por completo las aspas visibles.'],
['Exprimidor Juicy Salif','Una coherencia orgánica donde las patas y el cuerpo central se funden en una sola silueta fluida de aluminio fundido, inspirada en las formas de un calamar.']];
const bioItems=[['Telarañas','Redes de seda con un diseño radial y concéntrico calculado para distribuir el impacto de las presas y soportar el viento de forma ligera.'],['Panales de abejas','Una retícula tridimensional de prismas hexagonales que maximiza el espacio de almacenamiento utilizando la menor cantidad de cera posible.'],['Esponja de mar Euplectella aspergillum','Posee un esqueleto de sílice con una intrincada malla geométrica cilíndrica que le otorga resistencia a las corrientes de las profundidades marinas.'],['Alas de insectos (libélulas)','Una red de venas de quitina que forma un patrón de celdas (frecuentemente diagramas de Voronoi), proporcionando rigidez aerodinámica con un peso mínimo.'],['Hueso trabecular','La estructura interna de los huesos consta de una red porosa de filamentos óseos dispuestos a lo largo de las líneas de mayor tensión mecánica.'],['Nervaduras de las hojas','Redes vasculares que distribuyen agua y nutrientes, y actúan como soporte estructural de la superficie de la hoja.'],['Diatomeas','Microorganismos marinos con exoesqueletos de sílice que adoptan formas geométricas reticulares o de domos geodésicos a escala microscópica.'],['Los ojos de los insectos','Miles de unidades visuales llamadas omatidios se agrupan en una densa rejilla geométrica que les otorga un campo visual panorámico y detección del movimiento.'],['El centro del girasol','Las semillas siguen un ordenamiento basado en la sucesión de Fibonacci, cruzándose en espirales horarias y antihorarias para asegurar un empaquetamiento óptimo.'],['Piel del melón cantalupo','Presenta una retícula corchosa y en relieve sobre su corteza que funciona como una malla estructural para proteger la fruta mientras crece y se expande.']];
const $=s=>document.querySelector(s);const asset=n=>`assets/pdf-img-${String(n).padStart(2,'0')}.${[18,27,31].includes(Number(n))?'png':'jpeg'}`;
function openDetail(title,body,img){$('#dialog-content').innerHTML=`<div class="dialog-content"><span class="section-kicker">BITÁCORA DIGITAL</span><h2>${title}</h2>${img?`<img src="${img}" alt="Imagen de ${title}">`:''}<p>${body}</p></div>`;$('#detail-dialog').showModal()}
function renderTerms(q=''){let list=terms.map((x,i)=>({...{name:x[0],desc:x[1],i}})).filter(x=>(x.name+' '+x.desc).toLowerCase().includes(q.toLowerCase()));$('#result-count').textContent=`${list.length} ${list.length===1?'concepto':'conceptos'}`;$('#terms-grid').innerHTML=list.length?list.map(x=>`<article class="term-card" tabindex="0" data-term="${x.i}"><span class="term-num">CONCEPTO ${String(x.i+1).padStart(2,'0')}</span><span class="open-mark">↗</span><h3>${x.name}</h3><p>${x.desc}</p></article>`).join(''):'<div class="empty-state">No encontramos conceptos con esa búsqueda.</div>';document.querySelectorAll('[data-term]').forEach(el=>{const go=()=>openDetail(terms[el.dataset.term][0],terms[el.dataset.term][1]);el.onclick=go;el.onkeydown=e=>{if(e.key==='Enter')go()}})}
function renderField(key){let d=fieldData[key];$('#field-content').innerHTML=d.cards.map((c,i)=>`<article class="field-card"><img src="${asset(c[3])}" alt="Imagen del trabajo de campo: ${c[0]}" loading="lazy"><div class="field-card-copy"><span class="tag">${d.title.toUpperCase()}</span><h3>${c[0]}</h3><p>${c[1]}<br><br><b>Principios:</b> ${c[2]}.</p></div></article>`).join('')}
let artifactKind='modularidad';function renderArtifacts(){let data=artifactKind==='modularidad'?modularArtifacts:coherenceArtifacts;$('#artifact-grid').innerHTML=data.map((a,i)=>{let title=a[0],desc=artifactKind==='modularidad'?a[3]:a[1],imageNum=artifactKind==='modularidad'?12+i:22+i;return `<article class="artifact-card" tabindex="0" data-artifact="${i}"><div class="artifact-image"><img src="${asset(imageNum)}" alt="${title}" loading="lazy"></div><div class="artifact-card-copy"><span class="artifact-label">${artifactKind==='modularidad'?'MODULARIDAD':'COHERENCIA FORMAL'}</span><h3>${title}</h3><p>${desc}</p></div></article>`}).join('');document.querySelectorAll('[data-artifact]').forEach(el=>{const i=+el.dataset.artifact;el.onclick=()=>{let a=data[i];let body=artifactKind==='modularidad'?`<b>Módulos:</b> ${a[1]}<br><br><b>Mecanismo:</b> ${a[2]}<br><br><b>Modularidad:</b> ${a[3]}`:a[1];openDetail(a[0],body,asset((artifactKind==='modularidad'?12:22)+i))};el.onkeydown=e=>{if(e.key==='Enter')el.click()}})}
function renderBio(){ $('#bio-grid').innerHTML=bioItems.map((b,i)=>`<article class="bio-card" tabindex="0" data-bio="${i}"><img src="${asset(32+i)}" alt="${b[0]}" loading="lazy"><div class="bio-copy"><h3>${b[0]}</h3><p>${b[1]}</p></div></article>`).join('');document.querySelectorAll('[data-bio]').forEach(el=>{let b=bioItems[+el.dataset.bio];const go=()=>openDetail(b[0],b[1],asset(32+ +el.dataset.bio));el.onclick=go;el.onkeydown=e=>{if(e.key==='Enter')go()}})}
renderTerms();renderField('bienestar');renderArtifacts();renderBio();
$('#term-search').addEventListener('input',e=>renderTerms(e.target.value));document.querySelectorAll('.field-tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.field-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderField(b.dataset.field)}));document.querySelectorAll('.artifact-tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.artifact-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');artifactKind=b.dataset.kind;renderArtifacts()}));
const demo=$('#demo-grid');let pattern=0;function drawPattern(){demo.innerHTML='';for(let i=0;i<48;i++){let c=document.createElement('div');c.className='demo-cell';c.style.setProperty('--cell-index',i);if(pattern===1){c.style.borderRadius=(i%2?'50%':'2px');c.style.background=['var(--blue)','var(--orange)','var(--pink)','var(--yellow)'][Math.floor(Math.random()*4)]}else if(pattern===2){c.style.transform=`rotate(${(i%3)*15}deg) scale(${i%4===0?.75:1})`;c.style.background=['var(--green)','var(--yellow)','var(--blue)'][i%3]}else{c.style.borderRadius='2px';c.style.background=i%7===0?'var(--orange)':i%3===0?'var(--green)':i%5===0?'var(--yellow)':'var(--blue)'}demo.appendChild(c)}$('#pattern-name').textContent=['Patrón 01 · Cuadrícula','Patrón 02 · Variación','Patrón 03 · Ritmo'][pattern]}drawPattern();$('#change-pattern').onclick=()=>{pattern=(pattern+1)%3;drawPattern()};
$('.menu-toggle').onclick=()=>{let open=$('.nav').classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open))};document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>{$('.nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false')});$('.dialog-close').onclick=()=>$('#detail-dialog').close();$('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog'))$('#detail-dialog').close()});


// Animaciones al entrar en pantalla: también funcionan con tarjetas creadas dinámicamente.
(function setupMotion(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = '.section-kicker,.section-head,.intro-grid,.reticula-layout,.search-row,.terms-grid,.field-content,.artifact-grid,.bio-grid,.closing h2,.closing .round-link';
  const decorate = (root) => {
    if (!root || !root.querySelectorAll) return;
    const targets = [];
    if (root.matches?.(selectors + ',.term-card,.field-card,.artifact-card,.bio-card')) targets.push(root);
    targets.push(...root.querySelectorAll(selectors));
    targets.forEach((el) => {
      if (el.classList.contains('reveal-on-scroll')) return;
      el.classList.add('reveal-on-scroll');
    });
    const cards = [];
    if (root.matches?.('.term-card,.field-card,.artifact-card,.bio-card')) cards.push(root);
    cards.push(...root.querySelectorAll('.term-card,.field-card,.artifact-card,.bio-card'));
    cards.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.dataset.revealDelay = String(index % 4);
    });
  };
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  const watch = (root) => {
    decorate(root);
    root.querySelectorAll?.('.reveal-on-scroll:not(.is-visible)').forEach((el) => observer.observe(el));
  };
  watch(document);
  const mutations = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) watch(node);
  })));
  mutations.observe(document.querySelector('main'), { childList: true, subtree: true });
})();

// Navegación suave con indicador de sección y barra superior más ligera al desplazarse.
(() => {
  const topbar = document.querySelector('.topbar');
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const updateHeader = () => topbar?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  navLinks.forEach(link => link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    document.querySelector('.nav')?.classList.remove('open');
  }));
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
})();
