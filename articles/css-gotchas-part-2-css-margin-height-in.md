---
layout: pages
permalink: /2014/06/css-gotchas-part-2-css-margin-height-in.html
title: CSS Gotchas - Part 2 - CSS Margin Height In Percent is Calculated Using the Width of the Parent Object
---
TLDR: In CSS, when you specify margin <b>height </b>using a percentage, that <b>height </b>is calculated using that percentage against the <b>width </b>of the parent object. <br />
<br />
The only workaround that I have found, assuming you want the margin to be set to a percentage of the height of the parent object, is to use JavaScript.<br />
<h3>
CSS Margin Height In Percent is Calculated Using the Width of the Parent Object</h3>
<div style="background: red; border: 0 none; height: 100px; margin: 0; overflow: auto; padding: 0; width: 200px;">
<div style="background: black; border: 0 none; height: 90%; margin: 5%; padding: 0; width: 90%;">
</div>
</div>
<br />
Here we have an inner div and an outer div. &nbsp;The outer div has a height of 100 pixels and a width of 200 pixels with a red background color.<br />
<br />
The inner div has a height and width of 90% and a 5% margin. &nbsp;Using simple grade school math, you can see that 5% margin on the left plus 90% plus 5% on the right equals 100% and that is correct. &nbsp;There is no horizontal scroll bar.<br />
<br />
The weirdness comes into play when you try to do the math on the height. &nbsp;5% on the top, plus 90%, plus 5% on the bottom should equal 100% but it obviously doesn't as we have a scroll bar. &nbsp;The problem here is that CSS computes margin height as a percentage of the parent object width.<br />
<br />
Assuming that you want to have a top and bottom margin that are based on the height of your object, the only solution that I have found is to fall back to JavaScript. &nbsp;My sample code requires jQuery.<br />
<br />
The following function returns a function that computes and sets margins on elements to be whatever the passed-in percentage is set to.<br />
<br />
<pre style="background: lightgray; padding: 5px;">function SetMarginHeightPercent(percent, edge) {
    if (edge === undefined) {
        edge = "both";
    }
    return function () {
        var self = $(this);
        var fivePercent = self.parent().height() * percent / 100;
        var css = {};

        if (edge !== "top") {
            css["marginBottom"] = fivePercent + "px";
        }
        
        if (edge !== "bottom") {
            css["marginTop"] = fivePercent + "px";
        }

        self.css(css);
    }
}
</pre>
<br />
<script type="text/javascript">
$(".marginHeight")
    .resize(SetMarginHeightPercent(5))
    .each(SetMarginHeightPercent(5));


function SetMarginHeightPercent(percent) {
    return function () {
        var self = $(this);
        var fivePercent = self.parent().height() * percent / 100;

        self.css({
            marginTop: fivePercent + "px",
            marginBottom: fivePercent + "px"
        });
    }
}
</script>
This function is called like this:
<br />
<br />
<pre style="background: lightgray; padding: 5px;">$(".marginHeight")
&nbsp; &nbsp; .resize(SetMarginHeightPercent(5))
&nbsp; &nbsp; .each(SetMarginHeightPercent(5));
</pre>
<br />
where the selector ".marginHeight" is any valid jQuery selector for an object that you want to adjust the vertical margins on and 5 is the percentage of parent's height that you want to set the margin to.<br />
<br />
The ".each" command runs the function immediately on all of the affected objects and the ".resize" command runs any time that object is resized so that you percentage will be constantly maintained.<br />
<br />
If you wish to set the top and bottom margin to different percentages, you can call the function like this:<br />
<br />
<pre style="background: lightgray; padding: 5px;">$(".marginHeight")
&nbsp; &nbsp; .resize(SetMarginHeightPercent(3,"top"))
&nbsp; &nbsp; .resize(SetMarginHeightPercent(7,"bottom"))
&nbsp; &nbsp; .each(SetMarginHeightPercent(3,"top"))
&nbsp; &nbsp; .each(SetMarginHeightPercent(7,"bottom"));
</pre>
<br />
Generally, I prefer not to use JavaScript for styling. &nbsp;It is more appropriate to learn how to do styling in CSS. &nbsp;However, there are occasions when CSS is either very complex for a simple JavaScript task or where something just isn't possible in CSS. &nbsp;In that case, it is nice to know that you can pull out the JavaScript and get the page styled the way you want.<br />
