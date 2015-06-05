# FluxAction
flux-action.js is a library inspired by Facebook's Flux. It aims to create flux actions that can be used with any framework.

## Demo

## Development

#### Overview of Folder Structure

* `src` contains the pre-build files of flux-action.js.
* `gulp` contains the gulp task files.

#### Anatomy of FluxAction

Here is the overview for the files under `src` folder:

* `index.js` is the entry point of flux-action.js.
* `action.js` represents action with both dispatch and register functionalities.

#### Set up The Local Environment

Here are the steps:

* Install `gulp` globally if you haven't done so.
* Run `npm install`.
* Run `gulp` to build the `flux-action.js`.

## Usage

``` javascript
    var itemActions = fluxAction.createActions(['added', 'removed']);

    itemActions.added.register(function (data) {
        console.log(data);
    });

    itemActions.added.dispatch('45');
```

## License

[MIT](http://opensource.org/licenses/MIT)