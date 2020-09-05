(this["webpackJsonpnca_sandbox-climate_chart-v2.app"]=this["webpackJsonpnca_sandbox-climate_chart-v2.app"]||[]).push([[0],{13:function(e,t,a){},29:function(e,t,a){e.exports=a(61)},34:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(10),i=a.n(n),r=(a(34),a(13),a(4)),s=a(5),c=a(11),d=a(7),u=a(6),_=a(72);function h(e){return e}var g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=[this.props.min_value,this.props.max_value];return l.a.createElement(_.a,{min:1900,max:2018,value:t,onChange:function(t,a){e.props.sliderChanged(a),console.log("handleChange="+a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:h})}}]),a}(l.a.Component),p=a(24),v=a.n(p),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=window.innerWidth-48,a=window.innerHeight-210;return this.props.plotly_layout.width=t,this.props.plotly_layout.height=a,console.log("Rendering PlotRegion this.state.plotly_data="),console.log(this.props.plotly_data),l.a.createElement(v.a,{data:this.props.plotly_data,layout:this.props.plotly_layout,frames:this.props.plotly_frames,config:this.props.plotly_config,revision:this.props.plotly_revision,onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)}})}}]),a}(l.a.Component),b=function(){function e(t,a){Object(r.a)(this,e),this.xmin=1900,this.xmax=2018,this.xvals=t,this.yvals=a}return Object(s.a)(e,[{key:"setXRange",value:function(e,t){this.xmin=e,this.xmax=t}},{key:"getXvalues",value:function(){for(var e=[],t=this.xmin;t<=this.xmax;t++)e.push(t.toString());return console.log("GeneratePlotData.getXvalues()"),console.log(e),e}},{key:"getYvalues",value:function(){for(var e=[],t=this.xmin;t<parseInt(this.xvals[0]);)t++,e.push("0");for(var a=0;t<=parseInt(this.xvals[this.xvals.length-1]);)t++,e.push(this.yvals[a++]);for(;t<=this.xmax;)t++,e.push("0");return console.log("GeneratePlotData.getYvalues()"),console.log(e),e}},{key:"getData",value:function(){return[this.getTrace1(),this.getTrace2()]}},{key:"getTrace1",value:function(){return{uid:"1883be",meta:{columnNames:{x:"Year",y:"NC"}},mode:"lines",name:"Precip",type:"histogram",xsrc:"dmichels:4:3b282f",x:this.getXvalues(),ysrc:"dmichels:4:060bbe",y:this.getYvalues(),xbins:{end:this.xmax,size:5,start:this.xmin},marker:{line:{color:"rgb(88, 179, 171)"},color:"rgb(88, 179, 171)"},nbinsx:0,histfunc:"avg",cumulative:{enabled:!1},transforms:[{meta:{columnNames:{target:"Year"}},type:"filter",value:[this.xmin.toString(),this.xmax.toString()],operation:"[]",targetsrc:"dmichels:4:3b282f",target:this.getXvalues()}],legendgroup:1,orientation:"v",hovertemplate:""}}},{key:"getTrace2",value:function(){return{uid:"5b1527",meta:{columnNames:{x:"Year",y:"NC"}},mode:"markers+lines",name:"Annual Precip",type:"scatter",xsrc:"dmichels:4:3b282f",x:this.getXvalues(),ysrc:"dmichels:4:060bbe",y:this.getYvalues(),marker:{color:"rgb(0, 0, 0)"},transforms:[{meta:{columnNames:{target:"Year"}},type:"filter",value:[this.xmin.toString(),this.xmax.toString()],operation:"[]",targetsrc:"dmichels:4:3b282f",target:this.getXvalues()}]}}},{key:"getLayout",value:function(){return{xaxis:{type:"linear",dtick:5,range:[this.xmin,this.xmax],tick0:0,ticks:"",showline:!1,tickfont:{family:"Roboto"},tickmode:"linear",autorange:!1,tickangle:90,automargin:!0,showspikes:!1,tickformat:"",tickprefix:"",rangeslider:{range:[1967.1226295828067,2020.8773704171933],yaxis:[0,2.053037694013304],visible:!1,autorange:!0},showexponent:"all",exponentformat:"none",spikethickness:4},yaxis:{type:"linear",range:[0,2.053037694013304],ticks:"",autorange:!0,showspikes:!1},bargap:.28,autosize:!0,template:{data:{bar:[{type:"bar",marker:{colorbar:{ticks:"",outlinewidth:0}}}],table:[{type:"table",cells:{fill:{color:"#EBF0F8"},line:{color:"white"}},header:{fill:{color:"#C8D4E3"},line:{color:"white"}}}],carpet:[{type:"carpet",aaxis:{gridcolor:"#C8D4E3",linecolor:"#C8D4E3",endlinecolor:"#2a3f5f",minorgridcolor:"#C8D4E3",startlinecolor:"#2a3f5f"},baxis:{gridcolor:"#C8D4E3",linecolor:"#C8D4E3",endlinecolor:"#2a3f5f",minorgridcolor:"#C8D4E3",startlinecolor:"#2a3f5f"}}],mesh3d:[{type:"mesh3d",colorbar:{ticks:"",outlinewidth:0}}],contour:[{type:"contour",colorbar:{ticks:"",outlinewidth:0},autocolorscale:!0}],heatmap:[{type:"heatmap",colorbar:{ticks:"",outlinewidth:0},autocolorscale:!0}],scatter:[{type:"scatter",marker:{colorbar:{ticks:"",outlinewidth:0}}}],surface:[{type:"surface",colorbar:{ticks:"",outlinewidth:0}}],heatmapgl:[{type:"heatmapgl",colorbar:{ticks:"",outlinewidth:0}}],histogram:[{type:"histogram",marker:{colorbar:{ticks:"",outlinewidth:0}}}],parcoords:[{line:{colorbar:{ticks:"",outlinewidth:0}},type:"parcoords"}],scatter3d:[{type:"scatter3d",marker:{colorbar:{ticks:"",outlinewidth:0}}}],scattergl:[{type:"scattergl",marker:{colorbar:{ticks:"",outlinewidth:0}}}],choropleth:[{type:"choropleth",colorbar:{ticks:"",outlinewidth:0}}],scattergeo:[{type:"scattergeo",marker:{colorbar:{ticks:"",outlinewidth:0}}}],histogram2d:[{type:"histogram2d",colorbar:{ticks:"",outlinewidth:0},autocolorscale:!0}],scatterpolar:[{type:"scatterpolar",marker:{colorbar:{ticks:"",outlinewidth:0}}}],contourcarpet:[{type:"contourcarpet",colorbar:{ticks:"",outlinewidth:0}}],scattercarpet:[{type:"scattercarpet",marker:{colorbar:{ticks:"",outlinewidth:0}}}],scattermapbox:[{type:"scattermapbox",marker:{colorbar:{ticks:"",outlinewidth:0}}}],scatterpolargl:[{type:"scatterpolargl",marker:{colorbar:{ticks:"",outlinewidth:0}}}],scatterternary:[{type:"scatterternary",marker:{colorbar:{ticks:"",outlinewidth:0}}}],histogram2dcontour:[{type:"histogram2dcontour",colorbar:{ticks:"",outlinewidth:0},autocolorscale:!0}]},layout:{geo:{bgcolor:"white",showland:!0,lakecolor:"white",landcolor:"white",showlakes:!0,subunitcolor:"#C8D4E3"},font:{color:"#2a3f5f"},polar:{bgcolor:"white",radialaxis:{ticks:"",gridcolor:"#EBF0F8",linecolor:"#EBF0F8"},angularaxis:{ticks:"",gridcolor:"#EBF0F8",linecolor:"#EBF0F8"}},scene:{xaxis:{ticks:"",gridcolor:"#DFE8F3",gridwidth:2,linecolor:"#EBF0F8",zerolinecolor:"#EBF0F8",showbackground:!0,backgroundcolor:"white"},yaxis:{ticks:"",gridcolor:"#DFE8F3",gridwidth:2,linecolor:"#EBF0F8",zerolinecolor:"#EBF0F8",showbackground:!0,backgroundcolor:"white"},zaxis:{ticks:"",gridcolor:"#DFE8F3",gridwidth:2,linecolor:"#EBF0F8",zerolinecolor:"#EBF0F8",showbackground:!0,backgroundcolor:"white"}},title:{x:.05},xaxis:{ticks:"",gridcolor:"#EBF0F8",linecolor:"#EBF0F8",automargin:!0,zerolinecolor:"#EBF0F8",zerolinewidth:2},yaxis:{ticks:"",gridcolor:"#EBF0F8",linecolor:"#EBF0F8",automargin:!0,zerolinecolor:"#EBF0F8",zerolinewidth:2},ternary:{aaxis:{ticks:"",gridcolor:"#DFE8F3",linecolor:"#A2B1C6"},baxis:{ticks:"",gridcolor:"#DFE8F3",linecolor:"#A2B1C6"},caxis:{ticks:"",gridcolor:"#DFE8F3",linecolor:"#A2B1C6"},bgcolor:"white"},colorway:["#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3","#e763fa","#fecb52","#ffa15a","#ff6692","#b6e880"],hovermode:"closest",colorscale:{diverging:[["0","#8e0152"],["0.1","#c51b7d"],["0.2","#de77ae"],["0.3","#f1b6da"],["0.4","#fde0ef"],["0.5","#f7f7f7"],["0.6","#e6f5d0"],["0.7","#b8e186"],["0.8","#7fbc41"],["0.9","#4d9221"],["1","#276419"]],sequential:[["0","#0508b8"],["0.0893854748603352","#1910d8"],["0.1787709497206704","#3c19f0"],["0.2681564245810056","#6b1cfb"],["0.3575418994413408","#981cfd"],["0.44692737430167595","#bf1cfd"],["0.5363128491620112","#dd2bfd"],["0.6256983240223464","#f246fe"],["0.7150837988826816","#fc67fd"],["0.8044692737430168","#fe88fc"],["0.8938547486033519","#fea5fd"],["0.9832402234636871","#febefe"],["1","#fec3fe"]],sequentialminus:[["0","#0508b8"],["0.0893854748603352","#1910d8"],["0.1787709497206704","#3c19f0"],["0.2681564245810056","#6b1cfb"],["0.3575418994413408","#981cfd"],["0.44692737430167595","#bf1cfd"],["0.5363128491620112","#dd2bfd"],["0.6256983240223464","#f246fe"],["0.7150837988826816","#fc67fd"],["0.8044692737430168","#fe88fc"],["0.8938547486033519","#fea5fd"],["0.9832402234636871","#febefe"],["1","#fec3fe"]]},plot_bgcolor:"white",paper_bgcolor:"white",shapedefaults:{line:{width:0},opacity:.4,fillcolor:"#506784"},annotationdefaults:{arrowhead:0,arrowcolor:"#506784",arrowwidth:1}},themeRef:"PLOTLY_WHITE"},bargroupgap:0,plot_bgcolor:"rgb(251, 252, 254)",paper_bgcolor:"rgb(251, 252, 254)"}}}]),e}(),y=a(25),f=a(8),x=a(26);f.b.add(x.a);var k=["Northeast","Southeast","Midwest","Northern Great Plains","Northwest","Southwest","Southern Great Plains","Alaska","Hawaii","Puerto Rico"],E=["AL","AZ","AR","CA","CO","CT","DE","FL","GA","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","AK","HI","PR","VI"],w=a(44),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(r.a)(this,a),o=t.call(this,e),console.log("SandboxControls object instantated."),o.name="SandBoxControls",o.nca_data_index={},o.selected_loc="",o.selected_var="",o.state={plotly_data:[],plotly_layout:{},plotly_frames:[],plotly_config:{},plotly_revision:0,var_select_options:[],var_select_disabled:!0,loc_sub_select_options:[],loc_sub_select_disabled:!0,slider_min_value:1900,slider_max_value:2018,cached_data:{xvals:[],yvals:{},region:"",varible:"",region_sub:"",_loaded:!1}},o.sliderChanged=o.sliderChanged.bind(Object(c.a)(o)),o}return Object(s.a)(a,[{key:"sliderChanged",value:function(e){if(console.log("SanboxControls.sliderChanged(values="+e+")"),e.length&&2===e.length){console.log("slider_min_value="+e[0]+" slider_max_value="+e[1]),this.setState({slider_min_value:e[0],slider_max_value:e[1]});var t=document.getElementById("loc_region_select"),a=document.getElementById("var_select"),o=document.getElementById("loc_sub_select");"national"===t.value?a&&""!==a.value&&this.updatePlotData():"region"!==t.value&&"state"!==t.value||a&&""!==a.value&&o&&""!==o.value&&this.updatePlotData()}}},{key:"render",value:function(){var e=this;console.log("Rendering SandboxControls this.state="),console.log(this.state);var t=document.getElementById("loc_region_select"),a=" -- ";return t&&""!==t.value&&"national"!==t.value&&(a=t.value.charAt(0).toUpperCase()+t.value.slice(1)),l.a.createElement("div",{className:"sandbox_controls"},l.a.createElement("div",{className:"sandbox_header"},l.a.createElement(y.a,{icon:["fas","chart-line"],color:"#666666",size:"2x"}),l.a.createElement("span",null,"NCA Sandbox - Climate Chart")),l.a.createElement("div",{className:"sandbox_selectors"},l.a.createElement("select",{id:"loc_region_select",onChange:function(){return e.locationSelectChanged()}},l.a.createElement("option",{className:"no_select",value:""},"Location/Region"),l.a.createElement("option",{value:"national"},"National"),l.a.createElement("option",{value:"region"},"Regional"),l.a.createElement("option",{value:"state"},"State")),l.a.createElement("select",{id:"var_select",disabled:this.state.var_select_disabled,onChange:function(){return e.variableSelectChanged()}},l.a.createElement("option",{className:"no_select",value:""},"Climate variable"),";",this.state.var_select_options),l.a.createElement("select",{style:{width:"170px"},id:"loc_sub_select",disabled:this.state.loc_sub_select_disabled,onChange:function(){return e.locationSubSelectChanged()}},l.a.createElement("option",{className:"no_select",value:""},a),this.state.loc_sub_select_options)),l.a.createElement("div",{className:"sandbox_slider_outerbox"},l.a.createElement("div",{className:"sandbox_slider_center"},l.a.createElement("div",{className:"sandbox_slider_left_top"}," Start Year/Period "),l.a.createElement("div",{className:"sandbox_slider_left_bottom",id:"start_year"},this.state.slider_min_value),l.a.createElement("div",{className:"sandbox_double_slider_container"},l.a.createElement(g,{sliderChanged:this.sliderChanged,min_value:this.state.slider_min_value,max_value:this.state.slider_max_value})),l.a.createElement("div",{className:"sandbox_slider_right_top"}," End Year/Period "),l.a.createElement("div",{className:"sandbox_slider_right_bottom",id:"end_year"},this.state.slider_max_value))),l.a.createElement("div",{className:"plot_region"},l.a.createElement(m,{plotly_data:this.state.plotly_data,plotly_layout:this.state.plotly_layout,plotly_frames:this.state.plotly_frames,plotly_config:this.state.plotly_config,plotly_revision:this.state.plotly_revision})))}},{key:"loadNCAdata",value:function(){var e=this;w.get("./TSU_Sandbox_Datafiles/index.json").then((function(t){console.log("SanboxControls.loadNCADdata() response="+t),console.log(t),e.nca_data_index=t.data,e.populateVariableSelect()})).catch((function(e){console.log("SanboxControls.loadNCADdata() error="+e)}))}},{key:"locationSelectChanged",value:function(){console.log("SanboxControls.locationSelectChanged()");var e=document.getElementById("loc_region_select"),t=document.getElementById("var_select");if(console.log("region_select.value = "+e.value),Object.keys(this.nca_data_index).length>0?this.populateVariableSelect():this.loadNCAdata(),console.log("region_select.value="+e.value),""===e.value)this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1,var_select_options:[],var_select_disabled:!0,loc_sub_select_options:[],loc_sub_select_disabled:!0}}));else if("national"===e.value)t&&""!==t.value?(this.updatePlotData(),this.setState((function(e){return{loc_sub_select_options:[],loc_sub_select_disabled:!0}}))):this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1,loc_sub_select_options:[],loc_sub_select_disabled:!0}}));else if("region"===e.value){var a=k.map((function(e,t){return l.a.createElement("option",{key:"region_select_options"+t,value:e},e)}));console.log("region_options"),console.log(a),this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1,loc_sub_select_options:a,loc_sub_select_disabled:!1}}))}else if("state"===e.value){var o=E.map((function(e,t){return l.a.createElement("option",{key:"region_select_options"+t,value:e},e)}));console.log("state_options"),console.log(o),this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1,loc_sub_select_options:o,loc_sub_select_disabled:!1}}))}}},{key:"populateVariableSelect",value:function(){console.log("SanboxControls.populateVariableSelect()");var e=document.getElementById("loc_region_select").value;"region"===e&&(e="regions"),this.selected_loc=e,console.log("loc_value="+e),console.log("nca_data_index="),console.log(this.nca_data_index);var t=this.nca_data_index[e];console.log("data_subset="),console.log(t),t?this.setState({var_select_options:t.map((function(e,t){return l.a.createElement("option",{key:"var_select_option"+t,value:e.name},e.type)})),var_select_disabled:!1}):this.setState({var_select_options:[],var_select_disabled:!0})}},{key:"parseNCAFile",value:function(e,t,a){var o=[],l=[],n=e.split(/\r?\n/),i=n[0].split(",");console.log("headers="+i);for(var r=0;r<i.length;r++)i[r]=i[r].trim();var s=void 0;if("national"===t)s=1;else if("region"===t||"state"===t)for(var c=1;c<i.length;c+=2)if(i[c]===a){s=c;break}console.log("region="+a),console.log("col_index="+s);for(var d=1;d<n.length;d++){console.log("lines["+d+"]="+n[d]);var u=n[d].split(",");if(console.log("elements.length="+u.length),u.length<=1)break;var _=parseInt(u[0]),h=parseFloat(u[s]);console.log("xval="+_+" yval="+h),o.push(_),l.push(h)}return[o,l]}},{key:"updatePlotData",value:function(){var e=this,t=document.getElementById("loc_region_select"),a=document.getElementById("var_select"),o=document.getElementById("loc_sub_select");if(""!==t.value)if(console.log("SanboxControls.updatePlotData()"),console.log("region_select="+t.value),console.log("var_select="+a.value),console.log("region_sub_select="+o.value),this.state.cached_data._loaded&&t.value===this.state.cached_data.region&&a.value===this.state.cached_data.varible&&o.value===this.state.cached_data.region_sub){console.log("Using Cached data");var l=new b(this.state.cached_data.xvals,this.state.cached_data.yvals);l.setXRange(this.state.slider_min_value,this.state.slider_max_value),this.setState((function(e){return{plotly_revision:e.plotly_revision+1,plotly_data:l.getData(),plotly_layout:l.getLayout()}}))}else{var n="./TSU_Sandbox_Datafiles/"+a.value;console.log("fetching file from server. filename="+n),w.get(n).then((function(l){console.log("SanboxControls.updatePlotData() response="),console.log(l);var n=e.parseNCAFile(l.data,t.value,o.value),i=n[0],r=n[1],s=new b(i,r);s.setXRange(e.state.slider_min_value,e.state.slider_max_value),e.setState((function(e){return{cached_data:{_loaded:!0,xvals:i,yvals:r,region:t.value,varible:a.value,region_sub:o.value},plotly_revision:e.plotly_revision+1,plotly_data:s.getData(),plotly_layout:s.getLayout()}}))})).catch((function(e){console.log("SanboxControls.updatePlotData() error="+e)}))}}},{key:"variableSelectChanged",value:function(){console.log("SanboxControls.variableSelectChanged()");var e=document.getElementById("loc_region_select"),t=document.getElementById("var_select"),a=document.getElementById("loc_sub_select");t&&""!==t.value?"national"===e.value?this.updatePlotData():("region"===e.value||"state"===e.value)&&(a&&""!==a.value?this.updatePlotData():this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1}}))):this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1}}))}},{key:"locationSubSelectChanged",value:function(){console.log("SanboxControls.locationSubSelectChanged()");var e=document.getElementById("loc_region_select"),t=document.getElementById("var_select"),a=document.getElementById("loc_sub_select");a&&""!==a.value?("region"===e.value||"state"===e.value)&&(t&&""!==t.value?this.updatePlotData():this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1}}))):this.setState((function(e){return{plotly_data:[],plotly_layout:{},plotly_revision:e.plotly_revision+1}}))}}]),a}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.56a67a3f.chunk.js.map