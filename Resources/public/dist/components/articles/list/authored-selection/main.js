define(["jquery"],function(a){"use strict";var b={options:{data:{from:null,to:null},selectCallback:function(a){}},translations:{title:"sulu_article.authored",reset:"smart-content.choose-data-source.reset"}};return{defaults:b,initialize:function(){this.$overlayContainer=a("<div/>"),this.$componentContainer=a("<div/>"),this.$el.append(this.$overlayContainer),this.sandbox.start([{name:"overlay@husky",options:{el:this.$overlayContainer,instanceName:"authored-selection",openOnStart:!0,removeOnClose:!0,skin:"medium",slides:[{title:this.translations.title,data:this.$componentContainer,okCallback:this.okCallbackOverlay.bind(this),buttons:[{type:"cancel",align:"left"},{classes:"just-text",text:this.translations.reset,align:"center",callback:function(){this.options.selectCallback({from:null,to:null}),this.sandbox.stop()}.bind(this)},{type:"ok",align:"right"}]}]}}]),this.sandbox.once("husky.overlay.authored-selection.opened",function(){this.sandbox.start([{name:"articles/list/authored-selection/form@suluarticle",options:{el:this.$componentContainer,data:this.options.data,selectCallback:function(a){this.options.selectCallback(a),this.sandbox.stop()}.bind(this)}}])}.bind(this))},okCallbackOverlay:function(){this.sandbox.emit("sulu_article.authored-selection.form.get")}}});