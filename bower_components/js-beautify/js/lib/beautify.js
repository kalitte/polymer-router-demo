!function(){function e(e,t){for(var n=0;n<t.length;n+=1)if(t[n]===e)return!0;return!1}function t(e){return e.replace(/^\s+|\s+$/g,"")}function n(e,t){"use strict";var n=new _(e,t);return n.beautify()}function _(n,_){"use strict";function r(e,t){var n=0;e&&(n=e.indentation_level,!X.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level));var _={mode:t,parent:e,last_text:e?e.last_text:"",last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,line_indent_level:e?e.line_indent_level:n,start_line_index:X.get_line_number(),ternary_depth:0};return _}function o(e){var t=e.newlines,n=et.keep_array_indentation&&h($.mode);if(n)for(_=0;t>_;_+=1)f(_>0);else if(et.max_preserve_newlines&&t>et.max_preserve_newlines&&(t=et.max_preserve_newlines),et.preserve_newlines&&e.newlines>1){f();for(var _=1;t>_;_+=1)f(!0)}U=e,Y[U.type]()}function l(e){e=e.replace(/\x0d/g,"");for(var t=[],n=e.indexOf("\n");-1!==n;)t.push(e.substring(0,n)),e=e.substring(n+1),n=e.indexOf("\n");return e.length&&t.push(e),t}function c(e){if(e=void 0===e?!1:e,!X.just_added_newline())if(et.preserve_newlines&&U.wanted_newline||e)f(!1,!0);else if(et.wrap_line_length){var t=X.current_line.get_character_count()+U.text.length+(X.space_before_token?1:0);t>=et.wrap_line_length&&f(!1,!0)}}function f(e,t){if(!t&&";"!==$.last_text&&","!==$.last_text&&"="!==$.last_text&&"TK_OPERATOR"!==Q)for(;$.mode===s.Statement&&!$.if_block&&!$.do_block;)K();X.add_new_line(e)&&($.multiline_frame=!0)}function d(){if(X.just_added_newline())if(et.keep_array_indentation&&h($.mode)&&U.wanted_newline){X.current_line.push("");for(var e=0;e<U.whitespace_before.length;e+=1)X.current_line.push(U.whitespace_before[e]);X.space_before_token=!1}else X.add_indent_string($.indentation_level)&&($.line_indent_level=$.indentation_level)}function E(e){e=e||U.text,d(),X.add_token(e)}function u(){$.indentation_level+=1}function p(){$.indentation_level>0&&(!$.parent||$.indentation_level>$.parent.indentation_level)&&($.indentation_level-=1)}function T(e){$?(H.push($),q=$):q=r(null,e),$=r(q,e)}function h(e){return e===s.ArrayLiteral}function R(t){return e(t,[s.Expression,s.ForInitializer,s.Conditional])}function K(){H.length>0&&(q=$,$=H.pop(),q.mode===s.Statement&&X.remove_redundant_indentation(q))}function x(){return $.parent.mode===s.ObjectLiteral&&$.mode===s.Statement&&(":"===$.last_text&&0===$.ternary_depth||"TK_RESERVED"===Q&&e($.last_text,["get","set"]))}function m(){return"TK_RESERVED"===Q&&e($.last_text,["var","let","const"])&&"TK_WORD"===U.type||"TK_RESERVED"===Q&&"do"===$.last_text||"TK_RESERVED"===Q&&"return"===$.last_text&&!U.wanted_newline||"TK_RESERVED"===Q&&"else"===$.last_text&&("TK_RESERVED"!==U.type||"if"!==U.text)||"TK_END_EXPR"===Q&&(q.mode===s.ForInitializer||q.mode===s.Conditional)||"TK_WORD"===Q&&$.mode===s.BlockStatement&&!$.in_case&&"--"!==U.text&&"++"!==U.text&&"TK_WORD"!==U.type&&"TK_RESERVED"!==U.type||$.mode===s.ObjectLiteral&&(":"===$.last_text&&0===$.ternary_depth||"TK_RESERVED"===Q&&e($.last_text,["get","set"]))?(T(s.Statement),u(),"TK_RESERVED"===Q&&e($.last_text,["var","let","const"])&&"TK_WORD"===U.type&&($.declaration_statement=!0),x()||c("TK_RESERVED"===U.type&&e(U.text,["do","for","if","while"])),!0):!1}function b(e,n){for(var _=0;_<e.length;_++){var r=t(e[_]);if(r.charAt(0)!==n)return!1}return!0}function A(e,t){for(var n,_=0,r=e.length;r>_;_++)if(n=e[_],n&&0!==n.indexOf(t))return!1;return!0}function S(t){return e(t,["case","return","do","if","throw","else"])}function O(e){var t=z+(e||0);return 0>t||t>=tt.length?null:tt[t]}function v(){m();var t=s.Expression;if("["===U.text){if("TK_WORD"===Q||")"===$.last_text)return"TK_RESERVED"===Q&&e($.last_text,F.line_starters)&&(X.space_before_token=!0),T(t),E(),u(),et.space_in_paren&&(X.space_before_token=!0),void 0;t=s.ArrayLiteral,h($.mode)&&("["===$.last_text||","===$.last_text&&("]"===G||"}"===G))&&(et.keep_array_indentation||f())}else"TK_RESERVED"===Q&&"for"===$.last_text?t=s.ForInitializer:"TK_RESERVED"===Q&&e($.last_text,["if","while"])&&(t=s.Conditional);";"===$.last_text||"TK_START_BLOCK"===Q?f():"TK_END_EXPR"===Q||"TK_START_EXPR"===Q||"TK_END_BLOCK"===Q||"."===$.last_text?c(U.wanted_newline):"TK_RESERVED"===Q&&"("===U.text||"TK_WORD"===Q||"TK_OPERATOR"===Q?"TK_RESERVED"===Q&&("function"===$.last_word||"typeof"===$.last_word)||"*"===$.last_text&&"function"===G?et.space_after_anon_function&&(X.space_before_token=!0):"TK_RESERVED"!==Q||!e($.last_text,F.line_starters)&&"catch"!==$.last_text||et.space_before_conditional&&(X.space_before_token=!0):X.space_before_token=!0,"("===U.text&&("TK_EQUALS"===Q||"TK_OPERATOR"===Q)&&(x()||c()),T(t),E(),et.space_in_paren&&(X.space_before_token=!0),u()}function y(){for(;$.mode===s.Statement;)K();$.multiline_frame&&c("]"===U.text&&h($.mode)&&!et.keep_array_indentation),et.space_in_paren&&("TK_START_EXPR"!==Q||et.space_in_empty_paren?X.space_before_token=!0:(X.trim(),X.space_before_token=!1)),"]"===U.text&&et.keep_array_indentation?(E(),K()):(K(),E()),X.remove_redundant_indentation(q),$.do_while&&q.mode===s.Conditional&&(q.mode=s.Expression,$.do_block=!1,$.do_while=!1)}function w(){var t=O(1),n=O(2);n&&(":"===n.text&&e(t.type,["TK_STRING","TK_WORD","TK_RESERVED"])||e(t.text,["get","set"])&&e(n.type,["TK_WORD","TK_RESERVED"]))?e(G,["class","interface"])?T(s.BlockStatement):T(s.ObjectLiteral):T(s.BlockStatement);var _=!t.comments_before.length&&"}"===t.text,r=_&&"function"===$.last_word&&"TK_END_EXPR"===Q;"expand"===et.brace_style?"TK_OPERATOR"!==Q&&(r||"TK_EQUALS"===Q||"TK_RESERVED"===Q&&S($.last_text)&&"else"!==$.last_text)?X.space_before_token=!0:f(!1,!0):"TK_OPERATOR"!==Q&&"TK_START_EXPR"!==Q?"TK_START_BLOCK"===Q?f():X.space_before_token=!0:h(q.mode)&&","===$.last_text&&("}"===G?X.space_before_token=!0:f()),E(),u()}function g(){for(;$.mode===s.Statement;)K();var e="TK_START_BLOCK"===Q;"expand"===et.brace_style?e||f():e||(h($.mode)&&et.keep_array_indentation?(et.keep_array_indentation=!1,f(),et.keep_array_indentation=!0):f()),K(),E()}function k(){if("TK_RESERVED"===U.type&&$.mode!==s.ObjectLiteral&&e(U.text,["set","get"])&&(U.type="TK_WORD"),"TK_RESERVED"===U.type&&$.mode===s.ObjectLiteral){var t=O(1);":"==t.text&&(U.type="TK_WORD")}if(m()||!U.wanted_newline||R($.mode)||"TK_OPERATOR"===Q&&"--"!==$.last_text&&"++"!==$.last_text||"TK_EQUALS"===Q||!et.preserve_newlines&&"TK_RESERVED"===Q&&e($.last_text,["var","let","const","set","get"])||f(),$.do_block&&!$.do_while){if("TK_RESERVED"===U.type&&"while"===U.text)return X.space_before_token=!0,E(),X.space_before_token=!0,$.do_while=!0,void 0;f(),$.do_block=!1}if($.if_block)if($.else_block||"TK_RESERVED"!==U.type||"else"!==U.text){for(;$.mode===s.Statement;)K();$.if_block=!1,$.else_block=!1}else $.else_block=!0;if("TK_RESERVED"===U.type&&("case"===U.text||"default"===U.text&&$.in_case_statement))return f(),($.case_body||et.jslint_happy)&&(p(),$.case_body=!1),E(),$.in_case=!0,$.in_case_statement=!0,void 0;if("TK_RESERVED"===U.type&&"function"===U.text&&((e($.last_text,["}",";"])||X.just_added_newline()&&!e($.last_text,["[","{",":","=",","]))&&(X.just_added_blankline()||U.comments_before.length||(f(),f(!0))),"TK_RESERVED"===Q||"TK_WORD"===Q?"TK_RESERVED"===Q&&e($.last_text,["get","set","new","return","export"])?X.space_before_token=!0:"TK_RESERVED"===Q&&"default"===$.last_text&&"export"===G?X.space_before_token=!0:f():"TK_OPERATOR"===Q||"="===$.last_text?X.space_before_token=!0:($.multiline_frame||!R($.mode)&&!h($.mode))&&f()),("TK_COMMA"===Q||"TK_START_EXPR"===Q||"TK_EQUALS"===Q||"TK_OPERATOR"===Q)&&(x()||c()),"TK_RESERVED"===U.type&&e(U.text,["function","get","set"]))return E(),$.last_word=U.text,void 0;if(J="NONE","TK_END_BLOCK"===Q?"TK_RESERVED"===U.type&&e(U.text,["else","catch","finally"])?"expand"===et.brace_style||"end-expand"===et.brace_style?J="NEWLINE":(J="SPACE",X.space_before_token=!0):J="NEWLINE":"TK_SEMICOLON"===Q&&$.mode===s.BlockStatement?J="NEWLINE":"TK_SEMICOLON"===Q&&R($.mode)?J="SPACE":"TK_STRING"===Q?J="NEWLINE":"TK_RESERVED"===Q||"TK_WORD"===Q||"*"===$.last_text&&"function"===G?J="SPACE":"TK_START_BLOCK"===Q?J="NEWLINE":"TK_END_EXPR"===Q&&(X.space_before_token=!0,J="NEWLINE"),"TK_RESERVED"===U.type&&e(U.text,F.line_starters)&&")"!==$.last_text&&(J="else"===$.last_text||"export"===$.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===U.type&&e(U.text,["else","catch","finally"]))if("TK_END_BLOCK"!==Q||"expand"===et.brace_style||"end-expand"===et.brace_style)f();else{X.trim(!0);var n=X.current_line;"}"!==n.last()&&f(),X.space_before_token=!0}else"NEWLINE"===J?"TK_RESERVED"===Q&&S($.last_text)?X.space_before_token=!0:"TK_END_EXPR"!==Q?"TK_START_EXPR"===Q&&"TK_RESERVED"===U.type&&e(U.text,["var","let","const"])||":"===$.last_text||("TK_RESERVED"===U.type&&"if"===U.text&&"else"===$.last_text?X.space_before_token=!0:f()):"TK_RESERVED"===U.type&&e(U.text,F.line_starters)&&")"!==$.last_text&&f():$.multiline_frame&&h($.mode)&&","===$.last_text&&"}"===G?f():"SPACE"===J&&(X.space_before_token=!0);E(),$.last_word=U.text,"TK_RESERVED"===U.type&&"do"===U.text&&($.do_block=!0),"TK_RESERVED"===U.type&&"if"===U.text&&($.if_block=!0)}function D(){for(m()&&(X.space_before_token=!1);$.mode===s.Statement&&!$.if_block&&!$.do_block;)K();E()}function N(){m()?X.space_before_token=!0:"TK_RESERVED"===Q||"TK_WORD"===Q?X.space_before_token=!0:"TK_COMMA"===Q||"TK_START_EXPR"===Q||"TK_EQUALS"===Q||"TK_OPERATOR"===Q?x()||c():f(),E()}function C(){m(),$.declaration_statement&&($.declaration_assignment=!0),X.space_before_token=!0,E(),X.space_before_token=!0}function L(){return $.declaration_statement?(R($.parent.mode)&&($.declaration_assignment=!1),E(),$.declaration_assignment?($.declaration_assignment=!1,f(!1,!0)):X.space_before_token=!0,void 0):(E(),$.mode===s.ObjectLiteral||$.mode===s.Statement&&$.parent.mode===s.ObjectLiteral?($.mode===s.Statement&&K(),f()):X.space_before_token=!0,void 0)}function V(){if(m(),"TK_RESERVED"===Q&&S($.last_text))return X.space_before_token=!0,E(),void 0;if("*"===U.text&&"TK_DOT"===Q)return E(),void 0;if(":"===U.text&&$.in_case)return $.case_body=!0,u(),E(),f(),$.in_case=!1,void 0;if("::"===U.text)return E(),void 0;!U.wanted_newline||"--"!==U.text&&"++"!==U.text||f(!1,!0),"TK_OPERATOR"===Q&&c();var t=!0,n=!0;e(U.text,["--","++","!","~"])||e(U.text,["-","+"])&&(e(Q,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||e($.last_text,F.line_starters)||","===$.last_text)?(t=!1,n=!1,";"===$.last_text&&R($.mode)&&(t=!0),"TK_RESERVED"===Q||"TK_END_EXPR"===Q?t=!0:"TK_OPERATOR"===Q&&(t=e(U.text,["--","-"])&&e($.last_text,["--","-"])||e(U.text,["++","+"])&&e($.last_text,["++","+"])),$.mode!==s.BlockStatement&&$.mode!==s.Statement||"{"!==$.last_text&&";"!==$.last_text||f()):":"===U.text?0===$.ternary_depth?t=!1:$.ternary_depth-=1:"?"===U.text?$.ternary_depth+=1:"*"===U.text&&"TK_RESERVED"===Q&&"function"===$.last_text&&(t=!1,n=!1),X.space_before_token=X.space_before_token||t,E(),X.space_before_token=n}function P(){var e,n=l(U.text),_=!1,r=!1,i=U.whitespace_before.join(""),a=i.length;for(f(!1,!0),n.length>1&&(b(n.slice(1),"*")?_=!0:A(n.slice(1),i)&&(r=!0)),E(n[0]),e=1;e<n.length;e++)f(!1,!0),_?E(" "+t(n[e])):r&&n[e].length>a?E(n[e].substring(a)):X.add_token(n[e]);f(!1,!0)}function I(){X.space_before_token=!0,E(),X.space_before_token=!0}function M(){U.wanted_newline?f(!1,!0):X.trim(!0),X.space_before_token=!0,E(),f(!1,!0)}function B(){m(),"TK_RESERVED"===Q&&S($.last_text)?X.space_before_token=!0:c(")"===$.last_text&&et.break_chained_methods),E()}function j(){E(),"\n"===U.text[U.text.length-1]&&f()}function W(){for(;$.mode===s.Statement;)K()}var X,z,F,U,Q,G,Z,$,q,H,J,Y,et,tt=[],nt="";for(Y={TK_START_EXPR:v,TK_END_EXPR:y,TK_START_BLOCK:w,TK_END_BLOCK:g,TK_WORD:k,TK_RESERVED:k,TK_SEMICOLON:D,TK_STRING:N,TK_EQUALS:C,TK_OPERATOR:V,TK_COMMA:L,TK_BLOCK_COMMENT:P,TK_INLINE_COMMENT:I,TK_COMMENT:M,TK_DOT:B,TK_UNKNOWN:j,TK_EOF:W},_=_?_:{},et={},void 0!==_.braces_on_own_line&&(et.brace_style=_.braces_on_own_line?"expand":"collapse"),et.brace_style=_.brace_style?_.brace_style:et.brace_style?et.brace_style:"collapse","expand-strict"===et.brace_style&&(et.brace_style="expand"),et.indent_size=_.indent_size?parseInt(_.indent_size,10):4,et.indent_char=_.indent_char?_.indent_char:" ",et.preserve_newlines=void 0===_.preserve_newlines?!0:_.preserve_newlines,et.break_chained_methods=void 0===_.break_chained_methods?!1:_.break_chained_methods,et.max_preserve_newlines=void 0===_.max_preserve_newlines?0:parseInt(_.max_preserve_newlines,10),et.space_in_paren=void 0===_.space_in_paren?!1:_.space_in_paren,et.space_in_empty_paren=void 0===_.space_in_empty_paren?!1:_.space_in_empty_paren,et.jslint_happy=void 0===_.jslint_happy?!1:_.jslint_happy,et.space_after_anon_function=void 0===_.space_after_anon_function?!1:_.space_after_anon_function,et.keep_array_indentation=void 0===_.keep_array_indentation?!1:_.keep_array_indentation,et.space_before_conditional=void 0===_.space_before_conditional?!0:_.space_before_conditional,et.unescape_strings=void 0===_.unescape_strings?!1:_.unescape_strings,et.wrap_line_length=void 0===_.wrap_line_length?0:parseInt(_.wrap_line_length,10),et.e4x=void 0===_.e4x?!1:_.e4x,et.end_with_newline=void 0===_.end_with_newline?!1:_.end_with_newline,et.jslint_happy&&(et.space_after_anon_function=!0),_.indent_with_tabs&&(et.indent_char="	",et.indent_size=1),Z="";et.indent_size>0;)Z+=et.indent_char,et.indent_size-=1;var _t=0;if(n&&n.length){for(;" "===n.charAt(_t)||"	"===n.charAt(_t);)nt+=n.charAt(_t),_t+=1;n=n.substring(_t)}Q="TK_START_BLOCK",G="",X=new i(Z,nt),H=[],T(s.BlockStatement),this.beautify=function(){var e,t;for(F=new a(n,et,Z),tt=F.tokenize(),z=0;e=O();){for(var _=0;_<e.comments_before.length;_++)o(e.comments_before[_]);o(e),G=$.last_text,Q=e.type,$.last_text=e.text,z+=1}return t=X.get_code(),et.end_with_newline&&(t+="\n"),t}}function r(){var e=0,t=[];this.get_character_count=function(){return e},this.get_item_count=function(){return t.length},this.get_output=function(){return t.join("")},this.last=function(){return t.length?t[t.length-1]:null},this.push=function(n){t.push(n),e+=n.length},this.remove_indent=function(n,_){var r=0;0!==t.length&&(_&&t[0]===_&&(r=1),t[r]===n&&(e-=t[r].length,t.splice(r,1)))},this.trim=function(n,_){for(;this.get_item_count()&&(" "===this.last()||this.last()===n||this.last()===_);){var r=t.pop();e-=r.length}}}function i(e,t){var n=[];this.baseIndentString=t,this.current_line=null,this.space_before_token=!1,this.get_line_number=function(){return n.length},this.add_new_line=function(e){return 1===this.get_line_number()&&this.just_added_newline()?!1:e||!this.just_added_newline()?(this.current_line=new r,n.push(this.current_line),!0):!1},this.add_new_line(!0),this.get_code=function(){for(var e=n[0].get_output(),t=1;t<n.length;t++)e+="\n"+n[t].get_output();return e=e.replace(/[\r\n\t ]+$/,"")},this.add_indent_string=function(_){if(t&&this.current_line.push(t),n.length>1){for(var r=0;_>r;r+=1)this.current_line.push(e);return!0}return!1},this.add_token=function(e){this.add_space_before_token(),this.current_line.push(e)},this.add_space_before_token=function(){if(this.space_before_token&&this.current_line.get_item_count()){var n=this.current_line.last();" "!==n&&n!==e&&n!==t&&this.current_line.push(" ")}this.space_before_token=!1},this.remove_redundant_indentation=function(_){if(!_.multiline_frame&&_.mode!==s.ForInitializer&&_.mode!==s.Conditional)for(var r=_.start_line_index,i=n.length;i>r;)n[r].remove_indent(e,t),r++},this.trim=function(_){for(_=void 0===_?!1:_,this.current_line.trim(e,t);_&&n.length>1&&0===this.current_line.get_item_count();)n.pop(),this.current_line=n[n.length-1],this.current_line.trim(e,t)},this.just_added_newline=function(){return 0===this.current_line.get_item_count()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===n.length)return!0;var e=n[n.length-2];return 0===e.get_item_count()}return!1}}function a(n,_,r){function i(){var i;if(d=0,E=[],T>=h)return["","TK_EOF"];var K;K=p.length?p[p.length-1]:new l("TK_START_BLOCK","{");var x=n.charAt(T);for(T+=1;e(x,s);){if("\n"===x?(d+=1,E=[]):d&&(x===r?E.push(r):"\r"!==x&&E.push(" ")),T>=h)return["","TK_EOF"];x=n.charAt(T),T+=1}if(c.test(x)){var m=!0,b=!0,A=c;for("0"===x&&h>T&&/[Xx]/.test(n.charAt(T))?(m=!1,b=!1,x+=n.charAt(T),T+=1,A=/[0123456789abcdefABCDEF]/):(x="",T-=1);h>T&&A.test(n.charAt(T));)x+=n.charAt(T),T+=1,m&&h>T&&"."===n.charAt(T)&&(x+=n.charAt(T),T+=1,m=!1),b&&h>T&&/[Ee]/.test(n.charAt(T))&&(x+=n.charAt(T),T+=1,h>T&&/[+-]/.test(n.charAt(T))&&(x+=n.charAt(T),T+=1),b=!1,m=!1);return[x,"TK_WORD"]}if(o.isIdentifierStart(n.charCodeAt(T-1))){if(h>T)for(;o.isIdentifierChar(n.charCodeAt(T))&&(x+=n.charAt(T),T+=1,T!==h););return"TK_DOT"===K.type||"TK_RESERVED"===K.type&&e(K.text,["set","get"])||!e(x,R)?[x,"TK_WORD"]:"in"===x?[x,"TK_OPERATOR"]:[x,"TK_RESERVED"]}if("("===x||"["===x)return[x,"TK_START_EXPR"];if(")"===x||"]"===x)return[x,"TK_END_EXPR"];if("{"===x)return[x,"TK_START_BLOCK"];if("}"===x)return[x,"TK_END_BLOCK"];if(";"===x)return[x,"TK_SEMICOLON"];if("/"===x){var S="",O=!0;if("*"===n.charAt(T)){if(T+=1,h>T)for(;h>T&&("*"!==n.charAt(T)||!n.charAt(T+1)||"/"!==n.charAt(T+1))&&(x=n.charAt(T),S+=x,("\n"===x||"\r"===x)&&(O=!1),T+=1,!(T>=h)););return T+=2,O&&0===d?["/*"+S+"*/","TK_INLINE_COMMENT"]:["/*"+S+"*/","TK_BLOCK_COMMENT"]}if("/"===n.charAt(T)){for(S=x;"\r"!==n.charAt(T)&&"\n"!==n.charAt(T)&&(S+=n.charAt(T),T+=1,!(T>=h)););return[S,"TK_COMMENT"]}}if("`"===x||"'"===x||'"'===x||("/"===x||_.e4x&&"<"===x&&n.slice(T-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*\/?\s*>/))&&("TK_RESERVED"===K.type&&e(K.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===K.type&&")"===K.text&&K.parent&&"TK_RESERVED"===K.parent.type&&e(K.parent.text,["if","while","for"])||e(K.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var v=x,y=!1,w=!1;if(i=x,"/"===v)for(var g=!1;h>T&&(y||g||n.charAt(T)!==v)&&!o.newline.test(n.charAt(T));)i+=n.charAt(T),y?y=!1:(y="\\"===n.charAt(T),"["===n.charAt(T)?g=!0:"]"===n.charAt(T)&&(g=!1)),T+=1;else if(_.e4x&&"<"===v){var k=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*(\/?)\s*>/g,D=n.slice(T-1),N=k.exec(D);if(N&&0===N.index){for(var C=N[2],L=0;N;){var V=!!N[1],P=N[2],I=!!N[N.length-1]||"![CDATA["===P.slice(0,8);if(P!==C||I||(V?--L:++L),0>=L)break;N=k.exec(D)}var M=N?N.index+N[0].length:D.length;return T+=M-1,[D.slice(0,M),"TK_STRING"]}}else for(;h>T&&(y||n.charAt(T)!==v&&("`"===v||!o.newline.test(n.charAt(T))));)i+=n.charAt(T),y?(("x"===n.charAt(T)||"u"===n.charAt(T))&&(w=!0),y=!1):y="\\"===n.charAt(T),T+=1;if(w&&_.unescape_strings&&(i=a(i)),h>T&&n.charAt(T)===v&&(i+=v,T+=1,"/"===v))for(;h>T&&o.isIdentifierStart(n.charCodeAt(T));)i+=n.charAt(T),T+=1;return[i,"TK_STRING"]}if("#"===x){if(0===p.length&&"!"===n.charAt(T)){for(i=x;h>T&&"\n"!==x;)x=n.charAt(T),i+=x,T+=1;return[t(i)+"\n","TK_UNKNOWN"]}var B="#";if(h>T&&c.test(n.charAt(T))){do x=n.charAt(T),B+=x,T+=1;while(h>T&&"#"!==x&&"="!==x);return"#"===x||("["===n.charAt(T)&&"]"===n.charAt(T+1)?(B+="[]",T+=2):"{"===n.charAt(T)&&"}"===n.charAt(T+1)&&(B+="{}",T+=2)),[B,"TK_WORD"]}}if("<"===x&&"<!--"===n.substring(T-1,T+3)){for(T+=3,x="<!--";"\n"!==n.charAt(T)&&h>T;)x+=n.charAt(T),T++;return u=!0,[x,"TK_COMMENT"]}if("-"===x&&u&&"-->"===n.substring(T-1,T+2))return u=!1,T+=2,["-->","TK_COMMENT"];if("."===x)return[x,"TK_DOT"];if(e(x,f)){for(;h>T&&e(x+n.charAt(T),f)&&(x+=n.charAt(T),T+=1,!(T>=h)););return","===x?[x,"TK_COMMA"]:"="===x?[x,"TK_EQUALS"]:[x,"TK_OPERATOR"]}return[x,"TK_UNKNOWN"]}function a(e){for(var t,n=!1,_="",r=0,i="",a=0;n||r<e.length;)if(t=e.charAt(r),r++,n){if(n=!1,"x"===t)i=e.substr(r,2),r+=2;else{if("u"!==t){_+="\\"+t;continue}i=e.substr(r,4),r+=4}if(!i.match(/^[0123456789abcdefABCDEF]+$/))return e;if(a=parseInt(i,16),a>=0&&32>a){_+="x"===t?"\\x"+i:"\\u"+i;continue}if(34===a||39===a||92===a)_+="\\"+String.fromCharCode(a);else{if("x"===t&&a>126&&255>=a)return e;_+=String.fromCharCode(a)}}else"\\"===t?n=!0:_+=t;return _}var s="\n\r	 ".split(""),c=/[0-9]/,f="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: => <%= <% %> <?= <? ?>".split(" ");this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,yield,import,export".split(",");var d,E,u,p,T,h,R=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof"]);this.tokenize=function(){h=n.length,T=0,u=!1,p=[];for(var e,t,_,r=null,a=[],o=[];!t||"TK_EOF"!==t.type;){for(_=i(),e=new l(_[1],_[0],d,E);"TK_INLINE_COMMENT"===e.type||"TK_COMMENT"===e.type||"TK_BLOCK_COMMENT"===e.type||"TK_UNKNOWN"===e.type;)o.push(e),_=i(),e=new l(_[1],_[0],d,E);o.length&&(e.comments_before=o,o=[]),"TK_START_BLOCK"===e.type||"TK_START_EXPR"===e.type?(e.parent=t,r=e,a.push(e)):("TK_END_BLOCK"===e.type||"TK_END_EXPR"===e.type)&&r&&("]"===e.text&&"["===r.text||")"===e.text&&"("===r.text||"}"===e.text&&"}"===r.text)&&(e.parent=r.parent,r=a.pop()),p.push(e),t=e}return p}}var o={};!function(e){{var t="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",_=new RegExp("["+t+"]"),r=new RegExp("["+t+n+"]");e.newline=/[\n\r\u2028\u2029]/,e.isIdentifierStart=function(e){return 65>e?36===e:91>e?!0:97>e?95===e:123>e?!0:e>=170&&_.test(String.fromCharCode(e))},e.isIdentifierChar=function(e){return 48>e?36===e:58>e?!0:65>e?!1:91>e?!0:97>e?95===e:123>e?!0:e>=170&&r.test(String.fromCharCode(e))}}}(o);var s={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},l=function(e,t,n,_){this.type=e,this.text=t,this.comments_before=[],this.newlines=n||0,this.wanted_newline=n>0,this.whitespace_before=_||[],this.parent=null};"function"==typeof define&&define.amd?define([],function(){return{js_beautify:n}}):"undefined"!=typeof exports?exports.js_beautify=n:"undefined"!=typeof window?window.js_beautify=n:"undefined"!=typeof global&&(global.js_beautify=n)}();