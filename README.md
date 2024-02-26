# SimpleStickyHeader

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Install the package

Run npm i simple-sticky-header --save

## Usage

This module relies on angular 17.2.0 or newer versions. It should also works with lower versions of angular(tested on v 11, 12 and 14), just remove standalone property from directive metadata and copy paste the directive code and place inside your project.

Simply place "simpleStickyHeader" attribute on the element needed to be sticky on top.

```
<div simpleStickyHeader >Sticky Header</div>
```

If you want to add additional css or want to change the layout when sticky, you can use the class "pinned" which will be added once the element is sticky.

Example:

In HTML:

```
<div simpleStickyHeader class="sticky-header">
    <div class="normal-view">
        <div class="normal-font row center">Normal Content</div>
    </div>
    <div class="sticky-view">
        <div class="row center">
            <div>Content Become Sticky</div>
        </div>
    </div>
</div>
```

In SCSS:

```
.sticky-header {
    border: 1px solid;
    height: 20px;
    background-color: white;
    width: 50vw;

    .row {
        display: flex;
    }
    .space-around {
        justify-content: space-around;
    }
    .center {
        justify-content: center;
    }
    
    .normal-view {
        display: block;
    }
    .sticky-view {
        display: none;
    }

    &.pinned {
        padding: 12px 8px;
        transition-duration: 500ms;
        transition-property: background-color, color, padding;
        transition-timing-function: ease;
        box-shadow: 0 0 2px 1px rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 19%);
        width: 100vw;

        .normal-view {
            display: none;
        }
        .sticky-view {
            display: block;
        }
    }
}
```


