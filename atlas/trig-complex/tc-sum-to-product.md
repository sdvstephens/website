$\cos 40^\circ + \cos 80^\circ$ looks like it can't simplify — two unrelated cosines. Yet it equals a single clean product, $2\cos 60^\circ\cos 20^\circ = \cos 20^\circ$. There is a way to turn any sum of two sines or cosines into a product, and vice versa.

## Discovery

1. Write out $\cos(\alpha+\beta)$ and $\cos(\alpha-\beta)$ using the addition formulas. Add the two equations. What survives, and what cancels?
2. Now subtract the second from the first instead. What identity for $\cos(\alpha-\beta)-\cos(\alpha+\beta)$ appears?
3. Do the same with $\sin(\alpha+\beta)$ and $\sin(\alpha-\beta)$: add them, then subtract them. Record both results.
4. These four identities express *products* in terms of *sums*. To reverse them, set $P=\alpha+\beta$ and $Q=\alpha-\beta$, so $\alpha=\tfrac{P+Q}{2}$ and $\beta=\tfrac{P-Q}{2}$. Rewrite "add the cosines" from step 1 as a formula for $\cos P + \cos Q$. What product do you get?
5. Do the same substitution on the $\sin$ results to get $\sin P + \sin Q$ and $\sin P - \sin Q$ as products.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Product-to-sum:**
$$2\cos\alpha\cos\beta = \cos(\alpha-\beta)+\cos(\alpha+\beta),\qquad 2\sin\alpha\sin\beta = \cos(\alpha-\beta)-\cos(\alpha+\beta),$$
$$2\sin\alpha\cos\beta = \sin(\alpha+\beta)+\sin(\alpha-\beta).$$
**Sum-to-product** (with $P,Q$ arbitrary):
$$\cos P + \cos Q = 2\cos\frac{P+Q}{2}\cos\frac{P-Q}{2},\qquad \cos P - \cos Q = -2\sin\frac{P+Q}{2}\sin\frac{P-Q}{2},$$
$$\sin P + \sin Q = 2\sin\frac{P+Q}{2}\cos\frac{P-Q}{2},\qquad \sin P - \sin Q = 2\cos\frac{P+Q}{2}\sin\frac{P-Q}{2}.$$

### Proof

From the addition formulas, $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ and $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$. Adding gives $\cos(\alpha+\beta)+\cos(\alpha-\beta)=2\cos\alpha\cos\beta$; subtracting gives $\cos(\alpha-\beta)-\cos(\alpha+\beta)=2\sin\alpha\sin\beta$. Likewise $\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta$; adding gives $\sin(\alpha+\beta)+\sin(\alpha-\beta)=2\sin\alpha\cos\beta$. These are the product-to-sum identities.

For the sum-to-product forms, substitute $\alpha=\tfrac{P+Q}{2}$, $\beta=\tfrac{P-Q}{2}$, so $\alpha+\beta=P$ and $\alpha-\beta=Q$. Then $\cos P+\cos Q=2\cos\alpha\cos\beta=2\cos\tfrac{P+Q}{2}\cos\tfrac{P-Q}{2}$. From $2\sin\alpha\sin\beta=\cos(\alpha-\beta)-\cos(\alpha+\beta)=\cos Q-\cos P$ we get $\cos P-\cos Q=-2\sin\tfrac{P+Q}{2}\sin\tfrac{P-Q}{2}$. From $2\sin\alpha\cos\beta=\sin(\alpha+\beta)+\sin(\alpha-\beta)=\sin P+\sin Q$ we get $\sin P+\sin Q=2\sin\tfrac{P+Q}{2}\cos\tfrac{P-Q}{2}$. Finally $\sin P-\sin Q$ follows by replacing $Q$ with $-Q$ in the previous line and using $\sin(-Q)=-\sin Q$, $\cos(-Q)=\cos Q$: $\sin P-\sin Q=2\cos\tfrac{P+Q}{2}\sin\tfrac{P-Q}{2}$. $\blacksquare$

### Worked Instance

Simplify $\cos 40^\circ + \cos 80^\circ$. With $P=80^\circ$, $Q=40^\circ$: $\tfrac{P+Q}{2}=60^\circ$, $\tfrac{P-Q}{2}=20^\circ$, so
$$\cos 40^\circ+\cos 80^\circ = 2\cos 60^\circ\cos 20^\circ = 2\cdot\tfrac12\cdot\cos 20^\circ = \cos 20^\circ.$$
The two "unrelated" cosines collapse to one because their average angle is $60^\circ$, where $\cos=\tfrac12$.

### Pitfalls

- $\cos P - \cos Q$ carries a **minus sign** and turns into $-2\sin\sin$ (not $\cos\cos$). This flip is the most-missed detail.
- The arguments of the product are the half-sum $\tfrac{P+Q}{2}$ and half-difference $\tfrac{P-Q}{2}$ — don't forget to halve.
- $\sin P + \sin Q$ uses $\sin(\text{half-sum})\cos(\text{half-diff})$; $\sin P - \sin Q$ uses $\cos(\text{half-sum})\sin(\text{half-diff})$. The roles of sin/cos swap between the two.

:::
:::

## Connections

Prereqs: angle-addition formulas — this node is those formulas added and subtracted in pairs. Turning a sum of sines into a product is precisely what makes a trig sum telescope (unlocks: `tc-telescoping-trig`). The same product-to-sum move linearizes products of trig functions before integration and underlies Fourier-style computations. Recognition trigger: a sum or difference of two sines/cosines you want to factor, or a product you want to split into a sum.
