---
title: 1. Introduction
description: An introduction to the POA Cardano Stakepool Mainnet Guide on VPS.
keywords:
- cardano
- blockchain
- stakepool
- staking
- stake
- how to
- create
- your
- guide
- documentation
- proof of africa
- poa
- poapool
- charles hoskinson
- bitcoin
- ethereum
- ouroboros
- proof of stake
- pos
- education
- delegate
- pledge
image: https://i.imgur.com/3V57abJ.png
---

In this guide, we will be creating a stakepool from scratch fully in the cloud through the use of VPSs.

### What is a VPS?

VPS stands for **Virtual Private Server**. You can see it as a computer in the cloud which you can rent on a monthly basis.

### How many VPSs do I need to run a stakepool?

Ideally, 3. But the more, the better, because you want to decentralize as much as possible your infrastructure, so you don't have a single point of failure. Because of that, you clearly don't want to be running all your nodes on the same server, as that would make your block-producing node vulnerable to attacks (we will explain the architecture more extensively later in this guide).

In the perfect world, you would be running your block-producing node on a specific server. And each of your relay nodes would be on a different server, with a different cloud provider. But this is the perfect world of course. Not everyone can afford to pay for 3 servers every month. So what most stakepool operators have, is a specific server for their block-producing node, and then a different server (sometimes with the same cloud provider) for their 2 relay nodes.

### Which cloud provider should I go for?

There are plenty of VPS providers out there, including AWS, Google Cloud, Microsoft Azure, and DigitalOcean. We are personally using CLOUD.co.za, a South African cloud provider. But that's mostly because we want to be fully Africa-based. If you are looking for a VPS provider, we recommend DigitalOcean, as the setup is incredibly easy, it's pretty affordable, **and we will be doing the full guide using DigitalOcean**.

However, note that you can use whatever cloud provider you want, as the experience will be nearly always be exactly the same.

### Which OS should I be using on my VPSs?

In this guide, we will be using Ubuntu on our VPSs. Whether it's Ubuntu 18.04 or 20.04 doesn't really matter. But the preferred version is of course the latest one, 20.04.

### What configuration will you be using in this guide?

**In this guide, we will be setting up our stakepool using two VPSs on DigitalOcean. One VPS with our block-producing node, and the other one with our relay node(s).**

This is definitely not ideal, but it makes the most sense economically speaking, as well as in terms of user experience. If you eventually, you want to setup a third VPS to have an optimal configuration, you will just need to redo what you did for the second server.

**Eah of our servers will have 4GB of RAM, and 80GB of SSD. The CPU doesn't really matter, RAM does, and the more SSD storage you have, the better.**

:::note Become part of the POA community!
If you want to meet other builders and global shapers, make sure to join our **[Telegram chat](https://t.me/poapool)**, where most of our community is hanging out. Oh, and if you have a question, you can also ask it there!
:::
