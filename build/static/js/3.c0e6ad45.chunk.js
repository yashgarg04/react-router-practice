(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__9NuKY"}},50:function(e,t,c){e.exports={item:"CommentItem_item__3CXOS"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__NwyLG"}},52:function(e,t,c){e.exports={comments:"Comments_comments__1gL1u"}},53:function(e,t,c){e.exports={form:"NewCommentForm_form__2Jr3S",loading:"NewCommentForm_loading__22mbz",control:"NewCommentForm_control__1VTzQ",actions:"NewCommentForm_actions__1YcN3"}},55:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(49),m=c.n(a),r=c(0),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(21),d=c(19),u=c(20),l=c(14),b=c(50),x=c.n(b),O=function(e){return Object(r.jsx)("li",{className:x.a.item,children:Object(r.jsx)("p",{children:e.text})})},h=c(51),f=c.n(h),p=function(e){return Object(r.jsx)("ul",{className:f.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(O,{text:e.text},e.id)}))})},N=c(52),_=c.n(N),C=c(53),g=c.n(C),v=function(e){var t=Object(n.useRef)(),c=Object(d.a)(u.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]);var j=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(r.jsxs)("form",{className:g.a.form,onSubmit:j,children:["pending"===o&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(l.a,{})}),Object(r.jsxs)("div",{className:g.a.control,onSubmit:j,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:g.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.j)().quoteId,m=Object(d.a)(u.c),j=m.sendRequest,b=m.status,x=m.data;Object(n.useEffect)((function(){j(a)}),[j,a]);var O,h=Object(n.useCallback)((function(){j(a)}),[j,a]);return"pending"===b&&(O=Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(l.a,{})})),"completed"===b&&x&&x.length>0&&(O=Object(r.jsx)(p,{comments:x})),"completed"!==b||x&&0!==x.length||(O=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet!!"})),Object(r.jsxs)("section",{className:_.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!c&&Object(r.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(r.jsx)(v,{quoteId:a,onAddedComment:h}),O]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(d.a)(u.e,!0),a=c.sendRequest,m=c.status,i=c.data,b=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(l.a,{})}):b?Object(r.jsx)("p",{className:"centered focused",children:b}):i.text?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:i.text,author:i.author}),Object(r.jsx)(s.c,{path:e.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(r.jsx)(q,{})})]}):Object(r.jsx)("p",{children:"No quote found !"})}}}]);
//# sourceMappingURL=3.c0e6ad45.chunk.js.map