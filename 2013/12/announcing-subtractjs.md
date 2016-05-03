Grax Coding: Announcing SubtractJS

<h4>
Quick Summary:</h4>
SubtractJS is a layout assistant for HTML that makes it easy to mix fixed-width or fixed-height elements on the page edges with a re-sizable body. &nbsp;It is great for managing headers, footers, menu bars, navigation elements, or advertising elements.<br />
<br />
<h4>
What is SubtractJS?</h4>
A few years ago, I was tasked with creating a layout consisting of a 100 pixel tall header, a 200 pix wide navigation panel on the left, and a 50 pixel tall footer. &nbsp;At the time I found a pure-css solution to be impossible. &nbsp;As I dug into it further, I found the javascript re-size event to be the only working solution. &nbsp;We got our layout working with a good bit of custom javascript.<br />
<br />
This summer, I set out to re-do this part of the project in a cross-browser, re-usable solution. &nbsp;As it turns out, SubtractJS is more powerful than I imagined, and works in every browser I tested it in. &nbsp;(I suspect I may have the jQuery dependency to thank for this.) &nbsp;So far, I have tested in Chrome 31, IE 8, 9, 10, 11, Firefox 26, Midori on Raspberry Pi and it just works everywhere.<br />
<br />
<style type="text/css">
.sampleSection {
    border: 1px solid black;
    overflow: hidden;
    margin: 1px;
    padding: 2px;
    font-weight: bold;
}
.sampleArea {
    width: 250px;
    height: 100px;
    position: relative;
    z-index: 2;
    background: #DDDDDD;
    border: 2px solid black;
}
#littlemenu {
 width: 40px;
}
</style>

<br />
<div class="sampleArea">
<div class="sj-fill-top sampleSection" id="littleheader">
Header</div>
<div class="sj-fill-bottom sampleSection" id="littlefooter">
Footer</div>
<div class="sj-fill-left sampleSection" id="littlemenu">
Menu</div>
<div class="sj-fill sampleSection" id="littlebody">
Body</div>
</div>
<br />
SubtractJS lets you use standard CSS properties to control your layout. &nbsp;The five classes, "sj-fill-top", "sj-fill-bottom", "sj-fill-left", "sj-fill-right", and "sj-fill" tell SubtractJS how to manipulate your page. &nbsp;On every resize, SubtractJS computes the width or height needed to fill the parent element and still allow space for your padding, border, and margin. <br />
<br />
SubtractJS works best when the style tag for the affected elements does not contain values for height, width, margin, padding, border, or overflow. &nbsp;Define these properties in a style that you apply to the element via a style sheet. &nbsp;See the <a href="http://g.grax.com/1e7pjpm" target="_blank">SubtractJS samples</a>&nbsp;or the <a href="http://g.grax.com/1d56Hrs" target="_blank">SubtractJS preview page</a>&nbsp;for some examples of how this can work.<br />
<br />
<h4>
How do I get it?</h4>
You can download or enter issues or bugs at&nbsp;<a href="http://g.grax.com/19c8KbM" target="_blank">SubtractJS on Codeplex</a><br />
<a href="http://g.grax.com/1bnBVFy" target="_blank">SubtractJS </a>is also on NuGet. &nbsp;Enter "Install-Package subtractjs" in the Package Manager Console.
