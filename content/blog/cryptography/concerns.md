---
title: Cryptography Concerns
date: "2022-01-04T23:46:37.121Z"
authors: Nathan Butler
---
## Modern Cryptography Concerns

A modern cryptographic algorithm is considered unbreakable, for the most part at least. But as the number of entities relying on cryptography for security continues to grow, the demands for higher security levels also increase.

A single compromised key can lead to fines, damage to reputation, and loss of users or customers. The impact of inefficient cryptography implementation can also include a reduction in share price, dismissed executives, and even litigation.

Applications such as WhatsApp, Facebook, and Instagram, for example, have a strong incentive to secure the lines of communication by means of cryptography because they deal with a lot of sensitive data and user information. The same applies for all companies that deal with sensitive data.

They also have a reasonable duty to protect their users especially as there is increasing pressure in this direction as of late.

So, what are some of the cryptography key-based issues that could occur and jeopardize online security, and what are some of the ways they can be prevented?
#### Weak Key
The longer the key is, the more difficult it is to crack. But we also know that both private and public keys are random, so it’s easy to not concern yourself with how weak or strong it is.

Not all number generators are efficient, so it’s advisable to use one that collects the density of a file in characters from a reliable hardware number generator.
#### Key Non-Rotation
If one encryption key is overused, meaning that it encrypts too much data, it becomes vulnerable and prone to cracking. This is especially the case when older, symmetric cryptography algorithms are used. Ideally, keys should be renewed and updated at previously set and appropriate intervals.
#### Incorrect or Reused Key
It’s vital to keep in mind that a generated cryptographic key should only be used once and for one decryption purpose. Furthermore, a generated key used incorrectly or encoded improperly is a liability. It makes it easier for cybercriminals to hack the encrypted message.
#### Inadequate Key Storage

There is a lot of talk about how to properly store an encryption key. A good rule of thumb is to not store it in a large database or server, as these can be breached and compromised.
#### Inadequate Key Protection
Storing keys properly is essential, and appropriate key protection requires additional encryption. A stored key should only be able to be decrypted when moved to a secure environment, and sometimes even kept offline.
#### Insider Threats
Undeniably, these types of cryptography threats are the most severe. An employee with access to a key can use it for nefarious purposes or sell it for profit to a hacker.