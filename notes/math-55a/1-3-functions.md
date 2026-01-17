---
course: math-55a
chapter: 1
section: 1.3
title: Functions
---

# Section 1.3: Functions

First I want to remind us of some notation and terminology things (mathematicians are ***<u>very</u>*** specific):

:::note
To say a function is *on* $X$ *into* $Y$, means that the function is from $X$ to $Y$.
:::

:::definition
**Functions:** We all know what functions are at some level, but here we are going to be extraordinarily explicit (though you likely have already heard it in this form, regardless). A function on $X$ into $Y$ is a relation ($R$) given by a letter like $f,g,h,\varphi,\ldots$, such that:

1. $\operatorname{dom} f = X$;
2. if $(x,y)\in f$ and $(x,z) \in f$, then $y=z$ (uniqueness of $y$ for each $x$); additionally, $f(x)=y$ is conventional notation (instead of $(x,y) \in f$ or $xfy$);
3. $y$ is called the ***value*** that $f$ ***assumes*** at the ***argument*** $x$; i.e., $f$ ***maps/sends/transforms*** $x$ to/into $y$. We often use the terms map, mapping, transformation, correspondence, operator, and function interchangeably.

We denote this correspondence via

$$f : X \to Y.$$
:::

Finally, we note that the set of all functions from $X$ to $Y$ is a subset of the power set $\mathcal{P}(X \times Y)$ and is denoted $Y^X$.

Something to note is that a function is not an active entity despite action-invoking words such as *transforms*; it merely *is*. The use of the word function to describe the undefined object that is somehow active in relation to a graph is nevertheless a static set, similar to that of a directory of names that correspond to addresses.

Reminder that while $\operatorname{dom} f = X$, it need not be the case that $\operatorname{ran} f = Y$, instead the range is reserved for the subset of all $y \in Y$ that have a corresponding $x$ such that $f(x)=y$, i.e., is mapped to by some $x$. We call this property being ***onto*** and we say $f$ maps $X$ ***onto*** $Y$; more commonly however we say that $f$ is ***surjective***—we explicitly write this as $\forall y \in Y, \exists x \in X : f(x)=y$—and we denote this surjectivity via

$$f : X \twoheadrightarrow Y,$$

and if $A \subset X$, we may consider all $y \in Y$ such that there is an $x \in A$ such that $f(x_A)=y$ (here I use $x_A$ as crude shorthand for $f(x)$ s.t. $x \in A$, where Halmos uses the more primitive $f(A)$), the set of those $y \in Y$ is known as the ***image*** of $f$ under $A$. If it is the case that $X \subset Y$, the function $f$ defined by $f(x)=x, \, \forall x \in X$, we call this the ***inclusion map/embedding/injection*** or we say $f$ is ***one-to-one***; we explicitly write this as $\forall a \neq b, \, f(a) \neq f(b)$. We denote injectivity via

$$f : A \hookrightarrow Y.$$

A special case of injectivity comes when we inject $X \hookrightarrow X$, relation-wise this is equality in $X$, language-wise, we call this the ***identity map*** on $X$.

:::proposition
**Restriction and extensions:** Consider a function $f: Y \to Z$ and a set $X \subset Y$. We say that there is a ***natural way*** of constructing a new function $g : X \to Z$; let $g(x) = f(x), \forall x \in X$, we then say $g$ is a ***restriction*** of $f$ to $X$ and $f$ is the ***extension*** of $g$ to $Y$. We denote this as $g = f|_X$ where we can express the definition as $(f|_X)(x) = f(x) \, \forall x \in X$ and $\operatorname{ran}(f|_X) = f(X)$.
:::

There are a few other terminologies that follow from all that has been mentioned so far, and I will go through them rather quickly:

:::definition
**Projection:** $f$ (also $\operatorname{pr}$) is a ***projection*** from $X \times Y$ onto $X$ if $f(x,y) = x$; similarly, if $R = X \times Y$, then instead of being a projection of $R$ onto $X$, it is now the range of the projection $f$ ($\operatorname{ran}(\operatorname{pr})$).
:::

:::definition
**Bijection:** Expounding on our notion of inclusion mappings and surjections from earlier, ***bijectivity***—one-to-one correspondence-ness—is a function that is both injective and surjective.
:::

Bijections are derived from an equivalence relation $R$ in $X$ with $aRb \iff f(a) = f(b)$ for $a,b \in X$; so given a function/set $g(y) = \{x \in X \mid f(x) = y, \, \forall y \in Y\}$, the equivalence relation $R$ tells us that $g(y)$ is an equivalence class of the relation $R$; that is to say, we define the function as $g: Y \twoheadrightarrow X/R$, notice that for $g$, if $c \neq d, \, c,d \in Y$, due to the nature of equivalence classes (remember, all the classes are disjoint), $g(c) \neq g(d)$; notice this is the exact explicit definition of injectivity, thus this is a surjective-injective, i.e., bijective mapping. Although there is no universally agreed on notation for bijection, we shall denote this mapping as $g : Y \leftrightarrow X/R$.

:::definition
**Characteristic functions:** If $A \subset X$ the characteristic function of $A$ is the function $\chi : X \to 2$ given by

$$
\chi(x) = \begin{cases}
1 & \text{if } x \in A \\
0 & \text{if } x \in X - A ,
\end{cases}
$$

however, we may write $\chi_A$ to indicate that it depends on $A$. The function that assigns to each $A \subset X$, i.e., $\mathcal{P}(X)$, the characteristic function of $A \in 2^X$ is a bijection, i.e., $f : \mathcal{P}(X) \leftrightarrow 2^X$.
:::

:::example
Concerning bijectivity (point iii.), the examples have all the inclusion maps as one-to-one, however, except in a few trivial special cases, the projections are not. What are these special cases?

:::solution
Consider a function's projection as the canonical map $\gamma : X \to X/R$, the following cases are trivial examples of non-injective projection maps:

1. $X = \emptyset$, vacuously fulfilled (it matters not what $R$ is);
2. $R \coloneqq \{(x,x) \mid x \in X\}$, so every equivalence class is a singleton.
:::
:::

:::example
Prove:

1. $Y^{\emptyset}$ has exactly one element, namely $\emptyset$, regardless of if $Y$ is empty or not.
2. If $X$ is non-empty, then $\emptyset^X$ is empty.

:::solution
1. Given that $Y^{\emptyset} \subset \mathcal{P}(\emptyset \times Y)$, and the definition of Cartesian sets has **and** as a qualifier, i.e., $A \times B = \{(a,b) \mid a \in A \textbf{ and } b \in B\}$, we can see that $\emptyset \times Y$ contains in fact no elements which satisfy this, and thus, it is the empty set. So $Y^{\emptyset} \subset \mathcal{P}(\emptyset) = \{\emptyset\}$, thus the only element that can be in $Y^{\emptyset}$ is the singleton $\{\emptyset\}$. This is a vacuous satisfaction and is non-intuitive; some intuition, perhaps, may be gained by thinking "*the only thing nothing can map to is nothing*," or by taking the cardinality of these two sets with each other given by $|\emptyset| \cdot |Y| = 0|Y| = 0$ (though this is mainly for intuition).

2. $\emptyset^X$ means that something must map to the empty set, meaning there must be an element within the empty set, but this cannot be true! Thus, by definition, the set must be empty.
:::
:::
