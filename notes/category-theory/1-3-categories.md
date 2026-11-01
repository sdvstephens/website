---
course: category-theory
chapter: 1
section: 1.3
title: Categories
source-pages: 3-6
---

:::definition Category
A **category** $\mcA$ consists of:

- a collection $\mathrm{ob}(\mcA)$ of **objects**;
- for each $A,B\in\mathrm{ob}(\mcA)$, a *collection* $\mcA(A,B)$ of **maps**, **arrows** or **morphisms** from $A$ to $B$;
- for each $A,B,C\in\mathrm{ob}(\mcA)$, a function $\mcA(B,C)\times\mcA(A,B)\to\mcA(A,C)$, $(g,f)\mapsto g\circ f$, called **composition**;
- for each $A\in\mathrm{ob}(\mcA)$, an element $1_A$ (or $\id_A$) of $\mcA(A,A)$, called the **identity** on $A$,

satisfying the following axioms:

- **associativity**: for all $f\in\mcA(A,B)$, $g\in\mcA(B,C)$ and $h\in\mcA(C,D)$ we have $(h\circ g)\circ f=h\circ(g\circ f)$;
- **identity laws**: for all $f\in\mcA(A,B)$ we have $f\circ 1_A=f=1_B\circ f$.
:::

:::note Notation
- $A\in\mcA$ means $A\in\mathrm{ob}(\mcA)$.
- $f\colon A\to B$, $A\xrightarrow{f}B$ and $f\in\mcA(A,B)$ all mean the same thing; $\mcA(A,B)$ is also written $\Mor(A,B)$.
- $gf$ means $g\circ f$.
- Another convention: $\mcA(A,B)=\Hom_{\mcA}(A,B)=\Hom(A,B)$.
:::

From each **string** $A_0\xrightarrow{f_1}\cdots\xrightarrow{f_n}A_n$ we can construct a map $A_0\to A_n$, namely $f_nf_{n-1}\cdots f_1$.

:::example A string of length 4
Let the string have length $n=4$. Then the two maps
$$A_0\ \underset{(f_4(1_{A_3}f_3))((f_2f_1)1_{A_0})}{\overset{((f_4f_3)f_2)f_1}{\rightrightarrows}}\ A_4\qquad\Longleftrightarrow\qquad A_0\xrightarrow{\ f_4f_3f_2f_1\ }A_4$$
are the same map, $f_4f_3f_2f_1$.
:::

For $n=0$, the map $A_0\to A_0$ is the identity map.

### Commutative diagrams

![A commutative diagram with f: A → B, g: B → E, h: A → C, i: C → D, j: D → E](/notes/category-theory/figures/c1-commutative-diagram.svg)

This diagram commutes $\iff gf=jih$.

### Domain and codomain

If $f\in\mcA(A,B)$, then $A$ is the **domain** and $B$ is the **codomain** of $f$.

## Special types of categories

- $\mathbf{Set}$: the category of sets, with morphisms the ordinary maps/functions.
- $\mathbf{Grp}$: the category of groups (objects = groups), and morphisms are homomorphisms.
- $\mathbf{Ring}$: objects are rings, morphisms are homomorphisms.
- $\mathbf{Vect}_k$: for every field $k$ there is a category $\mathbf{Vect}_k$ of vector spaces over $k$ and linear maps between them.
- $\mathbf{Top}$: topological spaces with continuous maps.

## Isomorphisms

:::definition Isomorphism
$f\in\Hom_{\mcA}(A,B)$ is an **isomorphism** if there exists $g\in\Hom_{\mcA}(B,A)$ such that $gf=1_A$ and $fg=1_B$.

- $g$ is called the **inverse** of $f$ and is written $f^{-1}$.
- If there exists an isomorphism from $A$ to $B$, we say they are **isomorphic**: $A\cong B$.
:::

:::example
- On sets, isomorphisms = bijections.
- On groups, isomorphisms = bijective homomorphisms.
- Rings: same as groups.
- $\mathbf{Top}$: isomorphisms = homeomorphisms (recall that for maps of topological spaces, bijective and continuous $\not\Leftrightarrow$ isomorphism).
:::

:::remark
A **general category** is one where there need not be elements of objects, or sets with operations, or maps in the usual sense:

- the objects of a category needn’t be remotely like sets, AND
- the maps needn’t be remotely like functions.
:::

$\varnothing$ is a category with no objects or maps.

## Drawing small categories

We draw the category with one object and only its identity map (often written $\mathbf{1}$) as a single dot, $\bullet$, and we draw $A\xrightarrow{f}B$ as $\bullet\to\bullet$.  We don’t know what an “element” of $A$ or $B$ would be, or how one could regard $f$ as a function of any sort!

We easily have more complex examples:

![Two parallel arrows between two dots; a triangle A, B, C with composite gf; five dots with arrows f, g, h, j, k and composites kj and hj = gf](/notes/category-theory/figures/c1-small-categories.svg)

etc.

:::definition Discrete category
**Discrete categories** are a collection of objects with ONLY identity maps as morphisms.
:::

## Groups as one-object categories

:::proposition
A group is the same thing as a category that has only one object and in which all the maps are isomorphisms.
:::

$$\Updownarrow$$

:::proposition
For any object $A\in\mathrm{ob}(\mcC)$, the set of automorphisms of $A$,
$$\Aut(A)=\{f\in\Mor(A,A)\mid f\text{ is an isomorphism}\},$$
equipped with composition, is a group.
:::

So a one-object category $\mcC$ consists of a set or class $\Mor(A,A)$, an associative composition function $\circ\colon\Mor(A,A)\times\Mor(A,A)\to\Mor(A,A)$, and a two-sided unit $1_A\in\Mor(A,A)$. This would make $\Mor(A,A)$ into a group, since “every map in $\mcC$ is an isomorphism” is exactly to say that every element of $\Mor(A,A)$ has an inverse with respect to $\circ$. We can represent this as:

| One-object category $\mcC$ | Group $G$ |
|---|---|
| $\mcC$ with its object $A$ | the group $G$ |
| maps in $\mcC$ | elements of $G$ |
| $\circ$ in $\mcC$ | $*$ in $G$ |
| $1_A$ | $1\in G$ |

and the category looks something like this:

![A single object A with several loops](/notes/category-theory/figures/c1-group-one-object.svg)

## Preorders and orders

:::definition Preorder
A **preorder** is a reflexive and transitive binary relation.  A **preordered set** is a set $S$ with a preorder $\le$ on it, denoted $(S,\le)$.
:::

:::example
- $S=\RR$: $(\RR,\le)$, the standard less than or equal to.
- $S=\ZZ$: $(\ZZ,\le)$ with $a\le b$ meaning $a\mid b$ ($a$ divides $b$).
- $S$ is the set of subsets of a set $M$, and $\le$ is $\subseteq$ (inclusion).
:::

Category theoretically, this is to say that a preordered set is a category $\mcA$ in which, for each $A,B\in\mcA$, there is **at most** one morphism from $A$ to $B$ (one exactly when $A\le B$). By identity, $A\le A$ for all $A\in\mcA$, and by composition, if $A\le B$ and $B\le C$ then $A\le C$ (transitivity). Associativity then comes for free, since there is at most one morphism between any two objects.

:::definition Order
An **order** (or **poset**, **partially ordered set**) is a preorder with the property that if $A\le B$ and $B\le A$ then $A=B$.
:::
