---
layout: pages
permalink: /2014/06/css-gotchas-part-1.html
title: CSS Gotchas - Part 1
---
TLDR: 2 CSS Gotchas today.  First, the default CSS box model will cause an overflow if a box contains 2 boxes that are each set to 50% of the outer box's height or width if either of the boxes contain a margin, border, or padding.  Second, if you are not aware of vertical margin collapsing, you see unexpected results when the vertical margins collapse between 2 vertically stacked boxes.
<br />
<br />
<b>50 percent plus 50 percent is greater than 100 percent</b><br />
<br />
Here we have a simple box with 2 boxes inside of it.  Each of the boxes are 50% high, which using normal math would be 100% but we are using CSS math.<br />
<br />
<div style="background: gray; border: 1px solid black; height: 200px; overflow: auto; position: relative; width: 300px;">
<div style="background: red; border: 1px solid black; height: 50%; margin: 0; padding: 2px; width: 100%;">
1
</div>
<div style="background: green; border: 1px solid black; height: 50%; margin: 0; padding: 2px; width: 100%;">
2
</div>
</div>
<br />
It looks kinda ugly because it overflows and displays some scroll bars. &nbsp;As it happens, the <a href="http://css-tricks.com/the-css-box-model/">CSS box model</a> puts the padding, border, and margin outside of the height and width measurements.  This means that height height of the inner box is really 50% of the outer box plus 1 pixel border on the top and bottom and a 2 pixel padding on the top and bottom.  For many applications, this can be easily fixed by adding the CSS tag "box-sizing: border-box;" which will tell the browser to include the padding and border inside of the 50% instead of adding it to the 50%.  Here is what that result looks like.<br />
<br />
<div style="background: gray; border: 1px solid black; box-sizing: border-box; height: 200px; overflow: auto; position: relative; width: 300px;">
<div style="background: red; border: 1px solid black; box-sizing: border-box; height: 50%; margin: 0; padding: 2px; width: 100%;">
1
</div>
<div style="background: green; border: 1px solid black; box-sizing: border-box; height: 50%; margin: 0; padding: 2px; width: 100%;">
2
</div>
</div>
<br />
The margin is still always outside of the box.  If you want to also have a margin and handle it properly, you will have to use a CSS formula for your height and width.  This looks like "height: calc(50% - 2px - 4px - 4px);" and "width: calc(100% -2px -4px - 4px);"
<br />
<br />
<div style="background: gray; border: 1px solid black; height: 200px; overflow: auto; position: relative; width: 300px;">
<div style="background: red; border: 1px solid black; height: calc(50% - 2px - 4px - 4px); margin: 2px; padding: 2px; width: calc(100% -2px -4px - 4px);">
1
</div>
<div style="background: green; border: 1px solid black; height: calc(50% - 2px - 4px - 4px); margin: 2px; padding: 2px; width: calc(100% -2px -4px - 4px);">
2
</div>
</div>
<br />
If you look at this result you will notice it still doesn't look right.  That brings us to the bonus gotcha.  <a href="http://css-tricks.com/almanac/properties/m/margin/">Vertical Margin Collapsing</a>.  The margin between the 2 boxes is set to 2 pixels for each box.  Vertical Margin Collapsing turns that into 2 pixels total, instead of 2 pixels each by taking the maximum of the 2 margins (2px since they are both the same).<br />
<br />
The quick fix is to adjust the formula to make the inner boxes a little taller to compensate.  Since the 2 margins of 2 pixels each collapsed into 1 margin of 2 pixels each, we need to make each of the inner boxes 1 pixel bigger.
<br />
<br />
<div style="background: gray; border: 1px solid black; height: 200px; overflow: auto; position: relative; width: 300px;">
<div style="background: red; border: 1px solid black; height: calc(50% - 2px - 4px - 3px); margin: 2px; padding: 2px; width: calc(100% -2px -4px - 4px);">
1
</div>
<div style="background: green; border: 1px solid black; height: calc(50% - 2px - 4px - 3px); margin: 2px; padding: 2px; width: calc(100% -2px -4px - 4px);">
2
</div>
</div>
<br />
<b>Summary</b><br />
Today we looked at a couple of possibly unexpected gotchas in the CSS box model.  To get the expected results, we switched the box model using "box-sizing: border-box;", or we used a "calc" command such as "height: calc(50% -4px);"

