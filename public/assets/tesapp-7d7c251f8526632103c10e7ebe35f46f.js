"use strict";define("tesapp/app",["exports","ember","tesapp/resolver","ember-load-initializers","tesapp/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("tesapp/components/app-version",["exports","ember-cli-app-version/components/app-version","tesapp/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("tesapp/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("tesapp/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("tesapp/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","tesapp/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("tesapp/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("tesapp/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("tesapp/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("tesapp/initializers/export-application-global",["exports","ember","tesapp/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("tesapp/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("tesapp/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("tesapp/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("tesapp/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("tesapp/models/quote",["exports","ember-data/model","ember-data/attr"],function(e,t,a){e["default"]=t["default"].extend({quote:(0,a["default"])("string"),author:(0,a["default"])("string")})}),define("tesapp/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("tesapp/router",["exports","ember","tesapp/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("quote")}),e["default"]=n}),define("tesapp/routes/quote",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("quote")}})}),define("tesapp/serializers/application",["exports","ember-data"],function(e,t){e["default"]=t["default"].RESTSerializer.extend({primaryKey:"_id"})}),define("tesapp/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("tesapp/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"tesapp/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var n=e.createTextNode("Welcome to Express Ember.js");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,a),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("tesapp/templates/quote",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:4,column:0},end:{line:8,column:0}},moduleName:"tesapp/templates/quote.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    Quote: ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("  \n    Author: ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(2);return n[0]=e.createMorphAt(t,1,1,a),n[1]=e.createMorphAt(t,4,4,a),n},statements:[["content","quote.quote",["loc",[null,[5,11],[5,28]]]],["content","quote.author",["loc",[null,[6,12],[6,30]]]]],locals:["quote"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"tesapp/templates/quote.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\nQuotes!");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("  \n\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,3,3,a),e.insertBoundary(t,null),n},statements:[["block","each",[["get","model",["loc",[null,[4,8],[4,13]]]]],[],0,null,["loc",[null,[4,0],[8,9]]]]],locals:[],templates:[e]}}())}),define("tesapp/config/environment",["ember"],function(e){var t="tesapp";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("tesapp/app")["default"].create({name:"tesapp",version:"0.0.0+4d9b1493"});