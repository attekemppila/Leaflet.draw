# Leaflet.draw - tsmap

## build

```sh
npm run build
```

## tsmap

Leaflet.draw on lisätty Tukisovellus kartan (tsmap) tarvitsemia muutoksia.

Muutetut kohdat on merkitty koodissa tunnisteella `tsmap:` kommentilla.

### tsmap: able to cancel _finishShape

Epävalidin piirron (esim. itsensä leikkaava polygoni) toipumisen tuki.

### tsmap: reset if _mouseUp was cancelled by tool

Korjaa piirtämisen jatkamisen,
jos ensin oli kutsuttu `onMouseDown()`, mutta sen jälkeen ei oltu kutsuttu `onMouseUp()`,
jonka jälkeen `onMouseDown()` ei toiminut seuraavalla klikkauksella.

### tsmap: update guide line

Piirronaikainen täydentäminen,
polygonin piirrossa näytetään katkoviiva viimeisestä pisteestä alkupisteeseen.

### tsmap: fix holes editable

Lisätty tuki polygonien reikien editoimiselle
([issue 830](https://github.com/Leaflet/Leaflet.draw/issues/830),
[issue 623](https://github.com/Leaflet/Leaflet.draw/issues/623)).

### tsmap: forward triggerer event

Välittää eventin kartalle, jotta tiedetään oliko editointi klikkaus vai joku muu.

### tsmap: add property isMiddleMarker

MiddleMarker on muokkauksessa näkyvä "harmaa" template taitepiste,
joka näkyy geometrian todellisten taitepisteiden välissä.

Lisätty middleMarkereille `isMiddleMarker:true` kenttä,
jotta tsmapissa tiedetään varmasti että kyseessä on middleMarker.

### tsmap: touchIcon size

Korjaa piirrossa taitepisteen viereen klikkaamisen.
Asetetaan oletuksena piirron taitepisteen ikonille sama koko kuin normaalille ikonille,
jolloin kartan näkymättömät markerit eivät ole klikattavissa.

### tsmap: no draw minimun distance

Poistettu piirron lopetus, jos etäisyys on alle 10m edelliseen viivan taitepisteeseen tai polygonin alkupisteeseen.

### tsmap: leaflet 1.x use L.LineUtil.isFlat

Korjattu deprikointi varoitus. Tuetaan vain leaflet 1.x.

### tsmap: listener not found - remove listener only if it exists

Korjaa ettei consoleen tulostu "listener not found" varoituksia.
Tarkastaa ennen poistoa onko kuuntelija olemassa.
