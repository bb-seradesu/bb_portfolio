---
title: "詳細設計書からクロジカの単体サーバー構成をデプロイした話"
summary: "詳細設計書から生成した tfvars を使い、RDS や ALB を含む単体サーバー構成をデプロイできるようにした技術記事です。"
publishedAt: 2026-08-03
kind: "writing"
tags: ["writing", "aws", "opentofu", "iac", "localstack"]
sourceUrl: "https://tech.kurojica.com/archives/62204/"
featured: true
role: "設計、実装、検証、技術記事の執筆"
period: "2026.08"
stack: ["OpenTofu", "AWS", "LocalStack"]
scope: "クロジカ"
outcome: "詳細設計書から、RDS と ALB を含む単体サーバー構成を案件単位でデプロイできるようにした"
team: "AI Labで開発と記事化を担当"
deliverable: "技術記事、IaC 構成、検証環境"
audience: "OpenTofu を使った AWS 構築の共通化に関心のあるエンジニア"
focus: "構成を共通化しつつ、案件ごとの設定値と State を分離すること"
collaboration: "実装と検証内容を記事として整理"
constraints:
  - "案件ごとの設定値と State を分離しながら、構成そのものは共通化する必要があった"
evidence:
  - "LocalStack で init、plan、apply、destroy を検証"
  - "AWS 上で VPC、EC2、RDS、ALB など66リソースの設定を確認"
highlights:
  - "単体サーバー構成を再利用可能なレシピとして整理"
  - "詳細設計書から生成した tfvars で案件ごとに実行"
---

公開した技術記事です。  
[詳細設計書からクロジカの単体サーバー構成をデプロイした話](https://tech.kurojica.com/archives/62204/)

VPC、EC2、RDS、ALB などを含む単体サーバー構成を共通のレシピとして整理しました。  
案件固有の設定値と State を分離し、詳細設計書から生成した tfvars を確認してデプロイできる構成にしています。
