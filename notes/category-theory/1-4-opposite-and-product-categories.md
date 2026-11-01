---
course: category-theory
chapter: 1
section: 1.4
title: Constructing Categories: Opposites and Products
source-pages: 6-7
---

## Opposite categories

:::definition Opposite category
Every category $\mcA$ has an **opposite** or **dual** category. This is denoted $\mcA^{\mathrm{op}}$ and is defined by reversing arrows. Formally, $\mathrm{ob}(\mcA^{\mathrm{op}})=\mathrm{ob}(\mcA)$ and
$$\Hom_{\mcA^{\mathrm{op}}}(B,A)=\Hom_{\mcA}(A,B)\quad\text{for all objects }A,B.$$
Identities in duals are the same as in their respective originals. Composition is reversed.
:::

So in $\Hom(A,B)$ we have
$$A\xrightarrow{\ f\ }B\qquad\text{and}\qquad A\xrightarrow{\ f\ }C\xrightarrow{\ g\ }B,$$
but in $\Hom_{\mcA^{\mathrm{op}}}(B,A)$ we have
$$A\xleftarrow{\ f\ }B\iff B\xrightarrow{\ f\ }A\qquad\text{and}\qquad A\xleftarrow{\ f\ }C\xleftarrow{\ g\ }B\iff B\xrightarrow{\ g\ }C\xrightarrow{\ f\ }A.$$

Each $f\in\Hom_{\mcA}(A,B)$ has a corresponding $f$ in $\Hom_{\mcA^{\mathrm{op}}}(B,A)$. Usually this is simply called $f$, or $f^{\mathrm{op}}$.

The **principle of duality** states that every categorical definition, theorem and proof has a dual, obtained by reversing the arrows.

## Product categories

:::definition Construction 1: product category
Given categories $\mcA$ and $\mcB$, we have a **product category** $\mcA\times\mcB$ in which $\mathrm{ob}(\mcA\times\mcB)=\mathrm{ob}(\mcA)\times\mathrm{ob}(\mcB)$ and
$$\Hom_{\mcA\times\mcB}\bigl((A,B),(A',B')\bigr)=\Hom_{\mcA}(A,A')\times\Hom_{\mcB}(B,B').$$
:::
