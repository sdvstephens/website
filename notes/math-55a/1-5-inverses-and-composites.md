---
course: math-55a
chapter: 1
section: 1.5
title: Inverses and Composites
---

# Section 1.5: Inverses and Composites

Consider a function $f : X \to Y$. A natural mapping that might arise (when thinking on power sets) is some function $F : \mathcal{P}(X) \to \mathcal{P}(Y)$; just as each element of $X$ is mapped to an element of $Y$ under $f$, each subset of $X$ maps to some subset of $Y$ under $F$. So if $A \subset X$, then $\exists (A \mapsto \operatorname{Im}(f_A))$ for all $A \in \mathcal{P}(X)$. Cool? I guess? What is to be done about this? In all honesty, I am not sure this factoid has much use other than being a pedagogical tool (though I am almost certainly wrong and I am sure someone will rush to correct me, wherein I might toil and languish over my incorrectness and stupidity, suffering immensely—but probably not, because I simply do not care), but for our cases we use it to introduce its behavior in the inverse.

:::note
Regarding notation—as we all too often are—$\operatorname{Im}(f_A)$ is the same thing as $f(A)$ when regarding images of subsets. I prefer the former notation as it feels a bit more natural to me.
:::

:::definition
**Inverses and inverse images:** Given a function $f : X \to Y$, we say $f^{-1}$ is the ***inverse*** of $f$ given by $f^{-1} : \mathcal{P}(Y) \to \mathcal{P}(X)$ such that if $B \subset Y$, then

$$\operatorname{Im}(f^{-1}_B) = \{x \in X \mid f(x) \in B\},$$

is the ***inverse image*** of $B$ under $f$.
:::

This definition results in some immediate necessary and sufficient conditions: first, for $f : X \to Y$ to exist, the inverse image under $f$ of each non-empty subset of $Y$ must be a non-empty subset of $X$; second, for $f$ to be injective is that the inverse image under $f$ of each singleton in the range of $f$ be a singleton in $X$.

:::note
We often use $f^{-1}$ for another purpose: for some $f: X \to Y$, $f^{-1} : \operatorname{ran}(f) \to X \implies f^{-1}(y) = x \iff f(x) = y$. This will be the most common use case for $f^{-1}$ as the inverse function $g : Y \to X$.
:::

There are some connections between images and inverse images which I will quickly enumerate, but I will not provide proof for (for the proofs see Halmos, ~pp. 59):

Let $f$ be a function such that $f : X \to A$ for each of the following,

1. $B \subset Y \implies f(f^{-1}(B)) \subset B$;
2. $f : X \twoheadrightarrow Y, \, B \subset Y \implies f(f^{-1}(B)) = B$;
3. $A \subset X \implies A \subset f^{-1}(f(A))$;
4. $f : X \hookrightarrow Y, \, A \subset X \implies f^{-1}(f(A)) = A$;
5. If $\{B_i\}$ is a family of subsets of $Y$, then $f^{-1}(\bigcup_{i \in I} B_i) = \bigcup_{i \in I} f^{-1}(B_i)$ and $f^{-1}(\bigcap_{i \in I} B_i) = \bigcap_{i \in I} f^{-1}(B_i)$;
6. $f^{-1}(Y - B) = X - f^{-1}(B)$ for each $B \subset Y$.

We now move onto ***composites***.

:::definition
**Composition:** Let $f : X \to Y$ and $g : Y \to Z$. It is clear that we can make a map from $X \to Z$ since the range of $f$ can be the domain of $g$. We can represent this new function—i.e., the ***composite function***—as either $h : X \to Z$ or $g \circ f$, and often simply just $gf$. We read this right to left.
:::

Notice that function composition is not always commutative, nor need it be. Also notice that this remains true under the special case that $f : X \to Y$ and $g : Y \to X$; functional composition, however, is always associative. There will be a strong proof for this later on (in Groups). Notice that if $g : X \to Y$ for standard $f$, if it is bijective we have an inverse function and identity map given by $h$. Functional composition under inverses appears something like this: if $f : X \to Y$ and $g: Y \to Z$, and $f^{-1} : \mathcal{P}(Y) \to X$ and $g^{-1} : \mathcal{P}(Z) \to \mathcal{P}(Y)$. Then $g \circ f$ has an inverse given by $f^{-1} \circ g^{-1}$. Notice this is not true for $g^{-1} \circ f^{-1}$.

## Inverse/converse and composite relations

The main idea of this comes out of our exploration of inverse functions. Functions *are* relations after all. Consider the ***converse relation*** of $R$ on $X \times Y$ s.t. $xRy$ and $yR^{-1}x$. Similar things can be done for composites by generalizing composition to relations, observe: let $S$ be a relation on $Y \times Z$ and $R$ be a relation on $X \times Y$ such that $xRy$ and $ySz$. Now let $T$ over $X \times Z$ be given by $S \circ R$ such that $xTz$ exists $\iff \exists y \in Y$ such that $xRy$ and $ySz$. Congrats! You made a ***composite relation***. If it is the case that $R$ and $S$ are functions s.t. $R(x) = y, \, S(y) = z$ and $S(R(x)) = z \iff xTz$ which implies that functional composition is a special case of a greater abstraction called the ***relative product*** (??).