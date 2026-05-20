
// ── MAP DATA ──────────────────────────────────────────────────
var OAHU_SRC='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119352!2d-157.8583!3d21.3069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus';
var MAUI_SRC='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d152400!2d-156.33!3d20.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus';

function gm(q){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);}

var OAHU=[
  {i:'🏨',n:'OUTRIGGER Reef Waikiki',d:'Jul 23-28',c:'hotel',q:'OUTRIGGER Reef Waikiki Beach Resort'},
  {i:'🍽',n:"Duke's Waikiki",d:'Fri Jul 24 · 1:30 PM',c:'dining',q:"Duke's Waikiki Honolulu"},
  {i:'🥂',n:'House Without a Key',d:'Sat Jul 25 · 5:30 PM',c:'dining',q:'House Without a Key Halekulani Honolulu'},
  {i:'🎂',n:'Hula Grill Waikiki',d:'Sat Jul 25 · 8:30 PM',c:'dining',q:'Hula Grill Waikiki'},
  {i:'🏛',n:'Pearl Harbor / USS Arizona',d:'Sun Jul 26',c:'activity',q:'Pearl Harbor National Memorial Hawaii'},
  {i:'🌊',n:'Hanauma Bay',d:'Jul 25 morning',c:'activity',q:'Hanauma Bay Nature Preserve Hawaii'},
  {i:'🍧',n:'Matsumoto Shave Ice',d:'Jul 26 · Haleiwa',c:'activity',q:'Matsumoto Shave Ice Haleiwa Hawaii'},
  {i:'🌊',n:'Waimea Bay',d:'Jul 26',c:'activity',q:'Waimea Bay Beach Park Hawaii'},
  {i:'🏔',n:'Nuuanu Pali Lookout',d:'Jul 27',c:'activity',q:'Nuuanu Pali Lookout Hawaii'},
  {i:'🏖',n:'Lanikai Beach',d:'Jul 27',c:'activity',q:'Lanikai Beach Kailua Hawaii'},
  {i:'🎬',n:'Kualoa Ranch',d:'Jul 27 afternoon',c:'activity',q:'Kualoa Ranch Hawaii'},
  {i:'🍕',n:'Monkeypod Kitchen',d:'Mon Jul 27 · 7 PM',c:'dining',q:'Monkeypod Kitchen Waikiki'},
];

var MAUI=[
  {i:'🏨',n:'Wailea Beach Resort Marriott',d:'Jul 28-Aug 2',c:'hotel',q:'Wailea Beach Resort Marriott Maui'},
  {i:'🏨',n:'Four Seasons Maui at Wailea',d:'Aug 2-5',c:'hotel',q:'Four Seasons Resort Maui at Wailea'},
  {i:'🤿',n:'Molokini Snorkel - Alii Nui',d:'Jul 29 · 7 AM · Maalaea',c:'activity',q:'Maalaea Small Boat Harbor Maui'},
  {i:'🍣',n:'Nobu Grand Wailea',d:'Tue Jul 28 · 7:30 PM',c:'dining',q:'Nobu Restaurant Grand Wailea Maui'},
  {i:'🐟',n:"Mama's Fish House",d:'Jul 29 and Jul 31',c:'dining',q:"Mama's Fish House Maui"},
  {i:'🌺',n:'Old Lahaina Luau',d:'Thu Jul 30 · 6:15 PM',c:'activity',q:'Old Lahaina Luau Maui'},
  {i:'🌿',n:'Iao Valley State Park',d:'Jul 30 morning',c:'activity',q:'Iao Valley State Monument Maui'},
  {i:'🍧',n:"Ululani's Shave Ice",d:'Kihei',c:'activity',q:"Ululani's Hawaiian Shave Ice Kihei Maui"},
  {i:'🤿',n:'Black Rock Beach',d:'Sat Aug 1',c:'activity',q:'Black Rock Beach Kaanapali Maui'},
  {i:'⛵',n:'Trilogy Sunset Sail',d:'Sat Aug 1 · 4:30 PM',c:'activity',q:'Kaanapali Beach Maui'},
  {i:'🌊',n:"Leilani's on the Beach",d:'Sat Aug 1 · 7:45 PM',c:'dining',q:"Leilani's on the Beach Kaanapali Maui"},
  {i:'🇮🇹',n:"Ferraro's - Four Seasons",d:'Sun Aug 2 · 7 PM',c:'dining',q:"Ferraro's Bar e Ristorante Four Seasons Maui"},
  {i:'🌊',n:'Mala Ocean Tavern',d:'Mon Aug 3 · 6:45 PM',c:'dining',q:'Mala Ocean Tavern Lahaina Maui'},
  {i:'⭐',n:'Spago by Wolfgang Puck',d:'Tue Aug 4 · 7:30 PM',c:'dining',q:'Spago Four Seasons Maui'},
];

var HANA=[
  {mm:"Pa'ia",n:"Pa'ia Town",note:'Coffee and Paia Fish Market. Reset odometer.',tag:'must',q:'Paia Town Maui'},
  {mm:'MM 2',n:'Twin Falls',note:'Easy hike, great first waterfall for kids.',tag:'must',q:'Twin Falls Maui'},
  {mm:'MM 3',n:'Rainbow Eucalyptus Trees',note:'Left side of road. Stunning bark.',tag:'tip',q:'Rainbow Eucalyptus Trees Road to Hana Maui'},
  {mm:'MM 10',n:'Garden of Eden Arboretum',note:'$20/car. Overlooks, food truck, restrooms.',tag:'tip',q:'Garden of Eden Arboretum Maui'},
  {mm:'MM 12',n:'Kaumahina Wayside',note:'Free. Restrooms. Keanae Peninsula view.',tag:'tip',q:'Kaumahina State Wayside Park Maui'},
  {mm:'MM 13',n:'Punalau Falls',note:'Hidden gem. Tiny turnout, often empty.',tag:'tip',q:'Punalau Falls Maui'},
  {mm:'MM 16',n:"Aunty Sandy's Banana Bread",note:'Cash only. Best on the road. DO NOT SKIP.',tag:'must',q:"Aunty Sandy's Banana Bread Maui"},
  {mm:'MM 17',n:"Ching's Pond",note:'Marvelous pool. Very limited parking.',tag:'tip',q:"Ching's Pond Maui"},
  {mm:'MM 19-20',n:'Three Bears Falls',note:'Three-tiered, spectacular. Visible from bridge.',tag:'must',q:'Upper Waikani Falls Maui'},
  {mm:'MM 22',n:"Pua'a Ka'a Wayside",note:'Two falls and spring-fed pool. Restrooms.',tag:'tip',q:"Pua'a Ka'a State Wayside Maui"},
  {mm:'MM 25',n:'Makapipi Falls Bridge',note:'Walk to bridge center, ocean side. Look down!',tag:'tip',q:'Makapipi Falls Maui'},
  {mm:'MM 29',n:'Nahiku Marketplace',note:'Island Chef, Nahiku Cafe. Last snack stop.',tag:'food',q:'Nahiku Marketplace Maui'},
  {mm:'MM 32',n:"Wai'anapanapa Black Sand Beach",note:'RESERVED. $10/vehicle + $5/pp.',tag:'must',q:'Waianapanapa State Park Maui'},
  {mm:'MM 34',n:'Hana and Red Sand Beach',note:'Park Uakea Rd. Wear real shoes on red cinders!',tag:'must',q:'Red Sand Beach Hana Maui'},
  {mm:'MM 42',n:"Ohe'o Gulch",note:'Seven Sacred Pools. Verify NPS access. Leave by 3 PM.',tag:'tip',q:'Oheo Gulch Maui'},
];

// ── MAP STATE ──────────────────────────────────────────────────
var curIsland='oahu', curMode='all';

function mapRenderCurrent(){
  if(curIsland==='oahu') mapRenderOahu();
  else if(curMode==='all') mapRenderMauiAll();
  else mapRenderHana();
}

function mapSwitchIsland(island){
  curIsland=island;
  document.getElementById('mit-oahu').classList.toggle('active',island==='oahu');
  document.getElementById('mit-maui').classList.toggle('active',island==='maui');
  document.getElementById('maui-modes').style.display=island==='maui'?'flex':'none';
  if(island==='oahu') mapRenderOahu();
  else { curMode='all'; document.getElementById('mmt-all').classList.add('active'); document.getElementById('mmt-hana').classList.remove('active'); mapRenderMauiAll(); }
}

function mapSwitchMode(mode){
  curMode=mode;
  document.getElementById('mmt-all').classList.toggle('active',mode==='all');
  document.getElementById('mmt-hana').classList.toggle('active',mode==='hana');
  if(mode==='all') mapRenderMauiAll(); else mapRenderHana();
}

function mapRenderOahu(){
  document.getElementById('maui-modes').style.display='none';
  document.getElementById('map-iframe-wrap').style.display='block';
  document.getElementById('map-iframe').src=OAHU_SRC;
  document.getElementById('hana-panel').style.display='none';
  buildLocList(OAHU);
}

function mapRenderMauiAll(){
  document.getElementById('map-iframe-wrap').style.display='block';
  document.getElementById('map-iframe').src=MAUI_SRC;
  document.getElementById('hana-panel').style.display='none';
  buildLocList(MAUI);
}

function mapRenderHana(){
  document.getElementById('map-iframe-wrap').style.display='none';
  document.getElementById('loc-list').innerHTML='';
  document.getElementById('hana-panel').style.display='block';
  buildHanaList();
}

function buildLocList(locs){
  var el=document.getElementById('loc-list');
  el.innerHTML='';
  var cats={hotel:[],dining:[],activity:[]};
  locs.forEach(function(l){ (cats[l.c]||cats.activity).push(l); });
  var labels={hotel:'🏨 Hotels',dining:'🍽 Dining',activity:'🎯 Activities'};
  ['hotel','dining','activity'].forEach(function(cat){
    if(!cats[cat].length) return;
    var sec=document.createElement('div');
    sec.className='loc-section';
    var t=document.createElement('div');
    t.className='loc-section-title';
    t.textContent=labels[cat];
    sec.appendChild(t);
    cats[cat].forEach(function(l){
      var a=document.createElement('a');
      a.className='loc-btn';
      a.href=gm(l.q);
      a.target='_blank';
      a.innerHTML='<div class="loc-left"><div class="loc-icon">'+l.i+'</div><div><div class="loc-name">'+l.n+'</div><div class="loc-detail">'+l.d+'</div></div></div><div class="loc-arrow">↗</div>';
      sec.appendChild(a);
    });
    el.appendChild(sec);
  });
}

function buildHanaList(){
  var el=document.getElementById('hana-list');
  if(el.children.length>0) return;
  HANA.forEach(function(s,i){
    var tc=s.tag==='must'?'hsl-must':s.tag==='food'?'hsl-food':'hsl-tip';
    var tl=s.tag==='must'?'Must':s.tag==='food'?'Food':'Tip';
    var a=document.createElement('a');
    a.className='hsl-item';
    a.href=gm(s.q);
    a.target='_blank';
    a.innerHTML='<div class="hsl-mm">'+s.mm+'</div><div class="hsl-body"><div class="hsl-name">'+(i+1)+'. '+s.n+'<span class="hsl-tag '+tc+'">'+tl+'</span></div><div class="hsl-note">'+s.note+'</div></div><div class="loc-arrow">↗</div>';
    el.appendChild(a);
  });
}
