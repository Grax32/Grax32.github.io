---
layout: pages
permalink: /2013/08/testing-custom-linq-filter-operators.html
title: Testing Custom LINQ Filter Operators (and LINQ Where clauses in general)
---
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
