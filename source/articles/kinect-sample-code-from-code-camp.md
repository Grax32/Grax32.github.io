---
layout: pages
permalink: /2012/03/kinect-sample-code-from-code-camp.html
title: Kinect sample code from Code Camp
tags:
 - coding
---
I have posted my code from Nebraska Code Camp.  The most significant change is that I am using shaders to merge the multiple layers I am creating.<br />
<br />
The original way to merge the layers was using C# code and reviewing each pixel to determine whether it appeared behind or in front of the pixel from another layer.  With shaders, I can do the same comparison lightning fast in the video card.<br />
<br />
HLSL shaders, effects, or pixel shaders are all referring to basically the same thing.  I have an "Effect" in WPF that refers to the shader that I created that will be compiled by the ShaderBuildTask.  (that part is automagically part of the build process once you install ShaderBuildTask)<br />
<br />
The shader (DepthMerge.fx) gets textures for the color and depth of each frame it is combining.  It compares the depths to find the closest pixel and returns the color for that pixel.<br />
<br />
Download the Code Camp version of VideoMagic from <a href="http://graxark.codeplex.com/releases/view/84267">http://graxark.codeplex.com/releases/view/84267</a>
