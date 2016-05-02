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
<link href='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' rel='canonical'/>
<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/posts/default" />
<link rel="alternate" type="application/rss+xml" title="Grax Coding - RSS" href="http://coding.grax.com/feeds/posts/default?alt=rss" />
<link rel="service.post" type="application/atom+xml" title="Grax Coding - Atom" href="https://www.blogger.com/feeds/4491374480010279575/posts/default" />

<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/8650017534151724687/comments/default" />
<!--[if IE]><script type="text/javascript" src="https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js"></script>
<![endif]-->
<link href='http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg' rel='image_src'/>
<link href='https://plus.google.com/109602553530284384616' rel='publisher'/>
<meta content='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' property='og:url'/>
<meta content='http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/w1200-h630-p-nu/IMG_3941crop.jpg' property='og:image'/>
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<title>
Grax Coding: fFastInjector 1.0.1 is here.  Brace yourself!
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
                url: 'https://www.blogger.com/navbar.g?targetBlogID\x3d4491374480010279575\x26blogName\x3dGrax+Coding\x26publishMode\x3dPUBLISH_MODE_HOSTED\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttp://coding.grax.com/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttp://coding.grax.com/\x26targetPostID\x3d8650017534151724687\x26blogPostOrPageUrl\x3dhttp://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html\x26vt\x3d-3031136598951456202',
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
        
          
            
            
              holder.currentPost = "https://www.blogger.com/feeds/4491374480010279575/posts/default/8650017534151724687";
            
            
            
              holder.currentComments = "https://www.blogger.com/feeds/4491374480010279575/8650017534151724687/comments/default";
            
            holder.currentPostUrl = "";
            holder.currentPostId = 8650017534151724687
          
          
          
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
<div id="div-mr6859zkl1va" style="width: 100%; "></div>
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
    {id: "div-mr6859zkl1va",
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
Sunday, January 18, 2015
</span>
</h2>

                                          <div class="date-posts">
                                        
<div class='post-outer'>
<div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<meta content='http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg' itemprop='image_url'/>
<meta content='4491374480010279575' itemprop='blogId'/>
<meta content='8650017534151724687' itemprop='postId'/>
<a name='8650017534151724687'></a>
<h3 class='post-title entry-title' itemprop='name'>
fFastInjector 1.0.1 is here.  Brace yourself!
</h3>
<div class='post-header'>
<div class='post-header-line-1'></div>
</div>
<div class='post-body entry-content' id='post-body-8650017534151724687' itemprop='description articleBody'>
fFastInjector 1.0.1 is here! &nbsp;(I skipped the 1.0.0 release since that programs with that version number always seems to have problems.)<br />
<br />
<h3>
<a href="http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg" imageanchor="1" style="clear: right; float: right; margin-bottom: 1em; margin-left: 1em;"><img border="0" src="http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg" height="200" width="191" /></a>Awesome! What is it?</h3>
<div>
fFastInjector is one of the fastest and smallest dependency injectors available for .NET. &nbsp;It is available as a portable class library that targets .NET framework 4, Windows 8/8.1, and Windows Phone 8.1 or as a file that compiles into your dll.<br />
<br />
<h4>
Version 1.0.1 features</h4>
Version 1.0.1 adds generic resolution, so that if we specify IEnumerable&lt;T&gt; resolves to List&lt;T&gt;, and we ask for a resolution for type IEnumerable&lt;Cat&gt; we will get instance of List&lt;Cat&gt;.</div>
<div>
<br />
Additionally, it adds <a href="https://ffastinjector.codeplex.com/wikipage?title=Generic%20Matching%20Configuration&amp;referringTitle=Documentation">constrained matching</a>, so that I can specify that IEnumerable&lt;Cat&gt; can return a different type than IEnumerable&lt;Dog&gt;.</div>
<h3>
How do I Start Using It?</h3>
<div>
fFastInjector comes in three NuGet packages</div>
<div>
<ul>
<li>fFastInjector-Embedded</li>
<ul>
<li>This package add the Injector.cs file to your project so that compiles into your dll instead of creating a dependency on an outside dll</li>
</ul>
<li>fFastInjector-MVC</li>
<ul>
<li>This package installs fFastInjector for MVC 5 projects. &nbsp;You will need to add a call to&nbsp;<span style="color: #253340; font-family: monospace; font-size: 11px; line-height: 19.0176963806152px;">fFastInjector.fFastInjectorControllerFactory.RegisterControllerFactory();&nbsp;</span>into your Application_Start method in global.asax</li>
</ul>
<li>fFastInjector</li>
<ul>
<li>Installs the dll as a reference in your project</li>
</ul>
</ul>
<div>
<h3>
Hey! That Constrained Generic Matching is Awesome! but I don't want to switch from NInject, Unity, Whatever</h3>
<div>
Just configure a pass-through from your generic resolution in your favorite dependency injection engine into fFastInjector.</div>
<div>
<br /></div>
<div>
For example, the code below configures Unity to pass through any requests for resolutions of IEnumerable&lt;&gt; to fFastInjector.</div>
<div>
<br /></div>
<pre>container.RegisterType(typeof(IEnumerable&lt;&gt;),
     new InjectionFactory((c, type, s) =&gt; fFastInjector.Injector.Resolve(type)));</pre>
<div>
<br /></div>
<div>
and the following code configures fFastInjector to return a List&lt;T&gt; for an IEnumerable&lt;T&gt; unless T inherits from Animal or Cat. &nbsp;Note that Cat inherits from Animal, so types that inherit from Cat will return a CatList since Cat is the more specific type.</div>
<div>
<br /></div>
<pre>fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(List&lt;&gt;));
fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(AnimalList&lt;&gt;), typeof(Animal));
fFastInjector.Injector.SetGenericResolver(typeof(IEnumerable&lt;&gt;), typeof(CatList&lt;&gt;), typeof(Cat));</pre>
</div>
<h4>
Ewww! Why is it all Staticky?</h4>
</div>
<div>
fFastInjector uses static variables to store information about resolutions. &nbsp;There is no fFastInjector instance anywhere, just static methods and variables.<br />
<br />
fFastInjector uses a technique with generic static variables to auto-generate, store, and execute the dependency resolution. &nbsp;</div>
<div>
<br /></div>
<div>
Since a static variable is one that exists from the moment it is created until the end of your application's lifetime and dependency resolution is something that happens over the application's entire lifetime it makes sense to store the resolution information and the generated resolver functions in generic static variables.</div>
<div>
<br /></div>
<div>
<br /></div>
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
<meta content='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' itemprop='url'/>
<a class='timestamp-link' href='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' rel='bookmark' title='permanent link'>
<abbr class='published' itemprop='datePublished' title='2015-01-18T09:16:00-06:00'>
9:16 AM
</abbr>
</a>
</span>
<span class='post-comment-link'>
</span>
<span class='post-icons'>
<span class='item-control blog-admin pid-1584415331'>
<a href='https://www.blogger.com/post-edit.g?blogID=4491374480010279575&postID=8650017534151724687&from=pencil' title='Edit Post'>
<img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
</a>
</span>
</span>
<div class='post-share-buttons goog-inline-block'>
<a class='goog-inline-block share-button sb-email' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8650017534151724687&target=email' target='_blank' title='Email This'>
<span class='share-button-link-text'>
Email This
</span>
</a>
<a class='goog-inline-block share-button sb-blog' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8650017534151724687&target=blog' onclick='window.open(this.href, "_blank", "height=270,width=475"); return false;' target='_blank' title='BlogThis!'>
<span class='share-button-link-text'>
BlogThis!
</span>
</a>
<a class='goog-inline-block share-button sb-twitter' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8650017534151724687&target=twitter' target='_blank' title='Share to Twitter'>
<span class='share-button-link-text'>
Share to Twitter
</span>
</a>
<a class='goog-inline-block share-button sb-facebook' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=8650017534151724687&target=facebook' onclick='window.open(this.href, "_blank", "height=430,width=640"); return false;' target='_blank' title='Share to Facebook'>
<span class='share-button-link-text'>
Share to Facebook
</span>
</a>
<div class='goog-inline-block dummy-container'>
<g:plusone source='blogger:blog:plusone' href='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' size='medium' width='300' annotation='inline'/>
</div>
</div>
</div>
<div class='post-footer-line post-footer-line-2'>
<span class='post-labels'>
</span>
</div>
<div class='post-footer-line post-footer-line-3'>
<span class='post-location'>
</span>
</div>
</div>
</div>
<script src='https://apis.google.com/js/plusone.js' type='text/javascript'></script>
<div class='cmt_iframe_holder' data-href='http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html' data-viewtype='FILTERED_POSTMOD'></div>
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
<a class='blog-pager-newer-link' href='http://coding.grax.com/2015/01/orderbystring-enables-string-search.html' id='Blog1_blog-pager-newer-link' title='Newer Post'>
Newer Post
</a>
</span>
<span id='blog-pager-older-link'>
<a class='blog-pager-older-link' href='http://coding.grax.com/2014/12/sony-hacking-who-screwed-up.html' id='Blog1_blog-pager-older-link' title='Older Post'>
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
<a class='feed-link' href='http://coding.grax.com/feeds/8650017534151724687/comments/default' target='_blank' type='application/atom+xml'>
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
if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV2";window['blogger_blog_id'] = '4491374480010279575';BLOG_attachCsiOnload('item_'); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d4491374480010279575','//coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html','4491374480010279575');
_WidgetManager._SetDataContext([{'name': 'options', 'data': {}}, {'name': 'blog', 'data': {'blogId': '4491374480010279575', 'bloggerUrl': 'https://www.blogger.com', 'title': 'Grax Coding', 'pageType': 'item', 'postId': '8650017534151724687', 'url': 'http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html', 'canonicalUrl': 'http://coding.grax.com/2015/01/ffastinjector-101-is-here-brace-yourself.html', 'homepageUrl': 'http://coding.grax.com/', 'canonicalHomepageUrl': 'http://coding.grax.com/', 'blogspotFaviconUrl': 'http://coding.grax.com/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'analyticsAccountNumber': '', 'useUniversalAnalytics': false, 'pageName': 'fFastInjector 1.0.1 is here.  Brace yourself!', 'pageTitle': 'Grax Coding: fFastInjector 1.0.1 is here.  Brace yourself!', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Grax Coding - RSS\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/4491374480010279575/posts/default\x22 /\x3e\n\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/8650017534151724687/comments/default\x22 /\x3e\n', 'meTag': '', 'openIdOpTag': '', 'googleProfileUrl': 'https://plus.google.com/109602553530284384616', 'postImageThumbnailUrl': 'http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s72-c/IMG_3941crop.jpg', 'postImageUrl': 'http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg', 'latencyHeadScript': '\x3cscript type\x3d\x22text/javascript\x22\x3e(function() { (function(){function c(a){this.t\x3d{};this.tick\x3dfunction(a,c,b){var d\x3dvoid 0!\x3db?b:(new Date).getTime();this.t[a]\x3d[d,c];if(void 0\x3d\x3db)try{window.console.timeStamp(\x22CSI/\x22+a)}catch(e){}};this.tick(\x22start\x22,null,a)}var a;window.performance\x26\x26(a\x3dwindow.performance.timing);var h\x3da?new c(a.responseStart):new c;window.jstiming\x3d{Timer:c,load:h};if(a){var b\x3da.navigationStart,e\x3da.responseStart;0\x3cb\x26\x26e\x3e\x3db\x26\x26(window.jstiming.srt\x3de-b)}if(a){var d\x3dwindow.jstiming.load;0\x3cb\x26\x26e\x3e\x3db\x26\x26(d.tick(\x22_wtsrt\x22,void 0,b),d.tick(\x22wtsrt_\x22,\n\x22_wtsrt\x22,e),d.tick(\x22tbsd_\x22,\x22wtsrt_\x22))}try{a\x3dnull,window.chrome\x26\x26window.chrome.csi\x26\x26(a\x3dMath.floor(window.chrome.csi().pageT),d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.chrome.csi().startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),null\x3d\x3da\x26\x26window.gtbExternal\x26\x26(a\x3dwindow.gtbExternal.pageT()),null\x3d\x3da\x26\x26window.external\x26\x26(a\x3dwindow.external.pageT,d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.external.startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),a\x26\x26(window.jstiming.pt\x3da)}catch(k){}})();window.tickAboveFold\x3dfunction(c){var a\x3d0;if(c.offsetParent){do a+\x3dc.offsetTop;while(c\x3dc.offsetParent)}c\x3da;750\x3e\x3dc\x26\x26window.jstiming.load.tick(\x22aft\x22)};var f\x3d!1;function g(){f||(f\x3d!0,window.jstiming.load.tick(\x22firstScrollTime\x22))}window.addEventListener?window.addEventListener(\x22scroll\x22,g,!1):window.attachEvent(\x22onscroll\x22,g);\n })();\x3c/script\x3e', 'mobileHeadScript': '', 'adsenseClientId': 'pub-6204835866995990', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'ieCssRetrofitLinks': '\x3c!--[if IE]\x3e\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js\x22\x3e\x3c/script\x3e\n\x3c![endif]--\x3e', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/7f2e3ee2033f134d', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n', 'tf': ''}}, {'name': 'features', 'data': {'openGraphMetadata': true, 'widgetVisibility': true}}, {'name': 'messages', 'data': {'adsGoHere': 'Ads go here', 'archive': 'Archive', 'authorSaid': '%1 said...', 'authorSaidWithLink': '\x3ca href\x3d\x22%2\x22 rel\x3d\x22nofollow\x22\x3e%1\x3c/a\x3e said...', 'blogArchive': 'Blog Archive', 'by': 'By', 'byAuthor': 'By %1', 'byAuthorLink': 'By \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'configurationRequired': 'Configuration required', 'deleteBacklink': 'Delete Backlink', 'deleteComment': 'Delete Comment', 'edit': 'Edit', 'emailAddress': 'Email Address', 'getEmailNotifications': 'Get email notifications', 'hidden': 'Hidden', 'keepReading': 'Keep reading', 'labels': 'Labels', 'loadMorePosts': 'Load more posts', 'loading': 'Loading...', 'myBlogList': 'My Blog List', 'myFavoriteSites': 'My favorite sites', 'newer': 'Newer', 'newerPosts': 'Newer Posts', 'newest': 'Newest', 'noResultsFound': 'No results found', 'noTitle': 'No title', 'numberOfComments': '{numComments, plural, \x3d0 {No comments} \x3d1 {1 comment} other {# comments}}', 'older': 'Older', 'olderPosts': 'Older Posts', 'oldest': 'Oldest', 'onlyTeamMembersCanComment': 'Note: Only a member of this blog may post a comment.', 'popularPosts': 'Popular Posts', 'popularPostsFromThisBlog': 'Popular posts from this blog', 'postAComment': 'Post a Comment', 'postedBy': 'Posted by', 'postedByAuthor': 'Posted by %1', 'postedByAuthorLink': 'Posted by \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'readMore': 'Read more', 'reportAbuse': 'Report Abuse', 'search': 'Search', 'searchBlog': 'Search blog', 'share': 'Share', 'showAll': 'Show all', 'showLess': 'Show less', 'showMore': 'Show more', 'someOfMyFavoriteSites': 'Some of my favorite sites', 'subscribe': 'Subscribe', 'subscribeTo': 'Subscribe to:', 'subscribeToThisBlog': 'Subscribe to this blog', 'theresNothingHere': 'There\x27s nothing here!', 'viewAll': 'View all', 'visible': 'Visible', 'visitProfile': 'Visit profile', 'widgetNotAvailableInPreview': 'This content is not available in blog preview.', 'widgetNotAvailableOnHttps': 'This content is not yet available over encrypted connections.'}}, {'name': 'skin', 'data': {'vars': {}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'title': 'fFastInjector 1.0.1 is here.  Brace yourself!', 'description': 'fFastInjector 1.0.1 is here! &#160;(I skipped the 1.0.0 release since that programs with that version number always seems to have problems.)    A...', 'featuredImage': 'http://4.bp.blogspot.com/-M10eCQqSx5E/VLuuv9044mI/AAAAAAAAmOk/a8_n99f4Ooc/s1600/IMG_3941crop.jpg'}}]);
_WidgetManager._RegisterWidget('_NavbarView', new _WidgetInfo('Navbar1', 'navbar', null, document.getElementById('Navbar1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_ProfileView', new _WidgetInfo('Profile1', 'sidebar-right-2-1', null, document.getElementById('Profile1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_FollowersView', new _WidgetInfo('Followers1', 'sidebar-right-2-2', null, document.getElementById('Followers1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'legacyCommentModerationUrl': 'https://www.blogger.com/moderate-legacy-comment.g?blogID\x3d4491374480010279575', 'iframeCommentsId': 'gpluscomments', 'viewType': 'FILTERED_POSTMOD', 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/2863887394-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/306752634-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_AttributionView', new _WidgetInfo('Attribution1', 'footer-3', null, document.getElementById('Attribution1'), {'attribution': 'Powered by \x3ca href\x3d\x27https://www.blogger.com\x27 target\x3d\x27_blank\x27\x3eBlogger\x3c/a\x3e.'}, 'displayModeFull'));
</script>
</body>
</html>