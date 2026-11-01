---
course: math-55a
chapter: 2
section: N15
title: Exercises: complex numbers and Fⁿ
source-pages: nb5 2
---

:::exercise
Show that $\alpha+\beta=\beta+\alpha$ for all $\alpha,\beta\in\CC$.
:::solution
$\alpha=a+bi$ and $\beta=c+di$ $\implies$ $\alpha+\beta=(a+bi)+(c+di)=(c+di)+(a+bi)=\beta+\alpha$.
:::
:::

:::exercise
Show that $(\alpha+\beta)+\lambda=\alpha+(\beta+\lambda)$ for all $\alpha,\beta,\lambda\in\CC$.
:::solution
$$(\alpha+\beta)+\lambda=(a+bi+c+di)+f+gi=a+bi+(c+di+f+gi)=\alpha+(\beta+\lambda).$$
:::
:::

:::exercise
Show that $(\alpha\beta)\lambda=\alpha(\beta\lambda)$ for all $\alpha,\beta,\lambda\in\CC$.
:::solution
$$\begin{aligned}
\big((a+bi)(c+di)\big)(f+gi)&=\big(ac+adi+cbi+bd(-1)\big)(f+gi)\\
&=acf+acgi+adif+adi^2g+cbif+cbi^2g+bdi^2f+bdi^3g\\
&=acf+acgi+adfi-adg+cbfi-cbg-bdf-bdgi,
\end{aligned}$$
$$\begin{aligned}
(a+bi)\big((c+di)(f+gi)\big)&=(a+bi)(cf+cgi+dfi+dgi^2)\\
&=acf+acgi+adfi-adg+cbfi-bcg-bdf-bdgi.
\end{aligned}$$
:::
:::

:::exercise
Show that $\lambda(\alpha+\beta)=\lambda\alpha+\lambda\beta$ for all $\lambda,\alpha,\beta\in\CC$.
:::solution
$$\begin{aligned}
(a+bi)(c+di+f+gi)&=ac+adi+af+agi+bci-bd+bfi-bg,\\
(a+bi)(c+di)+(a+bi)(f+gi)&=ac+adi+bci-bd+af+agi+bfi-bg.
\end{aligned}$$
:::
:::

:::exercise
For all $\alpha\in\CC$ there is $\beta\in\CC$ such that $\alpha+\beta=0$.
:::solution
Consider any $\alpha=a+bi$; notice $a+bi-a-bi=0$, so $\beta=-(a+bi)$.
:::
:::

:::exercise
Show that for all $\alpha\in\CC$ with $\alpha\neq0$ there is a unique $\beta\in\CC$ such that $\alpha\beta=1$.

:::solution
$$(a+bi)\beta=1\ \to\ \beta=\frac{1}{a+bi}=(a+bi)^{-1}.$$
:::
:::

:::exercise
Show that $\dfrac{-1+\sqrt3\,i}{2}$ is a cube root of $1$.
:::solution
$$\begin{aligned}
\left(\frac{-1+\sqrt3\,i}{2}\right)^3&=\frac{(-1+\sqrt3\,i)(-1+\sqrt3\,i)(-1+\sqrt3\,i)}{8},\\
(-1+\sqrt3\,i)(-1+\sqrt3\,i)&=1-\sqrt3\,i-\sqrt3\,i+\sqrt3^{\,2}i^2=-2\sqrt3\,i-2,\\
(-2\sqrt3\,i-2)(-1+\sqrt3\,i)&=2\sqrt3\,i+2(3)+2-2\sqrt3\,i=8,
\end{aligned}$$
so the cube is $8/8=1$.
:::
:::

:::exercise
Find the square roots of $i$.
:::solution
$\sqrt i=x\to i=x^2$. Since $e^{i\pi/2}=i$,
$$e^{i\frac{\pi}{2}\cdot\frac12}=\sqrt i\ \to\ e^{i\pi/4}=\sqrt i.$$
Roots: $e^{i\pi/4}$ and $e^{i(\pi/4+\pi)}=-e^{i\pi/4}$.

:::
:::

:::exercise
Find $x\in\RR^4$ such that $(4,-3,1,7)+2x=(5,9,-6,8)$.
:::solution
$2x=(1,12,-7,1)\to x=(0.5,\,6,\,-3.5,\,0.5)$.
:::
:::

:::exercise
Explain why there is no $\lambda\in\CC$ such that $\lambda(2-3i,\,5+4i,\,-6+7i)=(12-5i,\,7+22i,\,-32-9i)$.
:::solution
$\lambda$ would have to equal each of
$$\frac{12-5i}{2-3i},\qquad\frac{7+22i}{5+4i},\qquad\frac{-32-9i}{-6+7i}.$$
The first two both equal $3+2i$, but
$$\frac{-32-9i}{-6+7i}=\frac{129+278i}{85}\neq3+2i.$$

:::
:::

:::exercise
Show that $(x+y)+z=x+(y+z)$ for all $x,y,z\in\FF^n$.
:::solution
$x=(x_1,x_2,\dots,x_n)$, $y=(y_1,\dots,y_n)$, $z=(z_1,\dots,z_n)$. Each $x_i$, $y_i$, $z_i$ is an element of $\FF$, and $\FF$ is either $\RR$ or $\CC$, in either of which $(x_i+y_i)+z_i=x_i+(y_i+z_i)$.
:::
:::

:::exercise
Show that $(ab)x=a(bx)$ for all $x\in\FF^n$ and all $a,b\in\FF$.
:::solution
$$(ab)x=(abx_1,abx_2,\dots,abx_n)=a(bx_1,\dots,bx_n)=a(bx).$$
:::
:::

:::exercise
Show that $1x=x$ for all $x\in\FF^n$.
:::solution
$$1x=1(x_1,\dots,x_n)=(1x_1,\dots,1x_n)=(x_1,\dots,x_n)=x.$$
:::
:::

:::exercise
Show that $\lambda(x+y)=\lambda x+\lambda y$ for all $\lambda\in\FF$ and all $x,y\in\FF^n$.
:::solution
$$\lambda(x+y)=\lambda(x_1+y_1,\dots,x_n+y_n)=(\lambda x_1+\lambda y_1,\dots,\lambda x_n+\lambda y_n)=(\lambda x_1,\dots,\lambda x_n)+(\lambda y_1,\dots,\lambda y_n)=\lambda x+\lambda y.$$
:::
:::

:::exercise
Show that $(a+b)x=ax+bx$ for all $a,b\in\FF$ and all $x\in\FF^n$.
:::solution
$$\begin{aligned}(a+b)x&=\big((a+b)x_1,\dots,(a+b)x_n\big)=(x_1a+x_1b,\dots,x_na+x_nb)\\&=(x_1a,\dots,x_na)+(x_1b,\dots,x_nb)=ax+bx.\end{aligned}$$
:::
:::
