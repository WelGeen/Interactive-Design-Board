const iframe = document.getElementById('imageFrame');
const FiltersList = [
	"none", "blur(5px)", "brightness(150%)", "contrast(200%)", "grayscale(100%)",
	"hue-rotate(90deg)", "invert(100%)", "opacity(50%)", "saturate(300%)", "sepia(100%)"
];

const BlendModesList = [
    "normal", "multiply", "screen", "overlay", "darken", "lighten",
    "color-dodge", "color-burn", "hard-light", "soft-light",
    "difference", "exclusion", "hue", "saturation", "color", "luminosity"
];
const phrases = [
    // LATIJNSE ZINNEN
    "Ars est celare artem", // De kunst is om de kunst te verbergen.
    "Designare est creare", // Ontwerpen is creëren.
    "Simplicitas est ultimum sophisticatum", // Eenvoud is de ultieme verfijning.
    "Formae sequuntur functionem", // Vorm volgt functie.
    "Invenire et innovare", // Ontdekken en innoveren.
    "Mens et manus", // Geest en hand.
    "Experientia docet", // Ervaring onderwijst.
    "Magnum opus", // Groot werk.
    "Lux et umbra", // Licht en schaduw.
    "Labor omnia vincit", // Werk overwint alles.
    "Cogito, ergo sum", // Ik denk, dus ik ben.
    "Fiat lux", // Er zij licht.
    "Omne initium difficile est", // Elk begin is moeilijk.
    "Carpe diem", // Pluk de dag.
    "Natura artis magistra", // De natuur is de leermeester van de kunst.
    "Creatio ex nihilo", // Schepping uit het niets.
    "Mens sana in corpore sano", // Een gezonde geest in een gezond lichaam.
    "Per aspera ad astra", // Door moeilijkheden naar de sterren.
    "Ad infinitum", // Tot in het oneindige.
    "Veritas et forma", // Waarheid en vorm.
    "Vita brevis, ars longa", // Het leven is kort, de kunst is lang.
    "Pulchritudo in simplici", // Schoonheid ligt in eenvoud.
    "Fortes fortuna adiuvat", // Het geluk helpt de moedigen.
    "Tempus fugit", // De tijd vliegt.
    "Deus ex machina", // God uit de machine.

    // CHINESE ZINNEN
    "设计是创造" , // Ontwerpen is creëren.
    "简单即是美" , // Eenvoud is schoonheid.
    "形随功能" , // Vorm volgt functie.
    "艺术源于生活" , // Kunst komt uit het leven.
    "巧夺天工" , // Vakkundig en meesterlijk.
    "千里之行，始于足下" , // Een reis van duizend mijl begint met één stap.
    "知行合一" , // Weten en doen zijn één.
    "变化是永恒的" , // Verandering is eeuwig.
    "纸上得来终觉浅" , // Alleen theorie is oppervlakkig.
    "精益求精" , // Streven naar perfectie.
    "光与影的艺术" , // De kunst van licht en schaduw.
    "创新是灵魂" , // Innovatie is de ziel.
    "无限可能" , // Oneindige mogelijkheden.
    "设计无界" , // Ontwerp kent geen grenzen.
    "洞见未来" , // Inzicht in de toekomst.
    "艺术无止境" , // Kunst kent geen einde.
    "从无到有" , // Van niets naar iets.
    "形与神俱" , // Vorm en geest samen.
    "人性化设计" , // Mensgericht ontwerp.
    "细节决定成败" , // Details bepalen succes of falen.
    "慢工出细活" , // Zorgvuldigheid levert perfectie.
    "自然之道" , // De weg van de natuur.
    "美在于和谐" , // Schoonheid ligt in harmonie.
    "智慧与创造" , // Wijsheid en creativiteit.
    "道法自然" // De weg volgt de natuur.
];

var SELECT;
// Wachten tot de iframe geladen is
iframe.addEventListener('load', () => {
    console.log('Wachten tot de iframe geladen is'); 
});	

function selectLayer(){
	const selectedLayer = document.querySelector('input[name="layer"]:checked').value;
	console.log("Geselecteerde laag:", selectedLayer);
	SELECT = selectDivFromIframe(selectedLayer);
}
 
// "Image"-knop functionaliteit
document.getElementById('imgBtn').addEventListener('click', () => {
	const randomItem = img_data[Math.floor(Math.random() * img_data.length)];
	if (SELECT) {
		SELECT.style.backgroundImage = "url('https://welgeen.nl/beeldbank/"+randomItem+"')";
	} else {
		alert("Div niet gevonden.");
	}
});

// "Gif"-knop functionaliteit
document.getElementById('gifBtn').addEventListener('click', () => {
	const randomItem = gif_data[Math.floor(Math.random() * gif_data.length)];
	if (SELECT) {
		SELECT.style.backgroundImage = "url('https://welgeen.nl/beeldbank/"+randomItem+"')";
	} else {
		alert("Div niet gevonden.");
	}
});

// "Filter 
document.getElementById('filBtn').addEventListener('click', () => {
	if (SELECT) {
		SELECT.style.filter = FiltersList[Math.floor(Math.random() * FiltersList.length)];
	} else {
		alert("Div niet gevonden.");
	}
});

// "BlendModesList
document.getElementById('bleBtn').addEventListener('click', () => {
	if (SELECT) {
		SELECT.style.mixBlendMode = BlendModesList[Math.floor(Math.random() * BlendModesList.length)];
	} else {
		alert("Div niet gevonden.");
	}
});
function selectDivFromIframe(index) {
	try {
		// Controleer of de iframe geladen is en toegang heeft tot inhoud (zelfde domein)
		if (iframe && iframe.contentDocument) {
			const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

			// Selecteer alle <div>-elementen in de iframe
			const divs = iframeDoc.querySelectorAll("div");

			// Controleer of het index geldig is
			if (index >= 0 && index < divs.length) {
				const selectedDiv = divs[index];
				console.log("Geselecteerde div:", selectedDiv);
				
				return selectedDiv;
			} else {
				console.error("Index buiten bereik. Er zijn slechts", divs.length, "divs beschikbaar.");
			}
		} else {
			console.error("Kan iframe-inhoud niet benaderen. Controleer of het iframe geladen is.");
		}
	} catch (error) {
		console.error("Fout bij het ophalen van div uit iframe:", error);
	}
}

// "Save"-knop functionaliteit
document.getElementById('savBtn').addEventListener('click', () => {
	const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	const htmlContent = iframeDocument.documentElement.outerHTML;
	const blob = new Blob([htmlContent], { type: 'text/html' });
	const a = document.createElement('a');
	a.href = URL.createObjectURL(blob);
	a.download = 'template-mob.weg';
	a.click();
});

// "Open"-knop functionaliteit
document.getElementById('opnBtn').addEventListener('click', () => {
	const input = document.createElement('input');
	input.type = 'file';
	input.accept = '.weg';
	input.onchange = event => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = e => {
			const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
			iframeDoc.open();
			iframeDoc.write(e.target.result);
			iframeDoc.close();
		};
		reader.readAsText(file);
	};
	input.click();
});

let radioCount = 3; 
// Voeg een nieuwe radio-button toe
document.getElementById('pluBtn').addEventListener('click', function () {
    const formContainer = document.getElementById('formContainer');
    const newRadio = document.createElement('input');
    newRadio.type = 'radio';
    newRadio.name = 'layer';
    newRadio.value = radioCount;
    formContainer.appendChild(newRadio);
    radioCount++; // Verhoog de teller
	addDivToIframe();
});

// Verwijder de laatste radio-button
document.getElementById('minBtn').addEventListener('click', function () {
    const formContainer = document.getElementById('formContainer');
    const radios = formContainer.querySelectorAll('input[name="layer"]');
   
    if (radios.length > 3) {
        // Verwijder de laatste radio-button, label en br
        formContainer.removeChild(radios[radios.length - 1]);
        radioCount--; // Verlaag de teller
		removeLastDivFromIframe()
        if (radioCount < 3) radioCount = 3; // Voorkom dat er minder dan 3 div zijn  waarden
    }
});

// Voeg een nieuwe <div> toe aan de iframe
function addDivToIframe() {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const newDiv = iframeDoc.createElement('div');
    iframeDoc.body.appendChild(newDiv);
}

// Verwijder de laatste <div> uit de iframe
function removeLastDivFromIframe() {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const divs = iframeDoc.body.querySelectorAll('div');
    if (divs.length > 0) {
        iframeDoc.body.removeChild(divs[divs.length - 1]);
    }
}

// Helperfunctie voor willekeurige getallen
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Top-knop: Willekeurige top-waarde
document.getElementById('topBtn').addEventListener('click', () => {
	if (SELECT) {
		const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
		const maxHeight = iframeDocument.documentElement.clientHeight
		const randomTop = getRandomValue(-maxHeight, maxHeight);
		console.log(randomTop)
		SELECT.style.top = `${randomTop}px`;
	} else {
		alert("Div niet gevonden.");
	}
});

// Left-knop: Willekeurige left-waarde
document.getElementById('lefBtn').addEventListener('click', () => {
	if (SELECT) {
		const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
		const maxWidth = iframeDocument.documentElement.clientWidth;
		const randomLeft = getRandomValue(-maxWidth, maxWidth);
		SELECT.style.left = `${randomLeft}px`;
	} else {
		alert("Div niet gevonden.");
	}
});

// Dim-knop: Willekeurige breedte tussen 40% en 100%
document.getElementById('whBtn').addEventListener('click', () => {
	if (SELECT) {
		const randomWidth = getRandomValue(40, 400);
		SELECT.style.width = `${randomWidth}%`;
	} else {
		alert("Div niet gevonden.");
	}
});

// Deg-knop: Willekeurige rotatie van 90°, 180°, of -90°
document.getElementById('degBtn').addEventListener('click', () => {
	if (SELECT) {
		const rotations = [90, 180, -90];
		const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
		SELECT.style.transform = `rotate(${randomRotation}deg)`;
	} else {
		alert("Div niet gevonden.");
	}
});
// Functie om een willekeurige kleur te genereren
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Willekeurige achtergrondkleur toewijzen aan een laag bij klikken op rncBtn
document.getElementById('rncBtn').addEventListener('click', () => {
    if (SELECT) {
        const randomColor = getRandomColor();
        SELECT.style.backgroundColor = randomColor;
    } else {
        alert("Div niet gevonden.");
    }
});

// Willekeurige font kleur toewijzen aan een laag bij klikken op rfcBtn
document.getElementById('rfcBtn').addEventListener('click', () => {
    if (SELECT) {
        const randomColor = getRandomColor();
        SELECT.style.color = randomColor;
    } else {
        alert("Div niet gevonden.");
    }
});
// Willekeurige font size toewijzen aan een laag bij klikken op rfcBtn
document.getElementById('rfsBtn').addEventListener('click', () => {
    if (SELECT) {
        const randomSize = getRandomValue(10, 400);
		SELECT.style.fontSize = `${randomSize}px`;
    } else {
        alert("Div niet gevonden.");
    }
});
// Geel of zwart of wit  toewijzen aan een laag bij klikken op rfcBtn
document.getElementById('wgcBtn').addEventListener('click', () => {
    if (SELECT) {
        const colors = ['yellow', 'black', 'white', 'orange'];
		SELECT.style.color = colors[Math.floor(Math.random() * colors.length)];
    } else {
        alert("Div niet gevonden.");
    }
});

document.getElementById('rbcBtn').addEventListener('click', () => {
	const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

	// Selecteer alle <body>-elementen in de iframe
	const body = iframeDoc.querySelector("body");
     const randomColor = getRandomColor();
	 body.style.backgroundColor = randomColor;

});


// Functie om een willekeurig lettertype te kiezen
function getRandomFont() {
    const fonts = ['Arial', 'Verdana', 'Tahoma', 'Georgia', 'Times New Roman', 'Courier New', 'Impact', 'Comic Sans MS'];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

// Functie om een willekeurige tekst te genereren
function getRandomText() {

    return phrases[Math.floor(Math.random() * phrases.length)];
}

// Willekeurige tekst, kleur en font toepassen op SELECT bij klikken op rntBtn
document.getElementById('rntBtn').addEventListener('click', () => {
    if (SELECT) {
        SELECT.textContent = getRandomText(); 
        SELECT.style.color = getRandomColor(); 
        SELECT.style.fontFamily = getRandomFont(); 
		
		const randomSize = getRandomValue(20, 300);
		SELECT.style.fontSize = `${randomSize}px`;
    } else {
        alert("Div niet gevonden.");
    }
});

document.getElementById('antBtn').addEventListener('click', () => {
    const overlay = document.getElementById('formOverlay');
    overlay.style.display = 'flex';
  });
  
document.getElementById('formSubmitBtn').addEventListener('click', () => {
        const overlay = document.getElementById('formOverlay');
		if (SELECT) {
			const tekst = overlay.querySelector('textarea').value;
			SELECT.textContent = tekst; 
			SELECT.style.color = getRandomColor(); 
			SELECT.style.fontFamily = getRandomFont(); 
		
			const randomSize = getRandomValue(20, 300);
			SELECT.style.fontSize = `${randomSize}px`;
    } else {
        alert("Div niet gevonden.");
    }
		
		
     
     overlay.style.display = 'none';
 });
  




