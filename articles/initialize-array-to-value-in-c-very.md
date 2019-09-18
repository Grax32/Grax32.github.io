---
layout: pages
permalink: /2011/11/initialize-array-to-value-in-c-very.html
title: Method to Quickly Initialize All Elements of an Array to a Value
tags:
 - coding
---

Update 1: I decided to revisit this with a [a new blog post](/2013/06/fast-array-fill-function-revisited.html)

Update 2: A reader ([+Michael Hsu](https://plus.google.com/113579231183226302374)) posted an improved version on [GitHub](https://github.com/mykohsu/Extensions/blob/master/ArrayExtensions.cs) and I blogged about it [here](/2014/04/better-array-fill-function.html)

In the course of my other work this week, I discovered a method for quickly initializing an array to a single value or to a repeating value.

The theory is based on the idea that Array.Copy is very fast. Understanding that, I copy the value into the array at position zero. Now I keep copying that value into the array, doubling the size of my copy each time.

For example, if my array contained ten elements and my value contains one element (a '7'), the operations will look like this.

* Empty Array: 0,0,0,0,0,0,0,0,0,0
* First Pass: 7,0,0,0,0,0,0,0,0,0
* Second Pass: 7,7,0,0,0,0,0,0,0,0
* Third Pass: 7,7,7,7,0,0,0,0,0,0
* Fourth Pass: 7,7,7,7,7,7,7,7,0,0
* Fifth Pass: 7,7,7,7,7,7,7,7,7,7

If you were to iterate through and set each value to '7' directly, you would have to perform ten operations. Here we only performed five operations. The time taken is fairly similar at this level but this method is much faster for large arrays.

To test this I wrote two functions. ArrayFillIterative, which sets each element to a value directly and ArrayFill, which uses Array.Copy to quickly fill all elements. Both do the same thing in that they fill the output array with the input array over and over.

## The (fast) Array.Copy Way

```cs
public static void ArrayFill<T>(T[] arrayToFill, T fillValue)
{
    // if called with a single value, wrap the value in an array and call the main function
    ArrayFill<T>(arrayToFill, new T[] { fillValue });
}

public static void ArrayFill<T>(T[] arrayToFill, T[] fillValue)
{
    if (fillValue.Length >= arrayToFill.Length)
    {
        throw new ArgumentException("fillValue array length must be smaller than length of arrayToFill");
    }

    // set the initial array value
    Array.Copy(fillValue, arrayToFill, fillValue.Length);

    int arrayToFillHalfLength = arrayToFill.Length / 2;

    for (int i = fillValue.Length; i < arrayToFill.Length; i *= 2)
    {
        int copyLength = i;
        if (i > arrayToFillHalfLength)
        {
            copyLength = arrayToFill.Length - i;
        }

        Array.Copy(arrayToFill, 0, arrayToFill, i, copyLength);
    }
}
```

<b>The (slow) Iterative Way</b>

```cs
public static void ArrayFillIterative<T>(T[] arrayToFill, T[] fillValue)
        {
            int counter = 0;
            int arrayLengthUsed = arrayToFill.Length - fillValue.Length;

            for (int i = 0; i < arrayLengthUsed; i += fillValue.Length)
            {
                for (int x = 0; x <; fillValue.Length; x++)
                {
                    counter = i + x;
                    arrayToFill[counter] = fillValue[x];
                }
            }

            // fill remaining elements</span>
            for (int i = counter + 1, x = 0; i < arrayToFill.Length; i++, x++)
            {
                arrayToFill[i] = fillValue[x];
            }
        }
```

## The Test Results

I worked with a byte array that I sized to hold 357,913,941 elements. The number is fairly random. I needed a large number that would not cause an out of memory exception when the array is instantiated.

I ran the following code to compare the results of filling the array each way.

```cs
Stopwatch watch = new Stopwatch();
byte[] myArray1 = new byte[myArrayLength];
byte[] myArray2 = new byte[myArrayLength];

watch.Restart();
ArrayFillIterative(myArray1, fillValue);
watch.Stop();

Debug.Print("Took {0} ticks or {1} milliseconds to iteratively fill an array of type {2} sized at {3}", 
    watch.ElapsedTicks, watch.ElapsedMilliseconds,"byte", myArray1.Length);

watch.Restart();
ArrayFill(myArray2, fillValue);
watch.Stop();

Debug.Print("Took {0} ticks or {1} milliseconds to fill ArrayFill an array of type {2} sized at {3}", 
    watch.ElapsedTicks, watch.ElapsedMilliseconds, "byte", myArray2.Length);
```

On my machine, the iterative fill took about 2800 milliseconds to fill the byte array with a repeating 4 byte pattern.

In contrast, the array copy method took around 280 milliseconds. That is a one-tenth the time of the original function! It should also be very memory efficient since it uses itself as the source for the copy operation.
