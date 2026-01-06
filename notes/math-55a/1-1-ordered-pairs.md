---
course: math-55a
chapter: 1
section: 1.1
title: Ordered Pairs
---

# Section 1.1: Ordered Pairs

We begin with a discussion of ordered pairs. Consider a set of numbers $\{1,2,3,4\}$. For any set there is no particular order that triumphs over another, i.e., $\{1,2,3,4\} = \{1,3,2,4\} = \{3,4,2,1\} =\ldots$, an obvious truth. Say we want $\{1,2,3,4\}$ to be in the order of $\{3,2,1,4\}$ for some arbitrary reason; we may then consider the collection,
$$
  \mathfrak{C} = \{\{3\} , \{3,2\} ,\{3,2,1\} , \{3,2,1,4\}     \}
.$$
It becomes obvious what is happening here: the method by which we get order is dependent on the number of iterations in which a particular element appears in any number of sets in a given collection (in comparison to the other elements in the other sets of the respective collection).

Then consider this process but for a nested collection (a collection within a collection) which contains two sets, namely the arbitrary elements $a,b$ in opposing orders, and notice that it gives us the definition of a 2-tuple (ordered pair),
$$ \mathfrak{C}_{1} = \{\{a\} ,\{a,b\}   \} \coloneqq (a,b) \, \text{ and }\, \mathfrak{C}_{2}  = \{\{b\} ,\{b,a\}   \} \coloneqq  (b,a).$$

:::note
This form of generating or representing ordered pairs is called the ***Kuratowski*** of ordered pairs.
:::

This, of course, naturally extends to greater $n$-tuples. There are some obvious consequences of this that will not be gone over here.

The **Cartesian product** is a set of ordered pairs which can be given by taking power sets.

:::definition
Cartesian Product}{The Cartesian product is the cross product of two sets given by
$$ A \times  B = \{(a,b)\mid a\in A, b\in B\}  \}   ,$$ where, by the Kuratowski encoding,
$$  (a,b)\coloneqq \{\{a\},\{a,b\}\} \in  \mathcal{P}(\mathcal{P}(A \cup B))  .$$
:::

