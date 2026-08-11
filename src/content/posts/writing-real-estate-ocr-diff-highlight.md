---
title: "不動産書類をOCRで比較して差分をハイライト表示した話"
summary: "概算見積書と確定見積書の差分を判定し、変更箇所を原本PDF上に色分けして表示する機能を実装した記事です。"
publishedAt: 2026-08-03
kind: "writing"
tags: ["writing", "ocr", "azure-ai", "sakura-ai", "python"]
sourceUrl: "https://tech.kurojica.com/archives/62193/"
featured: true
role: "設計、実装、検証、技術記事の執筆"
period: "2026.08"
stack: ["Azure AI Document Intelligence", "さくらのAI", "Python", "SequenceMatcher"]
scope: "クロジカ"
outcome: "書類の変更・追加・削除を判定し、比較元と比較先のPDF上で該当箇所を確認できるようにした"
team: "AI Labで開発と記事化を担当"
deliverable: "技術記事、OCR差分表示機能"
audience: "OCRを使った書類比較や確認業務の支援に関心のあるエンジニア"
focus: "差分内容と、その判定に使った原本上の記載を一つの画面で確認できること"
collaboration: "実装と検証内容を記事として整理"
constraints:
  - "形式や項目配置が異なる不動産書類を比較する必要があった"
evidence:
  - "Azure AI Document Intelligence で文字列と位置情報を取得"
  - "SequenceMatcher で変更・追加・削除を機械的に判定"
  - "比較元と比較先のPDF上へ差分を色分けして表示"
highlights:
  - "差分一覧と原本PDFを一つの画面で確認"
  - "AIによる情報整理と機械的な差分判定を分離"
---

公開した技術記事です。  
[不動産書類をOCRで比較して差分をハイライト表示した話](https://tech.kurojica.com/archives/62193/)

概算見積書と確定見積書を比較し、変更・追加・削除を判定する機能を実装しました。  
OCRの位置情報を使い、差分一覧から比較元と比較先のPDF上にある該当箇所まで確認できるようにしています。
