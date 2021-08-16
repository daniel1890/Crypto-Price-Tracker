# Crypto Prijs Tracker

## Informatie

Dit is een app die mbv de Coingecko API data fetched en deze data in een graph stopt, de data wordt fetched mbv React Query, de data wordt gevisualiseerd mbv Victory Charts.

## Stappenplan

1. Creeër een nieuwe react-app met create-react-app in de terminal, verwijder onnodige bestanden zoals helper en css files, installleer React-Query.
2. Creeër een folder components in src en creeër de CryptoTracker file, in dit bestand wordt met een React Hook de state van het component bewaart, met een knop kan de gebruiker switchen tussen de isExpanded state, wanneer de state true is wordt het component groter in het scherm en is er meer functionaliteit weergeven.
3. Voeg de React Query functionaliteit toe aan de top level van de components, dus alle componenten die React Query nodig hebben moet erin gewrapped zijn, dit is makkelijk te doen door de QueryClientProvider in de App.js file te stoppen.
4. De useQuery hook zal gebruikt worden om alle data te fetchen die dit project nodig heeft.
5. In de CryptoTracker file wordt een custom React Hook useCardGetData toegevoegd, custom hooks zijn handig om code gestructureerd te houden en om eventueel de hook te herbruiken.


## Plugins

- React
- ReactQuery
- Victory Charts