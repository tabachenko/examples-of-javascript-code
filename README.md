# examples-of-javascript-code
task training course CheckPoint
Task № 1
Please write a function compile_csv_search(text, key_name) that parses text in the CSV format.
( You are not required to handle quoting and escaping in values; assume field values never contain
commas or other special characters.)
Your function must return a function that looks up a record by a value of the field specified as the second
argument to compile_csv_search. Assume that all values in the key field are unique.

------------------------------------------------------------------------------------------------------------

Task № 2
You have the voluntary array of values. Please, write a function that will find all integer duplicates and
returns their qty and its number.

*If array contains several duplicates it should return the most frequent value.
*If array has the same length of duplicates it should return the biggest number

------------------------------------------------------------------------------------------------------------

Task № 3
You have nested object, write the function that will return merged object (not nested). Assume that all keys
in the object are unique. If an object is empty, assign undefined value.

------------------------------------------------------------------------------------------------------------

Task № 4
Implement ‘merge sort’ (it’s type of sorting) for voluntary array, but only 25% of Array should be sorted.

------------------------------------------------------------------------------------------------------------

Task № 5
You have an array of lamps, which are numbered from 1 to N. By default all lights are 
switched off. You are iterating throught the array with some step k and switch the 
light in the current lamp (turn on/off light depending on lamp's previous state). The 
third input param is an array of steps you should iterate lamps array with. For 
example, N = from 1 to 10, steps array is [2, 3]. All lamps are swtiched off. So, you 
should turn on the following lamps: №2, 4, 6, 8, 10 on the first iteration and switch 
lights in lamp №3, 6, 9 on the second. So, the 6th lamp will be switched off at the 
end (switched twice). You should return quantity of switched off lamps in an array.

------------------------------------------------------------------------------------------------------------
