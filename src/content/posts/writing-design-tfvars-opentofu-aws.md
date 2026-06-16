---
title: "詳細設計書からAIでtfvarsを生成し、OpenTofuでAWS検証までつなげてみた"
summary: "詳細設計書をもとに tfvars を生成し、OpenTofu で AWS 検証まで進めた技術記事です。"
publishedAt: 2026-04-15
displayDate: "日付確認中"
kind: "writing"
tags: ["writing", "aws", "opentofu", "tfvars", "ai"]
sourceUrl: "https://tech.kurojica.com/archives/61991/"
featured: false
role: "検証、構成整理"
period: "日付確認中"
stack: ["OpenTofu", "AWS", "Azure OpenAI", "Python"]
scope: "クロジカ"
outcome: "設計書から tfvars を生成して検証へつなぐ流れを公開記事として残した"
---

公開記事です。  
[詳細設計書からAIでtfvarsを生成し、OpenTofuでAWS検証までつなげてみた](https://tech.kurojica.com/archives/61991/)

会社で運営しているサーバー構築を自動化するための IaC ソフトウェア開発です。  
構成例が多く、人によって入力項目が変わるものを、共通したフォーマットで利用できるようにしています。  
Google Spread Sheet を利用していましたが、それをできるだけ自動で落とし込めるようにすることで、手間を最小限にしています。  
利用者は、「設定した変数」と「実際に定義されている変数」に乖離がないかをチェックするだけでよくなる想定です。

※ 記事の著者ではありませんが、検証と構成整理に参加しました。
