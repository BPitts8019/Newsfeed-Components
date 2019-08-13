/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
   {
      title: 'Test 01 - Adding new item to the top',
      date: 'Aug 28, 2019',
      firstParagraph: `Lorem ipsum dolor sit amet, mei no ponderum dissentiet, tale assueverit ut pri. Nec ex error harum ridens. Integre fabulas 
         pri id. Mel viderer dolorem convenire et, pri ut ipsum virtute erroribus, percipit antiopam definitiones te cum. Ut vivendo recusabo 
         iracundia his. Cetero persius maiestatis pro cu, omnes nemore meliore quo ne, mei ex prompta lucilius. Illum tantas intellegebat ius at, 
         per ea vidisse mediocrem. Porro aperiri alterum vis at, in idque vocibus sed, facer prompta mei eu. Ea vix modus graecis, saperet 
         appellantur mei ne, nec at dolorem officiis.`,

      secondParagraph: `Et vero scripserit sit, an pro referrentur comprehensam. Quo ei ponderum indoctum, ei dolores evertitur qui, has saperet 
         deleniti ei. In ponderum adipisci erroribus ius, eu nullam appareat eam. Sed munere corpora concludaturque ei, nam an laudem perfecto 
         conclusionemque. Nec te augue saperet platonem. His inermis veritus neglegentur et, purto convenire te usu. Ea mea detracto tincidunt 
         posidonium. Utroque mediocritatem ea eam, sea soleat alterum eu, nisl atomorum percipitur vis eu. Illud soluta vim eu, ex augue 
         disputationi mel.`,

      thirdParagraph: `Accumsan detracto intellegebat ad usu, ne unum falli reprehendunt eos, eu sea modus aliquid volutpat. Ad pro docendi 
         epicurei vivendum, vis id elit quodsi, ex enim nemore has. Usu in tation latine. Qui no vide vocent torquatos, te mea tota eleifend. 
         Epicuri fabellas ut his, eam dico illum ne, vix tale vidisse partiendo ei. Usu cu iracundia deseruisse scriptorem, pro possim volutpat 
         ne. Eum officiis gloriatur id, in has dictas deleniti noluisse, ea eos viris nullam omittantur. Vim invidunt patrioque mnesarchum ex, 
         sit eu putent possit. Sea euismod persequeris ut, dictas pertinacia nec ea, nec facer oratio aeterno in. Sea sale legendos cu, wisi 
         propriae ius no. His ei agam deleniti.`
   },
   {
      title: 'Lambda School Students: "We\'re the best!"',
      date: 'Nov 5th, 2018',
      firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

      secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

      thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
   },
   {
      title: 'Javascript and You, ES6',
      date: 'May 7th, 2019',
      firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

      secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

      thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
   },
   {
      title: 'Test 02 - Adding new item in the middle',
      date: 'June 12, 2019',
      firstParagraph: `Lorem ipsum dolor sit amet, mei no ponderum dissentiet, tale assueverit ut pri. Nec ex error harum ridens. Integre fabulas 
         pri id. Mel viderer dolorem convenire et, pri ut ipsum virtute erroribus, percipit antiopam definitiones te cum. Ut vivendo recusabo 
         iracundia his. Cetero persius maiestatis pro cu, omnes nemore meliore quo ne, mei ex prompta lucilius. Illum tantas intellegebat ius at, 
         per ea vidisse mediocrem. Porro aperiri alterum vis at, in idque vocibus sed, facer prompta mei eu. Ea vix modus graecis, saperet 
         appellantur mei ne, nec at dolorem officiis.`,

      secondParagraph: `Et vero scripserit sit, an pro referrentur comprehensam. Quo ei ponderum indoctum, ei dolores evertitur qui, has saperet 
         deleniti ei. In ponderum adipisci erroribus ius, eu nullam appareat eam. Sed munere corpora concludaturque ei, nam an laudem perfecto 
         conclusionemque. Nec te augue saperet platonem. His inermis veritus neglegentur et, purto convenire te usu. Ea mea detracto tincidunt 
         posidonium. Utroque mediocritatem ea eam, sea soleat alterum eu, nisl atomorum percipitur vis eu. Illud soluta vim eu, ex augue 
         disputationi mel.`,

      thirdParagraph: `Accumsan detracto intellegebat ad usu, ne unum falli reprehendunt eos, eu sea modus aliquid volutpat. Ad pro docendi 
         epicurei vivendum, vis id elit quodsi, ex enim nemore has. Usu in tation latine. Qui no vide vocent torquatos, te mea tota eleifend. 
         Epicuri fabellas ut his, eam dico illum ne, vix tale vidisse partiendo ei. Usu cu iracundia deseruisse scriptorem, pro possim volutpat 
         ne. Eum officiis gloriatur id, in has dictas deleniti noluisse, ea eos viris nullam omittantur. Vim invidunt patrioque mnesarchum ex, 
         sit eu putent possit. Sea euismod persequeris ut, dictas pertinacia nec ea, nec facer oratio aeterno in. Sea sale legendos cu, wisi 
         propriae ius no. His ei agam deleniti.`
   },
   {
      title: 'React vs Angular vs Vue',
      date: 'June 7th, 2019',
      firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

      secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

      thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
   },
   {
      title: 'Professional Software Development in 2019',
      date: 'Jan 1st, 2019',
      firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

      secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

      thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
   },
   {
      title: 'Test 03 - Adding new item to the bottom',
      date: 'Mar 3, 2019',
      firstParagraph: `Lorem ipsum dolor sit amet, mei no ponderum dissentiet, tale assueverit ut pri. Nec ex error harum ridens. Integre fabulas 
         pri id. Mel viderer dolorem convenire et, pri ut ipsum virtute erroribus, percipit antiopam definitiones te cum. Ut vivendo recusabo 
         iracundia his. Cetero persius maiestatis pro cu, omnes nemore meliore quo ne, mei ex prompta lucilius. Illum tantas intellegebat ius at, 
         per ea vidisse mediocrem. Porro aperiri alterum vis at, in idque vocibus sed, facer prompta mei eu. Ea vix modus graecis, saperet 
         appellantur mei ne, nec at dolorem officiis.`,

      secondParagraph: `Et vero scripserit sit, an pro referrentur comprehensam. Quo ei ponderum indoctum, ei dolores evertitur qui, has saperet 
         deleniti ei. In ponderum adipisci erroribus ius, eu nullam appareat eam. Sed munere corpora concludaturque ei, nam an laudem perfecto 
         conclusionemque. Nec te augue saperet platonem. His inermis veritus neglegentur et, purto convenire te usu. Ea mea detracto tincidunt 
         posidonium. Utroque mediocritatem ea eam, sea soleat alterum eu, nisl atomorum percipitur vis eu. Illud soluta vim eu, ex augue 
         disputationi mel.`,

      thirdParagraph: `Accumsan detracto intellegebat ad usu, ne unum falli reprehendunt eos, eu sea modus aliquid volutpat. Ad pro docendi 
         epicurei vivendum, vis id elit quodsi, ex enim nemore has. Usu in tation latine. Qui no vide vocent torquatos, te mea tota eleifend. 
         Epicuri fabellas ut his, eam dico illum ne, vix tale vidisse partiendo ei. Usu cu iracundia deseruisse scriptorem, pro possim volutpat 
         ne. Eum officiis gloriatur id, in has dictas deleniti noluisse, ea eos viris nullam omittantur. Vim invidunt patrioque mnesarchum ex, 
         sit eu putent possit. Sea euismod persequeris ut, dictas pertinacia nec ea, nec facer oratio aeterno in. Sea sale legendos cu, wisi 
         propriae ius no. His ei agam deleniti.`
   }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below:

   <div class="article">
      <h2>{title of the article}</h2>
      <p class="date">{date of the article}</p>

      {three separate paragraph elements}

      <span class='expandButton'></span>
   </div>

   Hint: You will need to use createElement more than once here!

   Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

   Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

   Step 3: return the entire component.

   Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

   Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/
function buildArticle({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {
   //create elements
   const article = document.createElement("div");
   const children = [
      buildTitle(title),
      buildDate(date),
      buildContent([firstParagraph, secondParagraph, thirdParagraph]),
      buildExpButton()
   ];

   //add properties
   article.classList.add("article");

   //attach children
   children.forEach(child => {
      if (Array.isArray(child)) {
         child.forEach(item => {
            article.appendChild(item);
         });
      } else {
         article.appendChild(child);
      }
   });

   //return final component
   // console.log(article);
   return article;
}

function buildTitle(text) {
   // <h2>{title of the article}</h2>
   const title = document.createElement("h2");
   title.textContent = text;

   return title;
}

function buildDate(info) {
   // <p class="date">{date of the article}</p>
   const date = document.createElement("p");
   date.classList.add("date");
   date.textContent = info;

   return date;
}

function buildContent(info) {
   // {three separate paragraph elements}
   const content = info.map(data => {
      const paragraph = document.createElement("p");
      paragraph.textContent = data;

      return paragraph;
   });


   return content;
}

function buildExpButton() {
   //<span class='expandButton'></span>
   const button = document.createElement("span");
   button.classList.add("expandButton");
   button.textContent = "^^^";

   button.addEventListener("click", event => {
      event.currentTarget.parentElement.classList.toggle("article-open");
   });

   return button;
}

//create Articles
(() => {
   const articles = document.querySelector(".articles");
   const articleComponents = data.map(article => buildArticle(article));

   articles.append(...articleComponents);
})();