---
title: Cryptography Standards
date: "2022-01-02T23:46:37.121Z"
authors: Nathan Butler
---
## Cryptography Examples

All three cryptography types are implemented in different algorithms and techniques, and they are generally complex and broad in scope. Still, it’s important to cover several important cryptography examples and discuss whether they use secret key, public key, or hash value.
#### Data Encryption Standard (DES)
When Data Encryption Standard (DES) was established in 1971, it was a major breakthrough in cybersecurity. It relies on symmetric encryption. While it’s one of the oldest and most widely used cybersecurity tools, it’s no longer the only one available.

It’s important to understand this type of algorithm and what it means for cryptography. The DES uses a 56-bit size key to take a block of 64-bit plaintext and generate it into 64-bit ciphertext.

Each step in the DES process is called a round, and the number of rounds depends on several factors, including the size of a public key used for encryption.

The implementation of DES requires a security provider, but which one to choose depends on the programming language one uses, like Phyton, Java, or MATLAB. The DES algorithm is used for random number generation, but it doesn’t have the best track record for producing strong encryption.
#### Advanced Encryption Standard (AES)
The Advanced Encryption Standard (AES) is the successor of DES and is considered the most secure encryption algorithm today. It’s even the federal standard, used by the U.S. government, but also by major social media platforms and corporations.

The AES falls under the category of symmetric encryption, meaning it requires the same key encryption to protect communications. This encryption standard is incredibly robust, especially when talking about the AES-256, which uses 14 rounds of encryption.

The steps of the process include splitting data into blocks, adding different bytes, mixing columns, and shifting rows, all to ensure the data is scrambled entirely. The end result is a random set of characters that have zero meaning to anyone other than a person with a corresponding private key.

It’s also important to point out that AES-256 is the standard for reliable virtual private network providers and that it works with popular programming languages such as Java, C, C++, and Python.

Also, modern Intel and AMD processors have a built-in AES, allowing them to scramble data.
#### Diffie-Hellman Key Exchange
One example of an asymmetric encryption is the Diffie-Hellman, or exponential key exchange. This is a digital encryption method that relies on numbers raised to specific powers in order to create decryption keys that were never sent directly.

This approach makes the job of a code-breaker incredibly difficult, and likely impossible. This method was created in 1976 and is used today to secure different online services.

The patent for the Diffie-Hellman key exchange expired a year after it was published and has since been a public-domain algorithm.
#### Rivest-Shamir-Adleman (RSA)
Rivest-Sharmir-Adleman (RSA) is another public key, or asymmetric, cryptosystem used for secure data exchange, and also one of the oldest.

It was created by a group of cryptographers in 1977, though the same system was secretly developed in 1973 by Government Communications Headquarters, a British intelligence agency.

In this system, the public key differs from the secret key, but the public key is based on two large prime numbers, with an added value. Anyone can encrypt the message, but only those with knowledge of the prime numbers can read it.
#### Hashing Algorithms
Hash values and algorithms offer a wide range of functions and are used for specific purposes. Password verification, proof-of-work in blockchain technology, and file or data identification are just some of the many ways hash algorithms are used.