(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__39oZN",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__SE_7A"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3fE01",Modal:"Modal_Modal__194eh"}},13:function(e,t,a){e.exports={Box:"Button_Box__XnVMe",Button:"Button_Button__3cbzH"}},24:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3JVnM"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__63jdI"}},27:function(e,t,a){e.exports={Box:"Spinner_Box__lNLM-"}},29:function(e,t,a){e.exports={App:"App_App__1hGei"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=(a(34),a(23)),l=a(14),s=a(4),u=a(5),m=a(7),h=a(6),g=a(8),d=a.n(g),p=a(0),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.hendleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.hendleSubmit,className:d.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(p.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange,className:d.a.SearchFormInput})]})}}]),a}(n.Component),j=a(24),f=a.n(j),y=function(e){var t=e.onSubmit;return Object(p.jsx)("header",{className:f.a.Searchbar,children:Object(p.jsx)(b,{onSubmit:t})})},I=a(11),O=a.n(I),_=a.p+"static/media/defaultImage.2e01288c.jpg",v=function(e){var t=e.images,a=e.onClickImage;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=void 0===n?{defaultImage:_}:n,o=e.largeImageURL;return Object(p.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:r,alt:"",className:O.a.ImageGalleryItemImage,onClick:function(){return a({largeImageURL:o})}})},t)}))})},x=a(25),S=a.n(x),w=function(e){var t=e.images,a=e.onClickImage;return Object(p.jsx)("ul",{className:S.a.ImageGallery,children:Object(p.jsx)(v,{images:t,onClickImage:a})})},k=a(12),C=a.n(k),M=document.querySelector("#modal-root"),B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hendleKeyDowm=function(t){"Escape"===t.code&&e.props.onClose()},e.hendleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDowm)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDowm)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:C.a.Modal,children:Object(p.jsx)("img",{src:this.props.largeImage,alt:""})})}),M)}}]),a}(n.Component),F=a(2),L=a.n(F),N=a(13),G=a.n(N),P=function(e){var t=e.fetchImages,a=e.children;return Object(p.jsx)("div",{className:G.a.Box,children:Object(p.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:a})})};P.propTypex={fetchImages:L.a.func,children:L.a.string};var A=P,E=a(26),Q=a.n(E),q=(a(56),a(27)),U=a.n(q),D=function(){return Object(p.jsx)("div",{className:U.a.Box,children:Object(p.jsx)(Q.a,{type:"Hearts",color:"#8a2be2",height:"100",width:"100"})})},R=a(28),T=a.n(R),z=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.pageSize,c=void 0===o?12:o;return T.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("20799559-c9685ab0b6001e1a4eb2b3732","&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},H=a(29),J=a.n(H),K=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImage:""},e.onChengeQuery=function(t){e.setState({images:[],currentPage:1,searchQuery:t,error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),z(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){e.setState((function(){return{largeImage:t}})),e.toggleModal()},e.closeModal=function(){e.setState({largeImage:""}),e.toggleModal()},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,o=e.largeImage,c=t.length>0&&!a;return Object(p.jsxs)("div",Object(i.a)({children:J.a.App},"children",[n&&Object(p.jsx)("h1",{children:"Error!!!!!"}),Object(p.jsx)(y,{onSubmit:this.onChengeQuery}),Object(p.jsx)(w,{images:t,onClickImage:this.openModal}),c&&Object(p.jsx)(A,{fetchImages:this.fetchImages,children:"load more"}),a&&Object(p.jsx)(D,{}),r&&Object(p.jsx)(B,{onClose:this.toggleModal,largeImage:o.largeImageURL})]))}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__2E5Aw",SearchFormButton:"SearchForm_SearchFormButton__1bLdp",SearchFormButtonLabel:"SearchForm_SearchFormButtonLabel__1Lyuh",SearchFormInput:"SearchForm_SearchFormInput__3U4RF"}}},[[75,1,2]]]);
//# sourceMappingURL=main.0efa7c20.chunk.js.map