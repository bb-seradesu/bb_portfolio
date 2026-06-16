---
title: "Azure Open AI x OpenTofu で IaCインフラ構築自動化をしてみた"
summary: "要件定義書から IaC の設定ファイルを自動生成する流れを検証し、その内容を技術記事としてまとめました。"
publishedAt: 2025-11-10
kind: "writing"
tags: ["writing", "azure", "iac", "opentofu"]
sourceUrl: "https://tech.kurojica.com/archives/61313/"
featured: false
role: "検証、構成整理、技術記事の執筆"
period: "2025.11"
stack: ["Azure OpenAI", "OpenTofu", "Python", "LocalStack"]
scope: "クロジカ"
outcome: "IaC 自動化の検証内容を、全体像から追える記事として残した"
team: "個人で検証と執筆を担当"
deliverable: "技術記事、検証構成、実装メモ"
audience: "IaC の自動化に関心のあるエンジニア"
focus: "構成の意図と役割分担が伝わること"
collaboration: "個人で検証内容を記事化"
constraints:
  - "静的設定と動的設定を分離して扱う必要があった"
evidence:
  - "要件定義書から .tfvars を自動生成する流れを整理"
highlights:
  - "IaC 自動化の流れを分解して説明"
  - "OpenTofu を使った構成として整理"
---

公開した技術記事です。  
[Azure Open AI x OpenTofu で IaCインフラ構築自動化をしてみた](https://tech.kurojica.com/archives/61313/)

OpenTofuを利用することで、プロビジョニング範囲の構築を自動化しています。  
できるだけ使いまわしやすい形で実装しています。
