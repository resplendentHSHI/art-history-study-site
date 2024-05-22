

const words = ["comparison", "visual/contextual", "contextual analysis", "visual analysis", "attribution", "continuity + change"];

const images = [
    "images/0f528bcd7c21ca6ab36d9380aeab9574678c6ed0-e1692570610987.jpg",
    "images/3d65dc3ec915a86c7af9ce183dee298812d0179e.jpg",
    "images/7c63477020712b7b064ebb2271283bcf7c6952d6.jpg",
    "images/76e561e498cbcc1ad98a74320c6fbfa7b806fd0f-e1613580490656.jpg",
    "images/290cf4090419956bd63bdc87fb09ae633e04f6c3.jpg",
    "images/325f80703fe6d0f6b574d924a7b61d7ac07e5082-e1614018954126.jpg",
    "images/415f32858409932b3292d91472eb02bc6805c9fc.jpg",
    "images/795a666dea27a6eb2346fb273562cbaf423bf920.jpg",
    "images/1599px-2015-09-22-085328_-_Terrakotta-Armee_Halle_3-870x580.jpg",
    "images/1607-1764grid-870x521.jpg",
    "images/1515031db57016b6a834d8de2862b6d5f24de78c-1-e1614018428608.jpg",
    "images/7729162_orig-e1614017069854.jpg",
    "images/4129795123_9f0ceca113_b.jpg",
    "images/4983208556_8c82c576c4_b.jpg",
    "images/7670423810_da89de5145_o-870x540.jpg",
    "images/8215878366_bb47955d94_k-870x489.jpg",
    "images/8283629458_b554a9c5b7_k-1-e1614016367323-870x480.jpg",
    "images/9321460993_dbcbdeb746_k-870x551.jpg",
    "images/9395544333_0a2e8df93c_k-870x536.jpg",
    "images/9718298358_66ad851683_k-870x508.jpg",
    "images/14068355539_d65e62e547_o-870x517.jpg",
    "images/14086211296_96566ba4cb_k-1.jpg",
    "images/14296260440_5f1057779f_k-870x580.jpg",
    "images/15344487461_def8d32f61_o-870x554.jpg",
    "images/15613274768_a41b5e7bab_k-870x494.jpg",
    "images/15876451506_51c74f4bcc_k-870x585.jpg",
    "images/16193910604_b3b41f2873_k-870x489.jpg",
    "images/16723646646_b20f32c5a8_k-870x561.jpg",
    "images/16790130426_c8c193c153_k-e1614019108468-870x543.jpg",
    "images/16992504601_c07df02431_o.jpg",
    "images/20339380568_1243b1e371_k-870x552.jpg",
    "images/23974050209_b522abba47_o-870x648.jpg",
    "images/24486850606_5bfe54436b_k.jpg",
    "images/28381488665_13bd9240bf_o-e1614017599171.jpg",
    "images/49758842643_2c60422232_c.jpg",
    "images/49823299128_8e1144a0d1_k-870x489.jpg",
    "images/50408432441_33c9fef4d7_o-870x580.jpg",
    "images/a5123c97294640905c9fcf7aa12b3cefdb00c69e.jpg",
    "images/a201873c26f21792db2948a736713555a5649f79.jpg",
    "images/Abakanowicz-Androgyne-III-thumb.jpg",
    "images/Acropolis-870x576.jpg",
    "images/Ai-Weiwei-Sunflowers-thumb.jpg",
    "images/alhambra-exterior-870x652.jpg",
    "images/Ambum-stone-thumb.jpg",
    "images/Anatsui-thumb-870x523.jpg",
    "images/AnchovySauce-870x521.jpg",
    "images/angkor-thom-grid.jpg",
    "images/Angkor-Wat-aerial-view-thumb.jpg",
    "images/anthropostele-870x522.jpg",
    "images/AP-thumb.jpg",
    "images/APAH-thumb2-870x548.jpg",
    "images/Aplu-870x522.jpg",
    "images/Apollo.11.Cave_.jpg",
    "images/arena-judgment-870x587.jpg",
    "images/arena-thumb1-870x510.jpg",
    "images/arena-thumb1-870x510.jpg",
    "images/ArnolfiniHands-870x427.jpg",
    "images/Athenian-Agora-from-the-Acropolis.jpg",
    "images/AugustusP-870x489.jpg",
    "images/Australia-thumb.jpg",
    "images/Bahram-Gur-Fights-the-Karg-thumb.jpg",
    "images/BattleSarc-870x521.jpg",
    "images/Bayeux-870x522.jpg",
    "images/bible-featuredimage-870x515.jpg",
    "images/BiomboSmaller-870x521.jpg",
    "images/Borobudor-thumb.jpg",
    "images/Borromini-San-Carlo-alle-Quattro-Fontane-thumb.jpg",
    "images/boxer.jpg",
    "images/Braque-portuguese-thumb-870x521.jpg",
    "images/BritRepublic3-870x489.jpg",
    "images/Buk-mask.jpg",
    "images/bundu-thumb-870x523.jpg",
    "images/c37837b2922414a249dfa5c1c81e697aaa8ef9ec.jpg",
    "images/c85702d9-a718-aa89-66b8-7ca941c73bb6-scaled-e1614015548328-870x511.jpg",
    "images/cabrerasorjuanadet-e1614015392630.jpg",
    "images/capital-870x522.jpg",
    "images/Caravaggio-Calling-of-St-Matthew-thumb.jpg",
    "images/Catacomb-of-Priscilla-Rome-thumb.jpg",
    "images/CentralNorthern-870x521.jpg",
    "images/Cezanne-870x521.jpg",
    "images/cf0f27673b75b8e18189483b48915a9d85236ad4.jpg",
    "images/Chairman-Mao-thumb.jpg",
    "images/Chartres-870x521.jpg",
    "images/Chateau_Versailles_Galerie_des_Glaces-870x578.jpg",
    "images/Chavin-essay-thumb.jpg",
    "images/Christo-Central-Park-Gates-thumb.jpg",
    "images/Church-and-Reliquary-of-Sainte-Foy-thumb.jpg",
    "images/Claude_monet_la_gare_saint-lazare-thumb.jpg",
    "images/Codex-Mendoza-thumb.jpg",
    "images/ColosseumGrid-870x521.jpg",
    "images/ColumnTrajanGrid-870x522.jpg",
    "images/Corbusier-Savoye-thumb.jpg",
    "images/cordoba-870x580.jpg",
    "images/cranach-law-and-gospel-1529-thumb.jpg",
    "images/Cusco-thumb.jpg",
    "images/d33fc553389557e4457b7d0b25a265318221fc41.jpg",
    "images/davidface-small-870x489.jpg",
    "images/DavidOath-1-870x522.jpg",
    "images/deesisbanner-870x489.jpg",
    "images/dekooningwomanthumb.jpg",
    "images/DerbyOrrery.jpg",
    "images/DomeoftheRockSm-870x588.jpg",
    "images/Doryphoros-870x522.jpg",
    "images/dp295360-1.jpg",
    "images/Duerer-Adam-and-Eve-thumb-1.jpg",
    "images/Duerer-Adam-and-Eve-thumb.jpg",
    "images/Eadweard_Muybridge-Sallie_Gardner_1878-scaled-e1613083769804-870x459.jpg",
    "images/Edouard-Manet-Olympia-thumb.jpg",
    "images/Etruscan-Tomb-of-the-Triclinium.jpg",
    "images/Eugène_Delacroix-Liberty-leading-the-people-thumb.jpg",
    "images/f60073-15-1.jpg",
    "images/Fan-Kuan-Travelers_Among_Mountains_and_Streams-thumb.jpg",
    "images/featured.jpg",
    "images/Fengxian-Temple-Panorama-thumb.jpg",
    "images/Fibs-870x522.jpg",
    "images/Forbidden-City-thumb.jpg",
    "images/Frankenthaler-bay-thumb.jpg",
    "images/Frida-Kahlo-Two-Fridas-thumb.jpg",
    "images/Giotto-Arena-Kiss-of-Judas-thumb.jpg",
    "images/GiottoLamentation-870x521.jpg",
    "images/gizapyramids-870x521.jpg",
    "images/golden-stool-thumb.jpg",
    "images/GoyaDisastersofWar-870x521.jpg",
    "images/Great-Stupa-thumb.jpg",
    "images/great-zimbabwe-thumb.jpg",
    "images/grid-Theodora-detail-scaled-copy-1-870x521.jpg",
    "images/Grunewald_Isenheim-thumb.jpg",
    "images/Gustav_Klimt_The-Kiss-thumb.jpg",
    "images/Gustave_Courbet_Stonebreakers-thumb.jpg",
    "images/Hagia-Sophia-thumb-870x523.jpg",
    "images/Hammurrabi-870x522.jpg",
    "images/Hatshepsut-870x521.jpg",
    "images/HogarthMarriage-870x521.jpg",
    "images/Hokusai-Great-Wave-thumb.jpg",
    "images/Houdon-thumb-870x523.jpg",
    "images/HwangnamdaechongCrownThumb-870x524.jpg",
    "images/ibex-870x521.jpg",
    "images/ikenga-thumb-870x523.jpg",
    "images/Il-Gesu-fresco-thumb.jpg",
    "images/Inka-textile-thumb.jpg",
    "images/Introduction-to-Dada-thumb.jpg",
    "images/Isfahan-thumb-870x523.jpg",
    "images/ItalianBaroque-870x521.jpg",
    "images/Italy1500Cover-870x522.jpg",
    "images/Jacopo_Pontormo-Entombment-thumb.jpg",
    "images/jadecong-870x490.jpg",
    "images/Jahangir-thumb.jpg",
    "images/Johannes-Vermeer-Woman-Holding-a-Balance-thumb.jpg",
    "images/Justinian-870x522.jpg",
    "images/Kaaba-thumb.jpg",
    "images/Kaethe-Kollwitz-In-Memoriam-Karl-Liebknecht-thumb.jpg",
    "images/Kandinsky-improvisation-thumb-870x522.jpg",
    "images/khafresphinx.jpg",
    "images/khajuraho-lakshmana_temple.jpeg",
    "images/Kiki-Smith-Lying-with-the-Worf-1.jpg",
    "images/Kirchner-Self-portrait-as-soldier-thumb.jpg",
    "images/Korin-Red-and-White-Plum-Blossoms-thumb.jpg",
    "images/Kusama-Narcissus-Garden-thumb.jpg",
    "images/Lam-The-Jungle-thumb.jpg",
    "images/lapitafragment.jpg",
    "images/lascaux.jpg",
    "images/LastJudgMortel-870x591.jpg",
    "images/LateGothicCover.jpg",
    "images/Le-Brun-self-portrait-Uffizi-thumb.jpg",
    "images/Leonardo-Last-Supper-thumb.jpg",
    "images/Lindisdarne-gospels-Cotton_MS_Nero_D_IV_f139.jpg",
    "images/Lippi-870x522.jpg",
    "images/louvrelamassu-870x522.jpg",
    "images/Luba-Memory-Board.jpg",
    "images/Martinez-thumb.jpg",
    "images/Mary_Cassatt-The_Coiffure-thumb.jpg",
    "images/Master-of-Calamarca-Angel-with-Arquebus.jpg",
    "images/Matisse-Goldfish-thumb.jpg",
    "images/Mawangdui_silk_banner_from_tomb-thumb.jpg",
    "images/mehretu-thumb.jpg",
    "images/menkaure.jpg",
    "images/menkaurequeen.jpg",
    "images/Meret-Oppenheimer-Object-thumb-1.jpg",
    "images/Merode-870x521.jpg",
    "images/MesaVerdeFeaturedImage.jpg",
    "images/michart.jpg",
    "images/Michelangelo-Ceiling-of-the-Sistine-Chapel-thumb.jpg",
    "images/Michelangelo-Studies-for-the-Libyan-Sibyl-thumb.jpg",
    "images/mid_00886975_001.jpg",
    "images/MNA113.jpg",
    "images/moaithumb-870x539.jpg",
    "images/Mondrian-red-blue-yellow-thumb-870x523.jpg",
    "images/Mori-Pure-Land-thumb.jpg",
    "images/mutu-thumb.jpg",
    "images/Nam-June-Palk-Electronic-Superhighway-thumb.jpg",
    "images/Nan-madol-thumb.jpg",
    "images/narmer-edit.jpg",
    "images/neshat-thumb.jpg",
    "images/Nike-of-Samothrace-.jpg",
    "images/nukuoro-870x600.jpeg",
    "images/ObaGrid2-870x521.jpg",
    "images/Old-mans-cloth.thumb_.jpg",
    "images/Oldenburg-Lipstick-thumb.jpg",
    "images/Olmec-thumb-870x523.jpg",
    "images/Olowe-thumb-870x521.jpg",
    "images/OsorioBarberThumb-870x549.jpg",
    "images/pantheon-870x521.jpg",
    "images/parthenon-grid-870x521.jpg",
    "images/PatricianOtricoli.jpg",
    "images/Paul_Gauguin_Where-do-we-come-from-thumb.jpg",
    "images/Peplos-870x521.jpg",
    "images/perg-870x505.jpg",
    "images/Petra-Siq.jpg",
    "images/Petra-Treasury.jpg",
    "images/petrab-870x489.jpg",
    "images/petrac.jpg",
    "images/Phidias.jpg",
    "images/Picasso-Les-Demoiselles-dAvignon-thumb.jpg",
    "images/picassoguitarthumb-870x543.jpg",
    "images/Pieter_Bruegel_the_Elde-Hunters_in_the_Snow-thumb.jpg",
    "images/pink-panther.jpg",
    "images/Prasat_Bayon_2014-870x580.jpg",
    "images/Presentation-of-Fijan-mats.jpg",
    "images/profileclosemed-870x535.jpg",
    "images/Pyxis-al-mughira-thumb-870x522.jpg",
    "images/Raphael-self-thumb-870x521.jpg",
    "images/Rebecca-and-Eliezer-at-the-Well-Vienna-Genesis-thumb.jpg",
    "images/red-coffin-grid.jpg",
    "images/reliquary-figure-thumb-870x523.jpg",
    "images/Rembrandt-Self-portrait-with-Saskia-thumb.jpg",
    "images/Rivera-Dream-of-a-Sunday-Afternoon-thumb.jpg",
    "images/Rottgen-870x521.jpg",
    "images/Rubens-Presentation-of-Marie-de-Medici-thumb.jpg",
    "images/running-horned-thumb-300x180.jpg",
    "images/Ruysch-Fruit-and-insects-1711-thumb.jpg",
    "images/salcedo-870x521.jpg",
    "images/sandalnike-e1473633105924.jpg",
    "images/Santa-Sabina-nave-thumb.jpg",
    "images/School-of-Paris-thumb-870x523.jpg",
    "images/SchoolAthens-870x522.jpg",
    "images/Screen-Shot-2015-11-20-at-11",
    "images/Screen-Shot-2015-11-20-at-11.webp",
    "images/Screen-Shot-2015-11-27-at-2.webp",
    "images/Screen-Shot-2015-11-27-at-3.webp",
    "images/Screen-Shot-2015-12-11-at-1.webp",
    "images/Screen-Shot-2015-12-15-at-2.webp",
    "images/Screen-Shot-2016-01-19-at-12.webp",
    "images/screen-shot-2017-03-01-at-7-50-29-am.webp",
    "images/screen-shot-2017-03-01-at-8-14-55-pm-e1614100345448.webp",
    "images/Screen-Shot-2021-02-12-at-2.webp",
    "images/Screen-Shot-2021-02-16-at-5",
    "images/Screen-Shot-2021-02-16-at-5.webp",
    "images/Screen-Shot-2021-02-18-at-3.webp",
    "images/Seagram-thumb-870x523.jpg",
    "images/seatedscribe-870x521.jpg",
    "images/Selimiye-mosque-thumb-870x523.jpg",
    "images/shahnama-essay-grid-870x522.jpg",
    "images/SHerman.jpg",
    "images/Shiva-Met-thumb.jpg",
    "images/shonibare-new.jpg",
    "images/Silla-crown-thumb.jpg",
    "images/sin.jpg",
    "images/smith-trade.jpg",
    "images/Smithson-Spiral-Jetty-thumb.jpg",
    "images/SpanishBaroque-870x522.jpg",
    "images/spouses-rome-870x521.jpg",
    "images/StandardOfUrPeace-870x577.jpg",
    "images/stonehenge.jpg",
    "images/Sullivan-detail-of-Chicago-window-thumb.jpg",
    "images/Sun-stone-thumb.jpg",
    "images/Symbolism-870x521.jpg",
    "images/SZ-Maya-Lin-870x509.jpg",
    "images/Taj-mahal-thumb-870x523.jpg",
    "images/Tamati-Waka-Nene-full-sm-870x1099.jpg",
    "images/Templo-Mayor-thumb-870x523.jpg",
    "images/terracotta-870x580.jpg",
    "images/The_Great_Serpent_Mound-e1614016876518.jpg",
    "images/The_Parthenon_in_Athens.jpg",
    "images/The-Story-of-Jacob-from-the-Vienna-Genesis.jpg",
    "images/Theotokos-.jpg",
    "images/Theotokos-mosaic-thumb.jpg",
    "images/thumb-870x629.jpg",
    "images/Thumbnail-Bier-Alexander-870x474.jpg",
    "images/Thumbnail-the-Steerage-870x496.jpg",
    "images/ThumbnailBagNiceDetail-870x489.jpg",
    "images/Tlatilco-thumb.jpg",
    "images/Transformation-thumb.jpg",
    "images/tuffery.jpg",
    "images/US19thc1-870x489.jpg",
    "images/Van_Eyck_Arnolfini_Portrait-thumb.jpg",
    "images/Van-Gogh-Starry-Night-thumb.jpg",
    "images/Varvara-Stepanova-The-Results-of-the-First-thumb.jpg",
    "images/velasco-870x522.jpg",
    "images/Venturi-thumb.jpg",
    "images/venus-of-urbino-grid-870x521.jpg",
    "images/veristic-870x522.jpg",
    "images/Vettii-870x521.jpg",
    "images/VictorianArtCover-870x521.jpg",
    "images/vienna-genesis-thumb-2.jpg",
    "images/Viola-thumb-300x180.jpg",
    "images/Walker-thumb.jpg",
    "images/Warhol-Marilyn-diptych-thumb.jpg",
    "images/whitetemplegrid.jpg",
    "images/wpa5b68b3c.webp",
    "images/Wright-thumb.jpg",
    "images/Xu-bing-thumb-870x523.jpg",
    "images/Zaha-Hadid-Rome-thumb.jpg"
];

let currentLeftImage = "";
let currentRightImage = "";
let currentWord = "";

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function loadImages() {
    currentLeftImage = getRandomElement(images);
    currentRightImage = getRandomElement(images);
    currentWord = getRandomElement(words);

    const leftImage = document.getElementById("left-image");
    const rightImage = document.getElementById("right-image");
    const word = document.getElementById("word");

    leftImage.innerHTML = `<img src="${currentLeftImage}" alt="Image">`;
    rightImage.innerHTML = `<img src="${currentRightImage}" alt="Image">`;
    word.textContent = currentWord;
}

function reloadImages() {
    loadImages();
}

async function saveResponse() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) {
        alert("Please enter a response before saving.");
        return;
    }

    const response = {
        text: userInput,
        leftImage: currentLeftImage,
        rightImage: currentRightImage,
        word: currentWord
    };

    const db = firebase.firestore();
    await db.collection("responses").add(response);

    document.getElementById("user-input").value = '';
    alert("Response saved!");
}

async function viewResponses() {
    const responsesDiv = document.getElementById("responses");
    const db = firebase.firestore();
    const snapshot = await db.collection("responses").get();
    const responses = snapshot.docs.map(doc => doc.data());

    if (responses.length === 0) {
        responsesDiv.innerHTML = "<p>No responses yet.</p>";
        return;
    }

    responsesDiv.innerHTML = "<ul>" + responses.map(response => `
        <li>
            <p><strong>Response:</strong> ${response.text}</p>
            <p><strong>Left Image:</strong> <img src="${response.leftImage}" alt="Image" width="100"></p>
            <p><strong>Right Image:</strong> <img src="${response.rightImage}" alt="Image" width="100"></p>
            <p><strong>Prompt:</strong> ${response.word}</p>
        </li>
    `).join('') + "</ul>";
}

// Load images on initial load
window.onload = loadImages;
