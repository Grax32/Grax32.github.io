---
layout: pages
permalink: /articles/sql-server-timestamp-basic-concurrency
title: SQL Server Timestamp/RowVersion - Part 2 Optimistic Concurrency
tags: [coding]
---

As we discussed in our previous [article](/articles/sql-server-timestamp-introduction), the server server timestamp/rowversion type (rowversion is an alias for timestamp) is
essentially a version number that can be used to determine if a row has been updated subsequent to when we read it.

When we want to implement optimistic concurrency, we need to query the database to determine if the row has changed.  If it has changed, we will reject the transaction and
make the user refresh their start data and redo their change.

Your first implementation might look something like this:

1.  if (@rowversion = (select RowVersion from OptimisticUsers where Id = @Id ))
2.  begin
3.	update OptimisticUsers set FirstName = @firstName, LastName = @lastName where id = @Id
4.  end
5.  else
6.  begin
7.   raiserror('Optimistic concurrency error',15,-1,-1)
8.  end

Great!  Now we are checking to see if the row's version changed and denying the update if it did.  What could go wrong?

The issue, and this is one that will generate bugs in a busy app and "could not duplicate" messages from your developer, is the window between the query that selects the 
row version and the query that updates the row.  Even in a transaction, there is no guarantee that the row in OptimisticUsers will not be updated between the select query in
row 1 and the update query in row 3.

So what are we to do?  Rather than trying to get crazy with locking the row for that timespan, if we move the where clause into the update query, SQL Server will ensure that no
queries will sneak in between the where query and the update portion.  

1.  update OptimisticUsers set FirstName = @firstName, LastName = @lastName where Id = @Id and RowVersion = @rowversion
2.  if (@@rowcount = 0)
3.  begin
4.  	raiserror('Optimistic concurrency error',15,-1,-1)
5.  end

Now the query succeeds only if the row is unchanged, and we have eliminated the race condition between the row version query and the update.

Obviously, your app will want to handle these errors in a user-friendly way, but this will give you the basis of a safe implementation of optimistic concurrency with SQL Server.

Next time we will look at using the row version to detect changes in collections and/or complex objects.

