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
<link href='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' rel='canonical'/>
<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/posts/default" />
<link rel="alternate" type="application/rss+xml" title="Grax Coding - RSS" href="http://coding.grax.com/feeds/posts/default?alt=rss" />
<link rel="service.post" type="application/atom+xml" title="Grax Coding - Atom" href="https://www.blogger.com/feeds/4491374480010279575/posts/default" />

<link rel="alternate" type="application/atom+xml" title="Grax Coding - Atom" href="http://coding.grax.com/feeds/1520361613476714820/comments/default" />
<!--[if IE]><script type="text/javascript" src="https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js"></script>
<![endif]-->
<link href='https://plus.google.com/109602553530284384616' rel='publisher'/>
<meta content='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' property='og:url'/>
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<title>
Grax Coding: Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)
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
                url: 'https://www.blogger.com/navbar.g?targetBlogID\x3d4491374480010279575\x26blogName\x3dGrax+Coding\x26publishMode\x3dPUBLISH_MODE_HOSTED\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttp://coding.grax.com/search\x26blogLocale\x3den\x26v\x3d2\x26homepageUrl\x3dhttp://coding.grax.com/\x26targetPostID\x3d1520361613476714820\x26blogPostOrPageUrl\x3dhttp://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html\x26vt\x3d-6348509593714009733',
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
        
          
            
            
              holder.currentPost = "https://www.blogger.com/feeds/4491374480010279575/posts/default/1520361613476714820";
            
            
            
              holder.currentComments = "https://www.blogger.com/feeds/4491374480010279575/1520361613476714820/comments/default";
            
            holder.currentPostUrl = "";
            holder.currentPostId = 1520361613476714820
          
          
          
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
<div id="div-1sn4flp9tf0no" style="width: 100%; "></div>
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
    {id: "div-1sn4flp9tf0no",
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
Saturday, August 10, 2013
</span>
</h2>

                                          <div class="date-posts">
                                        
<div class='post-outer'>
<div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<meta content='4491374480010279575' itemprop='blogId'/>
<meta content='1520361613476714820' itemprop='postId'/>
<a name='1520361613476714820'></a>
<h3 class='post-title entry-title' itemprop='name'>
Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)
</h3>
<div class='post-header'>
<div class='post-header-line-1'></div>
</div>
<div class='post-body entry-content' id='post-body-1520361613476714820' itemprop='description articleBody'>
<b>Quick Summary</b><br />
<br />
In my last post, I outlined how to build a Custom LINQ Filter Operator.  In this post I will demonstrate how to write a unit test for that filter operator.  The same basic methodology can be used for testing Where clauses in general.<br />
<br />
We are writing a unit test for the extension method below.  The purpose of this method is to filter the OfficeSupplyOrders, leaving only the orders that have an approval date and are not cancelled.  You might see this method referenced elsewhere in code as context.OfficeSupplyOrders.WhereApproved() (assuming context is an entity framework DbContext).<br />
<br />
<pre>public static IQueryable&lt;OfficeSupplyOrder&gt; WhereApproved(
          this IQueryable&lt;OfficeSupplyOrder&gt; query)
{
    return query.Where(v =&gt; v.ApprovalDate != null &amp;&amp; !v.Cancelled);
}</pre>
<br />
<b>Caveat</b><br />
The tests we are writing will be in C# but often the clauses will actually be used to create a sql (or other LINQ provider) query. &nbsp;Be aware that there are differences between the 2, including how the sql query might handle nulls or case sensitivity. &nbsp;These tests are good for verifying the basic logic of the where clause but there are differences and you should be aware of them.<br />
<br />
<b>"Findable" and "Filtered"</b><br />
<br />
The basic theory of this testing methodology is that the method we are testing will act like a filter. In order to exercise that filter, we will pass a list of items through it and look at which items were passed through and which ones were filtered.<br />
<br />
To start out with, we will create two lists of items that will later be combined and passed through the filter. &nbsp;The first list is for "findable" items that will not be filtered by our custom filter. &nbsp;We will expect to find these items in the output after we run the list through the filter. &nbsp;The other list is for "filtered" items. &nbsp;We will expect that none of the items will be in the output after passing through our filter.<br />
<br />
<b>Findable</b><br />
In order to determine what goes in each list, we need to examine our where clause. &nbsp;If it consists of a single clause or multiple clauses connected by the "&amp;&amp;" (and) operator, then we only need a single item in our findable list. &nbsp;This item will have all of the correct properties set to satisfy each of the clauses.<br />
<br />
If the where clause consists of multiple clauses connected by the "||" (or) operator, then we need items in our findable list to exercise each of the clauses.<br />
<br />
For example, in our WhereApproved filter above, an order will only pass the filter if both ApprovalDate is a non-null value and if the Cancelled field is false, so a single entry with those two properties set will be sufficient for the findable list.<br />
<br />
<b>Filtered</b><br />
With the filtered list, the opposite is true. If the where clause consists of multiple clauses connected by the "&amp;&amp;" (and) operator, we need items in our filtered list to exercise each of those clauses.<br />
<br />
But if the where clause consists of multiple clauses connected by the "||" (or) operator,then we only a single item to exercise each clause in our filtered list.<br />
<br />
In our example, we need one order where ApprovalDate is null and another order where Cancelled is true to test both clauses.<br />
<br />
If you have a mix of "&amp;&amp;" (and) and "||"(or), I will leave the logic exercise up to you to determine the correct entries. &nbsp;If the logic is too complex, you might consider splitting it into multiple filter operators that are easier to test.<br />
<br />
<pre>[TestMethod]
public void WhereApprovedTest()
{
    // arrange
    var findableItems = new List&lt;OfficeSupplyOrder&gt;
    {
        new OfficeSupplyOrder{ 
            ApprovalDate = new DateTime(2013, 8, 10),
            Cancelled = false
        },
    };

    var filteredItems = new List&lt;OfficeSupplyOrder&gt;
    {
        new OfficeSupplyOrder{ 
            ApprovalDate = null,
            Cancelled = false
        },
        new OfficeSupplyOrder{ 
            ApprovalDate = new DateTime(2013, 8, 10),
            Cancelled = true
        }
    };

    var items = findableItems.Concat(filteredItems);

    // act
    var results = items.AsQueryable().WhereApproved().ToList();

    // assert
    findableItems.ForEach(v =&gt; Assert.IsTrue(results.Contains(v)));
    filteredItems.ForEach(v =&gt; Assert.IsFalse(results.Contains(v)));
    Assert.AreEqual(findableItems.Count, results.Count);
}</pre>
<br />
As you can see, we created our findable list, created our filtered list, combined the two lists, and passed the combined list to our filter. &nbsp;We then examine the results by comparing them against our original two lists to determine that the output is what we expect.<br />
<br />
<b>Summary</b><br />
<br />
We created a unit test for a Custom LINQ filter operator. &nbsp;We examined the where clause to determine what kind of data we needed to pass to exercise the clause and added the items needed to the findable or filtered lists. &nbsp;We combined the two lists and passed the combination through our filter. &nbsp;We then examined the result to verify that it did filter exactly what we expected.<br />
<br />
<br />
<br />
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
<meta content='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' itemprop='url'/>
<a class='timestamp-link' href='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' rel='bookmark' title='permanent link'>
<abbr class='published' itemprop='datePublished' title='2013-08-10T09:25:00-05:00'>
9:25 AM
</abbr>
</a>
</span>
<span class='post-comment-link'>
</span>
<span class='post-icons'>
<span class='item-control blog-admin pid-1584415331'>
<a href='https://www.blogger.com/post-edit.g?blogID=4491374480010279575&postID=1520361613476714820&from=pencil' title='Edit Post'>
<img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
</a>
</span>
</span>
<div class='post-share-buttons goog-inline-block'>
<a class='goog-inline-block share-button sb-email' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=1520361613476714820&target=email' target='_blank' title='Email This'>
<span class='share-button-link-text'>
Email This
</span>
</a>
<a class='goog-inline-block share-button sb-blog' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=1520361613476714820&target=blog' onclick='window.open(this.href, "_blank", "height=270,width=475"); return false;' target='_blank' title='BlogThis!'>
<span class='share-button-link-text'>
BlogThis!
</span>
</a>
<a class='goog-inline-block share-button sb-twitter' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=1520361613476714820&target=twitter' target='_blank' title='Share to Twitter'>
<span class='share-button-link-text'>
Share to Twitter
</span>
</a>
<a class='goog-inline-block share-button sb-facebook' href='https://www.blogger.com/share-post.g?blogID=4491374480010279575&postID=1520361613476714820&target=facebook' onclick='window.open(this.href, "_blank", "height=430,width=640"); return false;' target='_blank' title='Share to Facebook'>
<span class='share-button-link-text'>
Share to Facebook
</span>
</a>
<div class='goog-inline-block dummy-container'>
<g:plusone source='blogger:blog:plusone' href='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' size='medium' width='300' annotation='inline'/>
</div>
</div>
</div>
<div class='post-footer-line post-footer-line-2'>
<span class='post-labels'>
Labels:
<a href='http://coding.grax.com/search/label/entity%20framework' rel='tag'>
entity framework
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/filter%20methods' rel='tag'>
filter methods
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/filter%20operators' rel='tag'>
filter operators
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/idbset' rel='tag'>
idbset
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/linq' rel='tag'>
linq
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/linq%20filters' rel='tag'>
linq filters
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/tdd' rel='tag'>
tdd
</a>

                                                ,
                                              
<a href='http://coding.grax.com/search/label/unit%20test' rel='tag'>
unit test
</a>
</span>
</div>
<div class='post-footer-line post-footer-line-3'>
<span class='post-location'>
</span>
</div>
</div>
</div>
<script src='https://apis.google.com/js/plusone.js' type='text/javascript'></script>
<div class='cmt_iframe_holder' data-href='http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html' data-viewtype='FILTERED_POSTMOD'></div>
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
<a class='blog-pager-newer-link' href='http://coding.grax.com/2013/12/buying-and-updating-my-new-surface-rt.html' id='Blog1_blog-pager-newer-link' title='Newer Post'>
Newer Post
</a>
</span>
<span id='blog-pager-older-link'>
<a class='blog-pager-older-link' href='http://coding.grax.com/2013/07/filter-pattern-for-linq-query-filter.html' id='Blog1_blog-pager-older-link' title='Older Post'>
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
<a class='feed-link' href='http://coding.grax.com/feeds/1520361613476714820/comments/default' target='_blank' type='application/atom+xml'>
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
if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV2";window['blogger_blog_id'] = '4491374480010279575';BLOG_attachCsiOnload('item_'); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d4491374480010279575','//coding.grax.com/2013/08/testing-custom-linq-filter-operators.html','4491374480010279575');
_WidgetManager._SetDataContext([{'name': 'options', 'data': {}}, {'name': 'blog', 'data': {'blogId': '4491374480010279575', 'bloggerUrl': 'https://www.blogger.com', 'title': 'Grax Coding', 'pageType': 'item', 'postId': '1520361613476714820', 'url': 'http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html', 'canonicalUrl': 'http://coding.grax.com/2013/08/testing-custom-linq-filter-operators.html', 'homepageUrl': 'http://coding.grax.com/', 'canonicalHomepageUrl': 'http://coding.grax.com/', 'blogspotFaviconUrl': 'http://coding.grax.com/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'analyticsAccountNumber': '', 'useUniversalAnalytics': false, 'pageName': 'Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)', 'pageTitle': 'Grax Coding: Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Grax Coding - RSS\x22 href\x3d\x22http://coding.grax.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/4491374480010279575/posts/default\x22 /\x3e\n\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Grax Coding - Atom\x22 href\x3d\x22http://coding.grax.com/feeds/1520361613476714820/comments/default\x22 /\x3e\n', 'meTag': '', 'openIdOpTag': '', 'googleProfileUrl': 'https://plus.google.com/109602553530284384616', 'latencyHeadScript': '\x3cscript type\x3d\x22text/javascript\x22\x3e(function() { (function(){function c(a){this.t\x3d{};this.tick\x3dfunction(a,c,b){var d\x3dvoid 0!\x3db?b:(new Date).getTime();this.t[a]\x3d[d,c];if(void 0\x3d\x3db)try{window.console.timeStamp(\x22CSI/\x22+a)}catch(e){}};this.tick(\x22start\x22,null,a)}var a;window.performance\x26\x26(a\x3dwindow.performance.timing);var h\x3da?new c(a.responseStart):new c;window.jstiming\x3d{Timer:c,load:h};if(a){var b\x3da.navigationStart,e\x3da.responseStart;0\x3cb\x26\x26e\x3e\x3db\x26\x26(window.jstiming.srt\x3de-b)}if(a){var d\x3dwindow.jstiming.load;0\x3cb\x26\x26e\x3e\x3db\x26\x26(d.tick(\x22_wtsrt\x22,void 0,b),d.tick(\x22wtsrt_\x22,\n\x22_wtsrt\x22,e),d.tick(\x22tbsd_\x22,\x22wtsrt_\x22))}try{a\x3dnull,window.chrome\x26\x26window.chrome.csi\x26\x26(a\x3dMath.floor(window.chrome.csi().pageT),d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.chrome.csi().startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),null\x3d\x3da\x26\x26window.gtbExternal\x26\x26(a\x3dwindow.gtbExternal.pageT()),null\x3d\x3da\x26\x26window.external\x26\x26(a\x3dwindow.external.pageT,d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.external.startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),a\x26\x26(window.jstiming.pt\x3da)}catch(k){}})();window.tickAboveFold\x3dfunction(c){var a\x3d0;if(c.offsetParent){do a+\x3dc.offsetTop;while(c\x3dc.offsetParent)}c\x3da;750\x3e\x3dc\x26\x26window.jstiming.load.tick(\x22aft\x22)};var f\x3d!1;function g(){f||(f\x3d!0,window.jstiming.load.tick(\x22firstScrollTime\x22))}window.addEventListener?window.addEventListener(\x22scroll\x22,g,!1):window.attachEvent(\x22onscroll\x22,g);\n })();\x3c/script\x3e', 'mobileHeadScript': '', 'adsenseClientId': 'pub-6204835866995990', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'ieCssRetrofitLinks': '\x3c!--[if IE]\x3e\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://www.blogger.com/static/v1/jsbin/1491713228-ieretrofit.js\x22\x3e\x3c/script\x3e\n\x3c![endif]--\x3e', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/7f2e3ee2033f134d', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n', 'tf': ''}}, {'name': 'features', 'data': {'widgetVisibility': true}}, {'name': 'messages', 'data': {'adsGoHere': 'Ads go here', 'archive': 'Archive', 'authorSaid': '%1 said...', 'authorSaidWithLink': '\x3ca href\x3d\x22%2\x22 rel\x3d\x22nofollow\x22\x3e%1\x3c/a\x3e said...', 'blogArchive': 'Blog Archive', 'by': 'By', 'byAuthor': 'By %1', 'byAuthorLink': 'By \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'configurationRequired': 'Configuration required', 'deleteBacklink': 'Delete Backlink', 'deleteComment': 'Delete Comment', 'edit': 'Edit', 'emailAddress': 'Email Address', 'getEmailNotifications': 'Get email notifications', 'hidden': 'Hidden', 'keepReading': 'Keep reading', 'labels': 'Labels', 'loadMorePosts': 'Load more posts', 'loading': 'Loading...', 'myBlogList': 'My Blog List', 'myFavoriteSites': 'My favorite sites', 'newer': 'Newer', 'newerPosts': 'Newer Posts', 'newest': 'Newest', 'noResultsFound': 'No results found', 'noTitle': 'No title', 'numberOfComments': '{numComments, plural, \x3d0 {No comments} \x3d1 {1 comment} other {# comments}}', 'older': 'Older', 'olderPosts': 'Older Posts', 'oldest': 'Oldest', 'onlyTeamMembersCanComment': 'Note: Only a member of this blog may post a comment.', 'popularPosts': 'Popular Posts', 'popularPostsFromThisBlog': 'Popular posts from this blog', 'postAComment': 'Post a Comment', 'postedBy': 'Posted by', 'postedByAuthor': 'Posted by %1', 'postedByAuthorLink': 'Posted by \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'readMore': 'Read more', 'reportAbuse': 'Report Abuse', 'search': 'Search', 'searchBlog': 'Search blog', 'share': 'Share', 'showAll': 'Show all', 'showLess': 'Show less', 'showMore': 'Show more', 'someOfMyFavoriteSites': 'Some of my favorite sites', 'subscribe': 'Subscribe', 'subscribeTo': 'Subscribe to:', 'subscribeToThisBlog': 'Subscribe to this blog', 'theresNothingHere': 'There\x27s nothing here!', 'viewAll': 'View all', 'visible': 'Visible', 'visitProfile': 'Visit profile', 'widgetNotAvailableInPreview': 'This content is not available in blog preview.', 'widgetNotAvailableOnHttps': 'This content is not yet available over encrypted connections.'}}, {'name': 'skin', 'data': {'vars': {}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'title': 'Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)', 'description': 'Quick Summary   In my last post, I outlined how to build a Custom LINQ Filter Operator.  In this post I will demonstrate how to write a unit...'}}]);
_WidgetManager._RegisterWidget('_NavbarView', new _WidgetInfo('Navbar1', 'navbar', null, document.getElementById('Navbar1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_ProfileView', new _WidgetInfo('Profile1', 'sidebar-right-2-1', null, document.getElementById('Profile1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_FollowersView', new _WidgetInfo('Followers1', 'sidebar-right-2-2', null, document.getElementById('Followers1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'legacyCommentModerationUrl': 'https://www.blogger.com/moderate-legacy-comment.g?blogID\x3d4491374480010279575', 'iframeCommentsId': 'gpluscomments', 'viewType': 'FILTERED_POSTMOD', 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/2863887394-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/306752634-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_AttributionView', new _WidgetInfo('Attribution1', 'footer-3', null, document.getElementById('Attribution1'), {'attribution': 'Powered by \x3ca href\x3d\x27https://www.blogger.com\x27 target\x3d\x27_blank\x27\x3eBlogger\x3c/a\x3e.'}, 'displayModeFull'));
</script>
</body>
</html>