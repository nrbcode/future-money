---
title: Cryptography Basics
date: "2022-01-01T23:46:37.121Z"
authors: Nathan Butler
---
## The Four Standards of Cryptography

Contemporary cryptography has many procedures and cryptographic protocols that make up complex cryptosystems. Usually, this term stands for computer programs and mathematical procedures, but it is also used to explain certain human behaviors. For example, opting for complex passwords, not discussing sensitive data with individuals outside a set system, or choosing to log off every time you leave your computer.

All of these protocols rely on four standards or cryptographic techniques: confidentiality, integrity, non-repudiation, and authentication.
#### Confidentiality

This standard describes a fundamental rule that only the intended receiver of an encrypted message can read the information. And they can do so only with a private key.
#### Integrity

No one has the authority to change the message information while in storage or in transit between sender and receiver without this change being detected.
#### Non-Repudiation

Both the sender and receiver are in a position of not being able to deny their intent of the information’s existence or transmission.
#### Authentication

The senders and receivers must be able to confirm each other’s identity, as well as the origin of the encrypted message.
### Cryptography Types

While there are many cryptographic algorithms found in computer science practice and cybersecurity, they are generally broken down into three categories.

The most prominent types of cryptography include symmetric key cryptography, asymmetric cryptography, and cryptographic hash functions.
#### Symmetric Key Cryptography

Perhaps one of the best examples of symmetric encryption is the substitute, as in the Caesar cipher mentioned above. When creating a symmetric encryption, both parties must know the same key or the private key required to decrypt it.

That’s what signifies the symmetrical process. It’s also imperative for the private key to stay fully secret between the two parties, which is why symmetric cryptography is sometimes referred to as secret key cryptography.

If the sender chose to send the private key via messenger, it would mean a third party was involved and they could be compromised. The key exchange can only occur between the sender and the intended recipient.

One of the most relevant uses of symmetric cryptography is to keep data confidential. This type of cryptography allows an efficient way to keep a local hard drive private.

Often, one user is both encrypting and decrypting protected data, meaning that a private key is not required. But it can also be used for network security and safely sending private messages online. However, it’s asymmetric cryptography that usually deals with these processes.
#### Asymmetric Key Cryptography

If symmetric cryptography is known as private key cryptography, then the asymmetric type is better known as public key cryptography. For two parties to practice secure communication over an inherently insecure network, they need to create a special, secure communication channel.

To establish this channel successfully, the parties need to apply public key cryptography. Every participant in this system has two keys. One is a public key and can be sent to anyone with whom you want to establish communication. Essentially, these types of public keys are encryption keys.

But there’s also the private key, designed to not be shared with anyone and used to decrypt messages.

A simple yet effective metaphor is to imagine a public key as a discreet slot on the mailbox, designed for dropping letters, and the private key as the actual physical key used to open the mailbox.

It’s vital to understand that mathematical concepts that suggest using one key for encryption and another for decryption create a one-way functionality. This means that the two keys must be related to each other in a way that a public key can be derived from a private key, but not the other way around.

In terms of complexity, asymmetric cryptography requires more resources and stronger infrastructure than symmetric cryptography.
#### Hash Functions

Public and private key cryptographic algorithms both transform messages from plaintext to secret messages, and then back to plaintext again.

On the other hand, a hash function relies on one-way algorithms. Once a plaintext has been encrypted, it remains a ciphertext, also known as hash.

Logically, one might wonder what the purpose of hash functions are then. Are they only a pointless exercise? One of the most interesting aspects of hash functions is that a single plaintext cannot produce the same hash, or ciphertext. Therefore, in terms of data integrity, hashing algorithms are an efficient tool.

So, how would a hash function be applied in practice? A sender could encrypt a message with a hash value and when the receiver gets the message, they can use the same hashing algorithm for the text.

If the resulting hash is different from the received message, it means the content of the message has been altered in transit.

Hash functions are also used for confidentiality of computer passwords, as storing pass codes in plaintext is considered a great vulnerability.