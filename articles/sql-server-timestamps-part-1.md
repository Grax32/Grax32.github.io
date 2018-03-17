---
layout: pages
permalink: /articles/sql-server-timestamp-introduction
title: SQL Server Timestamp/RowVersion - Part 1 Introduction
tags: [coding]
---

Microsoft SQL Server's timestamp (aka rowversion) type has a long of confusing developers.
  The name "timestamp" caused many to assume that there was some relationship to the date and/or time of 
  the last update.  In reality, the value has nothing to do with actual time and instead is a database-wide
  incrementing number that is used to uniquely identify that particular db update.
  
This value can be used to implement what is called optimistic concurrency.  With optimistic concurrency, the 
database implements a restriction that an update can succeed only if the row being updated has been unchanged from the
time that the data that the update is based on was read.

## The Concurrency Problem

To demonstrate the problem we are addressing with concurrency checks, imagine that we are given a table that contains the
columns Id, FirstName, LastName, and PhoneNumber.  We have the following row in there.

Id | FirstName | LastName | PhoneNumber
----|---|---|---
5|Marco|Polo|555-555-1234


Alex opens a screen containing the data from that row and Betty opens a screen containing the same data.

Alex changes the LastName to Lauren and saves the record with the following values: 

Id | FirstName | LastName | PhoneNumber
----|---|---|---
5|Marco|Lauren|555-555-1234


Betty changes the PhoneNumber to 555-555-9999 and saves the record with these values: 

Id | FirstName | LastName | PhoneNumber
----|---|---|---
5|Marco|Polo|555-555-9999


Since Betty retrieved the record before Alex saved the update, Betty is working with the value Polo for the LastName field
so this undoes Alex's change.

Id | FirstName | LastName | PhoneNumber
----|---|---|---
5|Marco|Polo(*Reverts Alex's change*)|555-555-9999

## Fixing the Problem

So, to address this problem, we either need to lock the record when Alex opens it (pessimistic concurrency) or block Betty's
save on the basis that she isn't updating the latest version of that record (optimistic concurrency).  I don't want to spend
too much time discussing pessimistic concurrency and record locking except to say that it is more technically difficult to 
get it perfect (deadlocks, unclosed locks, etc) and puts a greater strain on resources.

Using the timestamp/rowversion method of implementing optimistic concurrency, the record returned to the client includes
the value for the timestamp/rowversion.  The field returns a binary value but that value is basically a 64-bit unsigned integer.
If you do 2 updates in a row, you will observe that the 2nd timestamp/rowversion is 1 greater than the previous value.  For 
the purposes of demonstration, I will use an integer value for the timestamp/rowversion value in the following examples.

Now let us revisit our situation with Alex and Betty, but with optimistic concurrency.

Again starting with a row containing the values:

Id | FirstName | LastName | PhoneNumber|RowVersion
----|---|---|---|---
5|Marco|Polo|555-555-1234|17

Alex opens a screen containing the data from that row and Betty opens a screen containing the same data.

Alex changes the LastName to Lauren and saves the record.  This update causes the RowVersion
to change to 27 (assuming other activity in the database) and the record now looks like the following:  .

Id | FirstName | LastName | PhoneNumber|RowVersion
----|---|---|---|---
5|Marco|Lauren|555-555-1234|27


Betty changes the PhoneNumber to 555-555-9999 and attempts to save the record while referencing the RowVersion of 17.  
Because the current RowVersion value is 27, the update fails.  Betty is informed that her update failed and she must
refresh and redo the update based on the updated data.  When she refreshes, she gets the updated LastName value and 
then she can save safely without overwriting someone else's change.

## Summary

Optimistic concurrency is a generally a low-impact way to ensure that your users are not stepping on each other's updates and 
undoing work that they thought they had completed.  Be aware, however, that it does not provide a great user experience 
if your users are modifying a large amount of data in between save attempts.  In our next article, we will look at the
actual SQL Server code for implementing optimistic integrity.  In a [later article](/articles/sql-server-timestamp-basic-concurrency), we will cover using optimistic concurrency
with complex object and collections.



