(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__20__E",BreadTop:"BurgerIngredient_BreadTop__2P4QR",Seeds1:"BurgerIngredient_Seeds1__3EWRO",Seeds2:"BurgerIngredient_Seeds2__2ulC-",Meat:"BurgerIngredient_Meat__pE8Bz",Cheese:"BurgerIngredient_Cheese__2tCCm",Salad:"BurgerIngredient_Salad__3q6rF",Bacon:"BurgerIngredient_Bacon__2EvJ_"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1ITZZ",Open:"SideDrawer_Open__3p9aB",Close:"SideDrawer_Close__3NInV",Logo:"SideDrawer_Logo__2KIrs"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2PLUh",Label:"BuildControl_Label__3w7Hu",Less:"BuildControl_Less__33FVG",More:"BuildControl_More__3vc8j"}},function(e,t,n){e.exports={Input:"Input_Input__3sM0c",Label:"Input_Label__38HOF",InputElement:"Input_InputElement__jE7tQ",Invalid:"Input_Invalid__1B7DZ"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2rXD3",Logo:"Toolbar_Logo__2gUVK",DesktopOnly:"Toolbar_DesktopOnly__1gHEk"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2i5vx",active:"NavigationItem_active__1-i8z"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3VvJr",OrderButton:"BuildControls_OrderButton__3_mzw",enable:"BuildControls_enable__1bTJo"}},function(e,t,n){e.exports={Button:"Button_Button__3sHou",Success:"Button_Success__25_0M",Danger:"Button_Danger__30H_5"}},,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__umHmH"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3O7Dc"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3ieX2"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1SdTZ"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3tsZ2"}},function(e,t,n){e.exports={Burger:"Burger_Burger__267pL"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3jN6h"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__12_CQ",load2:"Spinner_load2__2qgq9"}},,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__10hZf"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3VjJw"}},function(e,t,n){e.exports={Order:"Order_Order__1P9Iu"}},,function(e,t,n){e.exports=n(85)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),l=n(14),c=(n(57),n(1)),s=n(2),u=n(4),d=n(3),p=n(5),m=n(13),h=function(e){return e.children},g=n(36),f=n.n(g),v=n(19),b=n.n(v),E=n(37),_=n.n(E),y=n(38),C=n.n(y),k=function(e){return r.a.createElement("div",{className:C.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:_.a,alt:"MyBurger"}))},O=n(39),j=n.n(O),B=n(22),w=n.n(B),N=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement(l.b,{to:e.link,exact:e.exact,activeClassName:w.a.active},e.children))},S=function(){return r.a.createElement("ul",{className:j.a.NavigationItems},r.a.createElement(N,{link:"/BurgerBuilder/",exact:!0},"Burger Builder"),r.a.createElement(N,{link:"/BurgerBuilder/orders"},"Orders"))},I=n(42),x=n.n(I),D=function(e){return r.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:b.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(S,null)))},L=n(16),H=n.n(L),M=n(43),P=n.n(M),U=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},F=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),r.a.createElement(h,null,r.a.createElement(U,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:H.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",null,r.a.createElement(S,null))))},V=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(T,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(F,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:f.a.Content},this.props.children))}}]),t}(a.Component),z=n(11),W=n(51),q=n(44),A=n.n(q),R=n(12),Z=n.n(R),J=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Z.a.BreadTop},r.a.createElement("div",{className:Z.a.Seeds1}),r.a.createElement("div",{className:Z.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Z.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Z.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:Z.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:Z.a.Salad});break;default:e=null}return e}}]),t}(a.Component),Y=function(e){console.log(e);var t=Object.keys(e.ingredients).map(function(t){return Object(W.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(J,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:A.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},$=n(24),Q=n.n($),K=n(17),X=n.n(K),G=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),ee.map(function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ne=n(45),ae=n.n(ne),re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(U,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),ie=n(25),oe=n.n(ie),le=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[oe.a.Button,oe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ce=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(a.Component),se=n(46),ue=n.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},pe=function(e,t){return function(n){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(p.a)(a,n),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},me=n(47),he=n.n(me).a.create({baseURL:"https://burgerbuilder-4732b.firebaseio.com/"}),ge={salad:.5,cheese:.4,meat:1.3,bacon:.7},fe=pe(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=Object(z.a)({},n.state.ingredients);a[e]=t;var r=ge[e],i=n.state.totalPrice+r;n.setState({totalPrice:i,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=Object(z.a)({},n.state.ingredients);r[e]=a;var i=ge[e],o=n.state.totalPrice-i;n.setState({totalPrice:o,ingredients:r}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){var e=[];for(var t in n.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(n.state.ingredients[t]));e.push("price="+n.state.totalPrice);var a=e.join("&");n.props.history.push({pathname:"/BurgerBuilder/checkout",search:"?"+a})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),he.get("https://burgerbuilder-4732b.firebaseio.com//ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(z.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(de,null);return this.state.ingredients&&(a=r.a.createElement(h,null,r.a.createElement(Y,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})),n=r.a.createElement(ce,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(n=r.a.createElement(de,null)),r.a.createElement(h,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),he),ve=n(48),be=n.n(ve),Ee=function(e){return r.a.createElement("div",{className:be.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Y,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},_e=n(49),ye=n.n(_e),Ce=n(18),ke=n.n(Ce),Oe=function(e){var t=null,n=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(ke.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t)},je=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:6,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"",validation:{},valid:!0}},formIsValid:!1,loading:!1},n.orderHandler=function(e){e.preventDefault(),n.setState({loading:!0});var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ingredients,price:n.props.price,orderData:t};he.post("/orders.json",r).then(function(e){n.setState({loading:!1}),n.props.history.push("/BurgerBuilder")}).catch(function(e){n.setState({loading:!1})})},n.inputChangedHandler=function(e,t){var a=Object(z.a)({},n.state.orderForm),r=Object(z.a)({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var i=!0;for(var o in a)i=a[o].valid&&i;n.setState({orderForm:a,formIsValid:i})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return r.a.createElement(Oe,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),r.a.createElement(le,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement("div",{className:ye.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(a.Component),Be=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,price:0},n.checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/BurgerBuilder/checkout/contact-data")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},n=0,a=!0,r=!1,i=void 0;try{for(var o,l=e.entries()[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var c=o.value;"price"===c[0]?n=c[1]:t[c[0]]=+c[1]}}catch(s){r=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}this.setState({ingredients:t,totalPrice:n})}},{key:"render",value:function(){var e=this;return console.log(this.props.match.path),r.a.createElement("div",null,r.a.createElement(Ee,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(m.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(je,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(a.Component),we=n(50),Ne=n.n(we),Se=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map(function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return r.a.createElement("div",{className:Ne.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Ie=pe(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;he.get("/orders.json").then(function(t){var n=[];for(var a in t.data)n.push(Object(z.a)({},t.data[a],{id:a}));e.setState({loading:!1,orders:n})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map(function(e){return r.a.createElement(Se,{key:e.id,ingredients:e.ingredients,price:e.price})}))}}]),t}(a.Component),he),xe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/BurgerBuilder/checkout",component:Be}),r.a.createElement(m.a,{path:"/BurgerBuilder/orders",component:Ie}),r.a.createElement(m.a,{path:"/BurgerBuilder",exact:!0,component:fe}))))}}]),t}(a.Component),De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Le=r.a.createElement(l.a,null,r.a.createElement(xe,null));o.a.render(Le,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/BurgerBuilder",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/BurgerBuilder","/service-worker.js");De?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Te(e)})}}()}],[[52,1,2]]]);
//# sourceMappingURL=main.d844a503.chunk.js.map