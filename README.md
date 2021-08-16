# Crypto Prijs Tracker

## Informatie

Dit is een app die mbv de Coingecko API data fetched en deze data in een graph stopt, de data wordt fetched mbv React Query, de data wordt gevisualiseerd mbv Victory Charts.

## Stappenplan

1. Creeër een nieuwe react-app met create-react-app in de terminal, verwijder onnodige bestanden zoals helper en css files, installleer React-Query.
2. Creeër een folder components in src en creeër de CryptoTracker file, in dit bestand wordt met een React Hook de state van het component bewaart, met een knop kan de gebruiker switchen tussen de isExpanded state, wanneer de state true is wordt het component groter in het scherm en is er meer functionaliteit weergeven.
3. Voeg de React Query functionaliteit toe aan de top level van de components, dus alle componenten die React Query nodig hebben moet erin gewrapped zijn, dit is makkelijk te doen door de QueryClientProvider in de App.js file te stoppen.
4. De useQuery hook zal gebruikt worden om alle data te fetchen die dit project nodig heeft.
5. In de CryptoTracker file wordt een custom React Hook useCardGetData toegevoegd, custom hooks zijn handig om code gestructureerd te houden en om eventueel de hook te herbruiken.
6. In Ons CryptoTracker component kunnen we nu 2 variabelen data en isLoading destructureren vanuit onze custom useGetCardData hook, in de console loggen we deze variabelen om te testen of ze werken, hierna destructureren we ook nog onze data om deze makkelijker bereikbaar te maken in onze code. de isLoading variabele is nodig om pas het componenent te renderen wanneer de data ontvangen is en anders wordt er nog niks uitgevoerd.
7. Er worden 2 nieuwe functies toegevoegd: formatPrice en formatPlusMinus, de eerste functie zet de prijs data in een juist nummer format en de laatste functie bepaalt of er een stijging of daling in de prijs geweest is op de dag en returned voor elk van deze een juist jsx element.
8. Pas css toe op de markup.
9. Voeg victory charts toe in de terminal, voeg ook data-fns toe, deze is nodig voor tijd/date formatting.
10. Creeër een nieuw ChartData component, in dit component wordt de Victory Charts plugin gebruikt om opgehaalde data via React Query om te zetten naar een werkende graph, het ChartData component krijgt 2 parameters meegegeven namelijk: cryptoName om dezelfde crypto mee te geven in de query om dezelfde data te graphen als in de parent, isExpanded is nodig om te bepalen of de ChartData component groot of klein weergeven moet worden.
11. Voeg een array toe met intervals aan het ChartData component, over deze array wordt gemapped en hieruit worden 4 knoppen getekent waarmee de gebruiker het Chart Interval aan kan passen, er wordt een nieuwe state aangemaakt om bij te houden welke interval gebruikt wordt.
12. In de ChartData component wordt ook een custom hook gemaakt, deze heet ook useGetChartDat, deze voert op dezelfde manier een React Query uit naar een API endpoint en krijgt de opgevraagde data terug in json, het enige verschil is dat de key in de useQuery hook een array is, dit is nodig omdat wanneer de query opnieuw gerunned moet worden met nieuwe data wanneer de interval state verandert.

## Plugins

- React
- ReactQuery
- Victory Charts
- date-fns
