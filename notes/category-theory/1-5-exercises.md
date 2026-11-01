---
course: category-theory
chapter: 1
section: 1.5
title: Exercises on Categories
status: incomplete
source-pages: 7-10
---

:::exercise
Find 3 examples of categories not yet mentioned.

:::solution
My first idea is the “box category”, i.e. $\prod_{i=1}^{n}\mcA_i$, where
$$\mathrm{ob}\Bigl(\prod_{i=1}^{n}\mcA_i\Bigr)=\mathrm{ob}(\mcA_1)\times\mathrm{ob}(\mcA_2)\times\cdots\times\mathrm{ob}(\mcA_n)$$
in the case of finite $n$, and $\mathrm{ob}(\mcA_1)\times\mathrm{ob}(\mcA_2)\times\cdots$ in the case of infinite $n$. Morphisms are taken componentwise:
$$\Hom_{\prod_i\mcA_i}\bigl((A_{1,1},A_{2,1},\dots),(A_{1,2},A_{2,2},\dots)\bigr)=\Hom_{\mcA_1}(A_{1,1},A_{1,2})\times\Hom_{\mcA_2}(A_{2,1},A_{2,2})\times\cdots$$
if $n=\infty$, with the product ending in $\cdots\times\Hom_{\mcA_n}(A_{n,1},A_{n,2})$ if $n$ is finite.

Composition is componentwise, $(\beta_1,\beta_2,\dots)\circ(\alpha_1,\alpha_2,\dots)=(\beta_1\circ\alpha_1,\beta_2\circ\alpha_2,\dots)$, and the identity on $(A_1,A_2,\dots)$ is $(1_{A_1},1_{A_2},\dots)$. Associativity holds because it holds in every component:
$$\bigl((\gamma_i)\circ(\beta_i)\bigr)\circ(\alpha_i)=\bigl((\gamma_i\circ\beta_i)\circ\alpha_i\bigr)=\bigl(\gamma_i\circ(\beta_i\circ\alpha_i)\bigr)=(\gamma_i)\circ\bigl((\beta_i)\circ(\alpha_i)\bigr),$$
and for every morphism $(\alpha_i)$, with $\alpha_i\in\Hom_{\mcA_i}(A_{i,1},A_{i,2})$, we have $\alpha_i\circ 1_{A_{i,1}}=\alpha_i=1_{A_{i,2}}\circ\alpha_i$ for all $i$.

Another idea would be tensors? Since a tensor gives

![Arrows from V to V⊗W, from V⊗W to W, and from V to W](/notes/category-theory/figures/c1-tensor-triangle.svg)

then maybe we can formalize this.

**Category of graphs.** $\mathrm{ob}(\mcG)\ni G$, $\Hom_{\mcG}(G,H)\ni f,g$.

![Scratch sketch: a star graph mapped to a star of the same shape and to a four-cycle, and the four-cycle redrawn with a crossing, labelled A4](/notes/category-theory/figures/c1-graph-maps.svg)

- $A_4$ object: the entire thing is an object in the category; the shape and the morphism change.
- Two drawings of the same star graph, positioned differently, are marked $\neq$. Not just $\Aut$? $\therefore$ group?
- $\mathrm{ob}(\mcG)$ $\Downarrow$ $\Hom_{\mcG}(A,B,C,D)$: 12 morphisms, $\{f_i\}_{i=1}^{12}$ $\rightsquigarrow$ $\Hom_{\mcG}\bigl((A_1,A_2),\dots,(A_m,A_n)\bigr)$.

Generally I found 4 things of interest:

1. Category $\mathbf{Graph}$.
2. Category $\mathbf{Mat}_k$ (matrices $n\times m$).
3. Category monoid & category box.
4. Übertereng category (Üb): a made-up one.
:::
:::

:::exercise
Show that a morphism in a category has at most one inverse.

:::solution
Let $f\colon A\to B$ and $g\colon B\to A$ with $gf=1_A$ and $fg=1_B$. Now let $h\colon B\to A$ such that $h\neq g$ and $hf=1_A$, $fh=1_B$. Then
$$gf=1_A=hf\implies gfg=hfg\implies g1_B=h1_B\implies g=h.$$
Ahah! But we assumed $g\neq h$; thus we have a contradiction, and there cannot be more than one inverse for a map in a category.

(A cleaner approach: $g=g1_B=g(fh)=(gf)h=1_Ah=h$.)
:::
:::

:::exercise
Let $\mcA,\mcB$ be categories. We defined the product category $\mcA\times\mcB$, but the definitions of composition and identity were not given. Define them.

:::solution
$\mcA\times\mcB$ has composition given by $(g,h)\circ(f,j)$, where $f\in\Hom_{\mcA}(A,A')$, $g\in\Hom_{\mcA}(A',A'')$, $j\in\Hom_{\mcB}(B,B')$ and $h\in\Hom_{\mcB}(B',B'')$, and we compose componentwise:
$$(g,h)\circ(f,j)=(g\circ f,\ h\circ j).$$

This is well-defined, which I won’t show here. Next, for identity: with $1_A$ the identity of $A$ and $1_B$ the identity of $B$, we have $(1_A,1_B)$ as the identity on $(A,B)$, given that we take things componentwise. So for $(g,h)$ out of $(A,B)$,
$$(g,h)\circ(1_A,1_B)=(g\circ 1_A,\ h\circ 1_B)=(g,h).$$
This also allows us to find inverses, but does not guarantee their existence (since that would be axiomatic).
:::
:::

:::exercise
There exists a category called $\mathbf{Toph}$, whose objects are topological spaces and whose maps $X\to Y$ are homotopy classes of continuous maps from $X$ to $Y$. What do we need to know about homotopy in order to prove that $\mathbf{Toph}$ is a category? What does it mean for two objects of $\mathbf{Toph}$ to be isomorphic?

:::solution
$\mathrm{ob}(\mathbf{Toph})\ni X$ and $\Hom_{\mathbf{Toph}}(X,Y)\ni h$:

![Several paths from X to Y with arrows sweeping between them, picturing one homotopy class](/notes/category-theory/figures/c1-homotopy-class.svg)

a) We need to know what composition looks like: $\beta\circ\alpha$ with $\alpha\in\Hom_{\mathbf{Toph}}(X,Y)$ and $\beta\in\Hom_{\mathbf{Toph}}(Y,Z)$, so
$$\Hom_{\mathbf{Toph}}(Y,Z)\times\Hom_{\mathbf{Toph}}(X,Y)\to\Hom_{\mathbf{Toph}}(X,Z)$$
gives us $(\beta,\alpha)\mapsto\beta\circ\alpha$.

![Bundles of paths for a class α from X to Y and a class β from Y to Z, and the composite class β∘α from X to Z](/notes/category-theory/figures/c1-toph-composition.svg)

b) We need to know the identity, which is just the class of the continuous identity map of $X$ to itself. Easy.

c) Associativity.
Two objects in $\mathbf{Toph}$ are isomorphic if all their equivalence classes …
:::
:::
