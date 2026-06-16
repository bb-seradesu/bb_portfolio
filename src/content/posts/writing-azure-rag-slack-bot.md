---
title: "AzureだけでRAGを介在させたSlack Botを作る"
summary: "Azure の各種リソースだけで RAG 対応の Slack Bot を構成した技術記事です。構成整理と実装内容を記事として残しました。"
publishedAt: 2025-08-04
kind: "writing"
tags: ["writing", "azure", "rag", "slack"]
sourceUrl: "https://tech.kurojica.com/archives/60838/"
featured: true
role: "検証、実装、技術記事の執筆"
period: "2025.08"
stack: ["Azure OpenAI", "Azure AI Search", "Cosmos DB", "Python", "Slack Bot"]
scope: "クロジカ"
outcome: "RAG 構成と通常応答を切り分ける Bot 構成を記事化した"
team: "個人で検証と執筆を担当"
deliverable: "技術記事、Bot 構成、実装メモ"
audience: "Azure で RAG Bot を作りたいエンジニア"
focus: "構成の全体像と実装の入り口を分かりやすくすること"
collaboration: "個人で試しながら記事に整理"
constraints:
  - "Azure のリソースだけで完結させる前提があった"
evidence:
  - "Azure OpenAI / Azure AI Search / Cosmos DB を組み合わせた構成"
highlights:
  - "RAG と通常応答の役割を分離"
  - "Azure だけで完結する構成として整理"
---

公開した技術記事です。  
[AzureだけでRAGを介在させたSlack Botを作る](https://tech.kurojica.com/archives/60838/)

以前すでに作られていた社内ツールを、より利用しやすく管理しやすい形として再構築しています。  
できるだけ Azure リソースで完結させることのハードルがありましたが、それがかなり難しかったです。
