define("svgShape",["lodash","coreUtils","santa-components","componentsCore","skins"],function(e,t,i,o,s){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1113)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},1113:function(e,t,i){var o,s;o=[i(1114),i(306),i(308),i(1115),i(5),i(307),i(1116),i(1117)],void 0===(s=function(e,t,i,o,s,n){"use strict";return s.skinsMap.addBatch(n),{popupCloseIconButton:e,svgShape:t,vectorImage:i,backToTopButton:o}}.apply(t,o))||(e.exports=s)},1114:function(e,t,i){var o,s;o=[i(2),i(0),i(306),i(3)],void 0===(s=function(e,t,i,o){"use strict";var s=t.cloneDeep(i);return s.propTypes=t.defaults({closePopupPage:e.santaTypesDefinitions.popupPage.close},i.propTypes),s.displayName="PopupCloseIconButton",s.getSkinProperties=function(){var e=i.getSkinProperties.apply(this,arguments);return e[""].onClick=function(){this.props.closePopupPage()}.bind(this),e[""].style.cursor="pointer",e[""].role="button",e[""].onKeyDown=o.utils.accessibility.keyboardInteractions.activateBySpaceOrEnterButton,e[""].tabIndex="0",e[""].title="Back to site",e[""]["aria-label"]="Back to site",e},s}.apply(t,o))||(e.exports=s)},1115:function(e,t,i){var o,s;o=[i(0),i(2),i(3),i(1),i(308)],void 0===(s=function(e,t,i,o,s){"use strict";var n={CLICK_BACK_TO_TOP:{eventId:330,adapter:"ugc-viewer"}},r=function(e){return"editor"===e},a=function(t){return e.find(t,{action:"backToTopIn"})},p={propTypes:{behaviors:t.santaTypesDefinitions.Component.compBehaviors.isRequired,windowScrollEventAspect:t.santaTypesDefinitions.SiteAspects.windowScrollEvent.isRequired,isZoomed:t.santaTypesDefinitions.mobile.isZoomed.isRequired,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice.isRequired,windowResizeEvent:t.santaTypesDefinitions.SiteAspects.windowResizeEvent,componentViewMode:t.santaTypesDefinitions.RenderFlags.componentViewMode,reportBI:t.santaTypesDefinitions.reportBI.isRequired},getInitialState:function(){var e=r(this.props.componentViewMode);return e||(this.props.windowScrollEventAspect.registerToScroll(this),this.props.windowResizeEvent.registerToOrientationChange(this)),{isVisible:e}},componentDidMount:function(){var t=this;this.debouncedHideButton=e.debounce(function(){return t.setState({isVisible:!1})},3e3)},componentWillReceiveProps:function(e){var t=r(this.props.componentViewMode)&&!r(e.componentViewMode),i=!r(this.props.componentViewMode)&&r(e.componentViewMode);(t||i)&&(this.immediate=!0,this.debouncedHideButton.cancel()),t?(this.setState({isVisible:!1}),this.props.windowScrollEventAspect.registerToScroll(this)):i&&(this.setState({isVisible:!0}),this.props.windowScrollEventAspect.unregisterToScroll(this))},componentDidUpdate:function(e,t){t.isVisible&&!this.state.isVisible?this.hideButton():!t.isVisible&&this.state.isVisible&&this.showButton(),this.immediate=!1},componentWillUnmount:function(){this.props.windowScrollEventAspect.unregisterToScroll(this)},onOrientationChange:function(){this.forceUpdate()},showButton:function(){var e=a(this.props.behaviors);e&&!this.immediate?this.animate(this,e.name,e.duration,e.delay,e.params):this.animate(this,"FadeIn",0,0)},hideButton:function(){a(this.props.behaviors)&&!this.immediate?this.animate(this,"FadeOut",.5,0):this.animate(this,"FadeOut",0,0)},onScroll:function(e){!(this.props.isZoomed()&&this.props.isMobileDevice)&&e.y>512&&(this.state.isVisible||this.setState({isVisible:!0}),this.debouncedHideButton())},transformRefData:function(t){var i=this;this.state.isVisible||e.set(t[""],["style","opacity"],0),t[""].onClick=function(){return i.props.reportBI(n.CLICK_BACK_TO_TOP)}}},c=e.defaults({displayName:"backToTopButton",mixins:s.mixins.concat([p,t.mixins.animationsMixin])},s);return i.compRegistrar.register("wysiwyg.viewer.components.BackToTopButton",c),o.loggingUtils.logger.register("backToTopButton","event",n),c}.apply(t,o))||(e.exports=s)},1116:function(e,t,i){var o,s;o=[i(3),i(0),i(1)],void 0===(s=function(e,t,i){"use strict";function o(e,o,s){return t(s).without("skins.viewer.svgshape.SvgShapeDefaultSkin").map(t.partial(i.svg.createSvgFetchRequest,e,o,t)).compact().value()}function s(e,t){return o(e.serviceTopology.mediaRootUrl,e,t.skins)}return e.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.svgshape.SvgShape",s),e.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.PopupCloseIconButton",s),{requirementChecker:o,DEFAULT_SHAPE:i.svgUtils.EMPTY_SHAPE,SVG_ROOT:i.svgUtils.SVG_ROOT}}.apply(t,o))||(e.exports=s)},1117:function(e,t,i){var o,s;o=[i(0),i(3),i(1)],void 0===(s=function(e,t,i){"use strict";function o(t,o){return e.compact([i.svg.createSvgFetchRequest(t.serviceTopology.mediaRootUrl,t,e.get(o,["data","svgId"],e.get(o,["style","style","properties","svgId"])))])}return t.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.VectorImage",o),t.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.BackToTopButton",o),{checkRequirements:o}}.apply(t,o))||(e.exports=s)},2:function(e,t){e.exports=i},3:function(e,t){e.exports=o},306:function(e,t,i){var o,s;o=[i(0),i(2),i(1),i(307)],void 0===(s=function(e,t,i,o){"use strict";var s=t.utils.skinsRenderer,n=function(t,i){var n,r,a,p=i.getStyleData,c=i.themeData,l=i.siteZoomRatio,u=i.invertedZoomRatio,d=i.orientationZoomFix,f=i.mobileZoom,h=i.scriptsLocationMap,m=p(t),g={siteZoomRatio:l,invertedZoomRatio:u,orientationZoomFix:d,mobileZoom:f},v={scriptsLocationMap:h},y=e.get(m,"style.properties",{}),k=o["skins.viewer.svgshape.SvgShapeDefaultSkin"],T={css:k.css,params:k.params,paramsDefaults:k.paramsDefaults};return n={},r=t,a=s.createSkinCss(T,y,c,t,g,v,function(e){return o[e]}),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n},r={getStyleData:t.santaTypesDefinitions.Component.getStyleData,themeData:t.santaTypesDefinitions.Theme.THEME_DATA,siteZoomRatio:t.santaTypesDefinitions.Mobile.siteZoomRatio,invertedZoomRatio:t.santaTypesDefinitions.Mobile.invertedZoomRatio,orientationZoomFix:t.santaTypesDefinitions.Mobile.orientationZoomFix,mobileZoom:t.santaTypesDefinitions.Mobile.mobileZoom,scriptsLocationMap:t.santaTypesDefinitions.ServiceTopology.scriptsLocationMap};return n.cssTypes=r,{displayName:"SvgShape",mixins:[t.mixins.baseCompMixin],statics:{getCompCss:n},propTypes:{id:t.santaTypesDefinitions.Component.id,structure:t.santaTypesDefinitions.Component.structure,skin:t.santaTypesDefinitions.Component.skin,compData:t.santaTypesDefinitions.Component.compData.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo,svgString:t.santaTypesDefinitions.VectorImage.legacySvgString.isRequired,svgInfo:t.santaTypesDefinitions.VectorImage.legacySvgInfo.isRequired,styleId:t.santaTypesDefinitions.Component.styleId,linkRenderInfo:t.santaTypesDefinitions.Link.renderInfo,setCustomClickOccurred:t.santaTypesDefinitions.setCustomClickOccurred,strokeWidth:t.santaTypesDefinitions.VectorImage.strokeWidth,isQAMode:t.santaTypesDefinitions.isQAMode,renderFixedPosition:t.santaTypesDefinitions.Component.renderFixedPosition},getSkinProperties:function(){var t=this.props.skin,o={"":{}},s=function(e,t){return"skins.viewer.svgshape.SvgShapeDefaultSkin"===t?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.654 376.654"><g><polygon points="298.185,264.061 149.092,352.082 0,264.061 0,88.021 149.092,0 298.185,88.021 "/></g></svg>':e||null}(this.props.svgString,t);if(s){var n=this.props.compData;if(n&&n.link){var r=i.linkRenderer.renderLink(n.link,this.props.linkRenderInfo,this.props.rootNavigationInfo);r.tabIndex="-1",s=function(t,i){var o="";return e.forOwn(i,function(e,t){o+=" "+t+'="'+e+'"'}),"<a"+o+">"+t+"</a>"}(s,r)}o[""]={"data-viewbox":this.props.svgInfo.viewBox,"data-strokewidth":this.props.strokeWidth,"data-svg-id":this.props.skin,"data-display-mode":this.props.compProp.maintainAspectRatio?"legacyFit":"stretch",key:!this.props.compProp.maintainAspectRatio&&this.props.strokeWidth?"stretchWithStroke":"noPoly",dangerouslySetInnerHTML:{__html:s||""},tabIndex:"0",role:"image",onKeyDown:function(t){if("Enter"===t.key||" "===t.key){var i=t.target.querySelector("a");e.invoke(i,"click")}}}}return this.updateRootRefDataStyles(o[""]),o},render:function(){var e=this.getSkinProperties();return s.renderSkinHTML(null,e,this.props.styleId,this.props.id,this.props.structure,this.props,this.state,this.props.isQAMode)}}}.apply(t,o))||(e.exports=s)},307:function(e,t,i){var o;void 0===(o=function(){"use strict";var e={"skins.viewer.svgshape.SvgShapeDefaultSkin":{react:[],params:{fillcolor:"COLOR","alpha-fillcolor":"ALPHA",stroke:"BORDER_COLOR_ALPHA",strokewidth:"BORDER_SIZE"},paramsDefaults:{fillcolor:"color_11","alpha-fillcolor":"1",stroke:"color_15",strokewidth:"1px"},css:{"% svg":"width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;fill:[fillcolor];fill-opacity:[alpha-fillcolor];stroke:[stroke];stroke-width:[strokewidth];","% svg *":"vector-effect:non-scaling-stroke;","%_with-shadow svg":"overflow:visible !important;","% a":"display:block;height:100%;"}},"skins.viewer.VectorImageShapeBasicSkin":{react:[["div","svg",[],{}],["a","link",[],{}]],params:{fillcolor:"BG_COLOR_ALPHA"},paramsDefaults:{fillcolor:"color_18"},css:{"% svg":"width:100%;height:100%;fill:[fillcolor];","% svg *":"vector-effect:non-scaling-stroke;","%_with-shadow svg":"overflow:visible !important;"}},"skins.viewer.VectorImageSkin":{react:[["a","link",[],{},["div","svg",[],{}]]],css:{"%":"-webkit-tap-highlight-color:rgba(0, 0, 0, 0);","%link,%svg":"position:absolute;top:0;right:0;bottom:0;left:0;","% svg":"position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;","%_non-scaling-stroke *":"vector-effect:non-scaling-stroke;","%_with-shadow svg":"overflow:visible !important;"}}};return e}.apply(t,[]))||(e.exports=o)},308:function(e,t,i){var o,s;function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}o=[i(2),i(0),i(3)],void 0===(s=function(e,t,i){"use strict";return{displayName:"VectorImage",mixins:[i.mixins.skinBasedComp],propTypes:{id:e.santaTypesDefinitions.Component.id,styleId:e.santaTypesDefinitions.Component.styleId,style:e.santaTypesDefinitions.Component.style,svgId:e.santaTypesDefinitions.VectorImage.svgId,link:e.santaTypesDefinitions.VectorImage.link,compProp:e.santaTypesDefinitions.Component.compProp,compDesign:e.santaTypesDefinitions.Component.compDesign,theme:e.santaTypesDefinitions.Component.theme,flipTransformStyle:e.santaTypesDefinitions.VectorImage.flipTransformStyle,svgString:e.santaTypesDefinitions.VectorImage.svgString,svgInfo:e.santaTypesDefinitions.VectorImage.svgInfo,svgType:e.santaTypesDefinitions.VectorImage.svgType,overrideColorsAsCss:e.santaTypesDefinitions.VectorImage.overrideColorsAsCss,shapeStyle:e.santaTypesDefinitions.VectorImage.shapeStyle,preserveViewBox:e.santaTypesDefinitions.VectorImage.preserveViewBox,shouldScaleStroke:e.santaTypesDefinitions.VectorImage.shouldScaleStroke},getSvgContent:function(e){var i;return{style:t.assign({},this.props.flipTransformStyle,this.props.shapeStyle),className:this.classSet((i={},n(i,this.props.id,!0),n(i,"non-scaling-stroke",!this.props.shouldScaleStroke),n(i,"with-shadow",!!t.get(this.props.compDesign,"shadow")),i)),key:this.props.compProp.displayMode+(e?"_stroke":"_nostroke"),dangerouslySetInnerHTML:{__html:this.props.svgString}}},getSkinProperties:function(){var i,o,s,n,r,a=void 0,p=t.get(this.props.shapeStyle,"strokeWidth"),c=t.get(this.props.svgInfo,"viewBox",""),l={"":{"data-svg-id":this.props.svgId,"data-svg-type":this.props.svgType,"data-display-mode":this.props.compProp.displayMode,"data-strokewidth":p,"data-viewbox":c,"data-preserve-viewbox":this.props.preserveViewBox?"preserve":"ignore",style:this.props.style},link:(i=this.props.link,o=void 0,t.isEmpty(i)?o={parentConst:e.utils.createReactElement.bind(null,"div")}:(o=i).style={cursor:"pointer"},o),svg:this.getSvgContent(p)};if(!t.isEmpty(this.props.overrideColorsAsCss)){var u=(s=this.props.overrideColorsAsCss,n=this.props.styleId,r=this.props.id,t.reduce(s,function(e,t){return e+" ."+n+"_"+r+" "+t},""));a=e.utils.createReactElement("style",{dangerouslySetInnerHTML:{__html:u}}),l[""].addChildrenBefore=[a]}return l}}}.apply(t,o))||(e.exports=s)},5:function(e,t){e.exports=s}})});
//# sourceMappingURL=svgShape.min.js.map