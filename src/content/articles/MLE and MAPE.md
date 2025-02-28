---
slug: "mle-and-mape"
title: "MLE and MAPE"
description: "An easy introduction to Maximum Likelihood and MAPE"
date: "Feb 28, 2025"
readTime: "60"
toc:
  - id: "latex-notes"
    title: "LaTeX Notes"
  - id: "reference-management"
    title: "Reference Management"
  - id: "handwritten-notes"
    title: "Handwritten Digital Notes"
---
https://machinelearningcoban.com/2017/07/17/mlemap/
# MLE 
Given data points  $\mathbf{x_1}, \dots, \mathbf{x_N}$. Assuming these points following a distribution with respect to a params set $\mathbf{\theta}$

- MLE is to find $\theta$ that makes the following prob get max:
	$$
		\theta = \max_{\theta} p(\mathbf{x}_1, \dots, \mathbf{x}_N | \theta) ~~~~~ (1)
	$$
	
## Independence assumption 

We can assume that:
$$
	p(\mathbf{x}_1, \dots, \mathbf{x}_N | \theta) \approx \prod_{n=1}^N p(x_n| \theta)
$$

Then (1) can be considered equal to:
$$
	\theta = \max_{\theta} \prod^N_{n=1} p(x_n | \theta)
$$
Then get the log:
$$
	\theta = \max_{\theta} \sum^N_{n=1} \log( p(x_n | \theta))
$$


# MAP 
- Different from MLE, we will evaluate param as a conditional probability of data:
$$
	\theta = \operatorname{argmax} p(\theta| x_1, ..., x_N)
$$
- $p(\theta| x_1, ..., x_N)$ is called *posterior probability* of $\theta$. 
- This is equivalent to:
$$
	\theta = \operatorname{argmax} (\prod p(x_N|\theta)) p(\theta)
$$

### Conjugate prior

- When multiply a distribution $p_1$ with another $p_2$, the result is proportionate with $p2$ ,  **$p2$ is called *conjugate distribution* of $p_1$**

 ### Hyperparameters

