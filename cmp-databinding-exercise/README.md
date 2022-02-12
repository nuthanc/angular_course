# CmpDatabindingExercise

* 3 Components: GameControl, Odd and Even
```sh
ng g c game-control --skip-tests true
ng g c odd --skip-tests true
ng g c even --skip-tests true

npm i bootstrap@3
```
* GameControl
    * Buttons to Start and Stop the Game
    * Start: EventEmitter holding an Incrementing number emitted each second and should be listenable from outside
    * Stop: No more events should be emitted
* New Odd and Even Components should get created for every odd number and even number respectively
* Output Odd - Number or Even - Number in the 2 Components
* Style the element(e.g paragraph) holding your output text differently in both components

### Author's solution

* In tsconfig.json, set "noImplicitAny": false for interval(eventRef in my case) to not have any error if it is not initialized and "strictPropertyInitialization": false for @Input() number issue in Even component