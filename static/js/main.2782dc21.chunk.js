(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),s=a(9),i=a.n(s),c=a(4),l=a.n(c),d=a(5),u=a(3),g=a(1),h=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var m=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},b=function(e,t){var a,r=e[0].start,o=e[0].start,s=Object(h.a)(e);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.start<r&&(r=i.start),i.end>o&&(o=i.end)}}catch(c){s.e(c)}finally{s.f()}switch(t){case n.Month:r=m(r,-1,"month"),r=f(r,"month"),o=m(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=m(p(r),-7,"day"),o=m(o,1.5,"month");break;case n.Day:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,19,"day");break;default:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,5,"day")}return[r,o]},v=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=m(r,1,"month");break;case n.Week:r=m(r,7,"day");break;case n.Day:r=m(r,1,"day");break;case n.HalfDay:r=m(r,12,"hour");break;case n.QuarterDay:r=m(r,6,"hour")}o.push(r)}return o},y=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},p=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},x=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},k="_task-list-header-module__ganttTable__3_ygE",j="_task-list-header-module__ganttTable_Header__1nBOt",w="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",_="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",T=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:k,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:j,style:{height:t-2}},o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:w,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:w,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0To")))},O="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",S="_task-list-table-module__taskListCell__3lLk3",C=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,s=e.fontSize,i=e.locale,c={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:O,style:{fontFamily:r,fontSize:s}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(i,c)),o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(i,c)))})))},D="_tooltip-module__tooltipDefaultContainer__3T42e",M="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",N="_tooltip-module__tooltipDetailsContainer__25P-K",W=function(e){var t=e.task,a=e.rowHeight,n=e.svgHeight,s=e.displayXStartEndpoint,i=e.arrowIndent,c=e.fontSize,l=e.fontFamily,d=e.TooltipContent,u=Object(r.useRef)(null),h=Object(r.useState)(1e3),m=Object(g.a)(h,2),f=m[0],b=m[1],v=Object(r.useState)(1e3),y=Object(g.a)(v,2),p=y[0],x=y[1],k=Object(r.useState)(t.index*a),j=Object(g.a)(k,2),w=j[0],_=j[1],T=Object(r.useState)(s.end),O=Object(g.a)(T,2),E=O[0],S=O[1];return Object(r.useEffect)((function(){if(u.current){var e=1.1*u.current.offsetHeight,r=t.index*a,o=1.1*u.current.scrollWidth,c=t.x2+i+.5*i;o+c>s.end&&(c=t.x1-i-.5*i-o);var l=e+r;c<s.start&&l>n?(r-=e,(c=.5*(t.x1+t.x2-o))+o>s.end&&(c=s.end-o),(c+o>s.end||c-o<s.start)&&(c=s.end-o)):c<s.start&&l<n?(r+=a,((c=.5*(t.x1+t.x2-o))+o>s.end||c-o<s.start)&&(c=s.end-o)):l>n&&(r=n-e),_(r),b(o),S(c),1e3!==e&&x(e)}}),[u,t,i,s]),o.a.createElement("foreignObject",{x:E,y:w,width:f,height:p},o.a.createElement("div",{ref:u,className:N},o.a.createElement(d,{task:t,fontSize:c,fontFamily:l})))},F=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:D,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),t.end.getTime()-t.start.getTime()!==0&&o.a.createElement("p",{className:M},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:M},!!t.progress&&"Progress: ".concat(t.progress," %")))},H="_vertical-scroll-module__scroll__1eT-t",L=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,s=e.headerHeight,i=e.onScroll,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:s},className:H,onScroll:i,ref:c},o.a.createElement("div",{style:{height:n,width:1}}))},R=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,s=e.rowWidth,i=e.rowHeight,c=e.scrollY,l=e.tasks,d=e.selectedTask,u=e.setSelectedTask,g=e.locale,h=e.ganttHeight,m=e.taskListRef,f=e.horizontalContainerClass,b=e.TaskListHeader,v=e.TaskListTable,y=Object(r.useRef)(null);Object(r.useEffect)((function(){y.current&&(y.current.scrollTop=c)}),[c]);var p={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:s},x={rowHeight:i,rowWidth:s,fontFamily:a,fontSize:n,tasks:l,locale:g,selectedTaskId:d?d.id:"",setSelectedTask:u};return o.a.createElement("div",{ref:m},o.a.createElement(b,Object.assign({},p)),o.a.createElement("div",{ref:y,className:f,style:h?{height:h}:{}},o.a.createElement(v,Object.assign({},x))))},z="_grid-module__gridRow__2dZTy",P="_grid-module__gridRowLine__3rUKi",Y="_grid-module__gridTick__RuwuK",I=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,s=e.svgWidth,i=e.columnWidth,c=e.todayColor,l=0,d=[],u=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:s,y2:0,className:P})],g=Object(h.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;d.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:l,width:s,height:r,className:z})),u.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:l+r,x2:s,y2:l+r,className:P})),l+=r}}catch(j){g.e(j)}finally{g.f()}for(var b=new Date,v=0,y=[],p=o.a.createElement("rect",null),x=0;x<n.length;x++){var k=n[x];y.push(o.a.createElement("line",{key:k.getTime(),x1:v,y1:0,x2:v,y2:l,className:Y})),(x+1!==n.length&&k.getTime()<b.getTime()&&n[x+1].getTime()>=b.getTime()||0!==x&&x+1===n.length&&k.getTime()<b.getTime()&&m(k,k.getTime()-n[x-1].getTime(),"millisecond").getTime()>=b.getTime())&&(p=o.a.createElement("rect",{x:v,y:0,width:i,height:l,fill:c})),v+=i}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},d),o.a.createElement("g",{className:"rowLines"},u),o.a.createElement("g",{className:"ticks"},y),o.a.createElement("g",{className:"today"},p))},B=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(I,Object.assign({},e)))},X="_calendar-module__calendarBottomText__9w8d5",G="_calendar-module__calendarTopTick__1rLuZ",K="_calendar-module__calendarTopText__2q1Kt",Q="_calendar-module__calendarHeader__35nLX",V=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,s=e.xText,i=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:G,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:i,x:s,className:K},t))},A=function(e){var t=e.dateSetup,a=e.locale,r=e.viewMode,s=e.headerHeight,i=e.columnWidth,c=e.fontFamily,l=e.fontSize,d=[],u=[];switch(t.viewMode){case n.Month:var h=function(){for(var e=[],n=[],r=6*i,c=.5*s,l=0;l<t.dates.length;l++){var d=t.dates[l],u=y(d,a);if(n.push(o.a.createElement("text",{key:u+d.getFullYear(),y:.8*s,x:i*l+.5*i,className:X},u)),0===l||d.getFullYear()!==t.dates[l-1].getFullYear()){var g=d.getFullYear().toString();e.push(o.a.createElement(V,{key:g,value:g,x1Line:i*l,y1Line:0,y2Line:c,xText:r+i*l-d.getMonth()*i,yText:.9*c}))}}return[e,n]}(),m=Object(g.a)(h,2);d=m[0],u=m[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,c=.5*s,l=t.dates,d=l.length-1;d>=0;d--){var u=l[d],g="";0!==d&&u.getMonth()===l[d-1].getMonth()||(g="".concat(y(u,a),", ").concat(u.getFullYear()));var h="W".concat(x(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*s,x:i*d,className:X},h)),g&&(d!==l.length-1&&e.push(o.a.createElement(V,{key:g,value:g,x1Line:i*d+r*i,y1Line:0,y2Line:c,xText:i*d+i*r*.5,yText:.9*c})),r=0),r++}return[e,n]}(),b=Object(g.a)(f,2);d=b[0],u=b[1];break;case n.Day:var v=function(){for(var e=[],n=[],r=.5*s,c=t.dates,l=0;l<c.length;l++){var d=c[l],u=d.getDate().toString();if(n.push(o.a.createElement("text",{key:d.getTime(),y:.8*s,x:i*l+.5*i,className:X},u)),l+1!==c.length&&d.getMonth()!==c[l+1].getMonth()){var g=y(d,a);e.push(o.a.createElement(V,{key:g+d.getFullYear(),value:g,x1Line:i*(l+1),y1Line:0,y2Line:r,xText:i*(l+1)-d.getDate()*i*.5,yText:.9*r}))}}return[e,n]}(),p=Object(g.a)(v,2);d=p[0],u=p[1];break;default:var k=function(){for(var e=[],l=[],d=r===n.HalfDay?2:4,u=.5*s,g=t.dates,h=0;h<g.length;h++){var m=g[h],f=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(l.push(o.a.createElement("text",{key:m.getTime(),y:.8*s,x:i*h,className:X,fontFamily:c},f)),0===h||m.getDate()!==g[h-1].getDate()){var b="".concat(m.getDate()," ").concat(y(m,a));e.push(o.a.createElement(V,{key:b+m.getFullYear(),value:b,x1Line:i*h+d*i,y1Line:0,y2Line:u,xText:i*h+d*i*.5,yText:.9*u}))}}return[e,l]}(),j=Object(g.a)(k,2);d=j[0],u=j[1]}return o.a.createElement("g",{className:"calendar",fontSize:l,fontFamily:c},o.a.createElement("rect",{x:0,y:0,width:i*t.dates.length,height:s,className:Q}),u," ",d)},U=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.taskHeight,s=e.arrowIndent,i=t.index>a.index?-1:1,c=a.y+r/2,l="M ".concat(t.x2," ").concat(t.y+r/2," \n  h ").concat(s," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-s," \n  V ").concat(c," \n  h ").concat(s),d="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:l,fill:"none"}),o.a.createElement("polygon",{points:d}))},Z=function(e,t,a,n,r,o,s,i,c,l,d,u,g,h,m,f,b,v,y){var p;switch(e.type){case"milestone":p=q(e,t,a,n,r,o,s,i,c,v,y);break;case"project":p=J(e,t,a,n,r,o,s,i,c,h,m,f,b);break;default:p=J(e,t,a,n,r,o,s,i,c,l,d,u,g)}return p},J=function(e,t,a,n,r,o,s,i,c,l,d,g,h){var m=$(e.start,a,n,r),f=$(e.end,a,n,r),b=ee(t,o,s),v=Object(u.a)({backgroundColor:g,backgroundSelectedColor:h,progressColor:l,progressSelectedColor:d},e.styles),y=e.type;return"task"===y&&f-m<2*c&&(y="smalltask",f=m+2*c),Object(u.a)(Object(u.a)({},e),{},{typeInternal:y,x1:m,x2:f,y:b,index:t,barCornerRadius:i,handleWidth:c,height:s,barChildren:[],styles:v})},q=function(e,t,a,n,r,o,s,i,c,l,d){var g=$(e.start,a,n,r),h=ee(t,o,s),m=g-.5*s,f=g+.5*s,b=s/1.414,v=Object(u.a)({backgroundColor:l,backgroundSelectedColor:d,progressColor:"",progressSelectedColor:""},e.styles);return Object(u.a)(Object(u.a)({},e),{},{end:e.start,x1:m,x2:f,y:h,index:t,barCornerRadius:i,handleWidth:c,typeInternal:e.type,progress:0,height:b,barChildren:[],styles:v})},$=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},ee=function(e,t,a){return e*t+(t-a)/2},te=function(e,t,a){return(t-e)*a*.01},ae=function(e,t,a){return[e-5,t+a,e+5,t+a,e,t+a-8.66].join(",")},ne=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]},re=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},oe=function(e,t,a,n,r,o){var s;switch(a.type){case"milestone":s=ie(e,t,a,n,r,o);break;default:s=se(e,t,a,n,r,o)}return s},se=function(e,t,a,n,r,o){var s=Object(u.a)({},a),i=!1;switch(t){case"progress":s.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),i=s.progress!==a.progress;break;case"start":var c=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);s.x1=c,(i=s.x1!==a.x1)&&(s.start=re(c,a.x1,a.start,n,r));break;case"end":var l=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);s.x2=l,(i=s.x2!==a.x2)&&(s.end=re(l,a.x2,a.end,n,r));break;case"move":var d=ne(e-o,n,a),h=Object(g.a)(d,2),m=h[0],f=h[1];(i=m!==a.x1)&&(s.start=re(m,a.x1,a.start,n,r),s.end=re(f,a.x2,a.end,n,r),s.x1=m,s.x2=f)}return{isChanged:i,changedTask:s}},ie=function(e,t,a,n,r,o){var s=Object(u.a)({},a),i=!1;switch(t){case"move":var c=ne(e-o,n,a),l=Object(g.a)(c,2),d=l[0],h=l[1];(i=d!==a.x1)&&(s.start=re(d,a.x1,a.start,n,r),s.end=s.start,s.x1=d,s.x2=h)}return{isChanged:i,changedTask:s}};function ce(e){return void 0!==e.key}var le="_bar-module__barWrapper__KxSXS",de="_bar-module__barHandle__3w_5u",ue="_bar-module__barBackground__31ERP",ge=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,s=e.isSelected,i=e.progressWidth,c=e.barCornerRadius,l=e.styles,d=e.onMouseDown;return o.a.createElement("g",{onMouseDown:d},o.a.createElement("rect",{x:t,width:n,y:a,height:r,ry:c,rx:c,fill:s?l.backgroundSelectedColor:l.backgroundColor,className:ue}),o.a.createElement("rect",{x:t,width:i,y:a,height:r,ry:c,rx:c,fill:s?l.progressSelectedColor:l.progressColor}))},he=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,s=e.barCornerRadius,i=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:de,ry:s,rx:s,onMouseDown:i})},me=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:de,points:t,onMouseDown:a})},fe=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,s=e.isSelected,i=te(t.x1,t.x2,t.progress),c=ae(i+t.x1,t.y,t.height),l=t.height-2;return o.a.createElement("g",{className:le,tabIndex:0},o.a.createElement(ge,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:i,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:s,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},n&&o.a.createElement("g",null,o.a.createElement(he,{x:t.x1+1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("start",t,e)}}),o.a.createElement(he,{x:t.x2-t.handleWidth-1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("end",t,e)}})),a&&o.a.createElement(me,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},be=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,s=e.isSelected,i=te(t.x1,t.x2,t.progress),c=ae(i+t.x1,t.y,t.height);return o.a.createElement("g",{className:le,tabIndex:0},o.a.createElement(ge,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:i,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:s,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},a&&o.a.createElement(me,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},ve="_milestone-module__milestoneWrapper__RRr13",ye="_milestone-module__milestoneBackground__2P2B1",pe=function(e){var t=e.task,a=e.isDateChangeable,n=e.onEventStart,r=e.isSelected,s="rotate(45 ".concat(t.x1+.356*t.height," \n    ").concat(t.y+.85*t.height,")");return o.a.createElement("g",{tabIndex:0,className:ve},o.a.createElement("rect",{fill:r?t.styles.backgroundSelectedColor:t.styles.backgroundColor,x:t.x1,width:t.height,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,transform:s,className:ye,onMouseDown:function(e){a&&n("move",t,e)}}))},xe="_project-module__projectWrapper__1KJ6x",ke="_project-module__projectBackground__2RbVy",je="_project-module__projectTop__2pZMF",we=function(e){var t=e.task,a=e.isSelected,n=a?t.styles.backgroundSelectedColor:t.styles.backgroundColor,r=a?t.styles.progressSelectedColor:t.styles.progressColor,s=te(t.x1,t.x2,t.progress),i=t.x2-t.x1,c=[t.x1,t.y+t.height/2-1,t.x1,t.y+t.height,t.x1+15,t.y+t.height/2-1].join(","),l=[t.x2,t.y+t.height/2-1,t.x2,t.y+t.height,t.x2-15,t.y+t.height/2-1].join(",");return o.a.createElement("g",{tabIndex:0,className:xe},o.a.createElement("rect",{fill:n,x:t.x1,width:i,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,className:ke}),o.a.createElement("rect",{x:t.x1,width:s,y:t.y,height:t.height,ry:t.barCornerRadius,rx:t.barCornerRadius,fill:r}),o.a.createElement("rect",{fill:n,x:t.x1,width:i,y:t.y,height:t.height/2,rx:t.barCornerRadius,ry:t.barCornerRadius,className:je}),o.a.createElement("polygon",{className:je,points:c,fill:n}),o.a.createElement("polygon",{className:je,points:l,fill:n}))},_e="_task-list-module__barLabel__3zRJQ",Te="_task-list-module__barLabelOutside__3KcaM",Oe=function(e){var t=Object(u.a)({},e),a=t.task,n=t.arrowIndent,s=t.isDelete,i=t.taskHeight,c=t.isSelected,l=t.onEventStart,d=Object(r.useRef)(null),h=Object(r.useState)(o.a.createElement("div",null)),m=Object(g.a)(h,2),f=m[0],b=m[1],v=Object(r.useState)(!0),y=Object(g.a)(v,2),p=y[0],x=y[1];Object(r.useEffect)((function(){switch(a.typeInternal){case"milestone":b(o.a.createElement(pe,Object.assign({},e)));break;case"project":b(o.a.createElement(we,Object.assign({},e)));break;case"smalltask":b(o.a.createElement(be,Object.assign({},e)));break;default:b(o.a.createElement(fe,Object.assign({},e)))}}),[a,c]),Object(r.useEffect)((function(){d.current&&x(d.current.getBBox().width<a.x2-a.x1)}),[d,a]);return o.a.createElement("g",{onKeyDown:function(e){switch(e.key){case"Delete":s&&l("delete",a,e)}e.stopPropagation()},onMouseEnter:function(e){l("mouseenter",a,e)},onMouseLeave:function(e){l("mouseleave",a,e)},onDoubleClick:function(e){l("dblclick",a,e)},onFocus:function(){l("select",a)}},f,o.a.createElement("text",{x:function(){var e=a.x2-a.x1,t=a.barChildren.length>0;return p?a.x1+.5*e:a.x1+e+n*+t+.2*n}(),y:a.y+.5*i,className:p?_e:Te,ref:d},a.name))},Ee=function(e){var t,a=e.tasks,n=e.dates,s=e.ganttEvent,i=e.selectedTask,c=e.rowHeight,u=e.columnWidth,h=e.timeStep,m=e.svg,f=e.svgHeight,b=e.displayXStartEndpoint,v=e.taskHeight,y=e.arrowColor,p=e.arrowIndent,x=e.fontFamily,k=e.fontSize,j=e.setGanttEvent,w=e.setFailedTask,_=e.setSelectedTask,T=e.onDateChange,O=e.onProgressChange,E=e.onDoubleClick,S=e.onDelete,C=e.TooltipContent,D=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.createSVGPoint(),M=Object(r.useState)(0),N=Object(g.a)(M,2),F=N[0],H=N[1],L=Object(r.useState)(0),R=Object(g.a)(L,2),z=R[0],P=R[1],Y=Object(r.useState)(!1),I=Object(g.a)(Y,2),B=I[0],X=I[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;H(h*u/e)}),[u,n,h]),Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.changedTask&&D&&null!==m&&void 0!==m&&m.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),D.x=t.clientX,n=D.matrixTransform(null===m||void 0===m||null===(a=m.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=oe(n.x,s.action,s.changedTask,F,h,z),o=r.isChanged,i=r.changedTask,o&&j({action:s.action,changedTask:i});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(d.a)(l.a.mark((function a(n){var r,o,i,c,d,u,g,f,b,v,y;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=s.action,i=s.originalSelectedTask,(c=s.changedTask)&&D&&null!==m&&void 0!==m&&m.current&&i){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),D.x=n.clientX,d=D.matrixTransform(null===m||void 0===m||null===(r=m.current.getScreenCTM())||void 0===r?void 0:r.inverse()),u=oe(d.x,o,c,F,h,z),g=u.changedTask,f=i.start!==g.start||i.end!==g.end||i.progress!==g.progress,m.current.removeEventListener("mousemove",e),m.current.removeEventListener("mouseup",t),j({action:""}),X(!1),b=!0,"move"!==o&&"end"!==o&&"start"!==o||!T||!f){a.next=26;break}return a.prev=14,a.next=17,T(g);case 17:void 0!==(v=a.sent)&&(b=v),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(14),b=!1;case 24:a.next=37;break;case 26:if(!O||!f){a.next=37;break}return a.prev=27,a.next=30,O(g);case 30:void 0!==(y=a.sent)&&(b=y),a.next=37;break;case 34:a.prev=34,a.t1=a.catch(27),b=!1;case 37:b||w(i);case 38:case"end":return a.stop()}}),a,null,[[14,21],[27,34]])})));return function(e){return a.apply(this,arguments)}}();B||"move"!==s.action&&"end"!==s.action&&"start"!==s.action&&"progress"!==s.action||null===m||void 0===m||!m.current||(m.current.addEventListener("mousemove",e),m.current.addEventListener("mouseup",t),X(!0))}),[s,F,z,O,h,T,m,B]);var G=function(){var e=Object(d.a)(l.a.mark((function e(t,a,n){var r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}"select"===t&&_(a.id),e.next=41;break;case 4:if(!ce(n)){e.next=19;break}if("delete"!==t){e.next=17;break}if(!S){e.next=17;break}return e.prev=7,e.next=10,S(a);case 10:void 0!==(r=e.sent)&&r&&j({action:t,changedTask:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error on Delete. "+e.t0);case 17:e.next=41;break;case 19:if("mouseenter"!==t){e.next=23;break}s.action||j({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 23:if("mouseleave"!==t){e.next=27;break}"mouseenter"===s.action&&j({action:""}),e.next=41;break;case 27:if("dblclick"!==t){e.next=31;break}E&&E(a),e.next=41;break;case 31:if("move"!==t){e.next=40;break}if(null!==m&&void 0!==m&&m.current&&D){e.next=34;break}return e.abrupt("return");case 34:D.x=n.clientX,i=D.matrixTransform(null===(o=m.current.getScreenCTM())||void 0===o?void 0:o.inverse()),P(i.x-a.x1),j({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 40:j({action:t,changedTask:a,originalSelectedTask:a});case 41:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a,n){return e.apply(this,arguments)}}();return o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:y,stroke:y},a.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(U,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:a[t],rowHeight:c,taskHeight:v,arrowIndent:p})}))}))),o.a.createElement("g",{className:"bar",fontFamily:x,fontSize:k},a.map((function(e){return o.a.createElement(Oe,{task:e,arrowIndent:p,taskHeight:v,isProgressChangeable:!!O&&!e.isDisabled,isDateChangeable:!!T&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:G,key:e.id,isSelected:!!i&&e.id===i.id})}))),o.a.createElement("g",{className:"toolTip"},s.changedTask&&b&&o.a.createElement(W,{arrowIndent:p,rowHeight:c,svgHeight:f,displayXStartEndpoint:b,task:s.changedTask,fontFamily:x,fontSize:k,TooltipContent:C})))},Se="_gantt-module__ganttVerticalContainer__CZjuD",Ce="_gantt-module__horizontalContainer__2B2zv",De="_gantt-module__wrapper__3eULf",Me=function(e){var t,a=e.gridProps,n=e.calendarProps,s=e.barProps,i=e.ganttHeight,c=e.scrollY,l=e.scrollX,d=e.verticalGanttContainerRef,h=Object(r.useRef)(null),m=Object(r.useRef)(null),f=Object(r.useState)({start:0,end:0}),b=Object(g.a)(f,2),v=b[0],y=b[1],p=Object(u.a)(Object(u.a)({},s),{},{svg:h,displayXStartEndpoint:v});return Object(r.useEffect)((function(){m.current&&(m.current.scrollTop=c)}),[c]),Object(r.useEffect)((function(){d.current&&(d.current.scrollLeft=l,y({start:l,end:d.current.clientWidth+l}))}),[l,null===(t=d.current)||void 0===t?void 0:t.clientWidth]),o.a.createElement("div",{className:Se,ref:d},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.svgWidth,height:n.headerHeight,fontFamily:s.fontFamily},o.a.createElement(A,Object.assign({},n))),o.a.createElement("div",{ref:m,className:Ce,style:i?{height:i,width:a.svgWidth}:{width:a.svgWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.svgWidth,height:s.rowHeight*s.tasks.length,fontFamily:s.fontFamily,ref:h},o.a.createElement(B,Object.assign({},a)),o.a.createElement(Ee,Object.assign({},p)))))},Ne="_horizontal-scroll-module__scroll__19jgW",We=function(e){var t=e.scroll,a=e.svgWidth,n=e.taskListWidth,s=e.onScroll,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current&&(i.current.scrollLeft=t)}),[t]),o.a.createElement("div",{style:{marginLeft:n},className:Ne,onScroll:s,ref:i},o.a.createElement("div",{style:{width:a,height:1}}))},Fe=function(e){var t=e.tasks,a=e.headerHeight,s=void 0===a?50:a,i=e.columnWidth,c=void 0===i?60:i,l=e.listCellWidth,d=void 0===l?"155px":l,u=e.rowHeight,h=void 0===u?50:u,m=e.ganttHeight,f=void 0===m?0:m,y=e.viewMode,p=void 0===y?n.Day:y,x=e.locale,k=void 0===x?"en-GB":x,j=e.barFill,w=void 0===j?60:j,_=e.barCornerRadius,O=void 0===_?3:_,E=e.barProgressColor,S=void 0===E?"#a3a3ff":E,D=e.barProgressSelectedColor,M=void 0===D?"#8282f5":D,N=e.barBackgroundColor,W=void 0===N?"#b8c2cc":N,H=e.barBackgroundSelectedColor,z=void 0===H?"#aeb8c2":H,P=e.projectProgressColor,Y=void 0===P?"#7db59a":P,I=e.projectProgressSelectedColor,B=void 0===I?"#59a985":I,X=e.projectBackgroundColor,G=void 0===X?"#fac465":X,K=e.projectBackgroundSelectedColor,Q=void 0===K?"#f7bb53":K,V=e.milestoneBackgroundColor,A=void 0===V?"#f1c453":V,U=e.milestoneBackgroundSelectedColor,J=void 0===U?"#f29e4c":U,q=e.handleWidth,$=void 0===q?8:q,ee=e.timeStep,te=void 0===ee?3e5:ee,ae=e.arrowColor,ne=void 0===ae?"grey":ae,re=e.fontFamily,oe=void 0===re?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":re,se=e.fontSize,ie=void 0===se?"14px":se,ce=e.arrowIndent,le=void 0===ce?20:ce,de=e.todayColor,ue=void 0===de?"rgba(252, 248, 227, 0.5)":de,ge=e.TooltipContent,he=void 0===ge?F:ge,me=e.TaskListHeader,fe=void 0===me?T:me,be=e.TaskListTable,ve=void 0===be?C:be,ye=e.onDateChange,pe=e.onProgressChange,xe=e.onDoubleClick,ke=e.onDelete,je=e.onSelect,we=Object(r.useRef)(null),_e=Object(r.useRef)(null),Te=Object(r.useRef)(null),Oe=Object(r.useState)((function(){var e=b(t,p),a=Object(g.a)(e,2),n=a[0],r=a[1];return{viewMode:p,dates:v(n,r,p)}})),Ee=Object(g.a)(Oe,2),Se=Ee[0],Ne=Ee[1],Fe=Object(r.useState)(h*w/100),He=Object(g.a)(Fe,2),Le=He[0],Re=He[1],ze=Object(r.useState)(0),Pe=Object(g.a)(ze,2),Ye=Pe[0],Ie=Pe[1],Be=Object(r.useState)([]),Xe=Object(g.a)(Be,2),Ge=Xe[0],Ke=Xe[1],Qe=Object(r.useState)({action:""}),Ve=Object(g.a)(Qe,2),Ae=Ve[0],Ue=Ve[1],Ze=Object(r.useState)(),Je=Object(g.a)(Ze,2),qe=Je[0],$e=Je[1],et=Object(r.useState)(null),tt=Object(g.a)(et,2),at=tt[0],nt=tt[1],rt=Object(r.useState)(0),ot=Object(g.a)(rt,2),st=ot[0],it=ot[1],ct=Object(r.useState)(0),lt=Object(g.a)(ct,2),dt=lt[0],ut=lt[1],gt=Object(r.useState)(!1),ht=Object(g.a)(gt,2),mt=ht[0],ft=ht[1],bt=h*Ge.length,vt=Se.dates.length*c,yt=Ge.length*h;Object(r.useEffect)((function(){var e=b(t,p),a=Object(g.a)(e,2),n=a[0],r=a[1],o=v(n,r,p);Ne({dates:o,viewMode:p}),Ke(function(e,t,a,n,r,o,s,i,c,l,d,u,g,h,m,f,b){var v=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,y=e.map((function(e,y){return Z(e,y,t,v,a,n,r,o,s,i,c,l,d,u,g,h,m,f,b)}));return y=y.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=y.findIndex((function(t){return t.id===a[e]}));-1!==n&&y[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(t,o,c,h,Le,O,$,S,M,W,z,Y,B,G,Q,A,J))}),[t,p,h,O,c,Le,$,S,M,W,z,Y,B,G,Q,A,J]),Object(r.useEffect)((function(){var e=Ae.changedTask,t=Ae.action;if(e)if("delete"===t)Ue({action:""}),Ke(Ge.filter((function(t){return t.id!==e.id})));else if("move"===t||"end"===t||"start"===t||"progress"===t){var a=Ge.find((function(t){return t.id===e.id}));if(a&&(a.start.getTime()!==e.start.getTime()||a.end.getTime()!==e.end.getTime()||a.progress!==e.progress)){var n=Ge.map((function(t){return t.id===e.id?e:t}));Ke(n)}}}),[Ae,Ge]),Object(r.useEffect)((function(){at&&(Ke(Ge.map((function(e){return e.id!==at.id?e:at}))),nt(null))}),[at,Ge]),Object(r.useEffect)((function(){var e=h*w/100;e!==Le&&Re(e)}),[h,w,Le]),Object(r.useEffect)((function(){_e.current&&Ie(_e.current.offsetWidth)}),[_e]),Object(r.useEffect)((function(){var e=function(e){if(e.shiftKey||e.deltaX){var t=e.deltaX?e.deltaX:e.deltaY,a=dt+t;a<0?a=0:a>vt&&(a=vt),ut(a),e.preventDefault()}else{var n=st+e.deltaY;n<0?n=0:n>yt-f&&(n=yt-f),n!==st&&(it(n),e.preventDefault())}ft(!0)};return we.current&&we.current.addEventListener("wheel",e,{passive:!1}),function(){we.current&&we.current.removeEventListener("wheel",e)}}),[we.current,st,dt,f,vt]);var pt=function(e){var t=Ge.find((function(t){return t.id===e})),a=Ge.find((function(e){return!!qe&&e.id===qe.id}));je&&(a&&je(a,!1),t&&je(t,!0)),$e(t)},xt={columnWidth:c,svgWidth:vt,tasks:t,rowHeight:h,dates:Se.dates,todayColor:ue},kt={dateSetup:Se,locale:k,viewMode:p,headerHeight:s,columnWidth:c,fontFamily:oe,fontSize:ie},jt={tasks:Ge,dates:Se.dates,ganttEvent:Ae,selectedTask:qe,rowHeight:h,taskHeight:Le,columnWidth:c,arrowColor:ne,timeStep:te,fontFamily:oe,fontSize:ie,arrowIndent:le,svgHeight:bt,svgWidth:vt,setGanttEvent:Ue,setFailedTask:nt,setSelectedTask:pt,onDateChange:ye,onProgressChange:pe,onDoubleClick:xe,onDelete:ke,TooltipContent:he},wt={rowHeight:h,rowWidth:d,fontFamily:oe,fontSize:ie,tasks:Ge,locale:k,headerHeight:s,scrollY:st,ganttHeight:f,horizontalContainerClass:Ce,selectedTask:qe,taskListRef:_e,setSelectedTask:pt,TaskListHeader:fe,TaskListTable:ve};return o.a.createElement("div",null,o.a.createElement("div",{className:De,onKeyDown:function(e){e.preventDefault();var t=st,a=dt,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=h,n=!1;break;case"Up":case"ArrowUp":t-=h,n=!1;break;case"Left":case"ArrowLeft":a-=c;break;case"Right":case"ArrowRight":a+=c}n?(a<0?a=0:a>vt&&(a=vt),ut(a)):(t<0?t=0:t>yt-f&&(t=yt-f),it(t)),ft(!0)},tabIndex:0,ref:we},d&&o.a.createElement(R,Object.assign({},wt)),o.a.createElement(Me,{gridProps:xt,calendarProps:kt,barProps:jt,ganttHeight:f,scrollY:st,scrollX:dt,verticalGanttContainerRef:Te}),o.a.createElement(L,{ganttFullHeight:yt,ganttHeight:f,headerHeight:s,scroll:st,onScroll:function(e){st===e.currentTarget.scrollTop||mt||it(e.currentTarget.scrollTop),ft(!1)}})),o.a.createElement(We,{svgWidth:vt,taskListWidth:Ye,scroll:dt,onScroll:function(e){dt===e.currentTarget.scrollLeft||mt||ut(e.currentTarget.scrollLeft),ft(!1)}}))},He=(a(8),a(2)),Le=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return Object(He.jsxs)("div",{className:"ViewContainer",children:[Object(He.jsx)("button",{className:"Button",onClick:function(){return t(n.QuarterDay)},children:"Quarter of Day"}),Object(He.jsx)("button",{className:"Button",onClick:function(){return t(n.HalfDay)},children:"Half of Day"}),Object(He.jsx)("button",{className:"Button",onClick:function(){return t(n.Day)},children:"Day"}),Object(He.jsx)("button",{className:"Button",onClick:function(){return t(n.Week)},children:"Week"}),Object(He.jsx)("button",{className:"Button",onClick:function(){return t(n.Month)},children:"Month"}),Object(He.jsxs)("div",{className:"Switch",children:[Object(He.jsxs)("label",{className:"Switch_Toggle",children:[Object(He.jsx)("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),Object(He.jsx)("span",{className:"Slider"})]}),"Show Task List"]})]})};var Re=function(){var e=o.a.useState(n.Day),t=Object(g.a)(e,2),a=t[0],r=t[1],s=o.a.useState(function(){var e=new Date;return[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Some Project",id:"ProjectSample",progress:25,type:"project"},{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",type:"task",progress:70,dependencies:["Task 2"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Release",id:"Task 6",progress:e.getMonth(),type:"milestone",dependencies:["Task 4"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),18),end:new Date(e.getFullYear(),e.getMonth(),19),name:"Party Time",id:"Task 9",progress:0,isDisabled:!0,type:"task"}]}()),i=Object(g.a)(s,2),c=i[0],h=i[1],m=o.a.useState(!0),f=Object(g.a)(m,2),b=f[0],v=f[1],y=60;a===n.Month?y=300:a===n.Week&&(y=250);var p=function(e){console.log("On date change Id:"+e.id);var t=c.map((function(t){return t.id===e.id?e:t}));if(e.project){var a=function(e,t){for(var a=e.filter((function(e){return e.project===t})),n=a[0].start,r=a[0].end,o=0;o<a.length;o++){var s=a[o];n.getTime()>s.start.getTime()&&(n=s.start),r.getTime()<s.end.getTime()&&(r=s.end)}return[n,r]}(t,e.project),n=Object(g.a)(a,2),r=n[0],o=n[1],s=t[t.findIndex((function(t){return t.id===e.project}))];if(s.start.getTime()!==r.getTime()||s.end.getTime()!==o.getTime()){var i=Object(u.a)(Object(u.a)({},s),{},{start:r,end:o});t=t.map((function(t){return t.id===e.project?i:t}))}}h(t)},x=function(e){var t=window.confirm("Are you sure about "+e.name+" ?");return t&&h(c.filter((function(t){return t.id!==e.id}))),t},k=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(c.map((function(e){return e.id===t.id?t:e}))),console.log("On progress change Id:"+t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){alert("On Double Click event Id:"+e.id)},w=function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))};return Object(He.jsxs)("div",{children:[Object(He.jsx)(Le,{onViewModeChange:function(e){return r(e)},onViewListChange:v,isChecked:b}),Object(He.jsx)("h3",{children:"Gantt With Unlimited Height"}),Object(He.jsx)(Fe,{tasks:c,viewMode:a,onDateChange:p,onDelete:x,onProgressChange:k,onDoubleClick:j,onSelect:w,listCellWidth:b?"155px":"",columnWidth:y}),Object(He.jsx)("h3",{style:{color:"#e56b6f"},children:"Milestones and projects are not available"}),Object(He.jsx)("h3",{children:"Gantt With Limited Height"}),Object(He.jsx)(Fe,{tasks:c,viewMode:a,onDateChange:p,onDelete:x,onProgressChange:k,onDoubleClick:j,onSelect:w,listCellWidth:b?"155px":"",ganttHeight:300,columnWidth:y})]})};i.a.render(Object(He.jsx)(Re,{}),document.getElementById("root"))},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.2782dc21.chunk.js.map