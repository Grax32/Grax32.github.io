<!DOCTYPE html>
<html class='v2' dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='width=1100' name='viewport'/>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<script type="text/javascript">(function() { (function(){function c(a){this.t={};this.tick=function(a,c,b){var d=void 0!=b?b:(new Date).getTime();this.t[a]=[d,c];if(void 0==b)try{window.console.timeStamp("CSI/"+a)}catch(e){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var h=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:h};if(a){var b=a.navigationStart,e=a.responseStart;0<b&&e>=b&&(window.jstiming.srt=e-b)}if(a){var d=window.jstiming.load;0<b&&e>=b&&(d.tick("_wtsrt",void 0,b),d.tick("wtsrt_",
"_wtsrt",e),d.tick("tbsd_","wtsrt_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),d&&0<b&&(d.tick("_tbnd",void 0,window.chrome.csi().startE),d.tick("tbnd_","_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,d&&0<b&&(d.tick("_tbnd",void 0,window.external.startE),d.tick("tbnd_","_tbnd",b))),a&&(window.jstiming.pt=a)}catch(k){}})();window.tickAboveFold=function(c){var a=0;if(c.offsetParent){do a+=c.offsetTop;while(c=c.offsetParent)}c=a;750>=c&&window.jstiming.load.tick("aft")};var f=!1;function g(){f||(f=!0,window.jstiming.load.tick("firstScrollTime"))}window.addEventListener?window.addEventListener("scroll",g,!1):window.attachEvent("onscroll",g);
 })();</script>
<meta content='blogger' name='generator'/>
<link href='http://coding.grax.com/favicon.ico' rel='icon' type='image/x-icon'/>
<link href='http://coding.grax.com/2013/05/fFastInjector-Initial.html' rel='canonical'/>
<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/posts/default" />
<link rel="alternate" type="application/rss+xml" title="Grax Coding - RSS" href="http://coding.grax.com/feeds/posts/default?alt=rss" />
<link rel="service.post" type="application/atom+xml" title="Grax Coding - Atom" href="https://www.blogger.com/feeds/4491374480010279575/posts/default" />

<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/8080832861905813705/comments/default" />
<!--[if IE]><script type="text/javascript" src="https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js"></script>
<![endif]-->
<link href='https://plus.google.com/109602553530284384616' rel='publisher'/>
<meta content='http://coding.grax.com/2013/05/fFastInjector-Initial.html' property='og:url'/>
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<title>
Grax Coding: fFastInjector - World's Fastest Dependency Injector
</title>
<link type='text/css' rel='stylesheet' href='https://www.blogger.com/static/v1/widgets/3375562265-css_bundle_v2.css' />
<link type='text/css' rel='stylesheet' href='https://www.blogger.com/dyn-css/authorization.css?targetBlogID=4491374480010279575&zx=62632aa3-d066-45c8-a64f-539fe570b68b' />
<style id='page-skin-1' type='text/css'><!--
/* */

--></style>
<script src='http://www.grax.com/subtractjs/scripts/jquery-2.0.3.min.js' type='text/javascript'></script>
<script src='http://www.grax.com/subtractjs/scripts/subtract.min.js' type='text/javascript'></script>
<script type='text/javascript'>
        var graxMenu, graxRight, graxMainBody, switchWidth;
        $(function () {
          graxMenu = $(".grax-menu").first();
          graxRight = $(".grax-right").first();
          graxMainBody = $(".grax-main-body").first();
          switchWidth = graxMenu.outerWidth(true) + graxRight.outerWidth(true) + parseInt(graxMainBody.css("minWidth"));
          SubtractJS.BeforeResize(function (){ 
            var screenWidth;
            screenWidth = $(window).innerWidth();
            if (switchWidth != switchWidth) {
              switchWidth = graxMenu.outerWidth(true) + graxRight.outerWidth(true) + parseInt(graxMainBody.css("minWidth"));
            }
            if (screenWidth >= switchWidth) {
              graxMenu.show();
              graxRight.show();				
            } else{
              graxMenu.hide();
              graxRight.hide();			
            }
          });
          SubtractJS.UpdateLayout();
          SubtractJS.UpdateLayout();
        });
      </script>
<style>
      html,body{
        overflow: hidden;
        background: #DDEEEE;
      }
      .grax-main-body{
        overflow: auto;
        min-width: 400px;
        padding: 15px;
        margin: 0px;
        background: white;
      }
      .grax-right{
        width: 300px;
        overflow: auto;
        border-left: 1px solid black;
        padding: 15px;
        margin: 0px;
        padding-top: 30px;
      }
      .grax-menu{
        width: 150px;
        padding: 15px;
        margin: 0px;
        overflow: auto;
      }
      .grax-heading{
        padding: 15px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        background: white;
        border-bottom: 2px solid black;
      }
      .main-inner{
        padding: 0px;
      }
	.showSections{
		overflow: auto;
      }

	  h2.heading{
		padding: 5px;
      }

      .comingsoon{
        border: 0px none;
        height: 375px;
      }

      .posts{
        border: 0px none;
      }

      .hidden{
        display: none;
      }
    </style>
<script type="text/javascript">var a="&m=1",d="(^|&)m=",e="?",f="?m=1";function g(){var b=window.location.href,c=b.split(e);switch(c.length){case 1:return b+f;case 2:return 0<=c[1].search(d)?null:b+a;default:return null}}var h=navigator.userAgent;if(-1!=h.indexOf("Mobile")&&-1!=h.indexOf("WebKit")&&-1==h.indexOf("iPad")||-1!=h.indexOf("Opera Mini")||-1!=h.indexOf("IEMobile")){var k=g();k&&window.location.replace(k)};
</script><script type="text/javascript">
if (window.jstiming) window.jstiming.load.tick('headEnd');
</script></head>
<body class='loading'>
<div class='sj-fill-top grax-navbar' mobile='no'>
<div class='navbar section' id='navbar'><div class='widget Navbar' data-version='1' id='Navbar1'><script type="text/javascript">
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener('load',
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent('onload', function(){ object[attribute] = val; });
      }
    }
  </script>
<div id="navbar-iframe-container"></div>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript">
        gapi.load("gapi.iframes:gapi.iframes.style.bubble", function() {
          if (gapi.iframes && gapi.iframes.getContext) {
            gapi.iframes.getContext().openChild({
                url: 'https://www.blogger.com/navbar.g?targetBlogID\x3d4491374480010279575\x26blogName\x3dGrax+Coding\x26publishMode\x3dPUBLISH_MODE_HOSTED\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttp://coding.grax.com/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttp://coding.grax.com/\x26targetPostID\x3d8080832861905813705\x26blogPostOrPageUrl\x3dhttp://coding.grax.com/2013/05/fFastInjector-Initial.html\x26vt\x3d7248186260272893600',
                where: document.getElementById("navbar-iframe-container"),
                id: "navbar-iframe"
            });
          }
        });
      </script><script type="text/javascript">
(function() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//pagead2.googlesyndication.com/pagead/js/google_top_exp.js';
var head = document.getElementsByTagName('head')[0];
if (head) {
head.appendChild(script);
}})();
</script>
</div></div>
</div>
<div class='sj-fill-right grax-right hidden' mobile='no'>
<h2 class='heading sj-fill-top'>
        Coming Soon
      </h2>
<iframe class='comingsoon sj-fill-top' src='http://www.grax.com/blog/comingsoon.html'></iframe>
<div class='showSections sj-fill'>
<div class='sidebar section' id='sidebar-right-1'></div>
<div class='sidebar section' id='sidebar-right-2-1'><div class='widget Profile' data-version='1' id='Profile1'>
<h2>
About Me
</h2>
<div class='widget-content'>
<a href='https://plus.google.com/109602553530284384616'>
<img alt='My Photo' class='profile-img' height='80' src='//lh6.googleusercontent.com/-PFJCRZVwqqM/AAAAAAAAAAI/AAAAAAAAlhc/DTzjrnJenT4/s80-c/photo.jpg' width='80'/>
</a>
<dl class='profile-datablock'>
<dt class='profile-data'>
<a class='profile-name-link g-profile' href='https://plus.google.com/109602553530284384616' rel='author' style='background-image: url(//www.google.com/images/icons/ui/gprofile_button-16.png);'>
David Walker
</a>
<br/>
<div class='g-follow' data-annotation='bubble' data-height='20' data-href='https://plus.google.com/109602553530284384616'></div>
</dt>
<dd class='profile-textblock'>
I am a technical architect with AgileThought. &#160;In my spare time I research and develop with C#, <a href="http://ASP.NET" target="_blank">ASP.NET</a>, Linux, Raspberry Pi. &#160;I also make videos and share them on the <a href="http://foo.network/" rel="nofollow" target="_blank">Foo Network</a>
</dd>
</dl>
<a class='profile-link' href='https://plus.google.com/109602553530284384616' rel='author'>
View my complete profile
</a>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=4491374480010279575&widgetType=Profile&widgetId=Profile1&action=editWidget&sectionId=sidebar-right-2-1' onclick='return _WidgetManager._PopupConfig(document.getElementById("Profile1"));' target='configProfile1' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div>
</div></div>
<div class='sidebar section' id='sidebar-right-2-2'><div class='widget Followers' data-version='1' id='Followers1'>
<h2 class='title'>Followers</h2>
<div class='widget-content'>
<div id='Followers1-wrapper'>
<div style='margin-right:2px;'>
<script type="text/javascript">
        if (!window.google || !google.friendconnect) {
          document.write('<script type="text/javascript"' +
              'src="//www.google.com/friendconnect/script/friendconnect.js">' +
              '</scr' + 'ipt>');
        }
      </script>
<script type="text/javascript">
      if (!window.registeredBloggerCallbacks) {
        window.registeredBloggerCallbacks = true;

        

        
        gadgets.rpc.register('requestReload', function() {
          document.location.reload();
        });

        
        gadgets.rpc.register('requestSignOut', function(siteId) {
          
          google.friendconnect.container.openSocialSiteId = siteId;
          google.friendconnect.requestSignOut();
        });
      }
    </script>
<script type="text/javascript">
    
    function registerGetBlogUrls() {
      gadgets.rpc.register('getBlogUrls', function() {
        var holder = {};
        
          
            
            
              holder.currentPost = "https://www.blogger.com/feeds/4491374480010279575/posts/default/8080832861905813705";
            
            
            
              holder.currentComments = "https://www.blogger.com/feeds/4491374480010279575/8080832861905813705/comments/default";
            
            holder.currentPostUrl = "";
            holder.currentPostId = 8080832861905813705
          
          
          
            holder.postFeed = "https://www.blogger.com/feeds/4491374480010279575/posts/default";
          
          
          
            holder.commentFeed = "https://www.blogger.com/feeds/4491374480010279575/comments/default";
          
          holder.currentBlogUrl = "http://coding.grax.com/";
          holder.currentBlogId = "4491374480010279575";
        
        return holder;
      });
    }
  </script>
<script type="text/javascript">
  if (!window.registeredCommonBloggerCallbacks) {
    window.registeredCommonBloggerCallbacks = true;

    gadgets.rpc.register('resize_iframe', function(height) {
      var el = document.getElementById(this['f']);
      if (el) {
        el.style.height = height + 'px';
      }
    });

    
    gadgets.rpc.register('set_pref', function() {});

    registerGetBlogUrls();
  }
  </script>
<div id="div-pbrardecmtzt" style="width: 100%; "></div>
<script type="text/javascript">
    var skin = {};
    skin['FACE_SIZE'] = '32';
    skin['HEIGHT'] = "260";
    skin['BORDER_COLOR'] = "transparent";
    skin['ENDCAP_BG_COLOR'] = "transparent";
    skin['ENDCAP_TEXT_COLOR'] = "#000000";
    skin['ENDCAP_LINK_COLOR'] = "#000000";
    
    skin['CONTENT_BG_COLOR'] = "transparent";
    skin['CONTENT_LINK_COLOR'] = "#000000";
    skin['CONTENT_TEXT_COLOR'] = "#000000";
    skin['CONTENT_SECONDARY_LINK_COLOR'] = "#FFFFFF";
    skin['CONTENT_SECONDARY_TEXT_COLOR'] = "#000000";
    skin['CONTENT_HEADLINE_COLOR'] = "#000000";
    google.friendconnect.container.setParentUrl("/");
    google.friendconnect.container["renderMembersGadget"](
    {id: "div-pbrardecmtzt",
     height: 260,
     
     
     
     site: "17242338624895679402",
     locale: 'en' },
     skin);
  </script>
</div>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=4491374480010279575&widgetType=Followers&widgetId=Followers1&action=editWidget&sectionId=sidebar-right-2-2' onclick='return _WidgetManager._PopupConfig(document.getElementById("Followers1"));' target='configFollowers1' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div>
</div></div>
<div class='sidebar section' id='sidebar-right-2-3'></div>
<div class='sidebar section' id='sidebar-right-2-4'></div>
<div class='sidebar section' id='sidebar-right-3'></div>
</div>
</div>
<div class='sj-fill-left grax-menu hidden' id='graxMenu' mobile='no'>
<h2 class='heading sj-fill-top'>
        Posts
      </h2>
<iframe class='posts sj-fill' src='http://www.grax.com/blog/posts.html'></iframe>
</div>
<div class='sj-fill-top grax-heading'>
<h2>
        Grax Coding
      </h2>
</div>
<div class='sj-fill grax-main-body'>
<div class='body-fauxcolumns'>
<div class='fauxcolumn-outer body-fauxcolumn-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<div class='content'>
<div class='content-fauxcolumns'>
<div class='fauxcolumn-outer content-fauxcolumn-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<div class='content-outer'>
<div class='content-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left content-fauxborder-left'>
<div class='fauxborder-right content-fauxborder-right'></div>
<div class='content-inner'>
<div class='tabs-outer'>
<div class='tabs-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left tabs-fauxborder-left'>
<div class='fauxborder-right tabs-fauxborder-right'></div>
<div class='region-inner tabs-inner'>
<div class='tabs section' id='crosscol'></div>
<div class='tabs section' id='crosscol-overflow'></div>
</div>
</div>
<div class='tabs-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='main-outer'>
<div class='main-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left main-fauxborder-left'>
<div class='fauxborder-right main-fauxborder-right'></div>
<div class='region-inner main-inner'>
<div class='columns fauxcolumns'>
<div class='fauxcolumn-outer fauxcolumn-center-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='fauxcolumn-outer fauxcolumn-left-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<div class='fauxcolumn-outer fauxcolumn-right-outer'>
<div class='cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left'>
<div class='fauxborder-right'></div>
<div class='fauxcolumn-inner'>
</div>
</div>
<div class='cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<!-- corrects IE6 width calculation -->
<div class='columns-inner'>
<div class='column-center-outer'>
<div class='column-center-inner'>
<div class='main section' id='main'><div class='widget Blog' data-version='1' id='Blog1'>
<div class='blog-posts hfeed'>

                                          <div class="date-outer">
                                        
<h2 class='date-header'>
<span>
Tuesday, May 28, 2013
</span>
</h2>

                                          <div class="date-posts">
                                        
<div class='post-outer'>
<div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<meta content='4491374480010279575' itemprop='blogId'/>
<meta content='8080832861905813705' itemprop='postId'/>
<a name='8080832861905813705'></a>
<h3 class='post-title entry-title' itemprop='name'>
fFastInjector - World's Fastest Dependency Injector
</h3>
<div class='post-header'>
<div class='post-header-line-1'></div>
</div>
<div class='post-body entry-content' id='post-body-8080832861905813705' itemprop='description articleBody'>
<span style="color: red;">(2013-6-16: See updated lifestyle section for details on singleton lifestyle)</span><br />
<h2>
What is it?</h2>
fFastInjector is the world's fastest .NET dependency injector/service locator. <br />
<br />
In order to prove that it is the fastest, I downloaded the code that accompanies&nbsp;<a href="http://www.palmmedia.de/blog/2011/8/30/ioc-container-benchmark-performance-comparison" target="_blank">this blog post</a>&nbsp;and added an adapter for fFastInjector. &nbsp;In my tests, it beat every other dependency injector on the list.<br />
<h2>
Why is it awesome?</h2>
fFastInjector is extremely fast and lightweight. &nbsp;It is the fastest and one of the smallest dependency injectors out there. It is easy to add to your project using nuGet, set up a few mappings and be on your way.<br />
<h2>
How do I use it?</h2>
<div>
<div>
Add to your &nbsp;project using nuGet's Install-Package command<br />
<pre><span style="background-color: #cccccc;">Install-Package fFastInjector</span></pre>
<br />
Set resolver for interface</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;MyInterface, MyConcreteClass&gt;();</span></pre>
<div>
<br />
Resolve interface. &nbsp;If no resolver is set for an interface, an exception is thrown.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyInterface&gt;();</span></pre>
<div>
<br />
Resolve concrete class. &nbsp;If no resolver is set for a concrete class, this class will be resolved by looking for the constructor with the fewest parameters (preference given to the parameterless constructor). &nbsp;If there are parameters, fFastInjector will attempt to resolve them as well. &nbsp;If they cause an infinite loop with their dependencies, fFastInjector will throw an exception.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyConcreteClass&gt;();</span></pre>
<div>
<br />
Resolve concrete class using a specific expression.<br />
<br />
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;MyConcreteClass&gt;(() =&gt; new MyConcreteClass(new Dependency()));</span></pre>
<pre><span style="background-color: #cccccc;">var result = Injector.Resolve&lt;MyConcreteClass&gt;();</span></pre>
<br />
Resolve class or interface and additionally set a property. &nbsp;This first method will simply use fFastInjector to resolve the value for MyProperty based on the type of MyProperty.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector
&nbsp; &nbsp; &nbsp;.SetResolver&lt;MyInterface, MyTestClass&gt;()
&nbsp; &nbsp; &nbsp;.AddPropertyInjector(v =&gt; v.MyProperty);</span>
</pre>
<div>
<br />
Resolve class or interface and additionally set a property. &nbsp;This second method allows you to specify and expression that will be evaluated to set MyProperty.</div>
<div>
<br /></div>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector
&nbsp; &nbsp; &nbsp; .SetResolver&lt;MyInterface, MyTestClass&gt;()
&nbsp; &nbsp; &nbsp; .AddPropertyInjector(v =&gt; v.MyOtherProperty, () =&gt; new MyPropertyClass());</span></pre>
<div>
<br /></div>
</div>
<h3>
Questions (that I anticipated you might ask)</h3>
<h4>
Is it ready for production use?</h4>
There's not a lot of code and my tests have 100% code coverage.<br />
<br />
I do recommend it for production use, assuming you have a proper test phase before you go to production. &nbsp;Once I have used it in production for a reasonable time, I will release the 1.0 version.<br />
<br />
<h4>
What lifestyles does it support?</h4>
Hippy, banker, or metalhead. &nbsp;Kidding. &nbsp;fFastInjector supports Transient and Singleton lifestyles. &nbsp;No lifestyles are specified, but provided your resolver calls "new" for transient lifestyles and just returns an existing instance for the singleton lifestyle, all should be well. &nbsp;I will be looking into other lifestyles but I expect them to be built as add-ons instead of in the base fFastInjector. &nbsp;I expect to build an add-on to support asp.net/MVC that may support a single-request lifestyle and automatically configure controller resolution.<br />
<br />
<span style="color: #cc0000;"><b>Update:</b></span><br />
&nbsp; The next release adds a command to specifically set a singleton resolver. &nbsp;Until that is available, create a static variable, instantiate your singleton, and use the following to resolve:<br />
<pre><span style="background-color: #cccccc;">myStaticVar = new MyConcreteSingleton();</span></pre>
<pre><span style="background-color: #cccccc;">fFastInjector.Injector.SetResolver&lt;IMyInterface&gt;(() =&gt; myStaticVar);</span></pre>
<h4>
Dependency Injection, Inversion of Control, Service Locator, what does it all mean?</h4>
Inversion of control is the technique of making object dependencies known at run-time instead of compile-time. &nbsp;This is accomplished by creating a contract or interface between objects and then using a run-time tool, such as fFastInjector, to determine the dependency for that contract.<br />
<br />
Dependency injection is one technique for inversion of control. &nbsp;The class is created with injection points in the constructor or properties and then those dependencies are injected when the class is constructed. &nbsp;Classes built using this technique have no dependency on the dependency injector, <br />
<br />
To use fFastInjector this way<br />
<br />
<ol>
<li>Create a class with a constructor that has parameters consisting of interfaces to your dependencies. &nbsp;</li>
<li>Call Injector.SetResolver for each of the dependencies</li>
<li>Call Injector.Resolve&lt;MyConcreteClass&gt;() as needed</li>
</ol>
<br />
<br />
Service location is a technique where dependencies are resolved as needed. &nbsp;The class calls the service locator with the interface needed and the service locator returns a concrete reference for that interface.<br />
<br />
To use fFastInjector this way, call Injector.Resolve&lt;IMyInterface&gt;() anywhere in your code that you need IMyInterface.<br />
<br />
<h3>
Links</h3>
Source -&nbsp;<a href="http://g.grax.com/10xodPR">https://ffastinjector.codeplex.com/</a><br />
NuGet -&nbsp;<a href="http://g.grax.com/152oaf6">https://nuget.org/packages/fFastInjector/</a><br />
Grax.com - <a href="http://g.grax.com/11xRLKr">http://g.grax.com/11xRLKr</a>
<div style='clear: both;'></div>
</div>
<div class='post-footer'>
<div class='post-footer-line post-footer-line-1'>
<span class='post-author vcard'>
Posted by
<span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
<meta content='https://plus.google.com/109602553530284384616' itemprop='url'/>
<a class='g-profile' href='https://plus.google.com/109602553530284384616' rel='author' title='author profile'>
<span itemprop='name'>
David Walker
</span>
</a>
</span>
</span>
<span class='post-timestamp'>
at
<meta content='http://coding.grax.com/2013/05/fFastInjector-Initial.html' itemprop='url'/>
<a class='timestamp-link' href='http://coding.grax.com/2013/05/fFastInjector-Initial.html' rel='bookmark' title='permanent link'>
<abbr class='published' itemprop='datePublished' title='2013-05-28T07:47:00-05:00'>
7:47 AM
</abbr>
</a>
</span>
<span class='post-comment-link'>
</span>
<span class='post-icons'>
<span class='item-control blog-admin pid-1584415331'>
<a href='https://www.blogger.com/post-edit.g?blogID=4491374480010279575&postID=8080832861905813705&from=pencil' title='Edit Post'>
<img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
</a>
</span>
</span>
<div class='post-share-buttons goog-inline-block'>
<a class='goog-inline-block share-button sb-email' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8080832861905813705&target=email' target='_blank' title='Email This'>
<span class='share-button-link-text'>
Email This
</span>
</a>
<a class='goog-inline-block share-button sb-blog' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8080832861905813705&target=blog' onclick='window.open(this.href, "_blank", "height=270,width=475"); return false;' target='_blank' title='BlogThis!'>
<span class='share-button-link-text'>
BlogThis!
</span>
</a>
<a class='goog-inline-block share-button sb-twitter' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8080832861905813705&target=twitter' target='_blank' title='Share to Twitter'>
<span class='share-button-link-text'>
Share to Twitter
</span>
</a>
<a class='goog-inline-block share-button sb-facebook' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8080832861905813705&target=facebook' onclick='window.open(this.href, "_blank", "height=430,width=640"); return false;' target='_blank' title='Share to Facebook'>
<span class='share-button-link-text'>
Share to Facebook
</span>
</a>
<div class='goog-inline-block dummy-container'>
<g:plusone source='blogger:blog:plusone' href='http://coding.grax.com/2013/05/fFastInjector-Initial.html' size='medium' width='300' annotation='inline'/>
</div>
</div>
</div>
<div class='post-footer-line post-footer-line-2'>
<span class='post-labels'>
Labels:
<a href='http://coding.grax.com/search/label/dependency%20injection' rel='tag'>
dependency injection
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/ioc' rel='tag'>
ioc
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/ioc%20container' rel='tag'>
ioc container
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/service%20locator' rel='tag'>
service locator
</a>
</span>
</div>
<div class='post-footer-line post-footer-line-3'>
<span class='post-location'>
Location:
<a href='https://maps.google.com/maps?q=Lincoln,+NE,+USA@40.806862,-96.68167900000003&z=10' target='_blank'>
Lincoln, NE, USA
</a>
</span>
</div>
</div>
</div>
<script src='https://apis.google.com/js/plusone.js' type='text/javascript'></script>
<div class='cmt_iframe_holder' data-href='http://coding.grax.com/2013/05/fFastInjector-Initial.html' data-viewtype='FILTERED_POSTMOD'></div>
</div>
<div class='inline-ad'>
<script type="text/javascript"><!--
google_ad_client="pub-6204835866995990";
google_ad_host="pub-1556223355139109";
google_alternate_ad_url="http://img2.blogblog.com/img/blogger_ad.html";
google_ad_width=300;
google_ad_height=250;
google_ad_format="300x250_as";
google_ad_type="text_image";
google_ad_host_channel="0001+S0009+L0007";
google_color_border="FFFFFF";
google_color_bg="FFFFFF";
google_color_link="2288BB";
google_color_url="666666";
google_color_text="666666";
//--></script>
<script type="text/javascript"
  src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>

                                        </div></div>
                                      
</div>
<div class='blog-pager' id='blog-pager'>
<span id='blog-pager-newer-link'>
<a class='blog-pager-newer-link' href='http://coding.grax.com/2013/06/how-fast-is-ffastinjector.html' id='Blog1_blog-pager-newer-link' title='Newer Post'>
Newer Post
</a>
</span>
<span id='blog-pager-older-link'>
<a class='blog-pager-older-link' href='http://coding.grax.com/2013/05/linking-db2-to-ms-sql-server.html' id='Blog1_blog-pager-older-link' title='Older Post'>
Older Post
</a>
</span>
<a class='home-link' href='http://coding.grax.com/'>
Home
</a>
</div>
<div class='clear'></div>
<div class='post-feeds'>
<div class='feed-links'>
Subscribe to:
<a class='feed-link' href='http://coding.grax.com/feeds/8080832861905813705/comments/default' target='_blank' type='application/atom+xml'>
Post Comments
                                        (
                                        Atom
                                        )
                                      </a>
</div>
</div>
<script type="text/javascript">window.___gcfg = {'lang': 'en'};</script>
</div></div>
</div>
</div>
<div class='column-left-outer'>
<div class='column-left-inner'>
<aside>
</aside>
</div>
</div>
<div class='column-right-outer'>
<div class='column-right-inner'>
<aside>
</aside>
</div>
</div>
</div>
<div style='clear: both'></div>
<!-- columns -->
</div>
<!-- main -->
</div>
</div>
<div class='main-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
<footer>
<div class='footer-outer'>
<div class='footer-cap-top cap-top'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
<div class='fauxborder-left footer-fauxborder-left'>
<div class='fauxborder-right footer-fauxborder-right'></div>
<div class='region-inner footer-inner'>
<div class='foot section' id='footer-1'></div>
<div class='foot section' id='footer-2-1'></div>
<div class='foot section' id='footer-2-2'></div>
<div class='foot section' id='footer-2-3'></div>
<div class='foot section' id='footer-2-4'></div>
<!-- outside of the include in order to lock Attribution widget -->
<div class='foot section' id='footer-3'><div class='widget Attribution' data-version='1' id='Attribution1'>
<div class='widget-content' style='text-align: center;'>
Powered by <a href='https://www.blogger.com' target='_blank'>Blogger</a>.
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=4491374480010279575&widgetType=Attribution&widgetId=Attribution1&action=editWidget&sectionId=footer-3' onclick='return _WidgetManager._PopupConfig(document.getElementById("Attribution1"));' target='configAttribution1' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div></div>
</div>
</div>
<div class='footer-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</footer>
<!-- content -->
</div>
</div>
<div class='content-cap-bottom cap-bottom'>
<div class='cap-left'></div>
<div class='cap-right'></div>
</div>
</div>
</div>
<script type='text/javascript'>
        window.setTimeout(function() {
          document.body.className = document.body.className.replace('loading', '');
                                                                    }, 10);
      </script>
<div class='section' id='graxMenuInline'></div>
</div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40393677-1', 'grax.com');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
</script>
<script type="text/javascript">
if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
</script><script type="text/javascript" src="https://www.blogger.com/static/v1/widgets/2129857996-widgets.js"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type='text/javascript'>
if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV2";window['blogger_blog_id'] = '4491374480010279575';BLOG_attachCsiOnload('item_'); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d4491374480010279575','//coding.grax.com/2013/05/fFastInjector-Initial.html','4491374480010279575');
_WidgetManager._SetDataContext([{'name': 'options', 'data': {}}, {'name': 'blog', 'data': {'blogId': '4491374480010279575', 'bloggerUrl': 'https://www.blogger.com', 'title': 'Grax Coding', 'pageType': 'item', 'postId': '8080832861905813705', 'url': 'http://coding.grax.com/2013/05/fFastInjector-Initial.html', 'canonicalUrl': 'http://coding.grax.com/2013/05/fFastInjector-Initial.html', 'homepageUrl': 'http://coding.grax.com/', 'canonicalHomepageUrl': 'http://coding.grax.com/', 'blogspotFaviconUrl': 'http://coding.grax.com/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'analyticsAccountNumber': '', 'useUniversalAnalytics': false, 'pageName': 'fFastInjector - World\x27s Fastest Dependency Injector', 'pageTitle': 'Grax Coding: fFastInjector - World\x27s Fastest Dependency Injector', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Grax Coding - RSS\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/4491374480010279575/posts/default\x22 /\x3e\n\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/8080832861905813705/comments/default\x22 /\x3e\n', 'meTag': '', 'openIdOpTag': '', 'googleProfileUrl': 'https://plus.google.com/109602553530284384616', 'latencyHeadScript': '\x3cscript type\x3d\x22text/javascript\x22\x3e(function() { (function(){function c(a){this.t\x3d{};this.tick\x3dfunction(a,c,b){var d\x3dvoid 0!\x3db?b:(new Date).getTime();this.t[a]\x3d[d,c];if(void 0\x3d\x3db)try{window.console.timeStamp(\x22CSI/\x22+a)}catch(e){}};this.tick(\x22start\x22,null,a)}var a;window.performance\x26\x26(a\x3dwindow.performance.timing);var h\x3da?new c(a.responseStart):new c;window.jstiming\x3d{Timer:c,load:h};if(a){var b\x3da.navigationStart,e\x3da.responseStart;0\x3cb\x26\x26e\x3e\x3db\x26\x26(window.jstiming.srt\x3de-b)}if(a){var d\x3dwindow.jstiming.load;0\x3cb\x26\x26e\x3e\x3db\x26\x26(d.tick(\x22_wtsrt\x22,void 0,b),d.tick(\x22wtsrt_\x22,\n\x22_wtsrt\x22,e),d.tick(\x22tbsd_\x22,\x22wtsrt_\x22))}try{a\x3dnull,window.chrome\x26\x26window.chrome.csi\x26\x26(a\x3dMath.floor(window.chrome.csi().pageT),d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.chrome.csi().startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),null\x3d\x3da\x26\x26window.gtbExternal\x26\x26(a\x3dwindow.gtbExternal.pageT()),null\x3d\x3da\x26\x26window.external\x26\x26(a\x3dwindow.external.pageT,d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.external.startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),a\x26\x26(window.jstiming.pt\x3da)}catch(k){}})();window.tickAboveFold\x3dfunction(c){var a\x3d0;if(c.offsetParent){do a+\x3dc.offsetTop;while(c\x3dc.offsetParent)}c\x3da;750\x3e\x3dc\x26\x26window.jstiming.load.tick(\x22aft\x22)};var f\x3d!1;function g(){f||(f\x3d!0,window.jstiming.load.tick(\x22firstScrollTime\x22))}window.addEventListener?window.addEventListener(\x22scroll\x22,g,!1):window.attachEvent(\x22onscroll\x22,g);\n })();\x3c/script\x3e', 'mobileHeadScript': '', 'adsenseClientId': 'pub-6204835866995990', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'ieCssRetrofitLinks': '\x3c!--[if IE]\x3e\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js\x22\x3e\x3c/script\x3e\n\x3c![endif]--\x3e', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/7f2e3ee2033f134d', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n', 'tf': ''}}, {'name': 'features', 'data': {'openGraphMetadata': true, 'widgetVisibility': true}}, {'name': 'messages', 'data': {'adsGoHere': 'Ads go here', 'archive': 'Archive', 'authorSaid': '%1 said...', 'authorSaidWithLink': '\x3ca href\x3d\x22%2\x22 rel\x3d\x22nofollow\x22\x3e%1\x3c/a\x3e said...', 'blogArchive': 'Blog Archive', 'by': 'By', 'byAuthor': 'By %1', 'byAuthorLink': 'By \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'configurationRequired': 'Configuration required', 'deleteBacklink': 'Delete Backlink', 'deleteComment': 'Delete Comment', 'edit': 'Edit', 'emailAddress': 'Email Address', 'getEmailNotifications': 'Get email notifications', 'hidden': 'Hidden', 'keepReading': 'Keep reading', 'labels': 'Labels', 'loadMorePosts': 'Load more posts', 'loading': 'Loading...', 'myBlogList': 'My Blog List', 'myFavoriteSites': 'My favorite sites', 'newer': 'Newer', 'newerPosts': 'Newer Posts', 'newest': 'Newest', 'noResultsFound': 'No results found', 'noTitle': 'No title', 'numberOfComments': '{numComments, plural, \x3d0 {No comments} \x3d1 {1 comment} other {# comments}}', 'older': 'Older', 'olderPosts': 'Older Posts', 'oldest': 'Oldest', 'onlyTeamMembersCanComment': 'Note: Only a member of this blog may post a comment.', 'popularPosts': 'Popular Posts', 'popularPostsFromThisBlog': 'Popular posts from this blog', 'postAComment': 'Post a Comment', 'postedBy': 'Posted by', 'postedByAuthor': 'Posted by %1', 'postedByAuthorLink': 'Posted by \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'readMore': 'Read more', 'reportAbuse': 'Report Abuse', 'search': 'Search', 'searchBlog': 'Search blog', 'share': 'Share', 'showAll': 'Show all', 'showLess': 'Show less', 'showMore': 'Show more', 'someOfMyFavoriteSites': 'Some of my favorite sites', 'subscribe': 'Subscribe', 'subscribeTo': 'Subscribe to:', 'subscribeToThisBlog': 'Subscribe to this blog', 'theresNothingHere': 'There\x27s nothing here!', 'viewAll': 'View all', 'visible': 'Visible', 'visitProfile': 'Visit profile', 'widgetNotAvailableInPreview': 'This content is not available in blog preview.', 'widgetNotAvailableOnHttps': 'This content is not yet available over encrypted connections.'}}, {'name': 'skin', 'data': {'vars': {}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'title': 'fFastInjector - World\x27s Fastest Dependency Injector', 'description': '(2013-6-16: See updated lifestyle section for details on singleton lifestyle)   What is it?  fFastInjector is the world\x26#39;s fastest .NET d...'}}]);
_WidgetManager._RegisterWidget('_NavbarView', new _WidgetInfo('Navbar1', 'navbar', null, document.getElementById('Navbar1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_ProfileView', new _WidgetInfo('Profile1', 'sidebar-right-2-1', null, document.getElementById('Profile1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_FollowersView', new _WidgetInfo('Followers1', 'sidebar-right-2-2', null, document.getElementById('Followers1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'legacyCommentModerationUrl': 'https://www.blogger.com/moderate-legacy-comment.g?blogID\x3d4491374480010279575', 'iframeCommentsId': 'gpluscomments', 'viewType': 'FILTERED_POSTMOD', 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/2863887394-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/306752634-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_AttributionView', new _WidgetInfo('Attribution1', 'footer-3', null, document.getElementById('Attribution1'), {'attribution': 'Powered by \x3ca href\x3d\x27https://www.blogger.com\x27 target\x3d\x27_blank\x27\x3eBlogger\x3c/a\x3e.'}, 'displayModeFull'));
</script>
</body>
</html>