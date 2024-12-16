import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import { PromptTemplate } from "@langchain/core/prompts";
import { Ollama } from "@langchain/ollama";

// const template = PromptTemplate.fromTemplate(`
// ### Template:
// {template}
// ### Example:
// {example}
// ### Text:
// {text}
//   `);

const template = PromptTemplate.fromTemplate(`
    ### Template:
    {template}
    ### Text:
    {text}
      `);

const llm = new Ollama({
  model: "nuextract", // Default value
  temperature: 0,
  maxRetries: 2,
  // other params...
});

const chain = template.pipe(llm);
const dataTemplate = `
{
    "recipe name": ""
}
`;
const text = `
Title: Plaattaart met prei, spruitjes en spek recept - Allerhande | Albert Heijn

URL Source: https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek

Markdown Content:
Plaattaart met prei, spruitjes en spek recept - Allerhande | Albert Heijn
===============
                      

 

[Ga naar zoeken](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek#navigation-search-input)[Ga naar hoofdinhoud](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek#start-of-content)

*   

*   [Win- en spaaracties](https://www.ah.nl/acties "Win- en spaaracties")
*   [Winkels](https://www.ah.nl/winkels "Winkels")
*   [Zakelijk](https://www.ah.nl/zakelijk "Zakelijk")
*   [Klantenservice](https://www.ah.nl/klantenservice "Klantenservice")

[![Image 18: Ga naar Albert Heijn home pagina](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/logo-ah.svg)](https://www.ah.nl/ "Ga naar Albert Heijn home pagina")

*   [Producten](https://www.ah.nl/producten)
*   [Bonus](https://www.ah.nl/bonus)
*   [Recepten](https://www.ah.nl/allerhande)
    
*   Meer
    
    *   [Recepten](https://www.ah.nl/allerhande)
    *   [AH Voordeelshop](https://voordeelshop.ah.nl/?ah_medium=www.ah.nl&ah_source=header&ah_campaign=na)
    *   [Over Albert Heijn](https://www.ah.nl/over-ah)
    

*   [Online bestellen](https://www.ah.nl/kies-een-moment)
*   Inloggen
    
    *   [Mijn profiel](https://www.ah.nl/mijn/dashboard)
    *   [Favoriete lijstjes](https://www.ah.nl/favorieten)
    *   [Eerder gekocht](https://www.ah.nl/producten/eerder-gekocht)
    *   [Mijn bestellingen](https://www.ah.nl/mijnbestellingen)
    *   [Mijn Albert Heijn Premium](https://www.ah.nl/premium)
    *   [Bezorgbundel](https://www.ah.nl/bezorgbundel)
    *   Inloggen
    

[](https://www.ah.nl/favorieten)

[0.00 Totaalbedrag winkelmand 0.00](https://www.ah.nl/mijnlijst)

menu

[![Image 19: Ga naar Albert Heijn home pagina](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/logo-ah.svg)](https://www.ah.nl/ "Ga naar Albert Heijn home pagina")

[](https://www.ah.nl/favorieten)

[0.00 Totaalbedrag winkelmand 0.00](https://www.ah.nl/mijnlijst)

Waar ben je naar op zoek?

  

 

[](https://www.ah.nl/allerhande "Allerhande")

*   [Recepten](https://www.ah.nl/allerhande "Recepten")
*   [Video's](https://www.ah.nl/allerhande/videos-zoeken "Video's")
*   [Thema's](https://www.ah.nl/allerhande/recepten "Thema's")
*   [Magazines](https://www.ah.nl/allerhande/magazines "Magazines")
*   [Mijn favorieten](https://www.ah.nl/allerhande/favorieten "Mijn favorieten")
*   [Kids](https://www.ah.nl/allerhande/allerhandekids "Kids")
*   [Kookschrift](https://www.ah.nl/kookschrift "Kookschrift")

Plaattaart met prei, spruitjes en spek

![Image 20: Plaattaart met prei, spruitjes en spek](https://static.ah.nl/static/recepten/img_RAM_PRD171183_220x162_JPG.jpg%20220w)

bewaar

bewaar

[Terug](https://www.ah.nl/allerhande/recepten "Terug")

*   [](https://www.ah.nl/ "startpagina")
*   [Allerhande](https://www.ah.nl/allerhande "Allerhande")
*   [Recepten](https://www.ah.nl/allerhande/recepten "Recepten")

Plaattaart met prei, spruitjes en spek
======================================

Deze plaattaart met prei, spruitjes en spek is ideaal voor de doordeweekse avond. Extra lekker met bladerdeeg en mozzarella.

780 kcal [(Voedingswaarden)](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek#recipe-footer "Voedingswaarden")

20 min. bereiden / 30 min. oventijd

licht pittig

186waarderingen

9 ingrediënten

Kies producten

*   [budget](https://www.ah.nl/allerhande/recepten/budget-recepten "budget")
*   [oven](https://www.ah.nl/allerhande/recepten/ovengerechten "oven")
*   [hoofdgerecht](https://www.ah.nl/allerhande/recepten/hoofdgerechten "hoofdgerecht")
*   [wat eten we vandaag](https://www.ah.nl/allerhande/wat-eten-we-vandaag "wat eten we vandaag")
*   [herfst](https://www.ah.nl/allerhande/recepten/herfstrecepten "herfst")
*   [winter](https://www.ah.nl/allerhande/recepten/winterrecepten "winter")

Aan de slag
-----------

Printen

1

Verwarm de oven voor op 200 °C. Leg de plakjes bladerdeeg in een rechthoek op een met bakpapier beklede bakplaat. Laat ze elkaar iets overlappen en druk de randen goed aan. Prik het bladerdeeg in met een vork, druk de randen aan met een vork en bak ca. 15 min. in de oven.

2

Spoel ondertussen de preien onder koud stromend water en snijd ze in halve ringen. Maak de spruitjes schoon en halveer ze. Verhit de olie in een hapjespan en bak de spekreepjes 1 min. op hoog vuur. Voeg de prei en spruitjes toe en bak 5 min. op middelhoog vuur. Breng op smaak met peper.

3

Snijd ondertussen de mozzarella in plakken en rasp de grana padano fijn. Haal de bladerdeegbodem uit de oven en bestrijk met de crème fraîche, houd rondom een rand vrij. Verdeel de mozzarella en groenten met spekreepjes erover en bestrooi met de geraspte kaas en chilivlokken. Bak ca. 15 min. in de oven.

vegatipVervang de geroosterde spekreepjes door 160 g vegan spekjes.

Heb jij dit recept klaargemaakt?

We zijn benieuwd wat je er van vindt!

Heb jij dit recept klaargemaakt?

We zijn benieuwd wat je er van vindt!

### Gerelateerde recepten

[![Image 21: Gnocchi met spruiten en spekjes](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek) * 20 min20 minuten bereidingstijd * 500 kcal * 4Beoordeling: 4 sterren * 4Voor 4 personen Gnocchi met spruiten en spekjes](https://www.ah.nl/allerhande/recept/R-R377966/gnocchi-met-spruiten-en-spekjes "Recept: Gnocchi met spruiten en spekjes")

[![Image 22: Plaattaart met champignons, prei en blauwe kaas](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek) * 15 min15 minuten bereidingstijd * 675 kcal * Vegetarisch * 5Beoordeling: 5 sterren * 4Voor 4 personen Plaattaart met champignons, prei en blauwe kaas](https://www.ah.nl/allerhande/recept/R-R1198000/plaattaart-met-champignons-prei-en-blauwe-kaas "Recept: Plaattaart met champignons, prei en blauwe kaas")

[![Image 23: Hot honey spruitjes en prei](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek) * 15 min15 minuten bereidingstijd * 295 kcal * Glutenvrij * 4Beoordeling: 4 sterren * 4Voor 4 personen Hot honey spruitjes en prei](https://www.ah.nl/allerhande/recept/R-R1197858/hot-honey-spruitjes-en-prei "Recept: Hot honey spruitjes en prei")

[![Image 24: Ovenrisotto met spek en prei](https://www.ah.nl/allerhande/recept/R-R1197537/plaattaart-met-prei-spruitjes-en-spek) * 15 min15 minuten bereidingstijd * 565 kcal * 4Beoordeling: 4 sterren * 4Voor 4 personen Ovenrisotto met spek en prei](https://www.ah.nl/allerhande/recept/R-R758498/ovenrisotto-met-spek-en-prei "Recept: Ovenrisotto met spek en prei")

Plaattaart met prei, spruitjes en spek

![Image 25: Plaattaart met prei, spruitjes en spek](https://static.ah.nl/static/recepten/img_RAM_PRD171183_220x162_JPG.jpg%20220w)

Voedingswaarden
---------------

(eenpersoonsportie)

energie

780 kcal

koolhydraten

44 g

waarvan suikers

9 g

natrium

1080 mg

eiwit

27 g

vet

53 g

waarvan verzadigd

25 g

vezels

10 g

Ontdek meer van dit soort gerechten
-----------------------------------

[budget](https://www.ah.nl/allerhande/recepten/budget-recepten "budget")[oven](https://www.ah.nl/allerhande/recepten/ovengerechten "oven")[hoofdgerecht](https://www.ah.nl/allerhande/recepten/hoofdgerechten "hoofdgerecht")[wat eten we vandaag](https://www.ah.nl/allerhande/wat-eten-we-vandaag "wat eten we vandaag")[herfst](https://www.ah.nl/allerhande/recepten/herfstrecepten "herfst")[winter](https://www.ah.nl/allerhande/recepten/winterrecepten "winter")

### Ook te zien in

2022 week 45-48 - 2022 week 45-48

Plaattaart met prei, spruitjes en spek
--------------------------------------

Deze plaattaart met prei, spruitjes en spek is ideaal voor de doordeweekse avond. Extra lekker met bladerdeeg en mozzarella.

![Image 26: recipe](https://static.ah.nl/static/recepten/img_RAM_PRD171183_612x450_JPG.jpg)

hoofdgerecht

null personen

780 kcal

20 min. bereiden

30 min. oventijd

Aan de slag
-----------

*   Verwarm de oven voor op 200 °C. Leg de plakjes bladerdeeg in een rechthoek op een met bakpapier beklede bakplaat. Laat ze elkaar iets overlappen en druk de randen goed aan. Prik het bladerdeeg in met een vork, druk de randen aan met een vork en bak ca. 15 min. in de oven.
    
*   Spoel ondertussen de preien onder koud stromend water en snijd ze in halve ringen. Maak de spruitjes schoon en halveer ze. Verhit de olie in een hapjespan en bak de spekreepjes 1 min. op hoog vuur. Voeg de prei en spruitjes toe en bak 5 min. op middelhoog vuur. Breng op smaak met peper.
    
*   Snijd ondertussen de mozzarella in plakken en rasp de grana padano fijn. Haal de bladerdeegbodem uit de oven en bestrijk met de crème fraîche, houd rondom een rand vrij. Verdeel de mozzarella en groenten met spekreepjes erover en bestrooi met de geraspte kaas en chilivlokken. Bak ca. 15 min. in de oven.
    

vegatip:

Lekker van Albert Heijn: https://www.ah.nl/allerhande

Ingrediënten
------------

(Op basis van personen)

8 plakjes diepvries bladerdeeg

2 preien

500 g spruiten

2 el milde olijfolie

150 g gerookte spekreepjes

125 g mozzarella

60 g Grana Padano

100 g crème fraîche

¼ tl chilivlokken

Dit heb je nodig
----------------

*   bakpapier
    

omhoog

 

*   [](https://www.facebook.com/albertheijn)
*   [](https://twitter.com/albertheijn)
*   [](https://www.instagram.com/albertheijn)
*   [](https://www.youtube.com/user/albertheijn)
*   [](https://www.pinterest.com/allerhande)
*   ![Image 27: Albert Heijn logo](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/logo-ah.svg)

*   [Algemene voorwaarden](https://www.ah.nl/algemene-voorwaarden)
*   [Zakelijke algemene voorwaarden](https://www.ah.nl/zakelijke-voorwaarden)
*   [Bonusvoorwaarden](https://www.ah.nl/algemene-voorwaarden/bonus)
*   [Privacybeleid](https://www.ah.nl/privacy)
*   [Cookiebeleid](https://www.ah.nl/cookiebeleid)
*   [Over AH](https://www.ah.nl/over-ah)
*   [Kwetsbaarheid melden](https://www.ah.nl/kwetsbaarheid-melden)

![Image 28: Nix 18 logo](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/nix18.svg)[<25 jaar? Laat je legitimatie zien! <18 jaar verkopen wij geen alcohol.](https://www.ah.nl/nix-18)

*   ![Image 29: iDEAL logo](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/ideal.svg)
*   ![Image 30: PIN logo](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/pin.svg)
*   [![Image 31: Aanbiedersmedicijnen.nl](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/drug-provider.svg)](https://www.aanbiedersmedicijnen.nl/aanbieders/aanbiederslijst/albert-heijn/index)
*   [![Image 32: thuiswinkel.org logo](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/thuiswinkelwaarborg.svg)](https://www.thuiswinkel.org/leden/ah.nl/certificaat)
*   [![Image 33: thuiswinkel.org Certificaat](https://static.ah.nl/ah-static/images/ah-ui-bridge-components/logo/thuiswinkelwaarborg-business.svg)](https://www.thuiswinkel.org/leden-zakelijk/ah-nl/certificaat/)
`;

const result = await chain.invoke({ template: dataTemplate, text });

console.log(result);
