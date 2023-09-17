eager loading --
1. exports the components from feature module
exports:[about ceo-company]
2. imports feature module in app module
imports:[about module]

lazy loading --
1. create feature module with routing module
ng g m contact --routing=true
2. configure component routes in feature routing module
3. implement lazy loading path in app routing module
(copy from angular.io)

pre loading --
At app-routing-module
imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],