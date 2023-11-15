# Points que j'ai aimé de l'appli

* Utilisation du concept redux des "smart et dumb" components (container et component dans la terminologie de l'application): on sépare clairement la partie fonctionnel de la partie technique
* le code est bien organisé en terme de nomenclature des répertoires
* lancement de l'appli facile
* l'utilisation de lowdb pour créer un serveur d'API rapidement: très utils pour lancer des tests en local sans avoir à mocker son code. Permet aussi de ne pas etre bloqué en cass de retard du back API. Je ne connaissais pas lowdb, j'utilise habituellement json-server qui suis la meme philosophie.


# Axes d'amélioration

## Config modules

* beaucoup de modules npm ne sont plus à jour. Cela provoque beaucoup de warnings: modules utilisés non stable ou déprecated
* obligé de relancer plusieurs fois la commande `yarn install` sinon quelques modules non installés: rxjs

Avec ma version LTS `18.x` de `nodejs`, j'ai un plantage appli au lancement

```
Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
at new Hash (node:internal/crypto/hash:71:19)
at Object.createHash (node:crypto:133:10)
at module.exports (/home/jacques/Documents/interview-app/front/node_modules/webpack/lib/util/createHash.js:135:53)
at NormalModule._initBuildHash (/home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:417:16)
at handleParseError (/home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:471:10)
at /home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:503:5
at /home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:358:12
at /home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:373:3
at iterateNormalLoaders (/home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
at iterateNormalLoaders (/home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:221:10)
/home/jacques/Documents/interview-app/front/node_modules/react-scripts/scripts/start.js:19
throw err;
^

Error: error:0308010C:digital envelope routines::unsupported
at new Hash (node:internal/crypto/hash:71:19)
at Object.createHash (node:crypto:133:10)
at module.exports (/home/jacques/Documents/interview-app/front/node_modules/webpack/lib/util/createHash.js:135:53)
at NormalModule._initBuildHash (/home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:417:16)
at /home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:452:10
at /home/jacques/Documents/interview-app/front/node_modules/webpack/lib/NormalModule.js:323:13
at /home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:367:11
at /home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:233:18
at context.callback (/home/jacques/Documents/interview-app/front/node_modules/loader-runner/lib/LoaderRunner.js:111:13)
at /home/jacques/Documents/interview-app/front/node_modules/react-scripts/node_modules/babel-loader/lib/index.js:59:103 {
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

En upgradant `react-script` en version `5.x` le problème disparait


## Redux

* N'utilise pas la plus récente des API basé sur les hook
* le code n'est pas du tout générique et n'exploite pas les principes d'architecture REST qui permet de gerer de la meme facon toute ressource. Un exemple d'implémentation que j'avais fait sur un projet github ou par l'introduction d'un paramètre supplementaire ds l'action (le path de la resource) mon code des actions, middleware et reducer est conplètement générique: https://github.com/JacquesBonet/redux_pokemon/tree/master/src/crud


## Qualité

* pas de remonté client des erreurs
* pas de tests


