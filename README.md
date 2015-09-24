# angular-modularizer
Simple snippet that keep track on all loaded angular modules to be included in the root module.

Installation
---
Install with [Bower](http://bower.io):
```shell
bower install angular-modularizer
```

Usage
---
1. Include `<script src='bower_components/angular-modularizer/dist/angular-modularizer.min.js'>` just before any angular module scripts.

2. After the end of all angular module scripts, include this following snippet:
```javascript
<script type="text/javascript">
	angular.modularize("root");	// The name of root angular module "root" can be whatever.
</script>
```

License
---
MIT License