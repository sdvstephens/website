---
course: math-55a
chapter: 1
section: 1.4
title: Families
---

# Section 1.4: Families

Forget literally everything you know about notational convention! Why? Idk, that's just how mathematicians decided to approach this topic—the family (*awwwwww*). Consider a function $x$ (yes, this is strange) s.t. $x : I \to X$. We call $I$ the **<u>index set</u>**, and thereby each $i \in I$ is an **<u>index</u>**; the range of the function is then called the **<u>indexed set</u>** (why, this is so stupid?!); the function has a special name, being called a **<u>family</u>**, and the value of $x$ at a given $i$ is called a **<u>term</u>** of the family (denoted $x_{i}$). Other even more bewildering notation may be used such as $\{x_{i}\}$ being a family in $X$ or, more horrifically, a family $\{A_i\}$ of subsets of $X$, being a function $A : I \to \mathcal{P}(X)$ (now that I think of it, this notation, sickeningly, is becoming somewhat preferable).

Given that $\operatorname{ran}(\{A_i\}) = \bigcup_{i \in I} A_i$, we notice that every arbitrary collection of sets is in fact the range of some arbitrary family: consider $I$ and $X$ equal to $\mathfrak{C}$ s.t. $\{A_i\} : \mathfrak{C} \to \mathfrak{C}$. I am realizing it is the terminology which is so obtuse, that what I do not like.

We may think of $\bigcup_{i \in I} A_i$ as $\bigcup^n_{i = 1} A_i$ (similar to what we have seen for summations and products), where $n$ is the order of $i$ and we assume $1$ is the first element in $i$.

:::example
For some index set $i=\{1,2,3\}$, and an indexed set $A_i$ we have $\bigcup^3_{i = 1} = A_{1} \cup A_{2} \cup A_{3}$. Another example may be given as follows: let $I = \mathbb{N}$, and $A_i = \{-i,0,i\}$, that is to say for every $i$ we have $A_{1}=\{-1,0,1\}, A_{2}=\{-2,0,2\},\ldots$, and so on. Notice that the infinite union of $A_i$ produces $\mathbb{Z}$ and the infinite intersection produces $\{0\}$.
:::

:::example
Let us now consider an uncountably infinite indexing set in a plane $I = [-1,1], A_i=\{i\}\times [0,1] \subset \mathbb{R}^2$. Notice this is going to be a subset of ordered pairs, i.e., $\{(i,y) \mid 0 \le y \le 1\}$. Geometrically, the union over all $i\in I$ of $A_i$ gives us a rectangle in $\mathbb{R}^2$ defined by $[-1,1]\times [0,1]$; similarly the intersection of these sets, notice, are intersections of finite parallel lines, thus there exists no element in common with these sets, thus it is $\emptyset$.
:::

:::theorem
**Associative law of unions:** Let $\{I_j\} : J \to K$ where $K = \displaystyle\bigcup_{j\in J} I_j$, and $\{A_k\}: K \to X$. Then

$$\bigcup_{k \in K}A_k=\bigcup_{j \in J}\left( \bigcup_{i \in I_j} A_i \right).$$
:::

:::note
**Exercise:** Prove the theorem above.

Sorry! I am leaving this one as an exercise for the reader (sorrryyyyyy :) )
:::

De Morgan's laws apply as standard for index/indexed sets and their unions. From such, it is easy to see that if $\{A_i\}, \{B_i\}$ are families of sets, then $\bigcup_{i} A_i \cap \bigcup_j B_j = \bigcup_{i,j} (A_i \cap B_j)$, and similarly for $\bigcap_{i,j} (A_i \cup B_j)$.

:::definition
**Generalized Cartesian product:** Let us consider a special type of family: let $I=\{a,b\}, \, a\neq b$ and let $Z$ be the set of all families $z$ indexed by $I$ such that $z_a \in X, z_b \in Y$. Now consider $f : Z \leftrightarrow X \times Y$ such that $f(z)=(z_a,z_b)$. This is the **<u>generalized Cartesian product</u>**!

There is further detail one can go into about families of sets and sets of all given families of sets, and even sets of those sets (including their Cartesian products), but these are so disgusting as to induce spontaneous retching in even the most tough-stomached mathematicians. So we will avoid it, if possible.
:::
